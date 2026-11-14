import {
  ClassDeclaration,
  MethodDeclaration,
  Node,
  Statement,
  SyntaxKind,
} from 'ts-morph';

import { fail } from '../index';
import { callable, CallableDeclaration, returnType } from './callables';
import { constructorOf, containerOf, memberVisibility } from './classes';
import { Callable, Context, Signature } from './context';
import { docs } from './docs';
import { expression } from './expressions';
import { statement } from './statements';

/**
 * How a function, method or constructor is declared in C#
 */
interface Method {
  declaration: CallableDeclaration;
  callable: Callable;
  modifiers: string;
  /** The return type with a leading space, empty for constructors */
  returnType: string;
  name: string;
  isConstructor: boolean;
}

function paramList(callable: Callable, signature: Signature): string {
  return signature
    .map((type, index) => {
      const name = callable.params[index].name;
      return type.endsWith('...')
        ? `params ${type.replace('...', '[]')} ${name}`
        : `${type} ${name}`;
    })
    .join(', ');
}

function paramNames(callable: Callable, signature: Signature): string[] {
  return callable.params.slice(0, signature.length).map((param) => param.name);
}

function methodModifiers(
  ctx: Context,
  declaration: MethodDeclaration,
  method: Callable,
): Pick<Method, 'modifiers' | 'returnType'> {
  const type = ` ${returnType(ctx, declaration)}`;
  if (method.name != 'ToString') {
    return { modifiers: declaration.getScope(), returnType: type };
  }
  if (method.params.length || type != ' string') {
    fail(declaration, 'toString() must not have parameters');
  }
  return { modifiers: `${declaration.getScope()} override`, returnType: type };
}

function modifiersOf(
  ctx: Context,
  declaration: CallableDeclaration,
  method: Callable,
): Pick<Method, 'modifiers' | 'returnType'> {
  if (Node.isFunctionDeclaration(declaration)) {
    const container = containerOf(ctx, declaration);
    return {
      modifiers: `${memberVisibility(container, declaration.isExported())} static`,
      returnType: ` ${returnType(ctx, declaration)}`,
    };
  }
  if (Node.isConstructorDeclaration(declaration)) {
    return { modifiers: declaration.getScope(), returnType: '' };
  }
  return methodModifiers(ctx, declaration, method);
}

function methodOf(ctx: Context, declaration: CallableDeclaration): Method {
  const method = callable(ctx, declaration);
  const isConstructor = Node.isConstructorDeclaration(declaration);
  return {
    declaration,
    callable: method,
    ...modifiersOf(ctx, declaration, method),
    name: isConstructor ? ctx.csharpClass : method.name,
    isConstructor,
  };
}

/**
 * The arguments with which an overload calls the implementation
 */
function overloadArguments(method: Callable, signature: Signature): string {
  return method.impl
    .map((type, index) => {
      const param = method.params[index];
      if (index >= signature.length) {
        return `(${type.replace('...', '[]')})null`;
      }
      return type == 'object' && signature[index] != 'object'
        ? `(object)${param.name}`
        : param.name;
    })
    .join(', ');
}

/**
 * An overload, which calls the implementation
 */
function overload(
  ctx: Context,
  method: Method,
  signature: Signature,
  separate: () => void,
) {
  const args = overloadArguments(method.callable, signature);
  separate();
  docs(ctx, method.declaration, paramNames(method.callable, signature));
  const params = paramList(method.callable, signature);
  if (method.isConstructor) {
    ctx.emit(`${method.modifiers} ${method.name}(${params})`);
    ctx.indented(() => ctx.emit(`: this(${args})`));
    ctx.emit('{');
    ctx.emit('}');
    return;
  }
  ctx.braces(
    `${method.modifiers}${method.returnType} ${method.name}(${params})`,
    () =>
      ctx.emit(
        `${method.returnType == ' void' ? '' : 'return '}${method.name}(${args});`,
      ),
  );
}

/**
 * Emits the call of the base constructor, which must be the first statement, and returns the other
 * statements
 */
function superCall(
  ctx: Context,
  declaration: CallableDeclaration,
  statements: Statement[],
): Statement[] {
  const first = statements.length ? statements[0] : undefined;
  const call =
    first && Node.isExpressionStatement(first)
      ? first.getExpression()
      : undefined;
  if (
    !Node.isCallExpression(call) ||
    call.getExpression().getKind() != SyntaxKind.SuperKeyword
  ) {
    return fail(declaration, 'Constructors must start with super()');
  }
  ctx.indented(() => ctx.emit(`: ${expression(ctx, call).code}`));
  return statements.slice(1);
}

/**
 * The implementation, with the body
 */
function implementation(ctx: Context, method: Method, separate: () => void) {
  const { declaration, callable: impl } = method;
  const modifiers =
    impl.overloads.length && !impl.implIsOverload
      ? 'protected'
      : method.modifiers;
  separate();
  docs(
    ctx,
    declaration,
    paramNames(impl, impl.impl),
    modifiers.startsWith('public'),
  );
  const body = declaration.getBody();
  if (!body || !Node.isBlock(body)) {
    return fail(declaration, 'Functions must have a body');
  }
  ctx.emit(
    `${modifiers}${method.returnType} ${method.name}(${paramList(impl, impl.impl)})`,
  );
  const statements =
    method.isConstructor && ctx.classDecl?.getBaseClass()
      ? superCall(ctx, declaration, body.getStatements())
      : body.getStatements();
  ctx.emit('{');
  ctx.indented(() => {
    for (const node of statements) {
      statement(ctx, node);
    }
  });
  ctx.emit('}');
}

export function callableDeclaration(
  ctx: Context,
  declaration: CallableDeclaration,
  separate: () => void,
) {
  const method = methodOf(ctx, declaration);
  const { overloads, impl, implIsOverload } = method.callable;
  for (const signature of overloads) {
    if (!(implIsOverload && signature === impl)) {
      overload(ctx, method, signature, separate);
    }
  }
  implementation(ctx, method, separate);
}

/**
 * Classes without constructor get those of their base class
 */
export function inheritedConstructors(
  ctx: Context,
  base: ClassDeclaration,
  separate: () => void,
) {
  const constructor = constructorOf(base);
  if (constructor === undefined) {
    return;
  }
  const inherited = callable(ctx, constructor);
  const signatures = inherited.implIsOverload
    ? inherited.overloads
    : [...inherited.overloads, inherited.impl];
  for (const signature of signatures) {
    const isImpl = !inherited.implIsOverload && signature === inherited.impl;
    const args = signature.map((type, index) => {
      const name = inherited.params[index].name;
      return isImpl && type == 'object' ? `(object)${name}` : name;
    });
    separate();
    if (!isImpl) {
      docs(ctx, constructor, paramNames(inherited, signature));
    }
    ctx.emit(
      `${isImpl ? 'protected' : 'public'} ${ctx.csharpClass}(${paramList(inherited, signature)})`,
    );
    ctx.indented(() => ctx.emit(`: base(${args.join(', ')})`));
    ctx.emit('{');
    ctx.emit('}');
  }
}
