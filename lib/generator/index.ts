import 'colors';

import { ts } from '@ts-morph/common';
import cheerio = require('cheerio');
import request = require('request');
import { Project, Scope, SourceFile } from 'ts-morph';

import { fixes } from './fixes';

const project = new Project();

const modules: string[] = [];

export interface Module {
  name: string;
  url: string;
  actions?: Actions;
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
    [key: string]: ResourceType;
  };
  conditions?: string[];
}

export interface ResourceType {
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
        var match;
        const services: string[] = [];
        do {
          match = re.exec(body);
          if (match) {
            services.push(match[1]);
          }
        } while (match);
        resolve(services);
      }
    );
  });
}

export function getContent(service: string): Promise<Module> {
  process.stdout.write(`${service}: `.white);
  process.stdout.write('Fetching '.grey);

  const urlPattern =
    'https://docs.aws.amazon.com/IAM/latest/UserGuide/list_%s.html';
  return new Promise((resolve, reject) => {
    var actions: Actions = {};
    var action: string;

    const url = urlPattern.replace('%s', service);
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
      const module: Module = {
        name: servicePrefix,
        url: url,
      };

      if (service in fixes) {
        module.fixes = fixes[service];
      }

      const table = $('.table-container').first().find('table').first();

      table.find('tr').each((_: number, element: CheerioElement) => {
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
              `skipping row due to unexpected number of fields: ${content}`
                .yellow
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
            actions[action].resourceTypes![
              resourceType
            ].conditions = conditions;
          }
        } else if (conditions.length) {
          actions[action].conditions = conditions;
        }
      });

      module.actions = actions;

      resolve(module);
    });
  });
}

export function createModules(services: string[]) {
  return new Promise(async (resolve, reject) => {
    for (const service of services) {
      await getContent(service).then(createModule).catch(reject);
    }
    resolve();
  });
}

export function createModule(module: Module): Promise<void> {
  process.stdout.write(`Generating `.cyan);

  var moduleName = module.name;
  if (module.fixes && 'id' in module.fixes) {
    moduleName = module.fixes.id;
  }

  modules.push(moduleName);

  const sourceFile = project.createSourceFile(`./lib/${moduleName}.ts`);

  sourceFile.addImportDeclaration({
    namedImports: ['PolicyStatement', 'Actions'],
    moduleSpecifier: './shared',
  });

  const classDeclaration = sourceFile.addClass({
    name: camelCase(moduleName),
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

  for (const [name, action] of Object.entries(module.actions!)) {
    const method = classDeclaration.addMethod({
      name: lowerFirst(name),
      scope: Scope.Public,
    });
    method.setBodyText(
      [`this.add('${module.name}:${name}');`, 'return this;'].join('\n')
    );

    method.addJsDoc({
      description: `\n${action.description}\n\nAccess Level: ${action.accessLevel}\n\n${action.url}`,
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
    sourceFile.addExportDeclaration({
      namedExports: [camelCase(module)],
      moduleSpecifier: `./${module}`,
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
