import * as fs from 'fs';
import {
  MethodDeclarationStructure,
  OptionalKind,
  ParameterDeclarationStructure,
  Project,
  QuoteKind,
  Scope,
  SourceFile,
} from 'ts-morph';

import { formatCode } from '../format';
import {
  ActionModel,
  CdkRef,
  ConditionModel,
  ResourceModel,
  ServiceModel,
} from '../model';
import { placeholderDefaultDocs } from './shared';

export interface EmitTypeScriptOptions {
  /**
   * Emit the variant for `cdk-iam-floyd`, where statements extend `aws_iam.PolicyStatement`
   */
  readonly cdk?: boolean;
}

type Method = OptionalKind<MethodDeclarationStructure>;
type Parameter = OptionalKind<ParameterDeclarationStructure>;

const modelDir = 'lib/generated/model';
const outDir = 'lib/generated/policy-statements';

// AWS sometimes documents condition keys with a literal `${Placeholder}` baked into the
// key text itself (e.g. `agent.${Domain}.buildkite.dev:build_branch`), as opposed to a
// placeholder we turn into a real method parameter. Since we embed the raw key text into a
// backtick template literal in the generated source, an un-escaped `$` would be parsed as a
// live interpolation referencing an undefined identifier. Escape it so it stays literal text.
function escapeTemplateLiteral(str: string): string {
  return str.replace(/\$/g, () => '\\$');
}

/**
 * The URL of the docs as a paragraph, unless it links to the start page only
 */
function docsUrl(url: string): string {
  return url.length && url != 'https://docs.aws.amazon.com/'
    ? `\n\n${url}`
    : '';
}

/**
 * A list with a title in the docs, e.g. of the possible conditions
 */
function docList(title: string, items: string[] | undefined): string {
  return items
    ? `\n\n${title}:${items.map((item) => `\n- ${item}`).join('')}`
    : '';
}

const methodReference = (name: string) => `.${name}()`;

function actionMethod(action: ActionModel): Method {
  const desc = `\n${action.description}\n\nAccess Level: ${action.accessLevel}${docList(
    'Possible conditions',
    action.conditionMethods?.map(methodReference),
  )}${docList('Dependent actions', action.dependentActions)}${docsUrl(action.url)}`;
  return {
    name: action.methodName,
    scope: Scope.Public,
    statements: `return this.to('${action.name}');`,
    docs: [{ description: desc }],
  };
}

const placeholderDefaults = {
  partition: 'this.defaultPartition',
  region: 'this.defaultRegion',
  account: 'this.defaultAccount',
};

/**
 * The docs of the required placeholder, which in the CDK variant can also be a construct
 */
function requiredParamDocs(name: string, cdkRef: CdkRef | undefined): string {
  const cdkRefType = `interfaces.${cdkRef?.module}.${cdkRef?.interface}`;
  if (cdkRef?.arn) {
    return `Identifier for the ${name}, or a construct that implements \`${cdkRefType}\`, whose ARN is used. Then the partition, region and account are ignored.`;
  }
  if (cdkRef?.id) {
    return `Identifier for the ${name}, or a construct that implements \`${cdkRefType}\`.`;
  }
  return `Identifier for the ${name}.`;
}

/**
 * The statements that take the ARN or the identifier from a construct in place of the required
 * placeholder
 */
function cdkRefStatements(name: string, cdkRef: CdkRef | undefined): string[] {
  if (cdkRef?.arn) {
    return [
      `if (typeof ${name} !== 'string') {`,
      `  return this.on(${name}.${cdkRef.property}.${cdkRef.arn});`,
      '}',
    ];
  }
  if (cdkRef?.id) {
    return [
      `if (typeof ${name} !== 'string') {`,
      `  ${name} = ${name}.${cdkRef.property}.${cdkRef.id};`,
      '}',
    ];
  }
  return [];
}

/**
 * The method of a resource type. `cdkRef` is the reference interface the CDK variant takes in
 * place of the required placeholder.
 */
function resourceMethod(
  resource: ResourceModel,
  cdkRef: CdkRef | undefined,
): Method {
  const statements: string[] = [];
  const requiredParameters: Parameter[] = [];
  const optionalParameters: Parameter[] = [];
  // placeholders without parameter stay literal text
  let arn = escapeTemplateLiteral(resource.arn);
  let paramDocs = '';
  for (const { placeholder, name, kind } of resource.placeholders) {
    let orDefault = '';
    if (kind == 'required') {
      requiredParameters.push({
        name,
        type: cdkRef
          ? `string | interfaces.${cdkRef.module}.${cdkRef.interface}`
          : 'string',
        hasQuestionToken: false,
      });
      statements.push(...cdkRefStatements(name, cdkRef));
      paramDocs += `\n@param ${name} - ${requiredParamDocs(name, cdkRef)}`;
    } else {
      optionalParameters.push({ name, type: 'string', hasQuestionToken: true });
      orDefault = ` ?? ${placeholderDefaults[kind]}`;
      paramDocs += `\n@param ${name} - ${placeholderDefaultDocs[kind]}`;
    }
    arn = arn.replace(`\\\${${placeholder}}`, `\${${name}${orDefault}}`);
  }
  statements.push(`return this.on(\`${arn}\`);`);

  const conditions = resource.conditionMethods.length
    ? resource.conditionMethods.map(methodReference)
    : undefined;
  const desc = `\nAdds a resource of type ${resource.name} to the statement${docsUrl(
    resource.url,
  )}\n${paramDocs}${docList('Possible conditions', conditions)}`;
  return {
    name: resource.methodName,
    scope: Scope.Public,
    parameters: [...requiredParameters, ...optionalParameters],
    statements,
    docs: [{ description: desc }],
  };
}

/**
 * A paragraph of the docs of a condition
 */
function paragraph(text: string): string {
  return text.length ? `\n${text}\n` : '';
}

/**
 * A list of the docs of a condition, e.g. of the actions it applies to
 */
function appliesTo(title: string, items: string[]): string {
  return items.length
    ? `\nApplies to ${title}:\n${items.map((item) => `- ${item}\n`).join('')}`
    : '';
}

function conditionDocs(condition: ConditionModel): string {
  return [
    paragraph(condition.description),
    paragraph(condition.url),
    appliesTo('actions', condition.relatedActionMethods.map(methodReference)),
    appliesTo('resource types', condition.relatedResourceTypes),
  ].join('');
}

/**
 * Dates of the value of a condition become strings
 */
const dateStatements = [
  'if (typeof (value as Date).getMonth === "function") {',
  '  value = (value as Date).toISOString();',
  '} else if (Array.isArray(value)) {',
  '  value = value.map((item) => {',
  '    if (typeof (item as Date).getMonth === "function") {',
  '      item = (item as Date).toISOString();',
  '    }',
  '    return item;',
  '  });',
  '}',
];

/**
 * The parameters of the value of a condition, their docs and the statements of the method
 */
function conditionValue(
  condition: ConditionModel,
  propsKey: string,
): { docs: string; parameters: Parameter[]; statements: string[] } {
  if (condition.valueKind == 'boolean') {
    return {
      docs: '\n@param value `true` or `false`. **Default:** `true`',
      parameters: [{ name: 'value', type: 'boolean', hasQuestionToken: true }],
      statements: [
        `return this.if(\`${propsKey}\`, (typeof value !== 'undefined' ? value : true), 'Bool');`,
      ],
    };
  }
  const types = [...condition.valueTypes!];
  types.push(
    types.length > 1 ? `(${types.join('|')})[]` : `${types.join(',')}[]`,
  );
  return {
    docs: `\n@param value The value(s) to check\n@param operator Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``,
    parameters: [
      { name: 'value', type: types.join(' | ') },
      { name: 'operator', type: 'Operator | string', hasQuestionToken: true },
    ],
    statements: [
      ...(condition.valueKind == 'date' ? dateStatements : []),
      `return this.if(\`${propsKey}\`, value, operator ?? '${condition.defaultOperator}')`,
    ],
  };
}

function conditionMethod(condition: ConditionModel): Method {
  let desc = conditionDocs(condition);
  const parameters: Parameter[] = [];
  let propsKey = escapeTemplateLiteral(condition.keyLiteral);
  if (typeof condition.keyParam !== 'undefined') {
    desc += `\n@param ${condition.keyParam} The tag key to check`;
    parameters.push({ name: condition.keyParam, type: 'string' });
    propsKey += `\${${condition.keyParam}}`;
  }
  const value = conditionValue(condition, propsKey);
  return {
    name: condition.methodName,
    scope: Scope.Public,
    parameters: [...parameters, ...value.parameters],
    statements: value.statements.join('\n'),
    docs: [{ description: desc + value.docs }],
  };
}

/**
 * The constructor, which takes the sid, or the props in the CDK variant
 */
function constructorStructure(description: string, cdk: boolean | undefined) {
  return cdk
    ? {
        parameters: [
          {
            name: 'props',
            type: 'iam.PolicyStatementProps',
            hasQuestionToken: true,
          },
        ],
        statements: 'super(props);',
        docs: [{ description: description.split('\n@param')[0] }],
      }
    : {
        parameters: [{ name: 'sid', type: 'string', hasQuestionToken: true }],
        statements: 'super(sid);',
        docs: [{ description }],
      };
}

/**
 * The access levels of the actions, with single quotes and without quotes around single word
 * keys
 */
function accessLevelList(model: ServiceModel): string {
  return JSON.stringify(model.accessLevelList, null, 2)
    .split('"')
    .join("'")
    .replace(/^ {2}'([^' ]+)'/gm, '$1');
}

function addImports(
  sourceFile: SourceFile,
  model: ServiceModel,
  cdk: boolean | undefined,
) {
  const sharedClasses = ['PolicyStatement'];
  // boolean conditions don't take operators
  if (model.conditions.some((condition) => condition.valueKind != 'boolean')) {
    sharedClasses.push('Operator');
  }
  sourceFile.addImportDeclaration({
    namedImports: sharedClasses,
    moduleSpecifier: '../../shared',
  });
  if (cdk) {
    sourceFile.addImportDeclaration({
      namedImports: model.resources.some((resource) => resource.cdkRef)
        ? ['aws_iam as iam', 'interfaces']
        : ['aws_iam as iam'],
      moduleSpecifier: 'aws-cdk-lib',
    });
  }
}

/**
 * Renders the TypeScript class of a service into `lib/generated/policy-statements/`
 */
export function emitTypeScript(
  project: Project,
  model: ServiceModel,
  options: EmitTypeScriptOptions = {},
): SourceFile {
  const sourceFile = project.createSourceFile(
    `./${outDir}/${model.filename}.ts`,
    '',
    { overwrite: true },
  );

  const description = `\nStatement provider for service [${model.name}](${model.url}).\n\n@param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement`;

  sourceFile.addImportDeclaration({
    namedImports: ['AccessLevelList'],
    moduleSpecifier: '../../shared/access-level',
  });

  // Members are added in bulk. Adding them one by one makes ts-morph re-parse the file for every
  // member, which takes minutes for all services.
  const classDeclaration = sourceFile.addClass({
    name: model.className,
    extends: 'PolicyStatement',
    isExported: true,
    docs: [{ description: description }],
    properties: [
      {
        name: 'servicePrefix',
        scope: Scope.Public,
        initializer: `'${model.servicePrefix}'`,
      },
    ],
    ctors: [constructorStructure(description, options.cdk)],
    methods: model.actions.map(actionMethod),
  });

  classDeclaration.addProperty({
    name: 'accessLevelList',
    scope: Scope.Protected,
    type: 'AccessLevelList',
    initializer: accessLevelList(model),
  });

  classDeclaration.addMethods([
    // the CDK variant takes a construct in place of the required placeholder
    ...model.resources.map((resource) =>
      resourceMethod(resource, options.cdk ? resource.cdkRef : undefined),
    ),
    ...model.conditions.map(conditionMethod),
  ]);

  addImports(sourceFile, model, options.cdk);
  formatCode(sourceFile);
  return sourceFile;
}

/**
 * Reads all service models from `lib/generated/model/` and renders the TypeScript classes plus
 * the index, which exports all of them
 */
export async function emitTypeScriptFromModels(
  options: EmitTypeScriptOptions = {},
): Promise<void> {
  // sort by name without extension: `account` comes before `account-access`
  const names = fs
    .readdirSync(modelDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.slice(0, -'.json'.length))
    .sort();

  removeStaleFiles(names);

  const models = names.map(
    (name) =>
      JSON.parse(
        fs.readFileSync(`${modelDir}/${name}.json`, 'utf8'),
      ) as ServiceModel,
  );

  // a fresh project per file: formatting gets slower with every file a project holds
  for (const model of models) {
    await emitTypeScript(newProject(), model, options).save();
  }

  const project = newProject();
  const index = project.createSourceFile('./lib/generated/index.ts', '', {
    overwrite: true,
  });
  for (const model of models) {
    index.addExportDeclaration({
      namedExports: [model.className],
      moduleSpecifier: `./policy-statements/${model.filename}`,
    });
  }
  formatCode(index);

  await project.save();
}

/**
 * Removes the files of services that no longer exist. Files of existing services are
 * overwritten, but not deleted, so incremental builds keep their compiled JavaScript.
 */
function removeStaleFiles(names: string[]) {
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of fs.readdirSync(outDir)) {
    const name = file.replace(/(\.d)?\.(ts|js)$/, '');
    if (name !== file && !names.includes(name)) {
      fs.unlinkSync(`${outDir}/${file}`);
    }
  }
}

function newProject(): Project {
  const project = new Project();
  project.manipulationSettings.set({
    quoteKind: QuoteKind.Single,
  });
  return project;
}
