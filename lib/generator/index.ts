import 'colors';

import { ts } from '@ts-morph/common';
import cheerio = require('cheerio');
import fs = require('fs');
import glob = require('glob');
import request = require('request');
import { Project, Scope, SourceFile } from 'ts-morph';

import { Operator, ResourceTypes } from '../shared';
import { AccessLevelList } from '../shared/access-level';
import { Conditions } from './condition';
import { arnFixer, conditionFixer, fixes, serviceFixer } from './fixes';

export { indexManagedPolicies } from './managed-policies';

// tmp solution. the cheerio/types is currently not working
type CheerioStatic = any;
type CheerioElement = any;

const project = new Project();
const modules: Module[] = [];
const timeThreshold = new Date();

var threshold = 25;
const thresholdOverride = process.env.NOCACHE;
if (typeof thresholdOverride !== 'undefined' && thresholdOverride.length) {
  threshold += 999999999;
}

timeThreshold.setHours(timeThreshold.getHours() - threshold);

type Stats = {
  actions: string[];
  conditions: string[];
  resources: string[];
};
const serviceStats: string[] = [];

const conditionTypeDefaults: {
  [key: string]: {
    url: string;
    default: Operator;
    type: string[];
  };
} = {
  string: {
    url:
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String',
    default: new Operator().stringLike(),
    type: ['string'],
  },
  arn: {
    url:
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_ARN',
    default: new Operator().arnLike(),
    type: ['string'],
  },
  numeric: {
    url:
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric',
    default: new Operator().numericEquals(),
    type: ['number'],
  },
  date: {
    url:
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date',
    default: new Operator().dateEquals(),
    type: ['Date', 'string'],
  },
};

export interface Module {
  name?: string;
  servicePrefix?: string;
  filename: string;
  url?: string;
  actionList?: Actions;
  resourceTypes?: ResourceTypes;
  fixes?: {
    [key: string]: any;
  };
  conditions?: Conditions;
}

export interface Actions {
  [key: string]: Action;
}

export interface Action {
  url: string;
  description: string;
  accessLevel: string;
  resourceTypes?: {
    [key: string]: ResourceTypeOnAction;
  };
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
  return new Promise((resolve, reject) => {
    const url =
      'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html';
    requestWithRetry(url)
      .then((body) => {
        const re = /href=".\/list_(.*?)\.html"/g;
        var match: RegExpExecArray;
        const services: string[] = [];
        do {
          match = re.exec(body);
          if (match) {
            services.push(match[1]);
          }
        } while (match);
        if (!services.length) {
          return reject(`Unable to find services on ${url}`);
        }

        // set env `SERVICE` to generate only a single service for testing purpose
        const testOverride = process.env.SERVICE;
        if (typeof testOverride !== 'undefined' && testOverride.length) {
          return resolve([testOverride]);
        }

        const unique = services.filter((elem, pos) => {
          return services.indexOf(elem) == pos;
        });

        resolve(unique.sort());
      })
      .catch((err) => {
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
    const shortName = service.replace(/^(amazon|aws)/, '');

    try {
      var module: Module = {
        filename: shortName.replace(/[^a-z0-9-]/i, '-'),
      };

      const url = urlPattern.replace('%s', service);

      const cachedFile = `lib/generated/.cache/${module.filename}.ts`;
      if (fs.existsSync(cachedFile)) {
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

          if (shortName in fixes) {
            module.fixes = fixes[shortName];
          }

          module = addConditions($, module);
          module = addActions($, module);
          module = addResourceTypes($, module);

          resolve(module);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (e) {
      reject(e);
    }
  });
}

export function createModules(services: string[]): Promise<void> {
  createCache();
  return new Promise(async (resolve, reject) => {
    for (const service of services) {
      await getContent(service).then(createModule).catch(reject);
    }
    writeServiceStats();
    resolve();
  });
}

function writeStatsFile(file: string, data: string[]) {
  if (fs.existsSync(file)) {
    const contents = fs
      .readFileSync(file, 'utf8')
      .split('\n')
      .filter((n) => n);
    data.push(...contents);
  }
  const uniqueValues = data
    .filter(function (elem, pos) {
      return data.indexOf(elem) == pos;
    })
    .sort();
  const content = uniqueValues.join('\n') + '\n';
  fs.writeFileSync(file, content);
}

function writeStats(module: string, stats: Stats) {
  process.stdout.write('Stats '.grey);
  Object.keys(stats).forEach(function (key) {
    const filePath = `./stats/${key}/${module}`;
    writeStatsFile(filePath, stats[key]);
  });
}

function writeServiceStats() {
  writeStatsFile('./stats/services', serviceStats);
}

export function createModule(module: Module): Promise<void> {
  const stats: Stats = {
    actions: [],
    conditions: [],
    resources: [],
  };
  if (typeof module.name === 'undefined') {
    //it was skipped, restore from cache
    const moduleFilePath = `lib/generated/${module.filename}.ts`;
    restoreFileFromCache(moduleFilePath);
    const moduleFile = new Project().addSourceFileAtPath(moduleFilePath);

    module.servicePrefix = moduleFile
      .getClasses()[0]
      .getProperty('servicePrefix')
      .getInitializer()
      .getText()
      .split("'")
      .join('');
  }

  serviceStats.push(module.servicePrefix);

  if (typeof module.name === 'undefined') {
    restoreFileFromCache(`stats/actions/${module.servicePrefix}`);
    restoreFileFromCache(`stats/conditions/${module.servicePrefix}`);
    restoreFileFromCache(`stats/resources/${module.servicePrefix}`);
    modules.push(module);
    return Promise.resolve();
  }

  process.stdout.write(`Generating `.cyan);

  if (module.fixes && 'name' in module.fixes) {
    module.name = module.fixes.name;
  }

  modules.push(module);

  const sourceFile = project.createSourceFile(
    `./lib/generated/${module.filename}.ts`
  );
  const description = `\nStatement provider for service [${module.name}](${module.url}).\n\n@param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement`;

  sourceFile.addImportDeclaration({
    namedImports: ['AccessLevelList'],
    moduleSpecifier: '../shared/access-level',
  });

  const classDeclaration = sourceFile.addClass({
    name: camelCase(module.name),
    extends: 'PolicyStatement',
    isExported: true,
  });

  classDeclaration.addJsDoc({
    description: description,
  });

  classDeclaration.addProperty({
    name: 'servicePrefix',
    scope: Scope.Public,
    initializer: `'${module.servicePrefix}'`,
  });

  const constructor = classDeclaration.addConstructor({});
  constructor.addParameter({
    name: 'sid',
    type: 'string',
    hasQuestionToken: true,
  });
  constructor.setBodyText('super(sid);');
  constructor.addJsDoc({
    description: description,
  });

  /**
   * We collect the access levels and their actions in this object
   */
  const accessLevelList: AccessLevelList = {};

  for (const [name, action] of Object.entries(module.actionList!)) {
    if (!(action.accessLevel in accessLevelList)) {
      accessLevelList[action.accessLevel] = [];
    }
    accessLevelList[action.accessLevel].push(name);

    stats.actions.push(`${module.servicePrefix}:${name};${action.accessLevel}`);

    const method = classDeclaration.addMethod({
      name: `to${upperFirst(name)}`,
      scope: Scope.Public,
    });

    method.setBodyText(`return this.to('${name}');`);

    var desc = `\n${action.description}\n\nAccess Level: ${action.accessLevel}`;

    if ('conditions' in action) {
      desc += '\n\nPossible conditions:';
      action.conditions.forEach((condition) => {
        desc += `\n- .${createConditionName(
          condition,
          module.servicePrefix
        )}()`;
      });
    }
    if ('dependentActions' in action) {
      desc += '\n\nDependent actions:';
      action.dependentActions.forEach((dependentAction) => {
        desc += `\n- ${dependentAction}`;
      });
    }
    if (action.url.length && action.url != 'https://docs.aws.amazon.com/') {
      desc += `\n\n${action.url}`;
    }
    method.addJsDoc({
      description: desc,
    });
  }

  classDeclaration.addProperty({
    name: 'accessLevelList',
    scope: Scope.Protected,
    type: 'AccessLevelList',
    initializer: JSON.stringify(accessLevelList, null, 2),
  });

  for (const [name, resourceType] of Object.entries(module.resourceTypes!)) {
    const method = classDeclaration.addMethod({
      name: `on${camelCase(name)}`,
      scope: Scope.Public,
    });

    stats.resources.push(`${module.servicePrefix}:${name}`);

    const params = getArnPlaceholders(resourceType.arn);
    params.forEach((param) => {
      method.addParameter({
        name: lowerFirst(camelCase(param)),
        type: 'string',
        hasQuestionToken: /^(Partition|Region|Account(Id)?)$/.test(param),
      });
    });

    const methodBody: string[] = [`var arn = '${resourceType.arn}';`];
    var paramDocs = '';
    params.forEach((param) => {
      const paramName = lowerFirst(camelCase(param));
      var orDefault = '';
      if (param == 'Partition') {
        orDefault = " || 'aws'";
        paramDocs += `\n@param ${paramName} - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to \`aws\`.`;
      } else if (param == 'Region') {
        orDefault = " || '*'";
        paramDocs += `\n@param ${paramName} - Region of the resource; defaults to empty string: all regions.`;
      } else if (param.match(/^Account(Id)?$/)) {
        orDefault = " || '*'";
        paramDocs += `\n@param ${paramName} - Account of the resource; defaults to empty string: all accounts.`;
      } else {
        paramDocs += `\n@param ${paramName} - Identifier for the ${paramName}.`;
      }
      methodBody.push(
        `arn = arn.replace('\${${param}}', ${paramName}${orDefault});`
      );
    });

    var desc = `\nAdds a resource of type ${resourceType.name} to the statement`;
    if (
      resourceType.url.length &&
      resourceType.url != 'https://docs.aws.amazon.com/'
    ) {
      desc += `\n\n${resourceType.url}`;
    }
    desc += `\n${paramDocs}`;
    if (resourceType.conditionKeys.length) {
      desc += '\n\nPossible conditions:';
      resourceType.conditionKeys.forEach((key) => {
        desc += `\n- .${createConditionName(key, module.servicePrefix)}()`;
      });
    }
    method.addJsDoc({
      description: desc,
    });

    methodBody.push('return this.on(arn);');
    method.setBodyText(methodBody.join('\n'));
  }

  let hasConditions = false;

  for (let [key, condition] of Object.entries(module.conditions!)) {
    condition = conditionFixer(module.filename, condition);

    const name = key.split(/[:/]/);

    stats.conditions.push(`${module.servicePrefix}:${name[1]}`);

    // we have to skip global conditions, since we simply cannot override global conditions due to JSII limitations: https://github.com/aws/jsii/issues/1935
    if (name[0] == 'aws' && name[1] != 'FederatedProvider') {
      continue;
    }

    hasConditions = true;

    var desc = '';

    if (condition.description.length) {
      desc += `\n${condition.description}\n`;
    }

    if (condition.url.length) {
      desc += `\n${condition.url}\n`;
    }

    if ('relatedActions' in condition && condition.relatedActions.length) {
      desc += '\nApplies to actions:\n';
      condition.relatedActions
        .filter((elem, pos) => {
          return condition.relatedActions.indexOf(elem) == pos;
        })
        .forEach((relatedAction) => {
          desc += `- .to${camelCase(relatedAction)}()\n`;
        });
    }

    if (
      'relatedResourceTypes' in condition &&
      condition.relatedResourceTypes.length
    ) {
      desc += '\nApplies to resource types:\n';
      condition.relatedResourceTypes
        .filter((elem, pos) => {
          return condition.relatedResourceTypes.indexOf(elem) == pos;
        })
        .forEach((resourceType) => {
          desc += `- ${resourceType}\n`;
        });
    }

    const type = condition.type.toLowerCase();

    const methodBody: string[] = [];

    var methodName = createConditionName(key, module.servicePrefix);
    if (name.length > 2 && !name[2].length) {
      // special case for ec2:ResourceTag/ - not sure this is correct, the description makes zero sense...
      methodName += 'Exists';
    }
    const method = classDeclaration.addMethod({
      name: methodName,
      scope: Scope.Public,
    });

    let propsKey = '';

    if (name[0] != module.servicePrefix) {
      propsKey += name[0] + ':';
    }

    propsKey += name[1];

    if (name.length > 2) {
      // it is one of those tag keys
      propsKey += '/';
      if (name[2].length) {
        const paramName = name[2].replace(/[^a-zA-Z0-9]/g, '');
        desc += `\n@param ${lowerFirst(paramName)} The tag key to check`;
        method.addParameter({
          name: lowerFirst(paramName),
          type: 'string',
        });
        propsKey += `\${${lowerFirst(paramName)}}`;
      }
    }

    if (type in conditionTypeDefaults) {
      var types = [...conditionTypeDefaults[type].type];
      if ('typeOverride' in condition) {
        types = condition.typeOverride;
      }
      if (types.length > 1) {
        types.push(`(${types.join('|')})[]`);
      } else {
        types.push(`${types}[]`);
      }

      desc += `\n@param value The value(s) to check`;
      method.addParameter({
        name: 'value',
        type: types.join(' | '),
      });

      desc += `\n@param operator Works with [${type} operators](${
        conditionTypeDefaults[type].url
      }). **Default:** \`${conditionTypeDefaults[type].default.toString()}\``;
      method.addParameter({
        name: 'operator',
        type: 'Operator | string',
        hasQuestionToken: true,
      });

      if (type == 'date') {
        methodBody.push(
          'if (typeof (value as Date).getMonth === "function") {',
          '  value = (value as Date).toISOString();',
          '} else if (Array.isArray(value)) {',
          '  value = value.map((item) => {',
          '    if (typeof (item as Date).getMonth === "function") {',
          '      item = (item as Date).toISOString();',
          '    }',
          '    return item;',
          '  });',
          '}'
        );
      }

      methodBody.push(
        `return this.if(\`${propsKey}\`, value, operator || '${conditionTypeDefaults[
          type
        ].default.toString()}')`
      );
    } else if (type == 'bool' || type == 'boolean') {
      desc += '\n@param value `true` or `false`. **Default:** `true`';

      method.addParameter({
        name: 'value',
        type: 'boolean',
        hasQuestionToken: true,
      });

      methodBody.push(
        `return this.if(\`${key}\`, (typeof value !== 'undefined' ? value : true), 'Bool');`
      );
    } else {
      throw new Error(`Unexpected condition type: ${type}`);
    }

    method.addJsDoc({
      description: desc,
    });

    method.setBodyText(methodBody.join('\n'));
  }

  const sharedClasses = ['PolicyStatement'];
  if (hasConditions) {
    sharedClasses.push('Operator');
  }
  sourceFile.addImportDeclaration({
    namedImports: sharedClasses,
    moduleSpecifier: '../shared',
  });

  formatCode(sourceFile);
  const done = sourceFile.save();
  writeStats(module.servicePrefix, stats);
  console.log('Done'.green);
  return done;
}

export function createIndex() {
  const filePath = './lib/generated/index.ts';
  process.stdout.write('index: '.white);
  process.stdout.write('Generating '.cyan);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  const sourceFile = project.createSourceFile(filePath);

  modules.sort().forEach((module) => {
    const source = project.addSourceFileAtPath(
      `./lib/generated/${module.filename}.ts`
    );
    const exports = [];

    source.getClasses().forEach((item) => {
      if (item.isExported()) {
        exports.push(item.getName());
      }
    });

    sourceFile.addExportDeclaration({
      namedExports: exports,
      moduleSpecifier: `./${module.filename}`,
    });
  });

  formatCode(sourceFile);
  const done = sourceFile.save();
  console.log('Done'.green);
  return done;
}

function cleanDescription(description: string): string {
  return description
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .replace(/<code>(.*?)<\/code>/g, '`$1`')
    .trim();
}

export function getArnPlaceholders(arn: string): RegExpMatchArray {
  const matches = arn.match(/(?<=\$\{)[a-z0-9_-]+(?=\})/gi);

  const toTheEnd = [];
  while (matches.length) {
    if (/^(Partition|Region|Account(Id)?)$/.test(matches[0])) {
      toTheEnd.push(matches.shift());
    } else {
      break;
    }
  }

  matches.push(...toTheEnd.reverse());
  return matches;
}

function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function lowerFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function camelCase(str: string) {
  return str
    .split(/[_-\s\./]/)
    .map((str) => {
      return upperFirst(str);
    })
    .join('');
}

function formatCode(file: SourceFile) {
  file.formatText({
    ensureNewLineAtEndOfFile: true,
    insertSpaceAfterCommaDelimiter: true,
    insertSpaceAfterSemicolonInForStatements: true,
    insertSpaceBeforeAndAfterBinaryOperators: true,
    insertSpaceAfterConstructor: true,
    insertSpaceAfterKeywordsInControlFlowStatements: true,
    insertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: true,
    insertSpaceAfterOpeningAndBeforeClosingEmptyBraces: false,
    insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: true,
    insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: true,
    insertSpaceAfterTypeAssertion: true,
    insertSpaceBeforeFunctionParenthesis: false,
    placeOpenBraceOnNewLineForFunctions: false,
    placeOpenBraceOnNewLineForControlBlocks: false,
    insertSpaceBeforeTypeAnnotation: false,
    indentMultiLineObjectLiteralBeginningOnBlankLine: true,
    semicolons: ts.SemicolonPreference.Insert,
    indentSize: 2,
    trimTrailingWhitespace: true,
  });
}

function createCache() {
  createLibCache();
  createStatsCache();
}

function createLibCache() {
  const dir = 'lib/generated';
  mkDirCache(dir, '*.ts');
}

function createStatsCache() {
  ['actions', 'conditions', 'resources'].forEach((dirName) => {
    const dir = `stats/${dirName}`;
    mkDirCache(dir, '*');
  });
}

function mkDirCache(dir: string, pattern: string) {
  const cacheDir = `${dir}/.cache`;
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }
  for (let file of glob.sync(`${dir}/${pattern}`)) {
    const fileName = (file as string).split('/').slice(-1)[0];
    fs.renameSync(file, `${cacheDir}/${fileName}`);
  }
}

function restoreFileFromCache(filename: string) {
  const splitPath = filename.split('/');
  const file = splitPath.pop();
  splitPath.push('.cache');
  splitPath.push(file);
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
        var mod = new Date();
        if (lastModified !== '') {
          mod = new Date(lastModified);
        }
        resolve(mod);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getTable($: CheerioStatic, title: string) {
  const table = $('.table-container table')
    .toArray()
    .filter((element) => {
      return $(element).find('th').first().text() == title;
    });
  return $(table[0]);
}

function addActions($: CheerioStatic, module: Module): Module {
  const actions: Actions = {};
  const tableActions = getTable($, 'Actions');

  var action: string;
  tableActions.find('tr').each((_: number, element: CheerioElement) => {
    const tds = $(element).find('td');
    const tdLength = tds.length;
    var first = tds.first();

    if (tdLength == 6) {
      // it's a new action

      action = first.text().replace('[permission only]', '').trim();
      actions[action] = {
        url: validateUrl(first.find('a[href]').attr('href')?.trim()),
        description: cleanDescription(first.next().text().trim()),
        accessLevel: first.next().next().text().trim(),
      };
      first = first.next().next().next();
    }

    if (tdLength != 6 && tdLength != 3) {
      const content = cleanDescription(tds.text());
      if (content.length && !content.startsWith('SCENARIO:')) {
        console.warn(
          `skipping row due to unexpected number of fields: ${content}`.yellow
        );
      }
      return;
    }

    var resourceType = first.text().trim();
    var required = false;
    var conditionKeys = first.next().find('p');
    const dependentActions = first.next().next().find('p');

    const conditions: string[] = [];
    if (conditionKeys.length) {
      conditionKeys.each((_, conditionKey) => {
        const condition = cleanDescription($(conditionKey).text());
        conditions.push(condition);
        if (!('relatedActions' in module.conditions[condition])) {
          module.conditions[condition].relatedActions = [];
        }
        module.conditions[condition].relatedActions.push(action);
      });
    }

    if (dependentActions.length) {
      actions[action].dependentActions = [];
      dependentActions.each((_, dependentAction) => {
        actions[action].dependentActions.push(
          cleanDescription($(dependentAction).text())
        );
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
  module.actionList = actions;
  return module;
}

function addResourceTypes($: CheerioStatic, module: Module): Module {
  const service = module.name;
  const resourceTypes: ResourceTypes = {};
  const tableResourceTypes = getTable($, 'Resource types');
  tableResourceTypes.find('tr').each((_: number, element: CheerioElement) => {
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
        return $(element).text().trim();
      });

    conditionKeys.forEach((condition) => {
      if (!('relatedResourceTypes' in module.conditions[condition])) {
        module.conditions[condition].relatedResourceTypes = [];
      }
      module.conditions[condition].relatedResourceTypes.push(name);
    });

    if (name.length) {
      resourceTypes[name] = {
        name: name,
        url: url,
        arn: arnFixer(service, name, arn),
        conditionKeys: conditionKeys,
      };
    }
  });
  module.resourceTypes = resourceTypes;
  return module;
}

function addConditions($: CheerioStatic, module: Module): Module {
  const conditions: Conditions = {};
  const table = getTable($, 'Condition keys');
  table.find('tr').each((_: number, element: CheerioElement) => {
    const tds = $(element).find('td');
    const key = tds.first().text().trim();
    const url = validateUrl(tds.first().find('a[href]').attr('href')?.trim());
    const description = cleanDescription(tds.first().next().text());
    const type = tds.first().next().next().text().trim();

    if (key.length) {
      conditions[key] = {
        key: key,
        description: description,
        type: type,
        url: url,
        isGlobal: key.startsWith('aws:'),
      };
    }
  });
  module.conditions = conditions;
  return module;
}

function createConditionName(key: string, servicePrefix: string): string {
  var methodName = 'if';
  const split = key.split(/[:/]/);
  // these are exceptions for the Security Token Service to:
  // - make it clear to which provider the condition is for
  // - avoid duplicate method names
  if (split[0] == 'accounts.google.com') {
    methodName += 'Google';
  } else if (split[0] == 'cognito-identity.amazonaws.com') {
    methodName += 'Cognito';
  } else if (split[0] == 'www.amazon.com') {
    methodName += 'Amazon';
  } else if (split[0] == 'graph.facebook.com') {
    methodName += 'Facebook';
  } else if (split[0] != servicePrefix) {
    // for global conditions and conditions related to other services
    methodName += upperFirst(split[0]);
  }
  methodName += upperFirst(camelCase(split[1]));
  return methodName;
}

function validateUrl(url: string) {
  if (typeof url == 'undefined') {
    return '';
  }

  try {
    new URL(url);
  } catch (_) {
    console.warn(`Removed invalid URL ${url}`.red);
    return '';
  }

  return url;
}

function requestWithRetry(
  url: string,
  options = {},
  retries = 3,
  backoff = 300
): Promise<any> {
  return new Promise((resolve, reject) => {
    const retry = (retries: number, backoff: number) => {
      request(url, options, (err, response, body) => {
        if (err) {
          const failDetails =
            retries > 0 ? `Retry in ${backoff * 2}` : 'Giving up';
          console.log(`Failed to fetch ${url} - ${failDetails}`);
          if (retries > 0) {
            setTimeout(() => {
              retry(--retries, backoff * 2);
            }, backoff);
          } else {
            reject(err);
          }
        } else {
          if ('method' in options && options['method'] == 'HEAD') {
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
