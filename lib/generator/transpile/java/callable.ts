import {
  ClassDeclaration,
  ConstructorDeclaration,
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  ParameterDeclaration,
  Scope,
  SyntaxKind,
  TypeNode,
} from 'ts-morph';

import { fail, isServiceFile } from '../index';
import { className, Context } from './context';
import { javaLocalName, javaMethodName } from './names';
import { typeFromNode } from './type-node';
import { box, erasure } from './types';

export interface Param {
  /** The Java name */
  name: string;
  /** The Java types the parameter accepts */
  options: string[];
  optional: boolean;
  rest: boolean;
}

/**
 * A Java signature: the types of the leading parameters
 */
export type Signature = string[];

/**
 * How a TypeScript function, method or constructor is declared in Java.
 *
 * Public methods and constructors become overloads: one per combination of the types of union
 * parameters and per number of optional parameters. If a parameter has more than one type, the
 * body is in a protected method with `Object` for those parameters, which all overloads call;
 * otherwise the body is in the overload with all parameters. Everything else is declared once,
 * with all parameters, and callers pass `null` for missing optional arguments.
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
 * The nearest constructor of a class or its ancestors
 */
export function constructorOf(
  declaration: ClassDeclaration,
): ConstructorDeclaration | undefined {
  for (
    let cls: ClassDeclaration | undefined = declaration;
    cls;
    cls = cls.getBaseClass()
  ) {
    const constructors = cls.getConstructors();
    if (constructors.length) {
      return constructors[0];
    }
  }
  return undefined;
}

/**
 * The type node of a parameter, of the elements for rest parameters
 */
function paramTypeNode(param: ParameterDeclaration): TypeNode {
  const typeNode = param.getTypeNode();
  if (typeNode === undefined) {
    return fail(param, 'Parameters must have a type');
  }
  if (!param.isRestParameter()) {
    return typeNode;
  }
  if (!Node.isArrayTypeNode(typeNode)) {
    return fail(param, 'Rest parameters must have an array type');
  }
  return typeNode.getElementTypeNode();
}

/**
 * The Java types of a parameter. Public parameters accept every member of a union type, and any
 * number; the others have one type.
 */
function paramOptions(
  ctx: Context,
  param: ParameterDeclaration,
  isPublic: boolean,
): string[] {
  const typeNode = paramTypeNode(param);
  if (!isPublic) {
    const boxed = param.isOptional() || param.isRestParameter();
    return [typeFromNode(ctx, typeNode, boxed)];
  }
  const parts = Node.isUnionTypeNode(typeNode)
    ? typeNode.getTypeNodes()
    : [typeNode];
  const options = parts
    .filter((part) => part.getKind() != SyntaxKind.UndefinedKeyword)
    .map((part) => typeFromNode(ctx, part, param.isOptional(), true));
  return [...new Set(options)];
}

function paramOf(
  ctx: Context,
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
    name: javaLocalName(param.getName()),
    options: paramOptions(ctx, param, isPublic),
    optional: param.isOptional() && !param.isRestParameter(),
    rest: param.isRestParameter(),
  };
}

/**
 * The Java type of a parameter for one of its options
 */
function paramType(param: Param, option: string): string {
  if (param.rest) {
    return `${option}...`;
  }
  return param.optional ? box(option) : option;
}

function functionName(declaration: FunctionDeclaration): string {
  const name = declaration.getName();
  if (name === undefined || declaration.getOverloads().length) {
    return fail(declaration, 'Unsupported function');
  }
  return name;
}

/**
 * The Java name of a callable, and whether it is public
 */
function nameOf(declaration: CallableDeclaration): {
  name: string;
  isPublic: boolean;
} {
  if (Node.isFunctionDeclaration(declaration)) {
    return { name: functionName(declaration), isPublic: false };
  }
  const name = Node.isConstructorDeclaration(declaration)
    ? className(declaration.getParentOrThrow() as ClassDeclaration)
    : javaMethodName(declaration.getName());
  return { name, isPublic: declaration.getScope() == Scope.Public };
}

/**
 * The signatures of all combinations of the types of the parameters
 */
function signaturesOf(params: Param[]): Signature[] {
  return params.reduce<Signature[]>(
    (signatures, param) =>
      signatures.flatMap((signature) =>
        param.options.map((option) => [...signature, paramType(param, option)]),
      ),
    [[]],
  );
}

/**
 * The overloads, from the number of required parameters to all
 */
function overloadsOf(params: Param[]): Signature[] {
  const firstOptional = params.findIndex((param) => param.optional);
  const overloads: Signature[] = [];
  for (
    let arity = firstOptional < 0 ? params.length : firstOptional;
    arity <= params.length;
    arity++
  ) {
    overloads.push(...signaturesOf(params.slice(0, arity)));
  }
  return overloads;
}

function checkErasures(node: Node, signatures: Signature[]) {
  const erasures = new Set<string>();
  for (const signature of signatures) {
    const key = signature.map(erasure).join(',');
    if (erasures.has(key)) {
      fail(node, `Two Java overloads have the same parameters (${key})`);
    }
    erasures.add(key);
  }
}

function publicCallable(
  declaration: CallableDeclaration,
  name: string,
  params: Param[],
): Callable {
  const overloads = overloadsOf(params);
  const collapsed = params.some((param) => param.options.length > 1);
  const impl = collapsed
    ? params.map((param) =>
        param.options.length > 1
          ? 'Object'
          : paramType(param, param.options[0]),
      )
    : overloads[overloads.length - 1];
  checkErasures(declaration, collapsed ? [...overloads, impl] : overloads);
  return {
    name,
    params,
    overloads,
    impl,
    implIsOverload: !collapsed,
    implCallable: !isServiceFile(declaration.getSourceFile()),
  };
}

function newCallable(ctx: Context, declaration: CallableDeclaration): Callable {
  const isAsync =
    !Node.isConstructorDeclaration(declaration) && declaration.isAsync();
  if (declaration.getTypeParameters().length || isAsync) {
    fail(declaration, 'Generic and async functions are not supported');
  }
  const { name, isPublic } = nameOf(declaration);
  const params = declaration
    .getParameters()
    .map((param) => paramOf(ctx, param, isPublic));
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
    return publicCallable(declaration, name, params);
  }
  return {
    name,
    params,
    overloads: [],
    impl: params.map((param) => paramType(param, param.options[0])),
    implIsOverload: false,
    implCallable: true,
  };
}

export function callable(
  ctx: Context,
  declaration: CallableDeclaration,
): Callable {
  let result = ctx.callables.get(declaration);
  if (result === undefined) {
    result = newCallable(ctx, declaration);
    ctx.callables.set(declaration, result);
  }
  return result;
}
