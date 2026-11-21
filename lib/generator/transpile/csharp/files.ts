import {
  EnumDeclaration,
  FunctionDeclaration,
  Node,
  SourceFile,
  SyntaxKind,
  VariableStatement,
} from 'ts-morph';

import { fail } from '../index';
import { className, containerOf } from './classes';
import { Context } from './context';
import { classDeclaration, enumDeclaration } from './declarations';
import { moduleMembers } from './members';

/**
 * A C# file with one class
 */
interface ClassFile {
  /** The declaration of the class, where errors are reported */
  node: Node;
  namespace: string;
  rootNamespace: string;
  name: string;
}

/**
 * The namespaces of .NET, and how to find out that the code uses them
 */
const systemNamespaces: [string, RegExp][] = [
  [
    'System',
    /\b(ArgumentException|DateTime|DateTimeKind|Func|StringComparison)\b/,
  ],
  ['System.Collections', /\bIEnumerable\b(?!<)/],
  ['System.Collections.Generic', /\b(List|Dictionary|HashSet|IEnumerable)</],
  ['System.Text.RegularExpressions', /\bRegex\b/],
];

/**
 * The usings: the namespaces of .NET found in the code, without strings and comments, and the
 * namespaces of the classes that the code referenced
 */
function usings(ctx: Context, body: string, namespace: string): string[] {
  const code = body.replace(/"(?:[^"\\]|\\.)*"/g, '""').replace(/\/\/.*/g, '');
  const names = new Set(
    systemNamespaces
      .filter(([, pattern]) => pattern.test(code))
      .map(([name]) => name),
  );
  for (const referenced of ctx.namespaces) {
    if (referenced != namespace) {
      names.add(referenced);
    }
  }
  return [...names].sort().map((name) => `using ${name};`);
}

/**
 * Writes one C# file with the class that `fn` emits
 */
function writeFile(ctx: Context, file: ClassFile, fn: () => void) {
  const dir = file.namespace
    .slice(file.rootNamespace.length)
    .split('.')
    .filter((part) => part.length);
  const path = [...dir, `${file.name}.cs`].join('/');
  if (ctx.files.has(path)) {
    fail(
      file.node,
      `C# class ${file.namespace}.${file.name} is already declared`,
    );
  }
  ctx.startFile(file.name);
  fn();
  const body = ctx.lines.join('\n');
  ctx.files.set(
    path,
    `${[
      `// ${ctx.options.header}`,
      ...usings(ctx, body, file.namespace),
      '',
      `namespace ${file.namespace};`,
      '',
      body,
    ].join('\n')}\n`,
  );
}

/**
 * The statements at module level that are not translated themselves
 */
const declarationsOnly = new Set([
  SyntaxKind.ImportDeclaration,
  SyntaxKind.ExportDeclaration,
  SyntaxKind.InterfaceDeclaration,
  SyntaxKind.TypeAliasDeclaration,
  SyntaxKind.ClassDeclaration,
]);

/**
 * The functions and constants of a file. Enums are written to files of their own on the way.
 */
function moduleStatements(
  file: SourceFile,
  writeEnum: (declaration: EnumDeclaration) => void,
): (FunctionDeclaration | VariableStatement)[] {
  const members: (FunctionDeclaration | VariableStatement)[] = [];
  for (const statement of file.getStatements()) {
    if (declarationsOnly.has(statement.getKind())) {
      continue;
    }
    if (Node.isEnumDeclaration(statement)) {
      writeEnum(statement);
    } else if (
      Node.isFunctionDeclaration(statement) ||
      Node.isVariableStatement(statement)
    ) {
      members.push(statement);
    } else {
      fail(statement, 'Unsupported statement at module level');
    }
  }
  return members;
}

export function sourceFile(
  ctx: Context,
  file: SourceFile,
  rootNamespace: string,
) {
  const namespace = ctx.options.namespaceOf(file);
  const classes = file.getClasses();
  const write = (node: Node, name: string, fn: () => void) =>
    writeFile(ctx, { node, namespace, rootNamespace, name }, fn);
  const members = moduleStatements(file, (declaration) =>
    write(declaration, declaration.getName(), () =>
      enumDeclaration(ctx, declaration),
    ),
  );
  if (classes.length > 1 && members.length) {
    fail(
      members[0],
      'Functions and constants are supported only in files with at most one class',
    );
  }
  for (const declaration of classes) {
    write(declaration, className(declaration), () =>
      classDeclaration(ctx, declaration, members),
    );
  }
  if (classes.length == 0 && members.length) {
    const container = containerOf(ctx, members[0]);
    write(members[0], container.name, () => {
      ctx.braces(`internal static class ${container.name}`, () =>
        moduleMembers(ctx, members, container),
      );
    });
  }
}
