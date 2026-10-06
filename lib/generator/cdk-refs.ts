import 'colors';

import * as fs from 'fs';
import * as glob from 'glob';

import { CdkRefFix, fixes } from './fixes';
import { CdkRef, ServiceModel } from './model';
import { lowerFirst } from './naming';

const modelDir = 'lib/generated/model';
const cdkLibDir = 'node_modules/aws-cdk-lib';
const interfacesDir = `${cdkLibDir}/interfaces`;

/**
 * Minimum version of aws-cdk-lib for the CDK variant, which has all reference interfaces the
 * model uses
 */
export const cdkVersionFile = 'lib/generated/cdk-refs.json';

interface CdkVersion {
  'aws-cdk-lib': string;
  /** Reference interfaces the model uses, e.g. `aws_lambda.IFunctionRef` */
  interfaces: string[];
}

interface Reference {
  interface: string;
  property: string;
  fields: string[];
}

/**
 * Reads the reference interfaces of `aws-cdk-lib/interfaces`, e.g. `IFunctionRef`, per module,
 * e.g. `aws_lambda`
 */
function readReferences(): Map<string, Map<string, Reference>> {
  const modules = new Map<string, Map<string, Reference>>();
  const index = fs.readFileSync(
    `${interfacesDir}/index.generated.d.ts`,
    'utf8',
  );
  for (const [, module, file] of index.matchAll(
    /export \* as (\w+) from '\.\/(generated\/[\w.-]+)'/g,
  )) {
    const source = fs.readFileSync(`${interfacesDir}/${file}.d.ts`, 'utf8');
    const structs = new Map<string, string[]>();
    for (const [, name, body] of source.matchAll(
      /export interface (\w+) \{([^}]*)\}/g,
    )) {
      structs.set(
        name,
        [...body.matchAll(/readonly (\w+)\??: string;/g)].map(
          (field) => field[1],
        ),
      );
    }
    const references = new Map<string, Reference>();
    for (const [, iface, property, struct] of source.matchAll(
      /export interface (I\w+Ref) extends [^{]+\{\s*(?:\/\*\*(?:[^*]|\*(?!\/))*\*\/\s*)?readonly (\w+): (\w+);\s*\}/g,
    )) {
      references.set(iface, {
        interface: iface,
        property,
        fields: structs.get(struct) ?? [],
      });
    }
    modules.set(module, references);
  }
  return modules;
}

function normalize(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * URL slug of the docs of the service, the key of `fixes`
 */
function slug(model: ServiceModel): string {
  return model.url
    .replace(/^.*\/list_(.*)\.html$/, '$1')
    .replace(/^(amazon|aws)-?/, '');
}

/**
 * The field of the reference with the ARN: `<name>Arn` (e.g. `functionArn` of `IFunctionRef`),
 * or the only field ending on `Arn`
 */
function arnField(reference: Reference): string | undefined {
  const name = `${lowerFirst(reference.interface.slice(1, -3))}Arn`;
  if (reference.fields.includes(name)) {
    return name;
  }
  const arns = reference.fields.filter((field) => field.endsWith('Arn'));
  return arns.length == 1 ? arns[0] : undefined;
}

/**
 * The field of the reference with the identifier in the required placeholder, e.g.
 * `distributionId` for `${DistributionId}`
 */
function idField(
  reference: Reference,
  placeholder: string,
): string | undefined {
  return reference.fields.find(
    (field) => normalize(field) == normalize(placeholder),
  );
}

/**
 * The ARN of the reference, or else the identifier in the required placeholder
 */
function refFields(
  reference: Reference,
  placeholder: string,
  fix: Pick<CdkRefFix, 'arn' | 'id'> = {},
): Pick<CdkRef, 'arn' | 'id'> | undefined {
  if (fix.id) {
    return reference.fields.includes(fix.id) ? { id: fix.id } : undefined;
  }
  const arn = fix.arn ?? arnField(reference);
  if (arn) {
    return reference.fields.includes(arn) ? { arn } : undefined;
  }
  const id = idField(reference, placeholder);
  return id ? { id } : undefined;
}

function fromFix(
  fix: CdkRefFix,
  module: string | undefined,
  modules: Map<string, Map<string, Reference>>,
  placeholder: string,
  resource: string,
): CdkRef {
  const moduleName = fix.module ?? module;
  const reference = modules.get(moduleName ?? '')?.get(fix.interface);
  if (!moduleName || !reference) {
    throw new Error(
      `CDK reference ${moduleName}.${fix.interface} of ${resource} not found in aws-cdk-lib`,
    );
  }
  const fields = refFields(reference, placeholder, fix);
  if (!fields) {
    throw new Error(
      `CDK reference ${moduleName}.${fix.interface} of ${resource} has no field with the ARN or ${placeholder}`,
    );
  }
  return {
    module: moduleName,
    interface: reference.interface,
    property: reference.property,
    ...fields,
  };
}

/**
 * Sets `cdkRef` of the resource types of a service: the reference interface of
 * `aws-cdk-lib/interfaces` with the same name as the resource type, in the module of the service.
 * Only resource types with a single required placeholder get one, as the reference replaces it.
 */
export function addCdkRefs(
  model: ServiceModel,
  modules: Map<string, Map<string, Reference>>,
  unmatched: string[] = [],
): void {
  const serviceFixes = fixes[slug(model)];
  const modulesByName = new Map(
    [...modules.keys()].map((module) => [
      normalize(module.replace(/^aws_/, '')),
      module,
    ]),
  );
  const module =
    serviceFixes?.cdkModule ??
    modulesByName.get(normalize(model.servicePrefix));

  for (const resource of model.resources) {
    delete resource.cdkRef;
    const id = `${model.servicePrefix}:${resource.name}`;
    const fix = serviceFixes?.resourceTypes?.[resource.name]?.cdkRef;
    if (fix === false) {
      continue;
    }
    const required = resource.placeholders.filter(
      (placeholder) => placeholder.kind == 'required',
    );
    if (required.length != 1) {
      if (fix) {
        throw new Error(
          `${id} has ${required.length} required placeholders, a CDK reference replaces only one`,
        );
      }
      continue;
    }
    if (fix) {
      resource.cdkRef = fromFix(
        fix,
        module,
        modules,
        required[0].placeholder,
        id,
      );
      continue;
    }
    if (!module) {
      continue;
    }
    const name = normalize(resource.methodName.slice(2));
    const reference = [...(modules.get(module)?.values() ?? [])].find(
      (candidate) => normalize(candidate.interface.slice(1, -3)) == name,
    );
    if (!reference) {
      continue;
    }
    const fields = refFields(reference, required[0].placeholder);
    if (!fields) {
      unmatched.push(
        `${id} (${module}.${reference.interface}: ${reference.fields.join(', ')})`,
      );
      continue;
    }
    resource.cdkRef = {
      module,
      interface: reference.interface,
      property: reference.property,
      ...fields,
    };
  }
}

function usedInterfaces(models: ServiceModel[]): string[] {
  const interfaces = new Set<string>();
  for (const model of models) {
    for (const resource of model.resources) {
      if (resource.cdkRef) {
        interfaces.add(
          `${resource.cdkRef.module}.${resource.cdkRef.interface}`,
        );
      }
    }
  }
  return [...interfaces].sort();
}

/**
 * The minimum version of aws-cdk-lib for the CDK variant
 */
export function cdkMinVersion(): string {
  return (JSON.parse(fs.readFileSync(cdkVersionFile, 'utf8')) as CdkVersion)[
    'aws-cdk-lib'
  ];
}

/**
 * Sets `cdkRef` of the resource types in all service models from the installed aws-cdk-lib.
 *
 * When the model uses reference interfaces it did not use before, the minimum version of
 * aws-cdk-lib becomes the installed version, so the CDK variant does not require a newer
 * aws-cdk-lib on every update of the dependency.
 */
export function updateCdkRefs(): void {
  const modules = readReferences();
  const models = glob.sync(`${modelDir}/*.json`).map((file) => ({
    file,
    model: JSON.parse(fs.readFileSync(file, 'utf8')) as ServiceModel,
  }));
  const unmatched: string[] = [];
  for (const { file, model } of models) {
    addCdkRefs(model, modules, unmatched);
    fs.writeFileSync(file, `${JSON.stringify(model, null, 2)}\n`);
  }

  const interfaces = usedInterfaces(models.map(({ model }) => model));
  const previous = fs.existsSync(cdkVersionFile)
    ? (JSON.parse(fs.readFileSync(cdkVersionFile, 'utf8')) as CdkVersion)
    : undefined;
  const installed = (
    JSON.parse(fs.readFileSync(`${cdkLibDir}/package.json`, 'utf8')) as {
      version: string;
    }
  ).version;
  const added = interfaces.filter(
    (iface) => !previous?.interfaces.includes(iface),
  );
  const version: CdkVersion = {
    'aws-cdk-lib': added.length ? installed : previous!['aws-cdk-lib'],
    interfaces,
  };
  fs.writeFileSync(cdkVersionFile, `${JSON.stringify(version, null, 2)}\n`);

  const resources = models.reduce(
    (sum, { model }) =>
      sum + model.resources.filter((resource) => resource.cdkRef).length,
    0,
  );
  if (unmatched.length) {
    console.log(
      `Reference interfaces with neither an ARN nor the identifier of the ARN, which fixes.ts can set:\n${unmatched.sort().join('\n')}`
        .grey,
    );
  }
  console.log(
    `CDK references: ${resources} resource types, ${interfaces.length} interfaces, aws-cdk-lib >= ${version['aws-cdk-lib']}`
      .green,
  );
}
