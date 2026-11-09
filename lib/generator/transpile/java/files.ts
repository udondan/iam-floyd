import {
  EnumDeclaration,
  FunctionDeclaration,
  Node,
  SourceFile,
  Statement,
  SyntaxKind,
  VariableStatement,
} from 'ts-morph';

import { fail } from '../index';
import { classDeclaration, moduleMembers } from './class-declaration';
import { containerOf, oneClassPerFile } from './classes';
import { className, Context } from './context';
import { docs } from './docs';
import { javaConstantName, javaString } from './names';

export type ModuleMember = FunctionDeclaration | VariableStatement;

/**
 * The statements at module level that have no Java code of their own, or are written separately
 */
const skipped = new Set([
  SyntaxKind.ImportDeclaration,
  SyntaxKind.ExportDeclaration,
  SyntaxKind.InterfaceDeclaration,
  SyntaxKind.TypeAliasDeclaration,
  SyntaxKind.ClassDeclaration,
]);

function enumDeclaration(ctx: Context, declaration: EnumDeclaration) {
  const name = declaration.getName();
  docs(ctx, declaration);
  ctx.emitBlock(`public final class ${name}`, () => {
    ctx.emit(`private ${name}() {}`);
    const names = new Set<string>();
    for (const member of declaration.getMembers()) {
      const value = member.getValue();
      if (typeof value !== 'string') {
        fail(member, 'Enum members must be strings');
      }
      const constant = javaConstantName(member.getName());
      if (names.has(constant)) {
        fail(member, `Java name ${constant} is already used`);
      }
      names.add(constant);
      ctx.emit('');
      docs(ctx, member);
      ctx.emit(
        `public static final String ${constant} = ${javaString(value)};`,
      );
    }
  });
}

/**
 * Writes the enums of a module, and collects its functions and constants
 */
function moduleStatement(
  ctx: Context,
  pkg: string,
  statement: Statement,
  members: ModuleMember[],
) {
  if (skipped.has(statement.getKind())) {
    return;
  }
  if (Node.isEnumDeclaration(statement)) {
    ctx.writeFile(statement, pkg, statement.getName(), () =>
      enumDeclaration(ctx, statement),
    );
  } else if (
    Node.isFunctionDeclaration(statement) ||
    Node.isVariableStatement(statement)
  ) {
    members.push(statement);
  } else {
    fail(statement, 'Unsupported statement at module level');
  }
}

/**
 * The package-private class with the functions and constants of a file without class
 */
function holderClass(ctx: Context, pkg: string, members: ModuleMember[]) {
  const container = containerOf(ctx, members[0]);
  ctx.writeFile(members[0], pkg, container.name, () => {
    ctx.emitBlock(`final class ${container.name}`, () => {
      ctx.emit(`private ${container.name}() {}`);
      moduleMembers(ctx, members, container);
    });
  });
}

/**
 * Writes the Java files of a source file: one per class and enum, and a holder class for the
 * functions and constants of a file without class
 */
export function sourceFile(ctx: Context, file: SourceFile) {
  const pkg = ctx.options.packageOf(file);
  const classes = file.getClasses();
  const members: ModuleMember[] = [];
  for (const statement of file.getStatements()) {
    moduleStatement(ctx, pkg, statement, members);
  }
  if (classes.length > 1 && members.length) {
    fail(members[0], oneClassPerFile);
  }
  for (const declaration of classes) {
    ctx.writeFile(declaration, pkg, className(declaration), () =>
      classDeclaration(ctx, declaration, members),
    );
  }
  if (classes.length == 0 && members.length) {
    holderClass(ctx, pkg, members);
  }
}
