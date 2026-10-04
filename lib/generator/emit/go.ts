import * as fs from 'fs';

import { ConditionModel, ResourceModel, ServiceModel } from '../model';
import { goDoc, goLocalName, goMethodName, goString } from '../transpile/go';

const modelDir = 'lib/generated/model';
const outDir = 'go/iamfloyd/statement';

/**
 * The path of the Go module of iam-floyd
 */
export const goModulePath = 'udondan.github.io/iam-floyd/go/iamfloyd';

const header = (source: string) =>
  `// Code generated from ${source} by bin/transpile.ts. DO NOT EDIT.`;

/**
 * Go name of a method reference in the docs, e.g. `.IfAwsRequestTag()`
 */
function docReference(methodName: string): string {
  return `.${goMethodName(methodName)}()`;
}

/**
 * The Go expression of an ARN, where the placeholders are the given expressions
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
      parts.push(goString(literal));
    }
    parts.push(expression);
    last = match.index + match[0].length;
  }
  if (last < arn.length || parts.length == 0) {
    parts.push(goString(arn.slice(last)));
  }
  return parts.join(' + ');
}

interface Parameter {
  type: string;
  name: string;
  doc: string;
}

class Writer {
  private readonly lines: string[] = [];
  private indentation = '';

  public line(text = '') {
    this.lines.push(text.length ? this.indentation + text : '');
  }

  public block(header: string, fn: () => void) {
    this.line(`${header} {`);
    const previous = this.indentation;
    this.indentation += '\t';
    fn();
    this.indentation = previous;
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
  body: string[],
) => void;

/**
 * Renders the Go struct of a service, in the package `statement`
 */
export function emitGo(model: ServiceModel): string {
  const out = new Writer();
  const names = new Set<string>();
  const className = model.className;
  const method: MethodWriter = (name, parameters, docs, body) => {
    const goName = goMethodName(name);
    if (names.has(goName)) {
      throw new Error(`Duplicate method ${goName} in ${className}`);
    }
    names.add(goName);
    const paramNames = parameters.map((p) => p.name);
    if (new Set(paramNames).size != paramNames.length) {
      throw new Error(`Duplicate parameters of ${goName} in ${className}`);
    }
    const lines = [...docs];
    const documented = parameters.filter((p) => p.doc.length);
    if (documented.length) {
      lines.push('', 'Parameters:', '');
      lines.push(...documented.map((p) => `- ${p.name}: ${p.doc}`));
    }
    out.line();
    goDoc(lines).forEach((line) => out.line(line));
    out.block(
      `func (this *${className}) ${goName}(${parameters.map((p) => `${p.name} ${p.type}`).join(', ')}) *${className}`,
      () => body.forEach((line) => out.line(line)),
    );
  };

  out.line(header(`${modelDir}/${model.filename}.json`));
  out.line();
  out.line('package statement');
  out.line();
  out.line('import (');
  out.line('\t"sync"');
  out.line();
  out.line(`\t${goString(goModulePath)}`);
  out.line(`\t${goString(`${goModulePath}/internal/js`)}`);
  out.line(')');
  out.line();
  const classDoc = `Statement provider for service [${model.name}](${model.url}).`;
  goDoc([
    `${className} is the statement provider for service [${model.name}].`,
    '',
    model.url,
  ]).forEach((line) => out.line(line));
  out.block(`type ${className} struct`, () =>
    out.line(`iamfloyd.PolicyStatement[*${className}]`),
  );
  out.line();
  const accessLevels = `accessLevels${className}`;
  out.line(
    `var ${accessLevels} = sync.OnceValue(func() *js.Record[[]string] {`,
  );
  out.line('\tlevels := js.NewRecord[[]string]()');
  for (const [level, actions] of Object.entries(model.accessLevelList)) {
    out.line(`\tlevels.Set(${goString(level)}, []string{`);
    actions.forEach((action) => out.line(`\t\t${goString(action)},`));
    out.line('\t})');
  }
  out.line('\treturn levels');
  out.line('})');
  out.line();
  goDoc([
    `New${className} returns a new ${classDoc.charAt(0).toLowerCase()}${classDoc.slice(1)}`,
    '',
    'sid: [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement, or nil',
  ]).forEach((line) => out.line(line));
  out.block(`func New${className}(sid *string) *${className}`, () => {
    out.line(`this := &${className}{}`);
    out.line('iamfloyd.InitPolicyStatement(&this.PolicyStatement, this, sid)');
    out.line(`this.ServicePrefix = ${goString(model.servicePrefix)}`);
    out.line(`this.AccessLevelList = ${accessLevels}()`);
    out.line('return this');
  });

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
    method(action.methodName, [], docs, [
      `return this.To(iamfloyd.String(${goString(action.name)}))`,
    ]);
  }

  for (const resource of model.resources) {
    resourceMethod(resource, method);
  }

  for (const condition of model.conditions) {
    conditionMethod(condition, method);
  }
  return out.toString();
}

/**
 * The method of a resource type, with the optional parameters partition, region and account
 */
function resourceMethod(resource: ResourceModel, method: MethodWriter) {
  const defaults = {
    partition: 'this.DefaultPartition',
    region: 'this.DefaultRegion',
    account: 'this.DefaultAccount',
  };
  const required: Parameter[] = [];
  const optional: Parameter[] = [];
  const expressions = new Map<string, string>();
  for (const { placeholder, name, kind } of resource.placeholders) {
    const goName = goLocalName(name);
    if (kind == 'required') {
      required.push({
        type: '*string',
        name: goName,
        doc: `Identifier for the ${name}.`,
      });
      expressions.set(placeholder, `*${goName}`);
      continue;
    }
    optional.push({
      type: '*string',
      name: goName,
      doc: {
        partition:
          'Partition of the AWS account [aws, aws-cn, aws-us-gov]; nil for the default `aws`.',
        region: 'Region of the resource; nil for the default `*`.',
        account: 'Account of the resource; nil for the default `*`.',
      }[kind],
    });
    expressions.set(placeholder, `js.Or(${goName}, ${defaults[kind]})`);
  }
  // the required parameters first, like in TypeScript
  const parameters = [...required, ...optional];

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
  method(resource.methodName, parameters, docs, [
    `return this.On(js.Ptr(${arnExpression(resource.arn, expressions)}))`,
  ]);
}

/**
 * The method of a condition: the value is a string, number or date, or a list of them
 */
function conditionMethod(condition: ConditionModel, method: MethodWriter) {
  const docs: string[] = [];
  const add = (...lines: string[]) => {
    if (docs.length) {
      docs.push('');
    }
    docs.push(...lines);
  };
  add(
    condition.description.length
      ? condition.description
      : `Filters access by ${condition.key}`,
  );
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
  let key = goString(condition.keyLiteral);
  if (condition.keyParam !== undefined) {
    const keyParam = goLocalName(condition.keyParam);
    leading.push({
      type: '*string',
      name: keyParam,
      doc: 'The tag key to check',
    });
    key += ` + *${keyParam}`;
  }

  if (condition.valueKind == 'boolean') {
    method(
      condition.methodName,
      [
        ...leading,
        {
          type: '*bool',
          name: 'value',
          doc: '`true` or `false`; nil for the default `true`',
        },
      ],
      docs,
      [`return this.If(js.Ptr(${key}), js.Or(value, true), "Bool")`],
    );
    return;
  }

  const valueTypes = condition.valueTypes!;
  const value = valueTypes.includes('Date') ? 'js.Dates(value)' : 'value';
  const types = valueTypes
    .map(
      (type) =>
        ({ string: 'string', number: 'float64', Date: 'time.Time' })[type],
    )
    .map((type) => `*${type}, *[]*${type}`)
    .join(', ');
  method(
    condition.methodName,
    [
      ...leading,
      {
        type: 'interface{}',
        name: 'value',
        doc: `The value(s) to check: ${types}`,
      },
      {
        type: 'interface{}',
        name: 'operator',
        doc: `Works with [${condition.valueKind} operators](${condition.operatorUrl}): a string or *iamfloyd.Operator; nil for the default \`${condition.defaultOperator}\``,
      },
    ],
    docs,
    [
      `return this.If(js.Ptr(${key}), ${value}, js.Coalesce(operator, ${goString(condition.defaultOperator)}))`,
    ],
  );
}

/**
 * Renders the structs of all services from `lib/generated/model/` into the package `statement`
 */
export function emitGoFromModels(): void {
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
      `${outDir}/${model.className.toLowerCase()}.go`,
      emitGo(model),
    );
  }
}
