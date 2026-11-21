import {
  FunctionDeclaration,
  MethodDeclaration,
  Node,
  VariableDeclarationKind,
  VariableStatement,
} from 'ts-morph';

import { fail } from '../index';
import {
  bodyOf,
  callable,
  normalizeParams,
  paramList,
  returnSuffix,
  returnType,
} from './callables';
import { isHidden } from './classes';
import { moduleConstant } from './constants';
import { Context } from './context';
import { docs } from './docs';
import { statement } from './statements';

export function methodDeclaration(
  ctx: Context,
  method: MethodDeclaration,
  self: string,
) {
  const signature = callable(ctx, method);
  const type = returnType(ctx, method);
  if (!isHidden(method)) {
    docs(ctx, method);
  }
  functionBody(
    ctx,
    method,
    `func (this *${self}) ${signature.name}(${paramList(signature)})`,
    type,
  );
}

/**
 * A function or the constants of a variable statement at module level
 */
export function moduleMember(
  ctx: Context,
  member: FunctionDeclaration | VariableStatement,
) {
  if (Node.isFunctionDeclaration(member)) {
    moduleFunction(ctx, member);
    return;
  }
  if (member.getDeclarationKind() != VariableDeclarationKind.Const) {
    fail(member, 'Module level variables must be constants');
  }
  for (const declaration of member.getDeclarations()) {
    moduleConstant(ctx, member, declaration);
  }
}

function moduleFunction(ctx: Context, member: FunctionDeclaration) {
  const signature = callable(ctx, member);
  ctx.declareName(member, signature.name);
  docs(ctx, member);
  functionBody(
    ctx,
    member,
    `func ${signature.name}(${paramList(signature)})`,
    returnType(ctx, member),
  );
}

function functionBody(
  ctx: Context,
  declaration: MethodDeclaration | FunctionDeclaration,
  header: string,
  type: string,
) {
  const signature = callable(ctx, declaration);
  const body = bodyOf(declaration);
  ctx.returnTypes.push(type);
  ctx.braces(`${header}${returnSuffix(type)}`, () => {
    normalizeParams(ctx, signature);
    for (const child of body.getStatements()) {
      statement(ctx, child);
    }
  });
  ctx.returnTypes.pop();
}
