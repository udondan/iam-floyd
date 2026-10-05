#!/usr/bin/env node
/**
 * Prepares the built CDK variant for jsii-pacmak, which generates the Python, Java, .NET and Go
 * packages from the npm package and its jsii assembly. Run after `make cdk build`.
 *
 * - sets the jsii targets in package.json
 * - writes the jsii assembly (`.jsii`) from the service models
 * - appends the jsii runtime type information and the jsii names of the enum members to
 *   `lib/index.js`
 */
import * as fs from 'fs';
import { loadAssemblyFromFile, TypeKind } from '@jsii/spec';

import { emitJsii } from '../lib/generator/emit/jsii';
import { ServiceModel } from '../lib/generator/model';
import { PackageJson } from '../lib/generator/package-json';

const modelDir = 'lib/generated/model';

const packageJson = JSON.parse(
  fs.readFileSync('package.json', 'utf8'),
) as PackageJson;
const version = packageJson.version;
if (packageJson.name !== 'cdk-iam-floyd') {
  console.error('Run `make cdk` first');
  process.exit(1);
}

packageJson.jsii = {
  outdir: 'dist',
  targets: {
    python: {
      distName: 'cdk-iam-floyd',
      module: 'cdk_iam_floyd',
    },
    dotnet: {
      namespace: 'CDK.IAM.Floyd',
      packageId: 'CDK.IAM.Floyd',
    },
    java: {
      package: 'com.udondan.iamFloyd.cdk',
      maven: {
        groupId: 'com.udondan',
        artifactId: 'cdk-iam-floyd',
      },
    },
    go: {
      moduleName: 'udondan.github.io/iam-floyd/go',
      packageName: 'cdkiamfloyd',
    },
  },
};
fs.writeFileSync('package.json', `${JSON.stringify(packageJson, null, 2)}\n`);

const models = fs
  .readdirSync(modelDir)
  .filter((file) => file.endsWith('.json'))
  .sort()
  .map(
    (file) =>
      JSON.parse(
        fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
      ) as ServiceModel,
  );

const result = emitJsii(models, { variant: 'cdk', version, outDir: '.' });
console.log(
  `Wrote .jsii for ${result.name}@${version}: ${result.types} types, ${result.bytes} bytes`,
);

appendRtti();

/**
 * Appends jsii runtime type information to `lib/index.js`, as the jsii compiler would emit it.
 * Without it the jsii kernel reports iam-floyd objects by the type inherited from
 * `aws_iam.PolicyStatement`, so other languages get plain CDK statements.
 *
 * Also adds the members of the enums by their jsii names (`PolicyType.INLINE_ROLE`), as the jsii
 * kernel looks the members up by name. The members by their TypeScript names
 * (`PolicyType.inlineRole`) are kept, but not enumerable, as the kernel takes the name of a value
 * from the enumerable members.
 */
function appendRtti() {
  const assembly = loadAssemblyFromFile('.jsii');
  const prefix = `${assembly.name}.`;
  const types = Object.values(assembly.types ?? {});
  const entries = types
    .filter((type) => type.kind === TypeKind.Class)
    .map((type) => [type.fqn.slice(prefix.length).split('.'), type.fqn]);
  const enums = types
    .filter((type) => type.kind === TypeKind.Enum)
    .map((type) => type.fqn.slice(prefix.length).split('.'));

  const code = `
// jsii runtime type information, so the jsii kernel reports the iam-floyd type of objects
const JSII_RTTI = Symbol.for('jsii.rtti');
for (const [path, fqn] of ${JSON.stringify(entries)}) {
  const target = path.reduce((scope, name) => scope[name], exports);
  // writable: subclasses compiled by jsii assign their own RTTI
  Object.defineProperty(target, JSII_RTTI, {
    value: { fqn, version: ${JSON.stringify(assembly.version)} },
    writable: true,
    configurable: true,
  });
}
// the members of the enums by their jsii names, like the jsii assembly
for (const path of ${JSON.stringify(enums)}) {
  const target = path.reduce((scope, name) => scope[name], exports);
  for (const [name, value] of Object.entries(target)) {
    const jsiiName = name.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase();
    if (jsiiName === name) continue;
    Object.defineProperty(target, jsiiName, { value, enumerable: true });
    Object.defineProperty(target, name, { enumerable: false });
  }
}
`;
  const index = fs.readFileSync('lib/index.js', 'utf8');
  if (index.includes('JSII_RTTI')) {
    throw new Error('lib/index.js already has RTTI, run `make build` first');
  }
  fs.appendFileSync('lib/index.js', code);
  console.log(`Appended RTTI for ${entries.length} classes to lib/index.js`);
}
