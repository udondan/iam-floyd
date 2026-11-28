import { Node } from 'ts-morph';

import { fail } from '../index';
import { Callable, Context, Prec, Signature, wrap } from './context';
import { exprType } from './declared';
import { expression } from './expressions';
import { assignable } from './nullable';

/**
 * Whether arguments of the C# types `types` can be passed to an overload
 */
function matches(signature: Signature, types: string[]): boolean {
  const varargs =
    signature.length > 0 && signature[signature.length - 1].endsWith('...');
  // the number of parameters before the varargs
  const fixed = varargs ? signature.length - 1 : signature.length;
  if (types.length < fixed || (!varargs && types.length > fixed)) {
    return false;
  }
  // the arguments after the fixed parameters go to the varargs
  return types.every((type, index) =>
    assignable(type, signature[Math.min(index, fixed)].replace('...', '')),
  );
}

/**
 * The arguments of a call to the implementation: missing optional arguments are `null`, and
 * arguments of a known type passed as `object` are cast, so that C# picks no overload
 */
function implArguments(
  ctx: Context,
  callable: Callable,
  args: Node[],
  codes: string[],
): string {
  const result: string[] = [];
  callable.impl.forEach((type, index) => {
    if (type.endsWith('...')) {
      result.push(...codes.slice(index));
    } else if (index < codes.length) {
      result.push(
        type == 'object' && exprType(ctx, args[index]) != 'object'
          ? `(object)${wrap(expression(ctx, args[index]), Prec.unary)}`
          : codes[index],
      );
    } else {
      result.push(`(${type})null`);
    }
  });
  return result.join(', ');
}

/**
 * The arguments of a call to a function, method or constructor. If no public overload matches,
 * the implementation is called.
 */
export function callArguments(
  ctx: Context,
  callable: Callable,
  args: Node[],
  node: Node,
): string {
  if (args.some((arg) => Node.isSpreadElement(arg))) {
    return fail(node, 'Spread arguments are not supported');
  }
  const codes = args.map((arg) => expression(ctx, arg).code);
  if (callable.overloads.length) {
    const types = args.map((arg) => exprType(ctx, arg));
    if (callable.overloads.some((signature) => matches(signature, types))) {
      return codes.join(', ');
    }
    if (!callable.implCallable) {
      return fail(node, 'No C# overload matches the arguments');
    }
  }
  return implArguments(ctx, callable, args, codes);
}
