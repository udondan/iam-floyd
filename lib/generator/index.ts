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
    console.info(`Fetching ${service}`.grey);
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

            console.info(`Parsing ${service}`.blue);

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

                    action = first
                        .text()
                        .replace('[permission only]', '')
                        .trim();
                    actions[action] = {
                        url: first.find('a[href]').attr('href')?.trim() || '',
                        description: cleanDescription(
                            first.next().text().trim()
                        ),
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
                        conditions.push(
                            cleanDescription($(conditionKey).text())
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
    return new Promise((resolve, reject) => {
        const promises: Promise<any>[] = [];
        services.forEach((service, i) => {
            const p = delay(i, service) // be gentle, or AWS will CAPTCHA us
                .then(getContent)
                .then(createModule);
            promises.push(p);
        });
        Promise.all(promises).then(resolve).catch(reject);
    });
}

function delay(i: number, service: string): Promise<string> {
    const factor = 1000; //1 module per second
    return new Promise((resolve) =>
        setTimeout(() => {
            resolve(service);
        }, i * factor)
    );
}

export function createModule(module: Module): Promise<void> {
    console.info(`Generating ${module.name}`.cyan);

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
        initializer: JSON.stringify(module.actions),
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
    console.log(`Done ${module.name.bold}`.green);
    return sourceFile.save();
}
/*
export function createShared() {
    console.info('Generating _shared'.cyan);

    const sourceFile = project.createSourceFile('./lib/shared');

    sourceFile.addImportDeclaration({
        moduleSpecifier: '@aws-cdk/aws-iam',
        namespaceImport: 'iam',
    });

    sourceFile.addInterface({
        name: 'Action',
        isExported: true,
        properties: [
            {
                name: 'url',
                type: 'string',
            },
            {
                name: 'description',
                type: 'string',
            },
            {
                name: 'accessLevel',
                type: 'string',
            },
            {
                name: 'resourceTypes',
                type: 'any',
                hasQuestionToken: true,
            },
            {
                name: 'conditions',
                type: 'string[]',
                hasQuestionToken: true,
            },
        ],
    });

    sourceFile.addInterface({
        name: 'Actions',
        isExported: true,
        properties: [
            {
                //name: 'newProperty',
                name: '[key: string]',
                type: 'Action',
            },
        ],
    });

    sourceFile.addEnum({
        name: 'AccessLevel',
        isExported: true,
        docs: [
            'Access level classifications for the actions in a service\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level',
        ],
        members: [
            {
                name: 'LIST',
                value: 'List',
                docs: [
                    'Permission to list resources within the service to determine whether an object exists.\n\nActions with this level of access can list objects but cannot see the contents of a resource.\n\nFor example, the Amazon S3 action `ListBucket` has the List access level.',
                ],
            },
            {
                name: 'READ',
                value: 'Read',
                docs: [
                    'Permission to read but not edit the contents and attributes of resources in the service.\n\nFor example, the Amazon S3 actions `GetObject` and `GetBucketLocation` have the Read access level.',
                ],
            },
            {
                name: 'WRITE',
                value: 'Write',
                docs: [
                    'Permission to create, delete, or modify resources in the service.\n\nFor example, the Amazon S3 actions `CreateBucket`, `DeleteBucket` and `PutObject` have the Write access level.\n\nWrite actions might also allow modifying a resource tag. However, an action that allows only changes to tags has the Tagging access level.',
                ],
            },
            {
                name: 'PERMISSION_MANAGEMENT',
                value: 'Permissions management',
                docs: [
                    'Permission to grant or modify resource permissions in the service.\n\nFor example, most IAM and AWS Organizations actions, as well as actions like the Amazon S3 actions `PutBucketPolicy` and `DeleteBucketPolicy` have the Permissions management access level.',
                ],
            },
            {
                name: 'TAGGING',
                value: 'Tagging',
                docs: [
                    'Permission to perform actions that only change the state of resource tags.\n\nFor example, the IAM actions `TagRole` and `UntagRole` have the Tagging access level because they allow only tagging or untagging a role. However, the `CreateRole` action allows tagging a role resource when you create that role. Because the action does not only add a tag, it has the Write access level.',
                ],
            },
        ],
    });

    const classDeclaration = sourceFile.addClass({
        name: 'PolicyStatement',
        extends: 'iam.PolicyStatement',
        isExported: true,
    });

    classDeclaration.addProperty({
        name: 'actions',
        scope: Scope.Public,
        type: 'Actions',
        initializer: '{}',
    });

    classDeclaration.addProperty({
        name: 'add',
        scope: Scope.Public,
        initializer: 'this.addActions',
    });

    classDeclaration.addProperty({
        name: 'servicePrefix',
        scope: Scope.Public,
        initializer: '""',
    });

    const allActions = classDeclaration.addMethod({
        name: 'allActions',
        scope: Scope.Public,
        parameters: [
            {
                name: 'accessLevel',
                type: '(AccessLevel | RegExp)[]',
                isRestParameter: true,
            },
        ],
    });

    allActions.setBodyText(
        [
            `
            if (accessLevel.length) {
                accessLevel.forEach((rule) => {
                    if (typeof rule.hasOwnProperty('compile')) { //assume it's a regex
                        console.log('TODO');
                } else { // assume it's an AccessLevel
                    console.log('TODO');
                }
            });
            } else {
                this.add(\`\${this.servicePrefix}:*\`);
            }
            return this;
            `,
        ].join('\n')
    );

    const not = classDeclaration.addMethod({
        name: 'not',
        scope: Scope.Public,
    });
    not.setBodyText(
        ['this.add = this.addNotActions;', 'return this;'].join('\n')
    );

    not.addJsDoc({
        description:
            '\nChanges all subsequent additions to be set as notAction\n\nhttps://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html',
    });

    const allow = classDeclaration.addMethod({
        name: 'allow',
        scope: Scope.Public,
    });

    allow.setBodyText(
        ['this.effect = iam.Effect.ALLOW;', 'return this;'].join('\n')
    );

    allow.addJsDoc({
        description: `\nAllow the actions in this statement`,
    });

    const deny = classDeclaration.addMethod({
        name: 'deny',
        scope: Scope.Public,
    });

    deny.setBodyText(
        ['this.effect = iam.Effect.DENY;', 'return this;'].join('\n')
    );

    deny.addJsDoc({
        description: `\nDeny the actions in this statement`,
    });

    formatCode(sourceFile);
    console.log('Done _shared'.green);
    return sourceFile.save();
}
*/

export function createIndex() {
    console.info('Generating index'.cyan);

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
    console.log('Done index'.green);
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
    });
}
