import {
  ArrowFunction,
  BinaryExpression,
  ConstructorDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
} from 'ts-morph';

import { arrowFunction, fail, isServiceFile } from './index';

/**
 * The parts the transpilers of Java and C# share: the overloads of functions, methods and
 * constructors, callbacks and the table of binary operators.
 */

export interface Param {
  /** The name in the target language */
  name: string;
  /** The types the parameter accepts */
  options: string[];
  optional: boolean;
  rest: boolean;
}

/**
 * A signature: the types of the leading parameters. The type of a rest parameter ends with `...`.
 */
export type Signature = string[];

/**
 * How a TypeScript function, method or constructor is declared.
 *
 * Public methods and constructors become overloads: one per combination of the types of union
 * parameters and per number of optional parameters. If a parameter has more than one type, the
 * body is in a protected method with the object type for those parameters, which all overloads
 * call; otherwise the body is in the overload with all parameters. Everything else is declared
 * once, with all parameters, and callers pass `null` for missing optional arguments.
 */
export interface Callable {
  name: string;
  params: Param[];
  overloads: Signature[];
  impl: Signature;
  /** Whether the body is in one of the public overloads */
  implIsOverload: boolean;
  /** Whether the body can be called directly by the transpiled code */
  implCallable: boolean;
}

export type CallableDeclaration =
  MethodDeclaration | ConstructorDeclaration | FunctionDeclaration;

/**
 * What the overloads of a language differ in
 */
export interface OverloadRules {
  /** The name of the language, for errors */
  language: string;
  /** The type of the parameters with more than one type in the method with the body */
  object: string;
  /** The type of an optional parameter */
  optional: (type: string) => string;
  /** The part of a type that tells two overloads apart */
  key: (type: string) => string;
  localName: (name: string) => string;
  /** The name of a callable, and whether it is public */
  nameOf: (declaration: CallableDeclaration) => {
    name: string;
    isPublic: boolean;
  };
  /** The types of a parameter */
  options: (param: ParameterDeclaration, isPublic: boolean) => string[];
}

/**
 * The name of a function declaration, which must not be overloaded
 */
export function functionName(declaration: FunctionDeclaration): string {
  const name = declaration.getName();
  if (name === undefined || declaration.getOverloads().length) {
    return fail(declaration, 'Unsupported function');
  }
  return name;
}

/**
 * The type of a parameter with one of its options
 */
export function paramType(
  rules: OverloadRules,
  param: Param,
  option: string,
): string {
  if (param.rest) {
    return `${option}...`;
  }
  return param.optional ? rules.optional(option) : option;
}

function paramOf(
  rules: OverloadRules,
  param: ParameterDeclaration,
  isPublic: boolean,
): Param {
  if (param.hasInitializer()) {
    fail(param, 'Default values are not supported, use optional parameters');
  }
  if (!Node.isIdentifier(param.getNameNode())) {
    fail(param, 'Destructured parameters are not supported');
  }
  return {
    name: rules.localName(param.getName()),
    options: rules.options(param, isPublic),
    optional: param.isOptional() && !param.isRestParameter(),
    rest: param.isRestParameter(),
  };
}

/**
 * The signatures of all combinations of the types of the parameters
 */
function signaturesOf(rules: OverloadRules, params: Param[]): Signature[] {
  return params.reduce<Signature[]>(
    (signatures, param) =>
      signatures.flatMap((signature) =>
        param.options.map((option) => [
          ...signature,
          paramType(rules, param, option),
        ]),
      ),
    [[]],
  );
}

/**
 * The overloads, from the number of required parameters to all
 */
function overloadsOf(rules: OverloadRules, params: Param[]): Signature[] {
  const firstOptional = params.findIndex((param) => param.optional);
  const overloads: Signature[] = [];
  for (
    let arity = firstOptional < 0 ? params.length : firstOptional;
    arity <= params.length;
    arity++
  ) {
    overloads.push(...signaturesOf(rules, params.slice(0, arity)));
  }
  return overloads;
}

function checkOverloads(
  rules: OverloadRules,
  node: Node,
  signatures: Signature[],
) {
  const keys = new Set<string>();
  for (const signature of signatures) {
    const key = signature.map(rules.key).join(',');
    if (keys.has(key)) {
      fail(
        node,
        `Two ${rules.language} overloads have the same parameters (${key})`,
      );
    }
    keys.add(key);
  }
}

function publicCallable(
  rules: OverloadRules,
  declaration: CallableDeclaration,
  name: string,
  params: Param[],
): Callable {
  const overloads = overloadsOf(rules, params);
  const collapsed = params.some((param) => param.options.length > 1);
  const impl = collapsed
    ? params.map((param) =>
        param.options.length > 1
          ? rules.object
          : paramType(rules, param, param.options[0]),
      )
    : overloads[overloads.length - 1];
  checkOverloads(
    rules,
    declaration,
    collapsed ? [...overloads, impl] : overloads,
  );
  return {
    name,
    params,
    overloads,
    impl,
    implIsOverload: !collapsed,
    implCallable: !isServiceFile(declaration.getSourceFile()),
  };
}

export function newCallable(
  rules: OverloadRules,
  declaration: CallableDeclaration,
): Callable {
  const isAsync =
    !Node.isConstructorDeclaration(declaration) && declaration.isAsync();
  if (declaration.getTypeParameters().length || isAsync) {
    fail(declaration, 'Generic and async functions are not supported');
  }
  const { name, isPublic } = rules.nameOf(declaration);
  const params = declaration
    .getParameters()
    .map((param) => paramOf(rules, param, isPublic));
  if (
    params.some((param) => param.rest) &&
    params.some((param) => param.optional)
  ) {
    fail(
      declaration,
      'Optional and rest parameters are not supported together',
    );
  }
  if (isPublic) {
    return publicCallable(rules, declaration, name, params);
  }
  return {
    name,
    params,
    overloads: [],
    impl: params.map((param) => paramType(rules, param, param.options[0])),
    implIsOverload: false,
    implCallable: true,
  };
}

/**
 * The parameters and the body of a callback with `arity` parameters; the missing parameters get
 * the names of `dummy`
 */
export function callback(
  node: Node,
  arity: number,
  localName: (name: string) => string,
  dummy: () => string,
): { params: string[]; body: Node } {
  const fn: ArrowFunction = arrowFunction(node);
  const params = fn.getParameters().map((param) => {
    if (!Node.isIdentifier(param.getNameNode())) {
      fail(param, 'Destructured parameters are not supported');
    }
    return localName(param.getName());
  });
  if (params.length > arity) {
    fail(fn, 'Too many parameters');
  }
  while (params.length < arity) {
    params.push(dummy());
  }
  const body = fn.getBody();
  if (Node.isBlock(body)) {
    return fail(fn, 'Callbacks must return an expression');
  }
  return { params, body };
}

export type BinaryOperator<C, E> = (
  ctx: C,
  node: BinaryExpression,
  operator: string,
) => E;

/**
 * The translations of the binary operators the transpiler supports
 */
export interface BinaryOperators<C, E> {
  logical: BinaryOperator<C, E>;
  coalesce: BinaryOperator<C, E>;
  equality: BinaryOperator<C, E>;
  comparison: BinaryOperator<C, E>;
  plus: BinaryOperator<C, E>;
  arithmetic: BinaryOperator<C, E>;
  in: BinaryOperator<C, E>;
  instanceOf: BinaryOperator<C, E>;
}

/**
 * The translation of each binary operator
 */
export function binaryOperators<C, E>(
  operators: BinaryOperators<C, E>,
): Map<string, BinaryOperator<C, E>> {
  return new Map([
    ['&&', operators.logical],
    ['||', operators.logical],
    ['??', operators.coalesce],
    ['==', operators.equality],
    ['===', operators.equality],
    ['!=', operators.equality],
    ['!==', operators.equality],
    ['<', operators.comparison],
    ['>', operators.comparison],
    ['<=', operators.comparison],
    ['>=', operators.comparison],
    ['+', operators.plus],
    ['-', operators.arithmetic],
    ['*', operators.arithmetic],
    ['in', operators.in],
    ['instanceof', operators.instanceOf],
  ]);
}

/**
 * The translation of a binary expression
 */
export function binaryWith<C, E>(
  operators: Map<string, BinaryOperator<C, E>>,
  ctx: C,
  node: BinaryExpression,
): E {
  const operator = node.getOperatorToken().getText();
  const handler = operators.get(operator);
  if (handler === undefined) {
    return fail(node, `Unsupported operator ${operator}`);
  }
  return handler(ctx, node, operator);
}
