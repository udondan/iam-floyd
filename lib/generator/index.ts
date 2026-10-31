import 'colors';

import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as glob from 'glob';

import { ResourceTypes } from '../shared';
import { Conditions } from './condition';
import {
  arnFixer,
  conditionFixer,
  conditionKeyFixer,
  fixes,
  serviceFixer,
  ServiceFixes,
} from './fixes';
import { buildServiceModel, ServiceModel } from './model';

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

function cleanDescription(description: string): string {
  return description
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .trim();
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

function getTable($: cheerio.CheerioAPI, title: string) {
  const table = $('.table-container table')
    .toArray()
    .filter((element) => {
      return $(element).find('th').first().text() == title;
    });
  return $(table[0]);
}

// Some services (e.g. S3) split their actions across multiple tables: the
// main actions table plus a separate "permission-only actions" table. Both
// tables share the same `<th>Actions</th>` header, so all of them need to be
// collected and merged, not just the first match.
function getTables($: cheerio.CheerioAPI, title: string) {
  return $('.table-container table')
    .toArray()
    .filter((element) => {
      return $(element).find('th').first().text() == title;
    })
    .map((element) => $(element));
}

function addActions($: cheerio.CheerioAPI, module: Module) {
  const actions: Actions = {};
  const tablesActions = getTables($, 'Actions');

  let action: string;
  tablesActions.forEach((tableActions) => {
    tableActions.find('tr').each((_, element) => {
      const tds = $(element).find('td');
      const tdLength = tds.length;
      let first = tds.first();

      if (tdLength == 5) {
        // it's a new action
        // column order: action, description, resource type, condition keys, access level

        action = first
          .text()
          .replace('[permission only]', '')
          .replace(/-/g, '')
          .trim();
        actions[action] = {
          url: validateUrl(first.find('a[href]').attr('href')?.trim()),
          description: cleanDescription(first.next().text().trim()),
          accessLevel: first.next().next().next().next().text().trim(),
        };
        first = first.next().next();
      }

      if (tdLength != 5 && tdLength != 2) {
        const content = cleanDescription(tds.text());
        if (content.length && !content.startsWith('SCENARIO:')) {
          console.warn(
            `skipping row due to unexpected number of fields: ${content}`
              .yellow,
          );
        }
        return;
      }

      let resourceType = first.text().trim();
      let required = false;
      const conditionKeys = first.next().find('p');

      const conditions: string[] = [];
      if (conditionKeys.length) {
        conditionKeys.each((_, conditionKey) => {
          const condition = conditionKeyFixer(
            module.servicePrefix!,
            cleanDescription($(conditionKey).text()),
          );

          if (!module.conditions![condition]) {
            console.log(
              `[Skipping referenced condition, since it is not documented: ${condition}]`
                .red,
            );
            return;
          }

          conditions.push(condition);
          if (!('relatedActions' in module.conditions![condition])) {
            module.conditions![condition].relatedActions = [];
          }
          module.conditions![condition].relatedActions?.push(action);
        });
      }

      if (resourceType.length) {
        if (typeof actions[action].resourceTypes == 'undefined') {
          actions[action].resourceTypes = {};
        }

        if (resourceType.includes('*')) {
          resourceType = resourceType.slice(0, -1);
          required = true;
        }

        actions[action].resourceTypes![resourceType] = {
          required: required,
        };
        if (conditions.length) {
          actions[action].resourceTypes![resourceType].conditions = conditions;
        }
      } else if (conditions.length) {
        actions[action].conditions = conditions;
      }
    });
  });
  module.actionList = actions;
}

function addResourceTypes($: cheerio.CheerioAPI, module: Module) {
  const resourceTypes: ResourceTypes = {};
  const tableResourceTypes = getTable($, 'Resource types');
  tableResourceTypes.find('tr').each((_, element) => {
    const tds = $(element).find('td');
    const name = tds.first().text().trim();
    const url = validateUrl(tds.first().find('a[href]').attr('href')?.trim());
    const arn = tds.first().next().text().trim();
    if (!name.length && !arn.length) {
      return;
    }

    const conditionKeys = tds
      .first()
      .next()
      .next()
      .find('p')
      .toArray()
      .map((element) => {
        return conditionKeyFixer(
          module.servicePrefix!,
          $(element).text().trim(),
        );
      });

    conditionKeys.forEach((condition: string) => {
      if (!('relatedResourceTypes' in module.conditions![condition])) {
        module.conditions![condition].relatedResourceTypes = [];
      }
      module.conditions![condition].relatedResourceTypes?.push(name);
    });

    if (name.length) {
      resourceTypes[name] = {
        name: name,
        url: url,
        arn: arnFixer(module.servicePrefix!, name, arn),
        conditionKeys: conditionKeys,
      };
    }
  });
  module.resourceTypes = resourceTypes;
}

function addConditions($: cheerio.CheerioAPI, module: Module) {
  const conditions: Conditions = {};
  const table = getTable($, 'Condition keys');
  table.find('tr').each((_, element) => {
    const tds = $(element).find('td');
    const key = tds.first().text().trim();
    const url = validateUrl(tds.first().find('a[href]').attr('href')?.trim());
    const description = cleanDescription(tds.first().next().text());
    const type = tds.first().next().next().text().trim();

    if (key.length) {
      const condition = conditionFixer(module.servicePrefix!, {
        key: key,
        description: description,
        type: type,
        url: url,
        isGlobal: key.startsWith('aws:'),
      });

      conditions[condition.key] = condition;
    }
  });
  module.conditions = conditions;
}

function validateUrl(url: string | undefined) {
  if (typeof url == 'undefined') {
    return '';
  }

  if (!URL.canParse(url)) {
    console.warn(`Removed invalid URL ${url}`.red);
    return '';
  }

  return url;
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
