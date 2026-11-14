import {
  CallExpression,
  ClassDeclaration,
  ConstructorDeclaration,
  Node,
  ParameterDeclaration,
  PropertyDeclaration,
  Statement,
  SyntaxKind,
} from 'ts-morph';

import { fail, ownConstructor } from '../index';
import { callArguments } from './calls';
import { Context } from './context';
import { hierarchy } from './declarations';
import { emitDocstring } from './docs';
import { expression } from './expressions';
import { memberName, pythonName } from './names';
import { statements } from './statements';
import { parameters, typeHint } from './types';

/**
 * Without own constructor, the constructor of the nearest base class with one is inherited
 */
function inheritedConstructor(
  declaration: ClassDeclaration,
): ConstructorDeclaration | undefined {
  return hierarchy(declaration)
    .slice(1)
    .map((current) => current.getConstructors()[0])
    .find((ctor) => ctor !== undefined);
}

/**
 * The call of `super()`, if the statement is one
 */
function superCall(
  statement: Statement | undefined,
): CallExpression | undefined {
  if (statement === undefined || !Node.isExpressionStatement(statement)) {
    return undefined;
  }
  const call = statement.getExpression();
  return Node.isCallExpression(call) &&
    call.getExpression().getKind() == SyntaxKind.SuperKeyword
    ? call
    : undefined;
}

/**
 * Emits the call of the base constructor and returns the remaining statements of the constructor
 */
function emitSuperCall(
  ctx: Context,
  ctor: ConstructorDeclaration | undefined,
  params: ParameterDeclaration[],
): Statement[] {
  if (ctor === undefined) {
    const args = params.map((parameter) =>
      parameter.isRestParameter()
        ? `*${pythonName(parameter.getName())}`
        : pythonName(parameter.getName()),
    );
    ctx.emit(`super().__init__(${args.join(', ')})`);
    return [];
  }
  const [first, ...rest] = ctor.getStatements();
  const call =
    superCall(first) ??
    fail(ctor, 'The constructor must start with the call of super()');
  ctx.emit(`super().__init__(${callArguments(ctx, call).join(', ')})`);
  return rest;
}

function fieldInitializers(ctx: Context, fields: PropertyDeclaration[]) {
  for (const field of fields) {
    const initializer = field.getInitializer();
    if (initializer === undefined) {
      fail(field, 'Fields need an initializer');
    }
    ctx.emit(
      `self.${memberName(field)}: ${typeHint(ctx, field.getTypeNode(), field.getType(), field)} = ${expression(ctx, initializer).code}`,
    );
  }
}

/**
 * Field initializers run after the call of the base constructor, like in TypeScript
 */
export function constructorDeclaration(
  ctx: Context,
  declaration: ClassDeclaration,
  fields: PropertyDeclaration[],
) {
  const ctor = ownConstructor(declaration);
  if (ctor === undefined && fields.length == 0) {
    return;
  }
  const params =
    (ctor ?? inheritedConstructor(declaration))?.getParameters() ?? [];
  ctx.emit('');
  ctx.emit(
    `def __init__(${['self', ...parameters(ctx, params)].join(', ')}) -> None:`,
  );
  ctx.indented(() => {
    if (ctor !== undefined) {
      emitDocstring(ctx, ctor);
    }
    const body =
      declaration.getBaseClass() === undefined
        ? (ctor?.getStatements() ?? [])
        : emitSuperCall(ctx, ctor, params);
    fieldInitializers(ctx, fields);
    statements(ctx, body);
  });
}
