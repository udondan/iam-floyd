/**
 * Tests the policy converter of the docs, docs/source/_static/js/converter.js.
 *
 * Converts the policies of test/converter/policies/ and all AWS managed policies to JavaScript, runs
 * the code and checks that its policy allows and denies the same as the input. Then the code of the
 * other languages is written as examples into the examples directory, if given: the policies of
 * test/converter/policies/ and those of `managedPolicies`, as `converter-<name>`, with their
 * results as .result files. test/jsii/run.sh and test/transpile/run.sh run them with the other
 * examples.
 *
 * The variant is that of lib/: CDK after `make cdk`, Standalone otherwise.
 *
 * Usage: ts-node test/converter/cases.ts <CDK|Standalone> [examples directory]
 */
import * as fs from 'fs';
import { createRequire } from 'module';
import * as vm from 'vm';

import { App, Stack } from 'aws-cdk-lib';

import { ManagedPolicyDocument, Statement } from '../../lib';

interface Result {
  imports: string;
  code: string;
  errors: string[];
}

interface Converter {
  convert(
    policy: unknown,
    services: unknown,
    language: string,
    variant: string,
  ): Result;
}

type Json = Record<string, unknown>;

const converter = createRequire(__filename)(
  '../../docs/source/_static/js/converter.js',
) as Converter;
const services = JSON.parse(
  fs.readFileSync('docs/source/_static/policy-converter/services.json', 'utf8'),
) as unknown;
const policiesDir = 'test/converter/policies';
const managedPoliciesDir = 'docs/source/_static/managed-policies';

// the AWS managed policies that are written as examples, in addition to the policies of policiesDir
const managedPolicies = [
  'AdministratorAccess',
  'PowerUserAccess',
  'ReadOnlyAccess',
  'AmazonEKSClusterPolicy',
];

// as test/jsii/examples/compare.py replaces them
const pseudoParameters: Record<string, string> = {
  'AWS::Partition': 'aws',
  'AWS::Region': '*',
  'AWS::AccountId': '*',
  'AWS::URLSuffix': 'amazonaws.com',
};

const [variant, examplesDir] = process.argv.slice(2);
if (!['CDK', 'Standalone'].includes(variant)) {
  console.error(
    'Usage: ts-node test/converter/cases.ts <CDK|Standalone> [examples directory]',
  );
  process.exit(1);
}
const cdk = variant === 'CDK';
const stack = cdk ? new Stack(new App(), 'Stack') : undefined;
const context = vm.createContext({ ManagedPolicyDocument, Statement });

/**
 * Converts the policy to JavaScript and returns the policy of the code
 */
function run(policy: unknown): Json {
  const result = converter.convert(policy, services, 'JavaScript', variant);
  if (result.errors.length) {
    throw new Error(result.errors.join(', '));
  }
  const typescript = converter.convert(policy, services, 'TypeScript', variant);
  if (typescript.code !== result.code) {
    throw new Error('TypeScript and JavaScript differ');
  }
  const value = vm.runInContext(
    `(() => {\n${result.code}\nreturn policy;\n})()`,
    context,
  ) as ManagedPolicyDocument;
  if (stack) {
    return unresolve(stack.resolve(value.toJSON())) as Json;
  }
  return value.toJSON() as Json;
}

function unresolve(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(unresolve);
  }
  if (typeof value === 'object' && value !== null) {
    const object = value as Json;
    const keys = Object.keys(object);
    if (keys.length === 1 && keys[0] === 'Ref') {
      return pseudoParameters[object.Ref as string] ?? object;
    }
    if (keys.length === 1 && keys[0] === 'Fn::Join') {
      const [separator, parts] = object['Fn::Join'] as [string, unknown[]];
      return parts.map(unresolve).join(separator);
    }
    return Object.fromEntries(
      Object.entries(object).map(([key, item]) => [key, unresolve(item)]),
    );
  }
  return value;
}

function list(value: unknown): unknown[] {
  if (value === undefined) {
    return [];
  }
  return Array.isArray(value) ? (value as unknown[]) : [value];
}

function sortedSet(values: unknown[], lower = false): string {
  const strings = values.map((v) =>
    lower ? String(v).toLowerCase() : String(v),
  );
  return JSON.stringify([...new Set(strings)].sort());
}

function principals(value: unknown): string {
  if (value === undefined) {
    return '';
  }
  const object = (value === '*' ? { AWS: '*' } : value) as Json;
  return JSON.stringify(
    Object.keys(object)
      .sort()
      .map((type) => [type, sortedSet(list(object[type]))]),
  );
}

function conditions(value: unknown): string {
  const object = (value ?? {}) as Record<string, Json>;
  return JSON.stringify(
    Object.keys(object)
      .sort()
      .map((operator) => [
        operator,
        Object.keys(object[operator])
          .sort()
          .map((key) => [key, list(object[operator][key]).map(String)]),
      ]),
  );
}

/**
 * Throws if the statements of the output don't allow or deny the same as the statement of the
 * input
 */
function check(input: Json, output: Json[]) {
  const fail = (message: string) => {
    throw new Error(
      `${message}\n  input:  ${JSON.stringify(input)}\n  output: ${JSON.stringify(output)}`,
    );
  };
  const actionKey = 'NotAction' in input ? 'NotAction' : 'Action';
  const resourceKey = 'NotResource' in input ? 'NotResource' : 'Resource';
  const principalKey = 'NotPrincipal' in input ? 'NotPrincipal' : 'Principal';
  if (actionKey === 'NotAction' && output.length !== 1) {
    fail('NotAction is split into several statements');
  }
  const actions: unknown[] = [];
  for (const statement of output) {
    actions.push(...list(statement[actionKey]));
    if (statement.Effect !== (input.Effect ?? 'Allow')) {
      fail('Effect differs');
    }
    for (const key of Object.keys(statement)) {
      if (
        !['Effect', actionKey, resourceKey, principalKey, 'Condition'].includes(
          key,
        )
      ) {
        fail(`Unexpected ${key}`);
      }
    }
    // without resources and principals, iam-floyd adds the resource *
    const resources =
      resourceKey in input || principalKey in input
        ? list(input[resourceKey])
        : ['*'];
    if (sortedSet(list(statement[resourceKey])) !== sortedSet(resources)) {
      fail(`${resourceKey} differs`);
    }
    if (
      principals(statement[principalKey]) !== principals(input[principalKey])
    ) {
      fail(`${principalKey} differs`);
    }
    if (conditions(statement.Condition) !== conditions(input.Condition)) {
      fail('Condition differs');
    }
  }
  if (sortedSet(actions, true) !== sortedSet(list(input[actionKey]), true)) {
    fail(`${actionKey} differs`);
  }
}

function checkPolicy(name: string, policy: Json) {
  try {
    for (const statement of list(policy.Statement) as Json[]) {
      const output = run({ Statement: [statement] });
      check(statement, list(output.Statement) as Json[]);
    }
  } catch (e) {
    const error = e as Error;
    error.message = `${name}: ${error.message}`;
    throw error;
  }
}

function indent(code: string, prefix: string): string {
  return code.replace(/^(?=.)/gm, prefix);
}

// e.g. converter-actions: ExampleConverterActions, as the runners of Java and .NET name the classes
function className(name: string): string {
  return `Example${name
    .split(/[-.]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}`;
}

const wrappers: Record<string, [string, (name: string, r: Result) => string]> =
  {
    Python: [
      'py',
      (_, r) =>
        `${r.imports}\n\n\ndef example():\n${indent(r.code, '    ')}\n    return policy\n`,
    ],
    Java: [
      'java',
      (name, r) =>
        `${r.imports}\n\nclass ${className(name)} {\n  static Object example() {\n${indent(r.code, '    ')}\n    return policy;\n  }\n}\n`,
    ],
    'C#': [
      'cs',
      (name, r) =>
        `${r.imports}\n\nstatic class ${className(name)}\n{\n    public static object Example()\n    {\n${indent(r.code, '        ')}\n        return policy;\n    }\n}\n`,
    ],
    Go: [
      'go',
      (name, r) =>
        `package main\n\n${r.imports}\n\nfunc init() {\n\texamples["${name}"] = func() any {\n${indent(r.code, '\t\t')}\n\t\treturn policy\n\t}\n}\n`,
    ],
  };

function writeExample(name: string, policy: Json) {
  const dir = `${examplesDir}/${name}`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    `${dir}/${name}.result`,
    `${JSON.stringify(run(policy), null, 2)}\n`,
  );
  for (const [language, [extension, wrap]] of Object.entries(wrappers)) {
    const result = converter.convert(policy, services, language, variant);
    fs.writeFileSync(`${dir}/${name}.${extension}`, wrap(name, result));
  }
}

// aws-cdk-lib rejects actions that IAM allows, e.g. with ?
const cdkAction = /^(\*|[a-zA-Z0-9-]+:[a-zA-Z0-9*]+)$/;

/**
 * Removes the statements with actions that the variant doesn't support
 */
function supported(policy: Json): Json {
  if (!cdk) {
    return policy;
  }
  return {
    ...policy,
    Statement: (list(policy.Statement) as Json[]).filter((statement) =>
      list(statement.Action ?? statement.NotAction).every((action) =>
        cdkAction.test(String(action)),
      ),
    ),
  };
}

const policies: Record<string, Json> = {};
for (const file of fs.readdirSync(policiesDir).sort()) {
  policies[file.replace(/\.json$/, '')] = supported(
    JSON.parse(fs.readFileSync(`${policiesDir}/${file}`, 'utf8')) as Json,
  );
}
const managed: Record<string, Json> = {};
for (const file of fs.readdirSync(managedPoliciesDir).sort()) {
  if (file.endsWith('.json') && file !== 'index.json') {
    managed[file.replace(/\.json$/, '')] = JSON.parse(
      fs.readFileSync(`${managedPoliciesDir}/${file}`, 'utf8'),
    ) as Json;
  }
}

for (const [name, policy] of Object.entries({ ...policies, ...managed })) {
  checkPolicy(name, policy);
}
console.log(
  `Converted ${Object.keys(policies).length + Object.keys(managed).length} policies (${variant})`,
);

if (examplesDir) {
  for (const [name, policy] of Object.entries(policies)) {
    writeExample(`converter-${name}`, policy);
  }
  for (const name of managedPolicies) {
    writeExample(`converter-${name}`, managed[name]);
  }
}
