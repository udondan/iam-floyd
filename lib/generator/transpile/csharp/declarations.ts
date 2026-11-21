import {
  ClassDeclaration,
  EnumDeclaration,
  EnumMember,
  FunctionDeclaration,
  MethodDeclaration,
  Scope,
  VariableStatement,
} from 'ts-morph';

import { fail, ownConstructor } from '../index';
import { returnType } from './callables';
import {
  className,
  containerOf,
  interfaceMethods,
  isGeneric,
  reference,
} from './classes';
import { Context } from './context';
import { docs } from './docs';
import { callableDeclaration, inheritedConstructors } from './functions';
import { checkMemberNames, moduleMembers, property } from './members';
import { csharpConstantName, csharpMethodName, csharpString } from './names';
import { xmlDoc } from './xml';

export function enumDeclaration(ctx: Context, declaration: EnumDeclaration) {
  docs(ctx, declaration);
  ctx.braces(`public static class ${declaration.getName()}`, () => {
    const names = new Set<string>();
    const separate = ctx.separator();
    for (const member of declaration.getMembers()) {
      enumMember(ctx, member, names, separate);
    }
  });
}

function enumMember(
  ctx: Context,
  member: EnumMember,
  names: Set<string>,
  separate: () => void,
) {
  const value = member.getValue();
  if (typeof value !== 'string') {
    return fail(member, 'Enum members must be strings');
  }
  const constant = csharpConstantName(member.getName());
  if (names.has(constant)) {
    fail(member, `C# name ${constant} is already used`);
  }
  names.add(constant);
  separate();
  docs(ctx, member);
  ctx.emit(`public const string ${constant} = ${csharpString(value)};`);
}

/**
 * What the declaration of a class needs to know about it
 */
interface ClassInfo {
  declaration: ClassDeclaration;
  name: string;
  generic: boolean;
  base?: ClassDeclaration;
  interfaceMethods: MethodDeclaration[];
}

function isUnsupported(declaration: ClassDeclaration): boolean {
  return (
    declaration.isAbstract() ||
    declaration.getTypeParameters().length > 0 ||
    declaration.getImplements().length > 0 ||
    declaration.getDecorators().length > 0
  );
}

function baseClause(ctx: Context, cls: ClassInfo): string {
  if (cls.base === undefined) {
    return '';
  }
  const baseName = reference(
    ctx,
    className(cls.base),
    ctx.options.namespaceOf(cls.base.getSourceFile()),
  );
  const typeArgument = isGeneric(ctx, cls.base)
    ? `<${cls.generic ? 'T' : cls.name}>`
    : '';
  return ` : ${baseName}${typeArgument}`;
}

function classHeader(ctx: Context, cls: ClassInfo): string {
  const typeParameter = cls.generic ? '<T>' : '';
  const base = baseClause(ctx, cls);
  const implemented = cls.interfaceMethods.length
    ? `${cls.base ? ',' : ' :'} I${cls.name}`
    : '';
  const constraint = cls.generic ? ` where T : ${cls.name}<T>` : '';
  return `public class ${cls.name}${typeParameter}${base}${implemented}${constraint}`;
}

function publicMethodNames(declaration: ClassDeclaration): Set<string> {
  return new Set(
    declaration
      .getMethods()
      .filter((method) => method.getScope() == Scope.Public)
      .map((method) => csharpMethodName(method.getName())),
  );
}

/**
 * The interface of the last class with a type parameter, by which it can be referenced
 */
function emitInterface(ctx: Context, cls: ClassInfo) {
  if (cls.interfaceMethods.length == 0) {
    return;
  }
  ctx.emitLines(
    xmlDoc([
      `The methods of <see cref="${cls.name}{T}"/>, by which it can be referenced`,
    ]),
  );
  ctx.braces(`public interface I${cls.name}`, () => {
    for (const method of cls.interfaceMethods) {
      ctx.emit(
        `${returnType(ctx, method)} ${csharpMethodName(method.getName())}();`,
      );
    }
  });
  ctx.emit('');
}

function classBody(
  ctx: Context,
  cls: ClassInfo,
  members: (FunctionDeclaration | VariableStatement)[],
) {
  const { declaration, base } = cls;
  checkMemberNames(declaration);
  const separate = ctx.separator();
  for (const prop of declaration.getProperties()) {
    separate();
    property(ctx, prop);
  }
  const constructor = ownConstructor(declaration);
  if (constructor) {
    callableDeclaration(ctx, constructor, separate);
  } else if (base) {
    inheritedConstructors(ctx, base, separate);
  }
  for (const method of declaration.getMethods()) {
    callableDeclaration(ctx, method, separate);
  }
  if (cls.generic && !(base && isGeneric(ctx, base))) {
    separate();
    ctx.emitLines(xmlDoc(['The statement itself, typed as the subclass']));
    ctx.braces('protected T Self()', () => ctx.emit('return (T)this;'));
  }
  if (members.length) {
    moduleMembers(ctx, members, containerOf(ctx, members[0]), separate);
  }
}

export function classDeclaration(
  ctx: Context,
  declaration: ClassDeclaration,
  members: (FunctionDeclaration | VariableStatement)[],
) {
  if (isUnsupported(declaration)) {
    fail(declaration, 'Unsupported class declaration');
  }
  ctx.classDecl = declaration;
  const name = className(declaration);
  const cls: ClassInfo = {
    declaration,
    name,
    generic: isGeneric(ctx, declaration),
    base: declaration.getBaseClass(),
    interfaceMethods: interfaceMethods(ctx, declaration),
  };
  const header = classHeader(ctx, cls);
  ctx.publicMethods.set(name, publicMethodNames(declaration));
  emitInterface(ctx, cls);
  docs(ctx, declaration);
  ctx.braces(header, () => classBody(ctx, cls, members));
  ctx.classDecl = undefined;
}
