import * as cheerio from 'cheerio';
import * as fs from 'fs';

import { requestWithRetry } from '..';

const managedPoliciesDir = 'docs/source/_static/managed-policies';
const gistUrl =
  'https://gist.githubusercontent.com/shortjared/4c1e3fe52bdfa47522cfe5b41e5d6f22/raw';
const servicesWithIamUrl =
  'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html';

export const principalPattern =
  /^[a-z0-9][a-z0-9-]*(\.[a-z0-9][a-z0-9-]*)*\.amazonaws\.com$/;

/**
 * The service principals in the AWS managed policies, e.g. in the conditions
 * `iam:PassedToService` and `iam:AWSServiceName`
 */
export function fromManagedPolicies(): Set<string> {
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
export async function fromGist(): Promise<Set<string>> {
  return fromText(await requestWithRetry(gistUrl));
}

/**
 * The service principals in the docs of the service-linked roles, which are linked from the
 * column "Service-linked roles" of the services that work with IAM. Most pages do not state the
 * principals in a fixed form, so all names of the pages are collected, and IAM filters them.
 */
export async function fromServiceLinkedRoleDocs(): Promise<Set<string>> {
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
