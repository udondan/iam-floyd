import { ActionModel, ConditionModel, ResourceModel } from '../model';
import {
  actionDocs,
  arnParts,
  conditionDocs,
  placeholderDefaultDocs,
  resourceDocs,
} from './shared';

/**
 * The methods of the service classes of Java and C#, which have overloads in place of optional
 * parameters and union types
 */

export interface Parameter {
  type: string;
  name: string;
}

export type MethodWriter = (
  name: string,
  parameters: Parameter[],
  docs: string[],
  paramDocs: Map<string, string>,
  body: string[],
) => void;

/**
 * The type of a parameter of a condition value, and the expression that passes it on
 */
interface ValueType {
  type: string;
  value: string;
}

/**
 * The syntax and the names of a language
 */
export interface OverloadSyntax {
  methodName(name: string): string;
  localName(name: string): string;
  string(text: string): string;
  docText(text: string): string;
  /** The value of the parameter, or else the default */
  orDefault(name: string, value: string): string;
  stringType: string;
  booleanType: string;
  /** null as a string argument */
  nullString: string;
  /** The cast of an argument to an object, e.g. `(Object) ` */
  cast: string;
  /** The methods of the statement */
  to: string;
  on: string;
  doIf: string;
  /** The defaults of the placeholders of an ARN */
  defaults: Record<'partition' | 'region' | 'account', string>;
  operatorName: string;
  operatorTypes: string[];
  /** The types of a single condition value, by the type of the model */
  valueTypes: Record<string, ValueType | undefined>;
  /** The type of a list of dates */
  dateList: ValueType;
  /** The type of a list of a single type */
  list(single: ValueType): ValueType;
}

/**
 * The expression of an ARN, where the placeholders are the given expressions
 */
function arnExpression(
  syntax: OverloadSyntax,
  arn: string,
  expressions: Map<string, string>,
): string {
  const parts: string[] = [];
  for (const { literal, expression } of arnParts(arn, expressions)) {
    if (literal.length) {
      parts.push(syntax.string(literal));
    }
    if (expression !== undefined) {
      parts.push(expression);
    }
  }
  // the first part must be a string, so + concatenates
  if (!parts.length || !parts[0].startsWith('"')) {
    parts.unshift('""');
  }
  return parts.join(' + ');
}

/**
 * The reference of a method in the docs, e.g. `.ifAwsRequestTag()`
 */
function docReference(syntax: OverloadSyntax) {
  return (methodName: string) => `\`.${syntax.methodName(methodName)}()\``;
}

export function actionMethod(
  syntax: OverloadSyntax,
  action: ActionModel,
  method: MethodWriter,
) {
  method(
    action.methodName,
    [],
    actionDocs(action, docReference(syntax)),
    new Map(),
    [`return ${syntax.to}(${syntax.string(action.name)});`],
  );
}

/**
 * One method per number of optional parameters: partition, region and account
 */
export function resourceMethods(
  syntax: OverloadSyntax,
  resource: ResourceModel,
  method: MethodWriter,
) {
  const required: Parameter[] = [];
  const optional: Parameter[] = [];
  const paramDocs = new Map<string, string>();
  const expressions = new Map<string, string>();
  for (const { placeholder, name, kind } of resource.placeholders) {
    const localName = syntax.localName(name);
    const parameter = { type: syntax.stringType, name: localName };
    if (kind == 'required') {
      required.push(parameter);
      expressions.set(placeholder, localName);
      paramDocs.set(localName, syntax.docText(`Identifier for the ${name}.`));
    } else {
      optional.push(parameter);
      expressions.set(
        placeholder,
        syntax.orDefault(localName, syntax.defaults[kind]),
      );
      paramDocs.set(localName, syntax.docText(placeholderDefaultDocs[kind]));
    }
  }

  const docs = resourceDocs(resource, docReference(syntax));
  const all = [...required, ...optional];
  for (let count = required.length; count < all.length; count++) {
    const args = all.map((p, index) =>
      index < count ? p.name : syntax.nullString,
    );
    method(resource.methodName, all.slice(0, count), docs, paramDocs, [
      `return ${syntax.methodName(resource.methodName)}(${args.join(', ')});`,
    ]);
  }
  method(resource.methodName, all, docs, paramDocs, [
    `return ${syntax.on}(${arnExpression(syntax, resource.arn, expressions)});`,
  ]);
}

/**
 * The types of the value of a condition: the single values and a list
 */
function conditionValueTypes(
  syntax: OverloadSyntax,
  condition: ConditionModel,
): ValueType[] {
  const valueTypes = condition.valueTypes!.map((type) => {
    const valueType = syntax.valueTypes[type];
    if (!valueType) {
      throw new Error(`Unexpected condition value type: ${type}`);
    }
    return valueType;
  });
  if (condition.valueTypes!.includes('Date')) {
    return [...valueTypes, syntax.dateList];
  }
  if (valueTypes.length > 1) {
    throw new Error(`Unexpected condition value types of ${condition.key}`);
  }
  return [...valueTypes, syntax.list(valueTypes[0])];
}

/**
 * The overloads of a boolean condition: with and without value
 */
function booleanConditionMethods(
  syntax: OverloadSyntax,
  key: string,
  overload: (parameters: Parameter[], body: string) => void,
  paramDocs: Map<string, string>,
) {
  const { cast } = syntax;
  const bool = `${cast}${syntax.string('Bool')}`;
  paramDocs.set(
    'value',
    syntax.docText('`true` or `false`. **Default:** `true`'),
  );
  overload([], `return ${syntax.doIf}(${key}, ${cast}true, ${bool});`);
  overload(
    [{ type: syntax.booleanType, name: 'value' }],
    `return ${syntax.doIf}(${key}, ${cast}${syntax.orDefault('value', 'true')}, ${bool});`,
  );
}

/**
 * The overloads of a condition: per type of the value, with and without operator
 */
export function conditionMethods(
  syntax: OverloadSyntax,
  condition: ConditionModel,
  method: MethodWriter,
) {
  const docs = conditionDocs(condition, docReference(syntax));
  const leading: Parameter[] = [];
  const paramDocs = new Map<string, string>();
  let key = syntax.string(condition.keyLiteral);
  if (condition.keyParam !== undefined) {
    const keyParam = syntax.localName(condition.keyParam);
    leading.push({ type: syntax.stringType, name: keyParam });
    paramDocs.set(keyParam, 'The tag key to check');
    key += ` + ${keyParam}`;
  }
  const overload = (parameters: Parameter[], body: string) =>
    method(condition.methodName, [...leading, ...parameters], docs, paramDocs, [
      body,
    ]);

  if (condition.valueKind == 'boolean') {
    booleanConditionMethods(syntax, key, overload, paramDocs);
    return;
  }

  const { cast, operatorName: operator } = syntax;
  paramDocs.set('value', 'The value(s) to check');
  paramDocs.set(
    operator,
    syntax.docText(
      `Works with [${condition.valueKind} operators](${condition.operatorUrl}). **Default:** \`${condition.defaultOperator}\``,
    ),
  );
  const defaultOperator = syntax.string(condition.defaultOperator);
  for (const { type, value } of conditionValueTypes(syntax, condition)) {
    const parameter = { type, name: 'value' };
    overload(
      [parameter],
      `return ${syntax.doIf}(${key}, ${cast}${value}, ${cast}${defaultOperator});`,
    );
    for (const operatorType of syntax.operatorTypes) {
      overload(
        [parameter, { type: operatorType, name: operator }],
        `return ${syntax.doIf}(${key}, ${cast}${value}, ${operator} != null ? ${cast}${operator} : ${defaultOperator});`,
      );
    }
  }
}
