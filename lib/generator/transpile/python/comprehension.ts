import { ArrowFunction, Expression, Node } from 'ts-morph';

import { arrowFunction, fail } from '../index';
import type { MethodCall } from './calls';
import { atom, Expr, Prec, wrap } from './context';
import { expression } from './expressions';
import { pythonName } from './names';
import { checkTruthiness } from './truthiness';

/**
 * The returned value of the callback, which must be an expression or a block with one return statement
 */
function callbackValue(callback: ArrowFunction): Expression {
  const body = callback.getBody();
  if (!Node.isBlock(body)) {
    return body as Expression;
  }
  const statements = body.getStatements();
  const only = statements[0];
  if (
    statements.length != 1 ||
    !Node.isReturnStatement(only) ||
    only.getExpression() === undefined
  ) {
    fail(body, 'Callbacks must consist of one return statement');
  }
  return only.getExpressionOrThrow();
}

/**
 * The `for` clause, by the number of parameters of the callback (the element and the index)
 */
const loops: ((parameters: string[], iterable: string) => string)[] = [
  (_, iterable) => `for _ in ${iterable}`,
  ([element], iterable) => `for ${element} in ${iterable}`,
  ([element, index], iterable) =>
    `for ${index}, ${element} in enumerate(${iterable})`,
];

/**
 * `filter()` and `map()` with an arrow function become list comprehensions
 */
export function comprehension(
  call: MethodCall,
  method: 'filter' | 'map',
): Expr {
  if (call.args.length != 1) {
    fail(call.node, `${method} supports one argument`);
  }
  const callback = arrowFunction(call.args[0]);
  const parameters = callback.getParameters().map((parameter) => {
    if (!Node.isIdentifier(parameter.getNameNode())) {
      fail(parameter, 'Destructuring is not supported');
    }
    return pythonName(parameter.getName());
  });
  const value = callbackValue(callback);
  const iterable = call.receiverCode();
  const loop =
    loops[parameters.length] ??
    fail(callback, 'Callbacks support at most two parameters');
  const clause = loop(parameters, iterable);
  if (method == 'map') {
    return atom(
      `[${wrap(expression(call.ctx, value), Prec.conditional)} ${clause}]`,
    );
  }
  checkTruthiness(value);
  const element = parameters[0] ?? fail(callback, 'filter needs a parameter');
  return atom(
    `[${element} ${clause} if ${wrap(expression(call.ctx, value), Prec.or)}]`,
  );
}
