import { ClassDeclaration, Node, Statement, SyntaxKind } from 'ts-morph';

import { fail } from '../index';
import {
  Callable,
  callable,
  CallableDeclaration,
  constructorOf,
  Signature,
} from './callable';
import { containerOf, memberVisibility } from './classes';
import { Context } from './context';
import { returnType } from './declared';
import { docs } from './docs';
import { statement } from './statements';

/**
 * The parameters of a signature, with their types
 */
function paramList(callable: Callable, signature: Signature): string {
  return signature
    .map((type, index) => `${type} ${callable.params[index].name}`)
    .join(', ');
}

/**
 * The names of the parameters of a signature
 */
function paramNames(callable: Callable, signature: Signature): string[] {
  return callable.params.slice(0, signature.length).map((param) => param.name);
}

/**
 * Classes without constructor get those of their base class
 */
export function inheritedConstructors(ctx: Context, base: ClassDeclaration) {
  const constructor = constructorOf(base);
  if (constructor === undefined) {
    return;
  }
  const inherited = callable(ctx, constructor);
  const signatures = inherited.implIsOverload
    ? inherited.overloads
    : [...inherited.overloads, inherited.impl];
  for (const signature of signatures) {
    const isImpl = !inherited.implIsOverload && signature === inherited.impl;
    const args = signature.map((type, index) => {
      const name = inherited.params[index].name;
      return isImpl && type == 'Object' ? `(Object) ${name}` : name;
    });
    ctx.emit('');
    if (!isImpl) {
      docs(ctx, constructor, paramNames(inherited, signature));
    }
    ctx.emitBlock(
      `${isImpl ? 'protected' : 'public'} ${ctx.javaClass}(${paramList(inherited, signature)})`,
      () => ctx.emit(`super(${args.join(', ')});`),
    );
  }
}

/**
 * The start of the declaration of a callable, up to its name
 */
interface Head {
  modifiers: string;
  /** The return type with a leading space, empty for constructors */
  returnType: string;
  name: string;
}

function modifiersOf(ctx: Context, declaration: CallableDeclaration): string {
  if (!Node.isFunctionDeclaration(declaration)) {
    return declaration.getScope();
  }
  const container = containerOf(ctx, declaration);
  return `${memberVisibility(container, declaration.isExported())}static`;
}

function headOf(
  ctx: Context,
  declaration: CallableDeclaration,
  name: string,
): Head {
  const modifiers = modifiersOf(ctx, declaration);
  if (Node.isConstructorDeclaration(declaration)) {
    return { modifiers, returnType: '', name: ctx.javaClass };
  }
  return { modifiers, returnType: ` ${returnType(ctx, declaration)}`, name };
}

/**
 * The call of the implementation by an overload
 */
function delegation(head: Head, args: string[]): string {
  if (head.returnType.length == 0) {
    return `this(${args.join(', ')});`;
  }
  const keyword = head.returnType == ' void' ? '' : 'return ';
  return `${keyword}${head.name}(${args.join(', ')});`;
}

function overload(
  ctx: Context,
  declaration: CallableDeclaration,
  method: Callable,
  head: Head,
  signature: Signature,
) {
  const args = method.impl.map((type, index) => {
    if (index >= signature.length) {
      return `(${type}) null`;
    }
    const name = method.params[index].name;
    return type == 'Object' && signature[index] != 'Object'
      ? `(Object) ${name}`
      : name;
  });
  ctx.emit('');
  docs(ctx, declaration, paramNames(method, signature));
  ctx.emitBlock(
    `${head.modifiers}${head.returnType} ${head.name}(${paramList(method, signature)})`,
    () => ctx.emit(delegation(head, args)),
  );
}

function startsWithSuper(statements: Statement[]): boolean {
  const first = statements[0];
  if (!Node.isExpressionStatement(first)) {
    return false;
  }
  const expression = first.getExpression();
  return (
    Node.isCallExpression(expression) &&
    expression.getFirstChild()?.getKind() == SyntaxKind.SuperKeyword
  );
}

function body(ctx: Context, declaration: CallableDeclaration) {
  // functions without body are overloads, which callable() rejects, and the methods and
  // constructors of a class are those with a body
  const statements = declaration
    .getBodyOrThrow()
    .asKindOrThrow(SyntaxKind.Block)
    .getStatements();
  if (
    Node.isConstructorDeclaration(declaration) &&
    ctx.classDecl?.getBaseClass() &&
    !startsWithSuper(statements)
  ) {
    fail(declaration, 'Constructors must start with super()');
  }
  for (const node of statements) {
    statement(ctx, node);
  }
}

/**
 * Declares a function, method or constructor: the overloads, which call the implementation, and
 * the implementation
 */
export function callableDeclaration(
  ctx: Context,
  declaration: CallableDeclaration,
) {
  const method = callable(ctx, declaration);
  const head = headOf(ctx, declaration, method.name);
  for (const signature of method.overloads) {
    if (!(method.implIsOverload && signature === method.impl)) {
      overload(ctx, declaration, method, head, signature);
    }
  }
  const implModifiers =
    method.overloads.length && !method.implIsOverload
      ? 'protected'
      : head.modifiers;
  ctx.emit('');
  docs(
    ctx,
    declaration,
    paramNames(method, method.impl),
    implModifiers.startsWith('public'),
  );
  ctx.emitBlock(
    `${implModifiers}${head.returnType} ${head.name}(${paramList(method, method.impl)})`,
    () => body(ctx, declaration),
  );
}
