import { Expression, Node, SyntaxKind, TypeOfExpression } from 'ts-morph';

import { Context, Expr, Prec, wrap } from './context';
import { expression } from './expressions';
import { BinaryParts, compare, sameKind } from './operators';
import { pyString } from './strings';

function isUndefined(side: Expression): boolean {
  return (
    side.getKind() == SyntaxKind.NullKeyword || side.getText() == 'undefined'
  );
}

/**
 * The operands of `typeof value == 'type'`, in either order
 */
function typeofOperands({
  left,
  right,
}: BinaryParts): [TypeOfExpression, string] | undefined {
  if (Node.isTypeOfExpression(left) && Node.isStringLiteral(right)) {
    return [left, right.getText()];
  }
  if (Node.isTypeOfExpression(right) && Node.isStringLiteral(left)) {
    return [right, left.getText()];
  }
  return undefined;
}

/**
 * The Python checks of types that have a type of their own
 */
const typeChecks = new Map([
  ['string', 'str'],
  ['boolean', 'bool'],
]);

function typeofComparison(
  ctx: Context,
  typeOf: TypeOfExpression,
  literal: string,
  negate: boolean,
): Expr {
  const value = wrap(
    expression(ctx, typeOf.getExpression()),
    Prec.comparison + 1,
  );
  const type = literal.slice(1, -1);
  if (type == 'undefined') {
    return {
      code: `${value} ${negate ? 'is not' : 'is'} None`,
      prec: Prec.comparison,
    };
  }
  const pythonType = typeChecks.get(type);
  const check: Expr =
    pythonType === undefined
      ? {
          code: `_js.typeof(${value}) == ${pyString(type)}`,
          prec: Prec.comparison,
        }
      : { code: `isinstance(${value}, ${pythonType})`, prec: Prec.primary };
  return negate ? { code: `not ${check.code}`, prec: Prec.not } : check;
}

export function equality(ctx: Context, parts: BinaryParts): Expr {
  const negate = parts.operator.startsWith('!');
  const typeofCheck = typeofOperands(parts);
  if (typeofCheck !== undefined) {
    return typeofComparison(ctx, ...typeofCheck, negate);
  }
  if (isUndefined(parts.right) || isUndefined(parts.left)) {
    return compare(ctx, parts, negate ? 'is not' : 'is');
  }
  sameKind(
    parts,
    ['string', 'number', 'boolean'],
    'Equality is supported for primitives of the same type only',
  );
  return compare(ctx, parts, negate ? '!=' : '==');
}
