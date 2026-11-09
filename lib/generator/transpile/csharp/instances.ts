import { ClassDeclaration, NewExpression, Node } from 'ts-morph';

import { fail, resolve } from '../index';
import { callArguments } from './arguments';
import { callable } from './callables';
import { classReference, constructorOf, isGeneric } from './classes';
import { Context, Expr, primary } from './context';
import { expression } from './expressions';
import { typeFromType } from './inferred-types';

function collection(ctx: Context, node: NewExpression, name: string): Expr {
  if (node.getArguments().length) {
    return fail(node, `Unsupported ${name} constructor`);
  }
  return primary(`new ${typeFromType(ctx, node.getType(), false, node)}()`);
}

function regExp(ctx: Context, node: NewExpression): Expr {
  const args = node.getArguments();
  const pattern = expression(ctx, args[0]).code;
  const flags = args.length > 1 ? expression(ctx, args[1]).code : '""';
  return primary(`Js.RegExp(${pattern}, ${flags})`);
}

const builtIns = new Map<
  string,
  (ctx: Context, node: NewExpression, name: string) => Expr
>([
  ['Set', collection],
  ['Map', collection],
  ['RegExp', regExp],
]);

function instance(
  ctx: Context,
  node: NewExpression,
  declaration: ClassDeclaration,
): Expr {
  const args = node.getArguments();
  const name = classReference(ctx, node, declaration);
  const constructor = constructorOf(declaration);
  if (constructor === undefined) {
    if (args.length) {
      return fail(node, 'Unsupported constructor');
    }
    return primary(`new ${name}()`);
  }
  return primary(
    `new ${name}(${callArguments(ctx, callable(ctx, constructor), args, node)})`,
  );
}

export function newExpression(ctx: Context, node: NewExpression): Expr {
  const callee = node.getExpression();
  const name = callee.getText();
  const builtIn = builtIns.get(name);
  if (builtIn) {
    return builtIn(ctx, node, name);
  }
  const declaration = resolve(callee)[0];
  if (!Node.isClassDeclaration(declaration)) {
    return fail(node, 'Unsupported constructor');
  }
  if (isGeneric(ctx, declaration)) {
    return fail(node, 'Classes with subclasses cannot be instantiated');
  }
  return instance(ctx, node, declaration);
}
