import {
  CallExpression,
  ClassDeclaration,
  ConstructorDeclaration,
  Node,
  Statement,
  SyntaxKind,
} from 'ts-morph';

import { fail } from '../index';
import {
  bodyOf,
  callable,
  callArguments,
  forwardArguments,
  normalizeParams,
} from './callables';
import {
  className,
  constructorOf,
  fieldName,
  initName,
  isGeneric,
} from './classes';
import { Callable, Context } from './context';
import { assigned } from './conversions';
import { declaredType } from './declarations';
import { statement } from './statements';

/**
 * The callable of the nearest constructor of a class or its ancestors
 */
export function constructorCallable(
  ctx: Context,
  declaration: ClassDeclaration,
): Callable | undefined {
  const constructor = constructorOf(declaration);
  return constructor ? callable(ctx, constructor) : undefined;
}

/**
 * The body of the constructor: the initialization of the base class, the field initializers and
 * the statements of the constructor
 */
export function constructorBody(
  ctx: Context,
  declaration: ClassDeclaration,
  self: string,
) {
  const base = declaration.getBaseClass();
  const own = declaration.getConstructors()[0];
  let statements = ownStatements(own);
  if (own) {
    ctx.returnTypes.push('void');
    normalizeParams(ctx, callable(ctx, own));
  }
  if (base) {
    statements = initBase(ctx, declaration, base, self);
  } else if (isGeneric(ctx, declaration)) {
    ctx.emit('this.self = self');
  }
  fieldInitializers(ctx, declaration);
  for (const child of statements) {
    statement(ctx, child);
  }
  if (own) {
    ctx.returnTypes.pop();
  }
}

function ownStatements(own: ConstructorDeclaration | undefined): Statement[] {
  return own ? bodyOf(own).getStatements() : [];
}

/**
 * Initializes the embedded struct of the base class. Returns the statements of the constructor
 * after `super()`.
 */
function initBase(
  ctx: Context,
  declaration: ClassDeclaration,
  base: ClassDeclaration,
  self: string,
): Statement[] {
  const own = declaration.getConstructors()[0];
  const statements = ownStatements(own);
  const args = own
    ? superArguments(ctx, own, base, statements)
    : forwardArguments(constructorCallable(ctx, base));
  const field = `&this.${className(base)}`;
  const init = ctx.qualify(declaration, base, initName(ctx, base));
  const baseGeneric = isGeneric(ctx, base);
  ctx.emit(
    `${init}(${[field, ...(baseGeneric ? [self] : []), ...args].join(', ')})`,
  );
  if (isGeneric(ctx, declaration) && !baseGeneric) {
    ctx.emit('this.self = self');
  }
  return own ? statements.slice(1) : statements;
}

/**
 * The arguments of `super(…)`, which must be the first statement of the constructor
 */
function superArguments(
  ctx: Context,
  own: ConstructorDeclaration,
  base: ClassDeclaration,
  statements: Statement[],
): string[] {
  const call = superCall(statements[0]);
  if (call === undefined) {
    return fail(own, 'Constructors must start with super()');
  }
  const baseConstructor = constructorOf(base);
  return baseConstructor
    ? callArguments(
        ctx,
        callable(ctx, baseConstructor),
        call.getArguments(),
        call,
      )
    : [];
}

function superCall(first: Statement | undefined): CallExpression | undefined {
  const call = Node.isExpressionStatement(first)
    ? first.getExpression()
    : undefined;
  return Node.isCallExpression(call) &&
    call.getExpression().getKind() == SyntaxKind.SuperKeyword
    ? call
    : undefined;
}

function fieldInitializers(ctx: Context, declaration: ClassDeclaration) {
  for (const property of declaration.getProperties()) {
    const initializer = property.getInitializer();
    if (property.isStatic() || initializer === undefined) {
      continue;
    }
    const type = declaredType(ctx, property);
    ctx.emit(
      `this.${fieldName(property)} = ${assigned(ctx, initializer, type).code}`,
    );
  }
}
