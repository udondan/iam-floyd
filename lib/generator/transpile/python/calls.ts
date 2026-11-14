import {
  CallExpression,
  Expression,
  Node,
  PropertyAccessExpression,
} from 'ts-morph';

import { fail, Kind, kindOf } from '../index';
import { identifier } from './access';
import { Context, Expr, membership, Prec, primary, wrap } from './context';
import { expression } from './expressions';
import { methods } from './methods';
import { memberName } from './names';

export function callArguments(ctx: Context, node: CallExpression): string[] {
  return (node.getArguments() as Expression[]).map((arg) => {
    if (Node.isSpreadElement(arg)) {
      return `*${wrap(expression(ctx, arg.getExpression()), Prec.primary)}`;
    }
    return expression(ctx, arg).code;
  });
}

/**
 * A call of a method: `receiver.method(args)`
 */
export class MethodCall {
  public readonly receiver: Expression;
  public readonly method: string;
  public readonly args: Expression[];
  public readonly kind: Kind;

  constructor(
    public readonly ctx: Context,
    public readonly node: CallExpression,
    public readonly callee: PropertyAccessExpression,
  ) {
    this.receiver = callee.getExpression();
    this.method = callee.getName();
    this.args = node.getArguments() as Expression[];
    this.kind = kindOf(this.receiver.getType());
  }

  /**
   * The receiver as operand of an attribute access
   */
  public self(): string {
    return wrap(this.receiverExpr(), Prec.primary);
  }

  /**
   * The code of the receiver
   */
  public receiverCode(): string {
    return this.receiverExpr().code;
  }

  public arg(index: number, min = Prec.conditional): string {
    const arg = this.args[index];
    if (arg === undefined || Node.isSpreadElement(arg)) {
      fail(this.node, 'Unsupported arguments');
    }
    return wrap(expression(this.ctx, arg), min);
  }

  /**
   * `receiver.includes(arg)` and the like, which become `arg in receiver`
   */
  public contains(): Expr {
    return membership(
      this.arg(0, Prec.comparison + 1),
      wrap(this.receiverExpr(), Prec.comparison + 1),
    );
  }

  private receiverExpr(): Expr {
    return expression(this.ctx, this.receiver);
  }
}

type StaticMethod = (call: MethodCall) => Expr | undefined;

/**
 * The supported static methods of the built-in objects, by object and method
 */
const staticMethods = new Map<string, Map<string, StaticMethod>>([
  [
    'Object',
    new Map<string, StaticMethod>([
      ['keys', (call) => primary(`list(${call.arg(0, Prec.primary)}.keys())`)],
      [
        'entries',
        (call) => primary(`list(${call.arg(0, Prec.primary)}.items())`),
      ],
    ]),
  ],
  [
    'Array',
    new Map<string, StaticMethod>([
      ['isArray', (call) => primary(`isinstance(${call.arg(0)}, list)`)],
    ]),
  ],
  [
    'JSON',
    new Map<string, StaticMethod>([
      [
        'stringify',
        (call) =>
          call.args.length == 1
            ? primary(`_js.stringify(${call.arg(0)})`)
            : undefined,
      ],
    ]),
  ],
]);

function staticCall(call: MethodCall): Expr | undefined {
  const object = call.receiver.getText();
  const methodsOfObject = staticMethods.get(object);
  if (methodsOfObject === undefined) {
    return undefined;
  }
  return (
    methodsOfObject.get(call.method)?.(call) ??
    fail(call.node, `Unsupported ${object} method`)
  );
}

function classMethodCall(call: MethodCall): Expr | undefined {
  const declaration = call.callee
    .getNameNode()
    .getSymbol()
    ?.getDeclarations()[0];
  if (!Node.isMethodDeclaration(declaration) || call.kind != 'class') {
    return undefined;
  }
  return primary(
    `${call.self()}.${memberName(declaration)}(${callArguments(call.ctx, call.node).join(', ')})`,
  );
}

function toStringCall(call: MethodCall): Expr | undefined {
  return call.method == 'toString' && call.args.length == 0
    ? primary(`_js.to_string(${call.receiverCode()})`)
    : undefined;
}

function builtinCall(call: MethodCall): Expr | undefined {
  return methods.get(`${call.kind}.${call.method}`)?.(call);
}

export function call(ctx: Context, node: CallExpression): Expr {
  const callee = node.getExpression();
  if (Node.isIdentifier(callee)) {
    return primary(
      `${identifier(callee).code}(${callArguments(ctx, node).join(', ')})`,
    );
  }
  if (!Node.isPropertyAccessExpression(callee)) {
    return fail(node, 'Unsupported call');
  }
  const methodCall = new MethodCall(ctx, node, callee);
  return (
    staticCall(methodCall) ??
    classMethodCall(methodCall) ??
    toStringCall(methodCall) ??
    builtinCall(methodCall) ??
    fail(node, `Unsupported method ${methodCall.method} of ${methodCall.kind}`)
  );
}
