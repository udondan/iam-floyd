import * as fs from 'fs';
import { Project, QuoteKind, Scope } from 'ts-morph';

import { findInvalid } from './iam';
import {
  fromGist,
  fromManagedPolicies,
  fromServiceLinkedRoleDocs,
  principalPattern,
} from './sources';

/**
 * The known service principals, with the reason for the deprecation of those IAM rejects. The
 * list only grows: a principal that IAM rejects is deprecated, not removed.
 */
type Principals = Record<string, { deprecated?: string }>;

const dir = 'lib/generated/aws-service-principals';
const dataFile = `${dir}/principals.json`;
const sourceFile = `${dir}/index.ts`;

// regional principals, like `s3.ap-east-1.amazonaws.com`, which are only used by services in
// opt-in regions for requests to other regions
const regionPattern = /(^|\.)[a-z]{2}(-gov|-iso[a-z]?)?-[a-z]+-\d+\./;

/**
 * Whether a principal is checked with IAM: a global service principal
 */
const isCheckable = (principal: string) =>
  principalPattern.test(principal) && !regionPattern.test(principal);

/**
 * The name of the constant of a service principal: without `.amazonaws.com`, `.` and `-` as
 * `_`, in upper case. A digit followed by a letter is separated with `_`, as the transpilers
 * write static properties in snake case, which separates them too.
 */
export function servicePrincipalConstantName(principal: string): string {
  return principal
    .replace(/\.amazonaws\.com$/, '')
    .replace(/[.-]/g, '_')
    .replace(/(\d)([a-z])/g, '$1_$2')
    .toUpperCase();
}

/**
 * Collects service principals from the AWS managed policies, the community list of
 * shortjared and the docs of the service-linked roles, checks them with IAM and adds the valid
 * ones to the list. Known principals that IAM rejects are deprecated. Then writes the class
 * `AwsServicePrincipal`.
 */
export async function indexServicePrincipals(): Promise<void> {
  const known = readPrincipals();
  const candidates = new Set<string>(Object.keys(known));
  for (const [source, principals] of [
    ['AWS managed policies', fromManagedPolicies()],
    ['community list', await fromGist()],
    ['service-linked role docs', await fromServiceLinkedRoleDocs()],
  ] as const) {
    console.log(`Found ${principals.size} service principals in ${source}`);
    for (const principal of principals) {
      candidates.add(principal);
    }
  }

  const invalid = await findInvalid([...candidates].filter(isCheckable));

  const principals: Principals = {};
  for (const principal of candidates) {
    const entry = classify(principal, known, invalid);
    if (entry) {
      principals[principal] = entry;
    }
  }
  writePrincipals(principals);
  emitServicePrincipals();
}

/**
 * The entry of a candidate in the new list, undefined if it is left out
 */
function classify(
  principal: string,
  known: Principals,
  invalid: Set<string>,
): Principals[string] | undefined {
  const isKnown = principal in known;
  if (invalid.has(principal)) {
    if (!isKnown) {
      return undefined;
    }
    console.log(`Deprecating ${principal}, which IAM rejects`);
    return { deprecated: 'IAM rejects this service principal.' };
  }
  if (isCheckable(principal)) {
    if (!isKnown) {
      console.log(`Adding ${principal}`);
    }
    return {};
  }
  return isKnown ? known[principal] : undefined;
}

export function readPrincipals(): Principals {
  return JSON.parse(fs.readFileSync(dataFile, 'utf8')) as Principals;
}

function writePrincipals(principals: Principals) {
  const sorted: Principals = {};
  for (const principal of Object.keys(principals).sort()) {
    sorted[principal] = principals[principal];
  }
  fs.writeFileSync(dataFile, `${JSON.stringify(sorted, null, 2)}\n`);
}

/**
 * The name of the constant of a principal, which must be unique and valid
 */
function uniqueConstantName(
  principal: string,
  names: Map<string, string>,
): string {
  const name = servicePrincipalConstantName(principal);
  const existing = names.get(name);
  if (existing !== undefined) {
    throw new Error(
      `The service principals ${existing} and ${principal} have the same name ${name}`,
    );
  }
  if (!/^[A-Z][A-Z0-9_]*$/.test(name)) {
    throw new Error(`Invalid name ${name} of service principal ${principal}`);
  }
  names.set(name, principal);
  return name;
}

/**
 * Writes the class `AwsServicePrincipal` from the list of service principals
 */
export function emitServicePrincipals(): void {
  const principals = readPrincipals();
  const project = new Project();
  project.manipulationSettings.set({ quoteKind: QuoteKind.Single });
  const source = project.createSourceFile(sourceFile, '', { overwrite: true });
  const collection = source.addClass({
    isExported: true,
    name: 'AwsServicePrincipal',
  });
  collection.addJsDoc({
    description:
      'Provides the names of AWS service principals, e.g. for `forService(AwsServicePrincipal.LAMBDA)`.\n\nThe list only grows. A service principal that IAM rejects is deprecated, not removed.',
  });

  const names = new Map<string, string>();
  for (const principal of Object.keys(principals).sort()) {
    const { deprecated } = principals[principal];
    collection
      .addProperty({
        name: uniqueConstantName(principal, names),
        initializer: `'${principal}'`,
        isStatic: true,
        isReadonly: true,
        scope: Scope.Public,
      })
      .addJsDoc({
        description: `The service principal \`${principal}\``,
        tags: deprecated ? [{ tagName: 'deprecated', text: deprecated }] : [],
      });
  }
  source.saveSync();
}
