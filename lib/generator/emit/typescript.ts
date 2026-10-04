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
import { ServiceModel } from '../model';

export interface EmitTypeScriptOptions {
  /**
   * Emit the variant for `cdk-iam-floyd`, where statements extend `aws_iam.PolicyStatement`
   */
  readonly cdk?: boolean;
}

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
    ctors: [
      {
        parameters: [
          options.cdk
            ? {
                name: 'props',
                type: 'iam.PolicyStatementProps',
                hasQuestionToken: true,
              }
            : {
                name: 'sid',
                type: 'string',
                hasQuestionToken: true,
              },
        ],
        statements: options.cdk ? 'super(props);' : 'super(sid);',
        // the CDK variant takes props instead of the sid
        docs: [
          {
            description: options.cdk
              ? description.split('\n@param')[0]
              : description,
          },
        ],
      },
    ],
    methods: model.actions.map((action) => {
      let desc = `\n${action.description}\n\nAccess Level: ${action.accessLevel}`;

      if (action.conditionMethods) {
        desc += '\n\nPossible conditions:';
        action.conditionMethods.forEach((condition) => {
          desc += `\n- .${condition}()`;
        });
      }
      if (action.dependentActions) {
        desc += '\n\nDependent actions:';
        action.dependentActions.forEach((dependentAction) => {
          desc += `\n- ${dependentAction}`;
        });
      }
      if (action.url.length && action.url != 'https://docs.aws.amazon.com/') {
        desc += `\n\n${action.url}`;
      }
      return {
        name: action.methodName,
        scope: Scope.Public,
        statements: `return this.to('${action.name}');`,
        docs: [{ description: desc }],
      };
    }),
  });

  classDeclaration.addProperty({
    name: 'accessLevelList',
    scope: Scope.Protected,
    type: 'AccessLevelList',
    initializer: JSON.stringify(model.accessLevelList, null, 2)
      .split('"') // ensure we use single quotes
      .join("'")
      .replace(/^ {2}'([^' ]+)'/gm, '$1'), // remove quotes from single word keys
  });

  const methods: OptionalKind<MethodDeclarationStructure>[] = [];

  for (const resource of model.resources) {
    const requiredParameters: OptionalKind<ParameterDeclarationStructure>[] =
      [];
    const optionalParameters: OptionalKind<ParameterDeclarationStructure>[] =
      [];
    resource.placeholders.forEach((placeholder) => {
      if (placeholder.kind != 'required') {
        optionalParameters.push({
          name: placeholder.name,
          type: 'string',
          hasQuestionToken: true,
        });
      } else {
        requiredParameters.push({
          name: placeholder.name,
          type: 'string',
          hasQuestionToken: false,
        });
      }
    });

    let arn = resource.arn;
    let paramDocs = '';
    resource.placeholders.forEach(({ placeholder, name, kind }) => {
      let orDefault = '';
      if (kind == 'partition') {
        orDefault = ` ?? this.defaultPartition`;
        paramDocs += `\n@param ${name} - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to \`aws\`, unless using the CDK, where the default is the current Stack's partition.`;
      } else if (kind == 'region') {
        orDefault = ` ?? this.defaultRegion`;
        paramDocs += `\n@param ${name} - Region of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's region.`;
      } else if (kind == 'account') {
        orDefault = ` ?? this.defaultAccount`;
        paramDocs += `\n@param ${name} - Account of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's account.`;
      } else {
        paramDocs += `\n@param ${name} - Identifier for the ${name}.`;
      }
      arn = arn.replace(`\${${placeholder}}`, `\${${name}${orDefault}}`);
    });

    let desc = `\nAdds a resource of type ${resource.name} to the statement`;
    if (resource.url.length && resource.url != 'https://docs.aws.amazon.com/') {
      desc += `\n\n${resource.url}`;
    }
    desc += `\n${paramDocs}`;
    if (resource.conditionMethods.length) {
      desc += '\n\nPossible conditions:';
      resource.conditionMethods.forEach((condition) => {
        desc += `\n- .${condition}()`;
      });
    }

    methods.push({
      name: resource.methodName,
      scope: Scope.Public,
      parameters: [...requiredParameters, ...optionalParameters],
      statements: `return this.on(\`${arn}\`);`,
      docs: [{ description: desc }],
    });
  }

  let hasConditions = false;

  for (const condition of model.conditions) {
    // boolean conditions don't take operators
    if (condition.valueKind != 'boolean') {
      hasConditions = true;
    }

    let desc = '';

    if (condition.description.length) {
      desc += `\n${condition.description}\n`;
    }

    if (condition.url.length) {
      desc += `\n${condition.url}\n`;
    }
    if (condition.relatedActionMethods.length) {
      desc += '\nApplies to actions:\n';
      condition.relatedActionMethods.forEach((relatedAction) => {
        desc += `- .${relatedAction}()\n`;
      });
    }

    if (condition.relatedResourceTypes.length) {
      desc += '\nApplies to resource types:\n';
      condition.relatedResourceTypes.forEach((resourceType) => {
        desc += `- ${resourceType}\n`;
      });
    }

    const methodBody: string[] = [];
    const parameters: OptionalKind<ParameterDeclarationStructure>[] = [];

    let propsKey = escapeTemplateLiteral(condition.keyLiteral);

    if (typeof condition.keyParam !== 'undefined') {
      desc += `\n@param ${condition.keyParam} The tag key to check`;
      parameters.push({
        name: condition.keyParam,
        type: 'string',
      });
      propsKey += `\${${condition.keyParam}}`;
    }

    if (condition.valueKind != 'boolean') {
      const types = [...condition.valueTypes!];
      if (types.length > 1) {
        types.push(`(${types.join('|')})[]`);
      } else {
        types.push(`${types.join(',')}[]`);
      }

      desc += `\n@param value The value(s) to check`;
      parameters.push({
        name: 'value',
        type: types.join(' | '),
      });

      desc += `\n@param operator Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``;
      parameters.push({
        name: 'operator',
        type: 'Operator | string',
        hasQuestionToken: true,
      });

      if (condition.valueKind == 'date') {
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
          '}',
        );
      }

      methodBody.push(
        `return this.if(\`${propsKey}\`, value, operator ?? '${condition.defaultOperator}')`,
      );
    } else {
      desc += '\n@param value `true` or `false`. **Default:** `true`';

      parameters.push({
        name: 'value',
        type: 'boolean',
        hasQuestionToken: true,
      });

      methodBody.push(
        `return this.if(\`${propsKey}\`, (typeof value !== 'undefined' ? value : true), 'Bool');`,
      );
    }

    methods.push({
      name: condition.methodName,
      scope: Scope.Public,
      parameters: parameters,
      statements: methodBody.join('\n'),
      docs: [{ description: desc }],
    });
  }

  classDeclaration.addMethods(methods);

  const sharedClasses = ['PolicyStatement'];
  if (hasConditions) {
    sharedClasses.push('Operator');
  }
  sourceFile.addImportDeclaration({
    namedImports: sharedClasses,
    moduleSpecifier: '../../shared',
  });

  if (options.cdk) {
    sourceFile.addImportDeclaration({
      namedImports: ['aws_iam as iam'],
      moduleSpecifier: 'aws-cdk-lib',
    });
  }

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

  // Remove files of services that no longer exist. Files of existing services are overwritten,
  // but not deleted, so incremental builds keep their compiled JavaScript.
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of fs.readdirSync(outDir)) {
    const name = file.replace(/(\.d)?\.(ts|js)$/, '');
    if (name !== file && !names.includes(name)) {
      fs.unlinkSync(`${outDir}/${file}`);
    }
  }

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

function newProject(): Project {
  const project = new Project();
  project.manipulationSettings.set({
    quoteKind: QuoteKind.Single,
  });
  return project;
}
