import 'colors';

import { ts } from '@ts-morph/common';
import cheerio = require('cheerio');
import fs = require('fs');
import glob = require('glob');
import request = require('request');
import { Project, Scope, SourceFile } from 'ts-morph';

import { ResourceTypes } from '../shared';
import { arnFixer, fixes } from './fixes';

const project = new Project();
const modules: Module[] = [];
const timeThreshold = new Date();
timeThreshold.setHours(timeThreshold.getHours() - 2);

export interface Module {
  name?: string;
  filename: string;
  url?: string;
  actions?: Actions;
  resourceTypes?: ResourceTypes;
  fixes?: {
    [key: string]: any;
  };
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
}

export interface ResourceTypeOnAction {
  required: boolean;
  conditions?: string[];
}

export function getAwsServices(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    request(
      'https://github.com/awsdocs/iam-user-guide/tree/master/doc_source',
      function (err: any, _: request.Response, body: any) {
        if (err) {
          return reject(err);
        }

        const re = /href="\/awsdocs\/iam-user-guide\/blob\/master\/doc_source\/list_(.*?).md"/g;
        var match: RegExpExecArray;
        const services: string[] = [];
        do {
          match = re.exec(body);
          if (match) {
            services.push(match[1]);
          }
        } while (match);
        resolve(services.sort()); // shortcut helper for testing: .slice(0, 3)
      }
    );
  });
}

export function getContent(service: string): Promise<Module> {
  process.stdout.write(`${service}: `.white);
  process.stdout.write('Fetching '.grey);

  const urlPattern =
    'https://docs.aws.amazon.com/IAM/latest/UserGuide/list_%s.html';
  return new Promise(async (resolve, reject) => {
    const module: Module = {
      filename: service.replace(/[^a-z0-9-]/i, '-'),
    };

    const url = urlPattern.replace('%s', service);

    const cachedFile = `lib/.cache/${module.filename}.ts`;
    if (fs.existsSync(cachedFile)) {
      const lastModified = await getLastModified(url);
      if (lastModified < timeThreshold) {
        console.log(`Skipping, last modified on ${lastModified}`.green);
        return resolve(module);
      }
    }

    request(url, function (err: any, _: request.Response, body: any) {
      if (err) {
        return reject(err);
      }

      process.stdout.write('Parsing '.blue);

      const $ = cheerio.load(body);
      const servicePrefix = $('code').first().text().trim();

      if (servicePrefix == '') {
        console.error(`PREFIX NOT FOUND FOR ${service}`.red.bold);
      }

      module.name = servicePrefix;
      module.url = url;

      if (service in fixes) {
        module.fixes = fixes[service];
      }

      module.actions = parseActionTable($);
      module.resourceTypes = parseResourceTypeTable($, module.name);

      resolve(module);
    });
  });
}

export function createModules(services: string[]) {
  createCache();
  return new Promise(async (resolve, reject) => {
    for (const service of services) {
      await getContent(service).then(createModule).catch(reject);
    }
    resolve();
  });
}

export function createModule(module: Module): Promise<void> {
  if (typeof module.name === 'undefined') {
    //it was skipped, restore from cache
    fs.renameSync(
      `lib/.cache/${module.filename}.ts`,
      `lib/${module.filename}.ts`
    );
    modules.push(module);
    return Promise.resolve();
  }

  process.stdout.write(`Generating `.cyan);

  if (module.fixes && 'id' in module.fixes) {
    module.name = module.fixes.id;
  }

  modules.push(module);

  const sourceFile = project.createSourceFile(`./lib/${module.filename}.ts`);

  sourceFile.addImportDeclaration({
    namedImports: ['Actions', 'PolicyStatement', 'ResourceTypes'],
    moduleSpecifier: './shared',
  });

  const classDeclaration = sourceFile.addClass({
    name: camelCase(module.name),
    extends: 'PolicyStatement',
    isExported: true,
  });

  classDeclaration.addJsDoc({
    description: `\nAction provider for service ${module.name}\n\n${module.url}`,
  });

  classDeclaration.addProperty({
    name: 'servicePrefix',
    scope: Scope.Public,
    initializer: `'${module.name}'`,
  });

  classDeclaration.addProperty({
    name: 'actions',
    scope: Scope.Public,
    type: 'Actions',
    initializer: JSON.stringify(module.actions, null, 2),
  });

  classDeclaration.addProperty({
    name: 'resourceTypes',
    scope: Scope.Public,
    type: 'ResourceTypes',
    initializer: JSON.stringify(module.resourceTypes, null, 2),
  });

  for (const [name, action] of Object.entries(module.actions!)) {
    const method = classDeclaration.addMethod({
      name: lowerFirst(name),
      scope: Scope.Public,
    });
    method.setBodyText(
      [`this.add('${module.name}:${name}');`, 'return this;'].join('\n')
    );

    var desc = `\n${action.description}\n\nAccess Level: ${action.accessLevel}`;
    if (action.url.length) {
      desc += `\n\n${action.url}`;
    }
    method.addJsDoc({
      description: desc,
    });
  }

  formatCode(sourceFile);
  console.log('Done'.green);
  return sourceFile.save();
}

export function createIndex() {
  process.stdout.write('index: '.white);
  process.stdout.write('Generating '.cyan);

  const sourceFile = project.createSourceFile('./lib/index.ts');

  sourceFile.addExportDeclaration({
    namedExports: ['AccessLevel', 'All'],
    moduleSpecifier: './shared',
  });

  modules.sort().forEach((module) => {
    const source = project.addSourceFileAtPath(`./lib/${module.filename}.ts`);
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
  console.log('Done'.green);
  return sourceFile.save();
}

function cleanDescription(description: string): string {
  return description
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function upperFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function lowerFirst(str: string): string {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function camelCase(str: string) {
  return str
    .split(/[_-]/)
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
    insertSpaceBeforeFunctionParenthesis: true,
    placeOpenBraceOnNewLineForFunctions: false,
    placeOpenBraceOnNewLineForControlBlocks: false,
    insertSpaceBeforeTypeAnnotation: true,
    indentMultiLineObjectLiteralBeginningOnBlankLine: true,
    semicolons: ts.SemicolonPreference.Insert,
    indentSize: 2,
    trimTrailingWhitespace: true,
  });
}

function createCache() {
  const dir = 'lib';
  const cacheDir = `${dir}/.cache`;
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  for (let file of glob.sync(`${dir}/*.ts`)) {
    const fileName = (file as string).split('/').slice(-1)[0];
    fs.renameSync(file, `${cacheDir}/${fileName}`);
  }
}

function getLastModified(url: string): Promise<Date> {
  return new Promise((resolve, reject) => {
    request(url, { method: 'HEAD' }, function (err, response, _) {
      if (err) {
        return reject(err);
      }
      var lastModified = new Date();
      if ('last-modified' in response.headers) {
        lastModified = new Date(response.headers['last-modified']);
      }
      resolve(lastModified);
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

function parseActionTable($: CheerioStatic): Actions {
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
        url: first.find('a[href]').attr('href')?.trim() || '',
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
    const conditions: string[] = [];
    if (conditionKeys.length) {
      conditionKeys.each((_, conditionKey) => {
        conditions.push(cleanDescription($(conditionKey).text()));
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
  return actions;
}

function parseResourceTypeTable(
  $: CheerioStatic,
  service: string
): ResourceTypes {
  const resourceTypes: ResourceTypes = {};
  const tableResourceTypes = getTable($, 'Resource Types');
  tableResourceTypes.find('tr').each((_: number, element: CheerioElement) => {
    const tds = $(element).find('td');
    const name = tds.first().text().trim();
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
    if (name.length) {
      resourceTypes[name] = {
        name: name,
        arn: arnFixer(service, name, arn),
        conditionKeys: conditionKeys,
      };
    }
  });
  return resourceTypes;
}
