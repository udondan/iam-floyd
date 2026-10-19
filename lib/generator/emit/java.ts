import * as fs from 'fs';

import { ConditionModel, ResourceModel, ServiceModel } from '../model';
import {
  javadoc,
  javadocText,
  javaLocalName,
  javaMethodName,
  javaString,
} from '../transpile/java';

const modelDir = 'lib/generated/model';
const pkg = 'com.udondan.iamFloyd.statement';
const outDir = `java/src/main/java/${pkg.replace(/\./g, '/')}`;
const header = (source: string) =>
  `// Generated from ${source} by bin/transpile.ts. Do not edit.`;

/**
 * Java name of a method reference in the docs, e.g. `.ifAwsRequestTag()`
 */
function docReference(methodName: string): string {
  return `\`.${javaMethodName(methodName)}()\``;
}

/**
 * The Java expression of an ARN, where the placeholders are the given expressions
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
      parts.push(javaString(literal));
    }
    parts.push(expression);
    last = match.index + match[0].length;
  }
  if (last < arn.length || parts.length == 0) {
    parts.push(javaString(arn.slice(last)));
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
    this.indentation += '  ';
    fn();
    this.indentation = previous;
  }

  public toString(): string {
    return `${this.lines.join('\n')}\n`;
  }
}

/**
 * Renders the Java class of a service
 */
export function emitJava(model: ServiceModel): string {
  const out = new Writer();
  const signatures = new Set<string>();
  const className = model.className;
  const method = (
    name: string,
    parameters: Parameter[],
    docs: string[],
    paramDocs: Map<string, string>,
    body: string[],
  ) => {
    const javaName = javaMethodName(name);
    const signature = `${javaName}(${parameters.map((p) => p.type.replace(/<.*>/, '')).join(',')})`;
    if (signatures.has(signature)) {
      throw new Error(`Duplicate method ${signature} in ${className}`);
    }
    signatures.add(signature);
    const names = parameters.map((p) => p.name);
    if (new Set(names).size != names.length) {
      throw new Error(`Duplicate parameters of ${javaName} in ${className}`);
    }
    out.line();
    javadoc(
      docs,
      parameters.map((p) => `@param ${p.name} ${paramDocs.get(p.name)}`),
    ).forEach((line) => out.line(line));
    out.line(
      `public ${className} ${javaName}(${parameters.map((p) => `${p.type} ${p.name}`).join(', ')}) {`,
    );
    out.indented(() => body.forEach((line) => out.line(line)));
    out.line('}');
  };

  const hasDateLists = model.conditions.some((condition) =>
    (condition.valueTypes ?? []).includes('Date'),
  );

  out.line(header(`${modelDir}/${model.filename}.json`));
  out.line(`package ${pkg};`);
  out.line();
  const imports = [
    'com.udondan.iamFloyd.PolicyStatement',
    'java.util.Arrays',
    'java.util.LinkedHashMap',
    'java.util.List',
    'java.util.Map',
  ];
  if (hasDateLists) {
    imports.push('java.time.Instant', 'java.util.ArrayList');
  }
  if (model.conditions.some((condition) => condition.valueKind != 'boolean')) {
    imports.push('com.udondan.iamFloyd.Operator');
  }
  for (const name of imports.sort()) {
    out.line(`import ${name};`);
  }
  out.line();
  javadoc([
    `Statement provider for service [${model.name}](${model.url}).`,
  ]).forEach((line) => out.line(line));
  out.line(`public class ${className} extends PolicyStatement<${className}> {`);
  out.indented(() => {
    out.line(
      'private static final Map<String, List<String>> ACCESS_LEVEL_LIST = new LinkedHashMap<>();',
    );
    out.line();
    out.line('static {');
    out.indented(() => {
      for (const [level, actions] of Object.entries(model.accessLevelList)) {
        out.line(`ACCESS_LEVEL_LIST.put(${javaString(level)}, Arrays.asList(`);
        out.indented(() => {
          actions.forEach((action, index) =>
            out.line(
              `${javaString(action)}${index == actions.length - 1 ? '));' : ','}`,
            ),
          );
        });
      }
    });
    out.line('}');
    out.line();
    javadoc([
      `Statement provider for service [${model.name}](${model.url}).`,
    ]).forEach((line) => out.line(line));
    out.line(`public ${className}() {`);
    out.indented(() => out.line('this((String) null);'));
    out.line('}');
    out.line();
    javadoc(
      [`Statement provider for service [${model.name}](${model.url}).`],
      [
        `@param sid ${javadocText('[SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement')}`,
      ],
    ).forEach((line) => out.line(line));
    out.line(`public ${className}(String sid) {`);
    out.indented(() => {
      out.line('super(sid);');
      out.line(`this.servicePrefix = ${javaString(model.servicePrefix)};`);
      out.line('this.accessLevelList = ACCESS_LEVEL_LIST;');
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
        `return to(${javaString(action.name)});`,
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
      out.line('private static List<Object> dateStrings(List<?> values) {');
      out.indented(() => {
        out.line('List<Object> result = new ArrayList<>();');
        out.line('for (Object value : values) {');
        out.line('  result.add(dateToString(value));');
        out.line('}');
        out.line('return result;');
      });
      out.line('}');
    }
  });
  out.line('}');
  return out.toString();
}

type MethodWriter = (
  name: string,
  parameters: Parameter[],
  docs: string[],
  paramDocs: Map<string, string>,
  body: string[],
) => void;

/**
 * One method per number of optional parameters: partition, region and account
 */
function resourceMethods(resource: ResourceModel, method: MethodWriter) {
  const defaults = {
    partition: 'this.defaultPartition',
    region: 'this.defaultRegion',
    account: 'this.defaultAccount',
  };
  const required: Parameter[] = [];
  const optional: Parameter[] = [];
  const paramDocs = new Map<string, string>();
  const expressions = new Map<string, string>();
  for (const { placeholder, name, kind } of resource.placeholders) {
    const javaName = javaLocalName(name);
    if (kind == 'required') {
      required.push({ type: 'String', name: javaName });
      expressions.set(placeholder, javaName);
      paramDocs.set(javaName, javadocText(`Identifier for the ${name}.`));
      continue;
    }
    optional.push({ type: 'String', name: javaName });
    expressions.set(
      placeholder,
      `(${javaName} != null ? ${javaName} : ${defaults[kind]})`,
    );
    paramDocs.set(
      javaName,
      javadocText(
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
    const args = all.map((p, index) => (index < count ? p.name : 'null'));
    method(resource.methodName, all.slice(0, count), docs, paramDocs, [
      `return ${javaMethodName(resource.methodName)}(${args.join(', ')});`,
    ]);
  }
  method(resource.methodName, all, docs, paramDocs, [
    `return on(${arnExpression(resource.arn, expressions)});`,
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
  let key = javaString(condition.keyLiteral);
  if (condition.keyParam !== undefined) {
    const keyParam = javaLocalName(condition.keyParam);
    leading.push({ type: 'String', name: keyParam });
    paramDocs.set(keyParam, 'The tag key to check');
    key += ` + ${keyParam}`;
  }

  if (condition.valueKind == 'boolean') {
    paramDocs.set(
      'value',
      javadocText('`true` or `false`. **Default:** `true`'),
    );
    method(condition.methodName, leading, docs, paramDocs, [
      `return doIf(${key}, (Object) true, (Object) "Bool");`,
    ]);
    method(
      condition.methodName,
      [...leading, { type: 'Boolean', name: 'value' }],
      docs,
      paramDocs,
      [
        `return doIf(${key}, (Object) (value != null ? value : true), (Object) "Bool");`,
      ],
    );
    return;
  }

  paramDocs.set('value', 'The value(s) to check');
  paramDocs.set(
    'operator',
    javadocText(
      `Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``,
    ),
  );
  const valueTypes: { type: string; value: string }[] = [];
  for (const type of condition.valueTypes!) {
    switch (type) {
      case 'string':
        valueTypes.push({ type: 'String', value: 'value' });
        break;
      case 'number':
        valueTypes.push({ type: 'Number', value: 'value' });
        break;
      case 'Date':
        valueTypes.push({ type: 'Instant', value: 'dateToString(value)' });
        break;
      default:
        throw new Error(`Unexpected condition value type: ${type}`);
    }
  }
  if (condition.valueTypes!.includes('Date')) {
    valueTypes.push({ type: 'List<?>', value: 'dateStrings(value)' });
  } else if (condition.valueTypes!.length > 1) {
    throw new Error(`Unexpected condition value types of ${condition.key}`);
  } else {
    valueTypes.push({
      type: `List<${valueTypes[0].type == 'Number' ? '? extends Number' : valueTypes[0].type}>`,
      value: 'value',
    });
  }
  const defaultOperator = javaString(condition.defaultOperator);
  for (const { type, value } of valueTypes) {
    const parameters = [...leading, { type, name: 'value' }];
    method(condition.methodName, parameters, docs, paramDocs, [
      `return doIf(${key}, (Object) ${value}, (Object) ${defaultOperator});`,
    ]);
    for (const operatorType of ['Operator', 'String']) {
      method(
        condition.methodName,
        [...parameters, { type: operatorType, name: 'operator' }],
        docs,
        paramDocs,
        [
          `return doIf(${key}, (Object) ${value}, operator != null ? (Object) operator : ${defaultOperator});`,
        ],
      );
    }
  }
}

/**
 * Renders the classes of all services from `lib/generated/model/` into the package
 * `com.udondan.iamFloyd.statement`
 */
export function emitJavaFromModels(): void {
  const files = fs
    .readdirSync(modelDir)
    .filter((file) => file.endsWith('.json'))
    .sort();
  fs.mkdirSync(outDir, { recursive: true });
  for (const file of files) {
    const model = JSON.parse(
      fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
    ) as ServiceModel;
    fs.writeFileSync(`${outDir}/${model.className}.java`, emitJava(model));
  }
}
