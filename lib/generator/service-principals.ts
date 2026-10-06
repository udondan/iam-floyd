import {
  CreateRoleCommand,
  DeleteRoleCommand,
  IAMClient,
  IAMClientConfig,
} from '@aws-sdk/client-iam';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { Project, QuoteKind, Scope } from 'ts-morph';

import { requestWithRetry } from '.';

/**
 * The known service principals, with the reason for the deprecation of those IAM rejects. The
 * list only grows: a principal that IAM rejects is deprecated, not removed.
 */
type Principals = Record<string, { deprecated?: string }>;

const dir = 'lib/generated/aws-service-principals';
const dataFile = `${dir}/principals.json`;
const sourceFile = `${dir}/index.ts`;
const managedPoliciesDir = 'docs/source/_static/managed-policies';
const gistUrl =
  'https://gist.githubusercontent.com/shortjared/4c1e3fe52bdfa47522cfe5b41e5d6f22/raw';
const servicesWithIamUrl =
  'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html';

// the role that is created to check the principals, deleted right after
const testRoleName = 'iam-floyd-service-principal-check';

// the maximum size of a trust policy is 2048 characters, without whitespace
const maxTrustPolicySize = 2000;

const principalPattern =
  /^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)*\.amazonaws\.com$/;
// regional principals, like `s3.ap-east-1.amazonaws.com`, which are only used by services in
// opt-in regions for requests to other regions
const regionPattern = /(^|\.)[a-z]{2}(-gov|-iso[a-z]?)?-[a-z]+-\d+\./;

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

  const invalid = await findInvalid(
    [...candidates].filter(
      (principal) =>
        principalPattern.test(principal) && !regionPattern.test(principal),
    ),
  );

  const principals: Principals = {};
  for (const principal of candidates) {
    const isKnown = principal in known;
    if (invalid.has(principal)) {
      if (isKnown) {
        console.log(`Deprecating ${principal}, which IAM rejects`);
        principals[principal] = {
          deprecated: 'IAM rejects this service principal.',
        };
      }
    } else if (
      principalPattern.test(principal) &&
      !regionPattern.test(principal)
    ) {
      if (!isKnown) {
        console.log(`Adding ${principal}`);
      }
      principals[principal] = {};
    } else if (isKnown) {
      principals[principal] = known[principal];
    }
  }
  writePrincipals(principals);
  emitServicePrincipals();
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
 * The service principals in the AWS managed policies, e.g. in the conditions
 * `iam:PassedToService` and `iam:AWSServiceName`
 */
function fromManagedPolicies(): Set<string> {
  const principals = new Set<string>();
  const visit = (value: unknown) => {
    if (typeof value === 'string') {
      if (principalPattern.test(value)) {
        principals.add(value);
      }
    } else if (Array.isArray(value)) {
      value.forEach(visit);
    } else if (typeof value === 'object' && value !== null) {
      Object.values(value).forEach(visit);
    }
  };
  for (const file of fs.readdirSync(managedPoliciesDir)) {
    if (file.endsWith('.json') && file !== 'index.json') {
      visit(
        JSON.parse(fs.readFileSync(`${managedPoliciesDir}/${file}`, 'utf8')),
      );
    }
  }
  return principals;
}

/**
 * The service principals in a text, not as part of an ARN or a longer name
 */
function fromText(text: string): Set<string> {
  const principals = new Set<string>();
  for (const match of text.matchAll(
    /(?<![\w.${}:/-])[a-z0-9][a-z0-9.-]*\.amazonaws\.com(?![\w.-])/g,
  )) {
    principals.add(match[0]);
  }
  return principals;
}

/**
 * The service principals of the community list of shortjared
 */
async function fromGist(): Promise<Set<string>> {
  return fromText(await requestWithRetry(gistUrl));
}

/**
 * The service principals in the docs of the service-linked roles, which are linked from the
 * column "Service-linked roles" of the services that work with IAM. Most pages do not state the
 * principals in a fixed form, so all names of the pages are collected, and IAM filters them.
 */
async function fromServiceLinkedRoleDocs(): Promise<Set<string>> {
  const $ = cheerio.load(await requestWithRetry(servicesWithIamUrl));
  const urls = new Set<string>();
  $('a').each((_, element) => {
    const href = $(element).attr('href');
    if (
      href !== undefined &&
      $(element).text().trim() === 'Yes' &&
      /slr|service-linked|service_linked|role/i.test(href)
    ) {
      urls.add(new URL(href, servicesWithIamUrl).href.replace(/#.*$/, ''));
    }
  });
  const principals = new Set<string>();
  for (const url of [...urls].sort()) {
    // some links of the table are broken, e.g. a page that AWS moved
    let html: string;
    try {
      html = await requestWithRetry(url);
    } catch (error) {
      console.warn(`Skipping ${url}: ${String(error)}`);
      continue;
    }
    const page = cheerio.load(html);
    for (const principal of fromText(
      page('#main-col-body').text() || page('body').text(),
    )) {
      principals.add(principal);
    }
  }
  return principals;
}

function iamClient(): IAMClient {
  const config: IAMClientConfig = { region: 'us-east-1' };
  if (
    process.env.AWS_ACCESS_KEY_ID &&
    process.env.AWS_SECRET_ACCESS_KEY &&
    process.env.AWS_SESSION_TOKEN
  ) {
    config.credentials = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      sessionToken: process.env.AWS_SESSION_TOKEN,
    };
  }
  return new IAMClient(config);
}

function trustPolicy(principals: string[]): string {
  return JSON.stringify({
    Version: '2012-10-17',
    Statement: [
      {
        Effect: 'Allow',
        Principal: { Service: principals },
        Action: 'sts:AssumeRole',
      },
    ],
  });
}

/**
 * Finds the principals that IAM rejects, by creating a role with them in the trust policy. IAM
 * names only the first invalid principal, which is removed before the next try.
 */
async function findInvalid(candidates: string[]): Promise<Set<string>> {
  const client = iamClient();
  const invalid = new Set<string>();
  const batches: string[][] = [[]];
  for (const principal of candidates.sort()) {
    const batch = batches[batches.length - 1];
    if (
      batch.length &&
      trustPolicy([...batch, principal]).length > maxTrustPolicySize
    ) {
      batches.push([principal]);
    } else {
      batch.push(principal);
    }
  }
  console.log(
    `Checking ${candidates.length} service principals in ${batches.length} batches`,
  );
  for (let batch of batches) {
    while (batch.length) {
      const rejected = await createTestRole(client, batch);
      if (rejected === undefined) {
        break;
      }
      invalid.add(rejected);
      batch = batch.filter((principal) => principal !== rejected);
    }
  }
  console.log(`IAM rejects ${invalid.size} service principals`);
  return invalid;
}

/**
 * Creates and deletes the test role. Returns the principal IAM rejects, if any.
 */
async function createTestRole(
  client: IAMClient,
  principals: string[],
): Promise<string | undefined> {
  try {
    await client.send(
      new CreateRoleCommand({
        RoleName: testRoleName,
        AssumeRolePolicyDocument: trustPolicy(principals),
      }),
    );
  } catch (err) {
    if (!(err instanceof Error)) {
      throw err;
    }
    if (err.name === 'EntityAlreadyExistsException') {
      // left over from an earlier run
      await client.send(new DeleteRoleCommand({ RoleName: testRoleName }));
      return createTestRole(client, principals);
    }
    const match = /Invalid principal in policy: "SERVICE":"([^"]+)"/.exec(
      err.message,
    );
    if (err.name === 'MalformedPolicyDocumentException' && match) {
      return match[1];
    }
    throw err;
  }
  await client.send(new DeleteRoleCommand({ RoleName: testRoleName }));
  return undefined;
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
    const { deprecated } = principals[principal];
    collection
      .addProperty({
        name,
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
