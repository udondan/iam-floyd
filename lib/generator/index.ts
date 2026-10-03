import 'colors';

import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as glob from 'glob';
import * as request from 'request';

import { ResourceTypes } from '../shared';
import { Conditions } from './condition';
import {
  arnFixer,
  conditionFixer,
  conditionKeyFixer,
  fixes,
  serviceFixer,
} from './fixes';
import { buildServiceModel, ServiceModel } from './model';

export { emitTypeScriptFromModels } from './emit/typescript';
export { indexManagedPolicies } from './managed-policies';
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
  fixes?: Record<string, any>;
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

function getAwsServicesFromIamDocs(): Promise<string[]> {
  const skipServices = Object.keys(fixes).filter(
    (key) => fixes[key].ignore === true,
  );

  return new Promise((resolve, reject) => {
    const url =
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html';
    requestWithRetry(url)
      .then((body) => {
        const re = /href="\.\/list_(.*?)\.html"/g;
        let match: RegExpExecArray;
        const services: string[] = [];
        do {
          match = re.exec(body)!;
          if (match && !skipServices.includes(match[1])) {
            services.push(match[1]);
          }
        } while (match);
        if (!services.length) {
          return reject(`Unable to find services on ${url}`);
        }

        // set env `SERVICE` to generate only a single service for testing purpose
        const testOverride = process.env.SERVICE;
        if (testOverride?.length) {
          return resolve([testOverride]);
        }

        const unique = services.filter((elem, pos) => {
          return services.indexOf(elem) == pos;
        });

        resolve(unique.sort());
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}

export function getContent(service: string): Promise<Module> {
  service = serviceFixer(service);
  process.stdout.write(`${service}: `.white);
  process.stdout.write('Fetching '.grey);

  const urlPattern =
    'https://docs.aws.amazon.com/service-authorization/latest/reference/list_%s.html';
  return new Promise(async (resolve, reject) => {
    const shortName = service.replace(/^(amazon|aws)-?/, '');
    const serviceFixes = fixes[shortName];
    const filenameBase =
      serviceFixes && 'name' in serviceFixes ? serviceFixes.name : shortName;

    try {
      let module: Module = {
        filename: filenameBase.replace(/[^a-z0-9-]/i, '-'),
      };

      const url = urlPattern.replace('%s', service);

      const cachedModel = `${modelDir}/.cache/${module.filename}.json`;
      if (fs.existsSync(cachedModel)) {
        const lastModified = await getLastModified(url);
        if (lastModified < timeThreshold) {
          console.log(`Skipping, last modified on ${lastModified}`.green);
          return resolve(module);
        }
      }
      requestWithRetry(url)
        .then((body) => {
          process.stdout.write('Parsing '.blue);

          const $ = cheerio.load(body);
          const servicePrefix = $('code').first().text().trim();

          if (servicePrefix == '') {
            console.error(`PREFIX NOT FOUND FOR ${service} / ${url}`.red.bold);
          }

          module.name = servicePrefix;
          module.servicePrefix = servicePrefix;
          module.url = url;

          if (serviceFixes) {
            module.fixes = serviceFixes;
          }

          module = addConditions($, module);
          module = addActions($, module);
          module = addResourceTypes($, module);

          resolve(module);
        })
        .catch((err: Error) => {
          reject(err);
        });
    } catch (error: Error) {
      reject(error);
    }
  });
}

export function createModules(services: string[]): Promise<void> {
  createCache();
  return new Promise(async (resolve, reject) => {
    for (const service of services) {
      await getContent(service).then(createModule).catch(reject);
    }
    resolve();
  });
}

export const modelDir = 'lib/generated/model';

function writeServiceModel(model: ServiceModel) {
  fs.writeFileSync(
    `${modelDir}/${model.filename}.json`,
    `${JSON.stringify(model, null, 2)}\n`,
  );
}

export function createModule(module: Module): Promise<void> {
  if (typeof module.name === 'undefined') {
    //it was skipped, restore from cache
    restoreFileFromCache(`${modelDir}/${module.filename}.json`);
    return Promise.resolve();
  }

  process.stdout.write(`Generating `.cyan);

  if (module.fixes && 'name' in module.fixes) {
    module.name = module.fixes.name;
  } else if (
    module.filename.endsWith('v2') &&
    module.name.slice(-2).toLowerCase() !== 'v2'
  ) {
    module.name += '-v2';
  }

  writeServiceModel(buildServiceModel(module));
  console.log('Done'.green);
  return Promise.resolve();
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

function getLastModified(url: string): Promise<Date> {
  return new Promise((resolve, reject) => {
    requestWithRetry(url, { method: 'HEAD' })
      .then((lastModified: string) => {
        let mod = new Date();
        if (lastModified !== '') {
          mod = new Date(lastModified);
        }
        resolve(mod);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
}

function getTable($: cheerio.Root, title: string) {
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
function getTables($: cheerio.Root, title: string) {
  return $('.table-container table')
    .toArray()
    .filter((element) => {
      return $(element).find('th').first().text() == title;
    })
    .map((element) => $(element));
}

function addActions($: cheerio.Root, module: Module): Module {
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
        conditionKeys.each((_: unknown, conditionKey: string) => {
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

        if (resourceType.indexOf('*') >= 0) {
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
  return module;
}

function addResourceTypes($: cheerio.Root, module: Module): Module {
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
  return module;
}

function addConditions($: cheerio.Root, module: Module): Module {
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
  return module;
}

function validateUrl(url: string) {
  if (typeof url == 'undefined') {
    return '';
  }

  try {
    new URL(url);
  } catch (_: any) {
    console.warn(`Removed invalid URL ${url}`.red);
    return '';
  }

  return url;
}

function requestWithRetry(
  url: string,
  options: request.CoreOptions = {},
  retries = 3,
  backoff = 300,
): Promise<any> {
  options.headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9',
  };
  return new Promise((resolve, reject) => {
    const retry = (retries: number, backoff: number) => {
      request(url, options, (err, response, body) => {
        const failure =
          err ||
          (response && response.statusCode >= 400
            ? new Error(
                `Request to ${url} failed with status ${response.statusCode}`,
              )
            : undefined);
        if (failure) {
          const failDetails =
            retries > 0 ? `Retry in ${backoff * 2}` : 'Giving up';
          console.log(`Failed to fetch ${url} - ${failure} - ${failDetails}`);
          if (retries > 0) {
            setTimeout(() => {
              retry(--retries, backoff * 2);
            }, backoff);
          } else {
            reject(failure);
          }
        } else {
          if ('method' in options && options.method == 'HEAD') {
            if ('last-modified' in response.headers) {
              resolve(response.headers['last-modified']);
            } else resolve('');
          } else {
            resolve(body);
          }
        }
      });
    };
    retry(retries, backoff);
  });
}
