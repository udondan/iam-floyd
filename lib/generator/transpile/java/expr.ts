/**
 * Operator precedence of Java, from loosest to tightest
 */
export enum Prec {
  conditional = 2,
  or = 3,
  and = 4,
  equality = 8,
  relational = 9,
  additive = 11,
  multiplicative = 12,
  unary = 13,
  primary = 15,
}

/**
 * A Java expression and the precedence of its outermost operator
 */
export interface Expr {
  code: string;
  prec: Prec;
}

export function wrap(expr: Expr, min: Prec): string {
  return expr.prec < min ? `(${expr.code})` : expr.code;
}

export function primary(code: string): Expr {
  return { code, prec: Prec.primary };
}

/**
 * A prefix operator applied to an expression
 */
export function prefixed(operator: string, operand: Expr): Expr {
  return { code: `${operator}${wrap(operand, Prec.unary)}`, prec: Prec.unary };
}

/**
 * A left associative binary operator
 */
export function infix(
  left: Expr,
  operator: string,
  right: Expr,
  prec: Prec,
): Expr {
  return {
    code: `${wrap(left, prec)} ${operator} ${wrap(right, prec + 1)}`,
    prec,
  };
}

/**
 * `==` or `!=` with a value that needs no parentheses
 */
export function equals(left: Expr, operator: string, right: string): Expr {
  return {
    code: `${wrap(left, Prec.relational)} ${operator} ${right}`,
    prec: Prec.equality,
  };
}

export function nullCheck(value: Expr, negate: boolean): Expr {
  return equals(value, negate ? '!=' : '==', 'null');
}

export function instanceOf(value: Expr, cls: string): Expr {
  return {
    code: `${wrap(value, Prec.relational)} instanceof ${cls}`,
    prec: Prec.relational,
  };
}
