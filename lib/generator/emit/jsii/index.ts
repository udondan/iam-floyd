import { createHash } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { gzipSync } from 'zlib';

import { cdkMinVersion } from '../../cdk-refs';
import { ServiceModel } from '../../model';
import { PackageJson } from '../../package-json';
import { dependencyClosure } from './dependencies';
import { warnings } from './docs';
import { SharedExtractor } from './extractor';
import { serviceType } from './service-type';
import {
  ClassType,
  fluentMethods,
  JsiiType,
  Method,
  SharedMembers,
  sortMembers,
  statementNamespace,
  Variant,
  withoutFluentMethods,
} from './types';

export type { Variant } from './types';

export interface JsiiOptions {
  variant: Variant;
  version: string;
  /**
   * Where to write `.jsii` and `.jsii.gz`
   */
  outDir: string;
  /**
   * The readme of the package in Markdown
   */
  readme: string;
}

/**
 * The metadata of the package of the variant
 */
function packageMetadata(variant: Variant) {
  const packageJson = JSON.parse(
    fs.readFileSync('package.json', 'utf8'),
  ) as PackageJson;
  const cdk = variant == 'cdk';
  const name = cdk ? 'cdk-iam-floyd' : 'iam-floyd';
  return {
    packageJson,
    name,
    description: cdk
      ? `${packageJson.description} for AWS CDK`
      : packageJson.description,
    keywords: cdk
      ? [...packageJson.keywords, 'cdk', 'aws-cdk']
      : [...packageJson.keywords],
    dependencies: cdk
      ? {
          'aws-cdk-lib': `^${cdkMinVersion()}`,
          constructs: `^${cdkMinVersion('constructs')}`,
        }
      : ({} as Record<string, string>),
    pythonModule: name.replace(/-/g, '_'),
  };
}

/**
 * Hand-written subclasses of the base class, like `Statement.All`, need its fluent methods
 * declared like the services do
 */
function addFluentMethods(
  types: Record<string, JsiiType>,
  shared: SharedMembers,
  baseMethods: Map<string, Method>,
) {
  for (const type of Object.values(types)) {
    if (type.kind == 'class' && shared.base && type.base == shared.base) {
      type.methods = sortMembers([
        ...type.methods,
        ...fluentMethods(type.methods, baseMethods, shared.base, {
          fqn: type.fqn,
        }),
      ]);
    }
  }
}

/**
 * The jsii types of the package: the hand-written classes and enums and the services
 */
function collectTypes(
  name: string,
  variant: Variant,
  models: ServiceModel[],
): Record<string, JsiiType> {
  const extractor = new SharedExtractor(name, variant);
  const types: Record<string, JsiiType> = {};
  for (const type of extractor.collectTypes()) types[type.fqn] = type;

  const shared = extractor.policyStatementMembers();
  // the base is an exported class or external, then it is not in `types`
  const baseType = shared.base
    ? (types[shared.base] as ClassType | undefined)
    : undefined;
  const baseMethods = new Map(
    (baseType?.methods ?? []).map((m) => [m.name, m]),
  );
  addFluentMethods(types, shared, baseMethods);
  const context = { assembly: name, variant, shared, baseMethods };
  for (const model of models) {
    const type = serviceType(model, context);
    if (types[type.fqn]) throw new Error(`Duplicate type ${type.fqn}`);
    types[type.fqn] = type;
  }
  if (baseType)
    types[baseType.fqn] = withoutFluentMethods(baseType, shared.base);

  const sortedTypes: Record<string, JsiiType> = {};
  for (const fqn of Object.keys(types).sort()) sortedTypes[fqn] = types[fqn];
  return sortedTypes;
}

/**
 * Renders a jsii assembly (`.jsii`) describing the package, so it can be listed and documented
 * on Construct Hub without being compiled by jsii.
 */
export function emitJsii(models: ServiceModel[], options: JsiiOptions) {
  const { variant, version, outDir, readme } = options;
  const {
    packageJson,
    name,
    description,
    keywords,
    dependencies,
    pythonModule,
  } = packageMetadata(variant);
  const types = collectTypes(name, variant, models);

  const assembly: Record<string, unknown> = {
    schema: 'jsii/0.10.0',
    name,
    version,
    description,
    license: packageJson.license,
    homepage: packageJson.homepage,
    repository: {
      type: 'git',
      url: `${packageJson.repository?.url ?? packageJson.homepage}`.replace(
        /^git\+/,
        '',
      ),
    },
    author: {
      name: packageJson.author.name,
      roles: ['author'],
      ...(packageJson.author.url ? { url: packageJson.author.url } : {}),
    },
    keywords,
    docs: { stability: 'stable' },
    readme: { markdown: readme },
    jsiiVersion: '5.9.0 (build iam-floyd)',
    targets: {
      js: { npm: name },
      // package.json can configure the targets like for jsii, e.g. to build bindings with jsii-pacmak
      ...(packageJson.jsii?.targets ?? {
        python: { distName: name, module: pythonModule },
      }),
    },
    submodules: {
      [`${name}.${statementNamespace}`]: {
        targets: {
          // docgen renders `from <module> import <last segment>` + `Statement.S3()`
          python: { module: `${pythonModule}.${statementNamespace}` },
        },
      },
    },
    ...(Object.keys(dependencies).length
      ? {
          dependencies,
          dependencyClosure: dependencyClosure(Object.keys(dependencies)),
        }
      : {}),
    types,
  };

  const bytes = writeJsii(outDir, assembly);

  return {
    name,
    types: Object.keys(types).length,
    bytes,
    warnings: [...warnings],
  };
}

/**
 * Writes the assembly with its fingerprint to `.jsii.gz` in `outDir`, and `.jsii` as redirect to
 * it. Returns the size of the uncompressed assembly
 */
export function writeJsii(outDir: string, assembly: Record<string, unknown>) {
  // jsii fingerprints the assembly without the fingerprint itself
  delete assembly.fingerprint;
  assembly.fingerprint = createHash('sha256')
    .update(JSON.stringify(assembly))
    .digest('base64');

  const json = JSON.stringify(assembly);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, '.jsii.gz'), gzipSync(json, { level: 9 }));
  fs.writeFileSync(
    path.join(outDir, '.jsii'),
    `${JSON.stringify({ schema: 'jsii/file-redirect', compression: 'gzip', filename: '.jsii.gz' }, null, 2)}\n`,
  );
  return Buffer.byteLength(json);
}
