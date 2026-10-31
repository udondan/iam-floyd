import * as fs from 'fs';

import { ConditionModel, ResourceModel, ServiceModel } from '../model';
import {
  csharpLocalName,
  csharpMethodName,
  csharpString,
  xmlDoc,
  xmlDocText,
  xmlParam,
} from '../transpile/csharp';

const modelDir = 'lib/generated/model';
const namespace = 'IAM.Floyd.Statement';
const outDir = 'dotnet/src/IAM.Floyd/Statement';
const header = (source: string) =>
  `// Generated from ${source} by bin/transpile.ts. Do not edit.`;

/**
 * C# name of a method reference in the docs, e.g. `.IfAwsRequestTag()`
 */
function docReference(methodName: string): string {
  return `\`.${csharpMethodName(methodName)}()\``;
}

/**
 * The C# expression of an ARN, where the placeholders are the given expressions
 */
function arnExpression(arn: string, expressions: Map<string, string>): string {
  const parts: string[] = [];
  let last = 0;
  for (const match of arn.matchAll(/\$\{([^}]+)\}/g)) {
    const expression = expressions.get(match[1]);
    if (expression === undefined) {
      continue;
    }
    const literal = arn.slice(last, match.index);
    if (literal.length) {
      parts.push(csharpString(literal));
    }
    parts.push(expression);
    last = match.index + match[0].length;
  }
  if (last < arn.length || parts.length == 0) {
    parts.push(csharpString(arn.slice(last)));
  }
  // the first part must be a string, so + concatenates
  if (!parts[0].startsWith('"')) {
    parts.unshift('""');
  }
  return parts.join(' + ');
}

interface Parameter {
  type: string;
  name: string;
}

class Writer {
  private readonly lines: string[] = [];
  private indentation = '';

  public line(text = '') {
    this.lines.push(text.length ? this.indentation + text : '');
  }

  public indented(fn: () => void) {
    const previous = this.indentation;
    this.indentation += '    ';
    fn();
    this.indentation = previous;
  }

  public block(header: string, fn: () => void) {
    this.line(header);
    this.line('{');
    this.indented(fn);
    this.line('}');
  }

  public toString(): string {
    return `${this.lines.join('\n')}\n`;
  }
}

type MethodWriter = (
  name: string,
  parameters: Parameter[],
  docs: string[],
  paramDocs: Map<string, string>,
  body: string[],
) => void;

/**
 * Renders the C# class of a service. `inherited` are the names of the public methods of the base
 * classes, which methods of the service hide with `new`.
 */
export function emitCSharp(
  model: ServiceModel,
  inherited = new Set<string>(),
): string {
  const out = new Writer();
  const signatures = new Set<string>();
  const className = model.className;
  const method: MethodWriter = (name, parameters, docs, paramDocs, body) => {
    const csharpName = csharpMethodName(name);
    const signature = `${csharpName}(${parameters.map((p) => p.type.replace(/\?$/, '')).join(',')})`;
    if (signatures.has(signature)) {
      throw new Error(`Duplicate method ${signature} in ${className}`);
    }
    signatures.add(signature);
    const names = parameters.map((p) => p.name);
    if (new Set(names).size != names.length) {
      throw new Error(`Duplicate parameters of ${csharpName} in ${className}`);
    }
    out.line();
    xmlDoc(
      docs,
      parameters.map((p) => xmlParam(p.name, paramDocs.get(p.name) ?? '')),
    ).forEach((line) => out.line(line));
    const modifiers = inherited.has(csharpName) ? 'public new' : 'public';
    out.block(
      `${modifiers} ${className} ${csharpName}(${parameters.map((p) => `${p.type} ${p.name}`).join(', ')})`,
      () => body.forEach((line) => out.line(line)),
    );
  };

  const hasDateLists = model.conditions.some((condition) =>
    (condition.valueTypes ?? []).includes('Date'),
  );
  const usings = ['System.Collections.Generic', 'IAM.Floyd'];
  if (hasDateLists) {
    usings.push('System', 'System.Collections');
  } else if (
    model.conditions.some((condition) => condition.valueKind == 'numeric')
  ) {
    usings.push('System.Collections');
  }

  out.line(header(`${modelDir}/${model.filename}.json`));
  for (const using of usings.sort()) {
    out.line(`using ${using};`);
  }
  out.line();
  out.line(`namespace ${namespace};`);
  out.line();
  const classDocs = [
    `Statement provider for service [${model.name}](${model.url}).`,
  ];
  xmlDoc(classDocs).forEach((line) => out.line(line));
  out.block(`public class ${className} : PolicyStatement<${className}>`, () => {
    out.line(
      'private static readonly Dictionary<string, List<string>> ACCESS_LEVELS = new Dictionary<string, List<string>>',
    );
    out.line('{');
    out.indented(() => {
      for (const [level, actions] of Object.entries(model.accessLevelList)) {
        out.line(`[${csharpString(level)}] = new List<string>`);
        out.line('{');
        out.indented(() =>
          actions.forEach((action) => out.line(`${csharpString(action)},`)),
        );
        out.line('},');
      }
    });
    out.line('};');
    out.line();
    xmlDoc(classDocs).forEach((line) => out.line(line));
    out.line(`public ${className}()`);
    out.indented(() => out.line(': this((string)null)'));
    out.line('{');
    out.line('}');
    out.line();
    xmlDoc(classDocs, [
      xmlParam(
        'sid',
        xmlDocText(
          '[SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement',
        ),
      ),
    ]).forEach((line) => out.line(line));
    out.line(`public ${className}(string sid)`);
    out.indented(() => out.line(': base(sid)'));
    out.line('{');
    out.indented(() => {
      out.line(`ServicePrefix = ${csharpString(model.servicePrefix)};`);
      out.line('AccessLevelList = ACCESS_LEVELS;');
    });
    out.line('}');

    for (const action of model.actions) {
      const docs = [
        action.description,
        '',
        `Access Level: ${action.accessLevel}`,
      ];
      if (action.conditionMethods) {
        docs.push('', 'Possible conditions:', '');
        docs.push(
          ...action.conditionMethods.map((name) => `- ${docReference(name)}`),
        );
      }
      if (action.dependentActions) {
        docs.push('', 'Dependent actions:', '');
        docs.push(...action.dependentActions.map((name) => `- ${name}`));
      }
      if (action.url.length && action.url != 'https://docs.aws.amazon.com/') {
        docs.push('', action.url);
      }
      method(action.methodName, [], docs, new Map(), [
        `return To(${csharpString(action.name)});`,
      ]);
    }

    for (const resource of model.resources) {
      resourceMethods(resource, method);
    }

    for (const condition of model.conditions) {
      conditionMethods(condition, method);
    }

    if (hasDateLists) {
      out.line();
      out.block(
        'private static List<object> DateStrings(IEnumerable values)',
        () => {
          out.line('var result = new List<object>();');
          out.line('foreach (var value in values)');
          out.line('{');
          out.indented(() => out.line('result.Add(DateToString(value));'));
          out.line('}');
          out.line('return result;');
        },
      );
    }
  });
  return out.toString();
}

/**
 * One method per number of optional parameters: partition, region and account
 */
function resourceMethods(resource: ResourceModel, method: MethodWriter) {
  const defaults = {
    partition: 'DefaultPartition',
    region: 'DefaultRegion',
    account: 'DefaultAccount',
  };
  const required: Parameter[] = [];
  const optional: Parameter[] = [];
  const paramDocs = new Map<string, string>();
  const expressions = new Map<string, string>();
  for (const { placeholder, name, kind } of resource.placeholders) {
    const csharpName = csharpLocalName(name);
    if (kind == 'required') {
      required.push({ type: 'string', name: csharpName });
      expressions.set(placeholder, csharpName);
      paramDocs.set(csharpName, xmlDocText(`Identifier for the ${name}.`));
      continue;
    }
    optional.push({ type: 'string', name: csharpName });
    expressions.set(placeholder, `(${csharpName} ?? ${defaults[kind]})`);
    paramDocs.set(
      csharpName,
      xmlDocText(
        {
          partition:
            "Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.",
          region:
            "Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.",
          account:
            "Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.",
        }[kind],
      ),
    );
  }

  const docs = [`Adds a resource of type ${resource.name} to the statement`];
  if (resource.url.length && resource.url != 'https://docs.aws.amazon.com/') {
    docs.push('', resource.url);
  }
  if (resource.conditionMethods.length) {
    docs.push('', 'Possible conditions:', '');
    docs.push(
      ...resource.conditionMethods.map((name) => `- ${docReference(name)}`),
    );
  }
  const all = [...required, ...optional];
  for (let count = required.length; count < all.length; count++) {
    const args = all.map((p, index) =>
      index < count ? p.name : '(string)null',
    );
    method(resource.methodName, all.slice(0, count), docs, paramDocs, [
      `return ${csharpMethodName(resource.methodName)}(${args.join(', ')});`,
    ]);
  }
  method(resource.methodName, all, docs, paramDocs, [
    `return On(${arnExpression(resource.arn, expressions)});`,
  ]);
}

/**
 * The overloads of a condition: per type of the value, with and without operator
 */
function conditionMethods(condition: ConditionModel, method: MethodWriter) {
  const docs: string[] = [];
  const add = (...lines: string[]) => {
    if (docs.length) {
      docs.push('');
    }
    docs.push(...lines);
  };
  if (condition.description.length) {
    add(condition.description);
  }
  if (condition.url.length) {
    add(condition.url);
  }
  if (condition.relatedActionMethods.length) {
    add(
      'Applies to actions:',
      '',
      ...condition.relatedActionMethods.map(
        (name) => `- ${docReference(name)}`,
      ),
    );
  }
  if (condition.relatedResourceTypes.length) {
    add(
      'Applies to resource types:',
      '',
      ...condition.relatedResourceTypes.map((name) => `- ${name}`),
    );
  }

  const leading: Parameter[] = [];
  const paramDocs = new Map<string, string>();
  let key = csharpString(condition.keyLiteral);
  if (condition.keyParam !== undefined) {
    const keyParam = csharpLocalName(condition.keyParam);
    leading.push({ type: 'string', name: keyParam });
    paramDocs.set(keyParam, 'The tag key to check');
    key += ` + ${keyParam}`;
  }

  if (condition.valueKind == 'boolean') {
    paramDocs.set(
      'value',
      xmlDocText('`true` or `false`. **Default:** `true`'),
    );
    method(condition.methodName, leading, docs, paramDocs, [
      `return If(${key}, (object)true, (object)"Bool");`,
    ]);
    method(
      condition.methodName,
      [...leading, { type: 'bool?', name: 'value' }],
      docs,
      paramDocs,
      [`return If(${key}, (object)(value ?? true), (object)"Bool");`],
    );
    return;
  }

  paramDocs.set('value', 'The value(s) to check');
  paramDocs.set(
    '@operator',
    xmlDocText(
      `Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``,
    ),
  );
  const valueTypes: { type: string; value: string }[] = [];
  for (const type of condition.valueTypes!) {
    switch (type) {
      case 'string':
        valueTypes.push({ type: 'string', value: 'value' });
        break;
      case 'number':
        valueTypes.push({ type: 'double', value: 'value' });
        break;
      case 'Date':
        valueTypes.push({ type: 'DateTime', value: 'DateToString(value)' });
        break;
      default:
        throw new Error(`Unexpected condition value type: ${type}`);
    }
  }
  if (condition.valueTypes!.includes('Date')) {
    valueTypes.push({ type: 'IEnumerable', value: 'DateStrings(value)' });
  } else if (condition.valueTypes!.length > 1) {
    throw new Error(`Unexpected condition value types of ${condition.key}`);
  } else {
    valueTypes.push({
      type: `IEnumerable<${valueTypes[0].type}>`,
      value: `new List<${valueTypes[0].type}>(value)`,
    });
  }
  const defaultOperator = csharpString(condition.defaultOperator);
  for (const { type, value } of valueTypes) {
    const parameters = [...leading, { type, name: 'value' }];
    method(condition.methodName, parameters, docs, paramDocs, [
      `return If(${key}, (object)${value}, (object)${defaultOperator});`,
    ]);
    for (const operatorType of ['Operator', 'string']) {
      method(
        condition.methodName,
        [...parameters, { type: operatorType, name: '@operator' }],
        docs,
        paramDocs,
        [
          `return If(${key}, (object)${value}, @operator != null ? (object)@operator : ${defaultOperator});`,
        ],
      );
    }
  }
}

/**
 * Renders the classes of all services from `lib/generated/model/` into the namespace
 * `IAM.Floyd.Statement`. `inherited` are the names of the public methods of the base classes.
 */
export function emitCSharpFromModels(inherited: Set<string>): void {
  const files = fs
    .readdirSync(modelDir)
    .filter((file) => file.endsWith('.json'))
    .sort();
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of files) {
    const model = JSON.parse(
      fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
    ) as ServiceModel;
    fs.writeFileSync(
      `${outDir}/${model.className}.cs`,
      emitCSharp(model, inherited),
    );
  }
}
