import {
  BinaryExpression,
  BindingName,
  Expression,
  ForOfStatement,
  ForStatement,
  Node,
  SyntaxKind,
} from 'ts-morph';

import { fail, kindOf } from '../index';
import { Context, Prec, wrap } from './context';
import { expression } from './expressions';
import { pythonName } from './names';
import { body } from './statements';

function loopTarget(nameNode: BindingName): string {
  if (Node.isIdentifier(nameNode)) {
    return pythonName(nameNode.getText());
  }
  if (!Node.isArrayBindingPattern(nameNode)) {
    return fail(nameNode, 'Unsupported destructuring');
  }
  return nameNode
    .getElements()
    .map((element) => {
      if (!Node.isBindingElement(element)) {
        fail(nameNode, 'Unsupported destructuring');
      }
      return pythonName(element.getName());
    })
    .join(', ');
}

function iterableCode(ctx: Context, iterable: Expression): string {
  if (
    Node.isCallExpression(iterable) &&
    iterable.getExpression().getText() == 'Object.entries'
  ) {
    const entries = expression(ctx, iterable.getArguments()[0] as Expression);
    return `${wrap(entries, Prec.primary)}.items()`;
  }
  const kind = kindOf(iterable.getType());
  if (kind == 'map') {
    return `${wrap(expression(ctx, iterable), Prec.primary)}.items()`;
  }
  if (kind == 'array' || kind == 'set') {
    return expression(ctx, iterable).code;
  }
  return fail(iterable, 'Unsupported iterable');
}

export function forOfStatement(ctx: Context, statement: ForOfStatement) {
  if (statement.isAwaited()) {
    fail(statement, 'for await is not supported');
  }
  const initializer = statement.getInitializer();
  if (!Node.isVariableDeclarationList(initializer)) {
    return fail(statement, 'for of needs a variable declaration');
  }
  const nameNode = initializer.getDeclarations()[0].getNameNode();
  const target = loopTarget(nameNode);
  const code = iterableCode(ctx, statement.getExpression());
  if (Node.isArrayBindingPattern(nameNode) && !code.endsWith('.items()')) {
    fail(nameNode, 'Destructuring is supported for entries only');
  }
  ctx.emit(`for ${target} in ${code}:`);
  body(ctx, statement.getStatement());
}

interface RangeLoop {
  name: string;
  start: Expression;
  condition: BinaryExpression;
}

/**
 * Whether the condition is `name < end` or `name <= end`
 */
function isUpperBound(
  condition: Expression,
  name: string,
): condition is BinaryExpression {
  return (
    Node.isBinaryExpression(condition) &&
    condition.getLeft().getText() == name &&
    ['<', '<='].includes(condition.getOperatorToken().getText())
  );
}

/**
 * Whether the incrementor is `name++` or `++name`
 */
function isIncrement(incrementor: Expression, name: string): boolean {
  return (
    (Node.isPostfixUnaryExpression(incrementor) ||
      Node.isPrefixUnaryExpression(incrementor)) &&
    incrementor.getOperatorToken() == SyntaxKind.PlusPlusToken &&
    incrementor.getOperand().getText() == name
  );
}

function rangeLoop(statement: ForStatement): RangeLoop {
  const initializer = statement.getInitializer();
  const condition = statement.getCondition();
  const incrementor = statement.getIncrementor();
  const declarations = Node.isVariableDeclarationList(initializer)
    ? initializer.getDeclarations()
    : [];
  if (
    declarations.length != 1 ||
    condition === undefined ||
    incrementor === undefined
  ) {
    return fail(statement, 'Unsupported for loop');
  }
  const name = declarations[0].getName();
  const start = declarations[0].getInitializer();
  if (
    start === undefined ||
    !isUpperBound(condition, name) ||
    !isIncrement(incrementor, name)
  ) {
    return fail(statement, 'Unsupported for loop');
  }
  return { name, start, condition };
}

function isAssignmentTo(parent: Node | undefined, node: Node): boolean {
  if (!Node.isBinaryExpression(parent) || parent.getLeft() != node) {
    return false;
  }
  const operator = parent.getOperatorToken().getKind();
  return (
    operator >= SyntaxKind.FirstAssignment &&
    operator <= SyntaxKind.LastAssignment
  );
}

function isIncrementOrDecrement(parent: Node | undefined): boolean {
  if (Node.isPostfixUnaryExpression(parent)) {
    return true;
  }
  return (
    Node.isPrefixUnaryExpression(parent) &&
    [SyntaxKind.PlusPlusToken, SyntaxKind.MinusMinusToken].includes(
      parent.getOperatorToken(),
    )
  );
}

/**
 * The loop variable must not be changed in the body
 */
function checkLoopVariable(statement: ForStatement, name: string) {
  for (const node of statement
    .getStatement()
    .getDescendantsOfKind(SyntaxKind.Identifier)) {
    const parent = node.getParent();
    if (
      node.getText() == name &&
      (isAssignmentTo(parent, node) || isIncrementOrDecrement(parent))
    ) {
      fail(node, 'The loop variable must not be changed in the loop');
    }
  }
}

/**
 * Supports only `for (let i = start; i < end; i++)`, which becomes `range()`
 */
export function forStatement(ctx: Context, statement: ForStatement) {
  const { name, start, condition } = rangeLoop(statement);
  checkLoopVariable(statement, name);
  const end = expression(ctx, condition.getRight());
  const stop =
    condition.getOperatorToken().getText() == '<'
      ? end.code
      : `${wrap(end, Prec.additive)} + 1`;
  const startCode = expression(ctx, start).code;
  const range =
    startCode == '0' ? `range(${stop})` : `range(${startCode}, ${stop})`;
  ctx.emit(`for ${pythonName(name)} in ${range}:`);
  body(ctx, statement.getStatement());
}
