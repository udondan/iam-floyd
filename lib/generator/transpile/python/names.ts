import { MethodDeclaration, Node, PropertyDeclaration, Scope } from 'ts-morph';

const keywords = new Set([
  'False',
  'None',
  'True',
  'and',
  'as',
  'assert',
  'async',
  'await',
  'break',
  'class',
  'continue',
  'def',
  'del',
  'elif',
  'else',
  'except',
  'finally',
  'for',
  'from',
  'global',
  'if',
  'import',
  'in',
  'is',
  'lambda',
  'nonlocal',
  'not',
  'or',
  'pass',
  'raise',
  'return',
  'try',
  'while',
  'with',
  'yield',
]);

/**
 * The Python module of a service, from the name of its file
 */
export function pythonServiceModule(filename: string): string {
  return `_${filename.replace(/-/g, '_')}`;
}

/**
 * snake_case as jsii-pacmak names the Python members, e.g. `ifAwsPrincipalIsAWSService` to
 * `if_aws_principal_is_aws_service`
 */
export function snakeCase(name: string): string {
  return name
    .replace(/([\p{Ll}\d])(\p{Lu})/gu, '$1_$2')
    .replace(/(\p{Lu})(\p{Lu}\p{Ll}+)/gu, '$1_$2')
    .toLowerCase();
}

/**
 * Python name of a method, parameter or variable
 */
export function pythonName(name: string): string {
  const snake = snakeCase(name);
  return keywords.has(snake) ? `${snake}_` : snake;
}

/**
 * Python name of a static property, an enum member or a module constant. Like jsii-pacmak, a
 * keyword gets a `_` before the upper case, e.g. `AwsServicePrincipal.LAMBDA_`
 */
export function pythonConstantName(name: string): string {
  return pythonName(name).toUpperCase();
}

export function memberName(
  member: PropertyDeclaration | MethodDeclaration,
): string {
  const name = member.getName();
  if (Node.isPropertyDeclaration(member) && member.isStatic()) {
    return pythonConstantName(name);
  }
  const scope = member.getScope();
  const python = pythonName(name);
  return scope == Scope.Public ? python : `_${python}`;
}

export function functionName(name: string, exported: boolean): string {
  return exported ? pythonName(name) : `_${pythonName(name)}`;
}

export function moduleConstantName(name: string, exported: boolean): string {
  return exported ? pythonConstantName(name) : `_${pythonConstantName(name)}`;
}
