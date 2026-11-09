import 'colors';

import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as glob from 'glob';

import { ResourceTypes } from '../shared';
import { Conditions } from './condition';
import { fixes, serviceFixer, ServiceFixes } from './fixes';
import { buildServiceModel, ServiceModel } from './model';
import { addActions, addConditions, addResourceTypes } from './scrape';

export { emitTypeScriptFromModels } from './emit/typescript';
export { indexManagedPolicies } from './managed-policies';
export {
  emitServicePrincipals,
  indexServicePrincipals,
} from './service-principals';
export { camelCase, getArnPlaceholders, lowerFirst } from './naming';

const timeThreshold = new Date();

let threshold = 25;
const thresholdOverride = process.env.NOCACHE;
if (thresholdOverride?.length) {
  threshold += 999999999;
}

timeThreshold.setHours(timeThreshold.getHours() - threshold);

export interface Module {
  name?: string;
  servicePrefix?: string;
  filename: string;
  url?: string;
  actionList?: Actions;
  resourceTypes?: ResourceTypes;
  fixes?: ServiceFixes;
  conditions?: Conditions;
}

export type Actions = Record<string, Action>;

export interface Action {
  url: string;
  description: string;
  accessLevel: string;
  resourceTypes?: Record<string, ResourceTypeOnAction>;
  conditions?: string[];
  dependentActions?: string[];
}

export interface ResourceTypeOnAction {
  required: boolean;
  conditions?: string[];
}

export function getAwsServices(): Promise<string[]> {
  return getAwsServicesFromIamDocs();
}

async function getAwsServicesFromIamDocs(): Promise<string[]> {
  const skipServices = Object.keys(fixes).filter(
    (key) => fixes[key]?.ignore === true,
  );

  const url =
    'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html';
  const body = await requestWithRetry(url);
  const services: string[] = [];
  for (const match of body.matchAll(/href="\.\/list_(.*?)\.html"/g)) {
    if (!skipServices.includes(match[1])) {
      services.push(match[1]);
    }
  }
  if (!services.length) {
    throw new Error(`Unable to find services on ${url}`);
  }

  // set env `SERVICE` to generate only a single service for testing purpose
  const testOverride = process.env.SERVICE;
  if (testOverride?.length) {
    return [testOverride];
  }

  const unique = services.filter((elem, pos) => {
    return services.indexOf(elem) == pos;
  });

  return unique.sort();
}

export async function getContent(service: string): Promise<Module> {
  service = serviceFixer(service);
  process.stdout.write(`${service}: `.white);
  process.stdout.write('Fetching '.grey);

  const shortName = service.replace(/^(amazon|aws)-?/, '');
  const serviceFixes = fixes[shortName];
  const filenameBase = serviceFixes?.name ?? shortName;

  const module: Module = {
    filename: filenameBase.replace(/[^a-z0-9-]/i, '-'),
  };

  const url = `https://docs.aws.amazon.com/service-authorization/latest/reference/list_${service}.html`;

  const cachedModel = `${modelDir}/.cache/${module.filename}.json`;
  if (fs.existsSync(cachedModel)) {
    const lastModified = await getLastModified(url);
    if (lastModified < timeThreshold) {
      console.log(
        `Skipping, last modified on ${lastModified.toString()}`.green,
      );
      return module;
    }
  }

  const body = await requestWithRetry(url);
  process.stdout.write('Parsing '.blue);

  const $ = cheerio.load(body);
  const servicePrefix = $('code').first().text().trim();

  if (servicePrefix == '') {
    console.error(`PREFIX NOT FOUND FOR ${service} / ${url}`.red);
  }

  module.name = servicePrefix;
  module.servicePrefix = servicePrefix;
  module.url = url;

  if (serviceFixes) {
    module.fixes = serviceFixes;
  }

  addConditions($, module);
  addActions($, module);
  addResourceTypes($, module);

  return module;
}

export async function createModules(services: string[]): Promise<void> {
  createCache();
  for (const service of services) {
    createModule(await getContent(service));
  }
}

export const modelDir = 'lib/generated/model';

function writeServiceModel(model: ServiceModel) {
  fs.writeFileSync(
    `${modelDir}/${model.filename}.json`,
    `${JSON.stringify(model, null, 2)}\n`,
  );
}

export function createModule(module: Module) {
  if (typeof module.name === 'undefined') {
    //it was skipped, restore from cache
    restoreFileFromCache(`${modelDir}/${module.filename}.json`);
    return;
  }

  process.stdout.write(`Generating `.cyan);

  if (module.fixes?.name) {
    module.name = module.fixes.name;
  } else if (
    module.filename.endsWith('v2') &&
    module.name.slice(-2).toLowerCase() !== 'v2'
  ) {
    module.name += '-v2';
  }

  writeServiceModel(buildServiceModel(module));
  console.log('Done'.green);
}

function createCache() {
  fs.mkdirSync(modelDir, { recursive: true });
  mkDirCache(modelDir, '*.json');
}

function mkDirCache(dir: string, pattern: string) {
  const cacheDir = `${dir}/.cache`;
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }
  for (const file of glob.sync(`${dir}/${pattern}`)) {
    const fileName = file.split('/').slice(-1)[0];
    fs.renameSync(file, `${cacheDir}/${fileName}`);
  }
}

function restoreFileFromCache(filename: string) {
  const splitPath = filename.split('/');
  const file = splitPath.pop();
  splitPath.push('.cache');
  splitPath.push(file!);
  const cachedFile = splitPath.join('/');
  if (!fs.existsSync(cachedFile)) {
    return;
  }
  fs.renameSync(cachedFile, filename);
}

async function getLastModified(url: string): Promise<Date> {
  const response = await fetchWithRetry(url, 'HEAD');
  const lastModified = response.headers.get('last-modified');
  return lastModified ? new Date(lastModified) : new Date();
}

export async function requestWithRetry(url: string): Promise<string> {
  const response = await fetchWithRetry(url, 'GET');
  return response.text();
}

async function fetchWithRetry(
  url: string,
  method: 'GET' | 'HEAD',
  retries = 3,
  backoff = 300,
): Promise<Response> {
  for (;;) {
    let failure: Error;
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      });
      if (response.status < 400) {
        return response;
      }
      failure = new Error(
        `Request to ${url} failed with status ${response.status}`,
      );
    } catch (err) {
      failure = err instanceof Error ? err : new Error(String(err));
    }
    const failDetails = retries > 0 ? `Retry in ${backoff}` : 'Giving up';
    console.log(`Failed to fetch ${url} - ${failure.message} - ${failDetails}`);
    if (retries <= 0) {
      throw failure;
    }
    await new Promise((resolve) => setTimeout(resolve, backoff));
    retries--;
    backoff *= 2;
  }
}
