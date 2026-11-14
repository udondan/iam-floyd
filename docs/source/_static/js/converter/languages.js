/**
 * The languages of the policy converter (converter.js): per language, the code of a statement, of
 * the policy and of the imports
 */
var PolicyConverterCommon;
var PolicyConverterRender;
if (typeof module !== 'undefined') {
  PolicyConverterCommon = require('./common.js');
  PolicyConverterRender = require('./render.js');
}

var PolicyConverterLanguages = (function (
  { upperFirst },
  {
    singleQuoted,
    doubleQuoted,
    singleQuotedList,
    snakeCase,
    renderArgs,
    indent,
    chain,
  },
) {
  // the Python keywords that are names of methods or constants
  const pythonKeywords = ['for', 'if', 'in', 'lambda'];

  const typescript = (declaration) => ({
    statement(statement, context) {
      const args = (c) =>
        renderArgs(c, context, singleQuotedList, singleQuoted);
      return chain(
        `new Statement.${statement.className || 'All'}()`,
        statement.calls,
        (m) => m,
        args,
        '  ',
      );
    },
    policy(statements) {
      const list = indent(statements.join(',\n'), '  ');
      return `const policy = new ManagedPolicyDocument(\n${list},\n);`;
    },
    imports(context) {
      const pkg = context.cdk ? 'cdk-iam-floyd' : 'iam-floyd';
      const names = [
        ...context.constants,
        'ManagedPolicyDocument',
        'Statement',
      ];
      return declaration(names.sort().join(', '), pkg);
    },
  });

  const python = {
    statement(statement, context) {
      const method = (m) => {
        const snake = snakeCase(m);
        return pythonKeywords.includes(snake) ? `${snake}_` : snake;
      };
      // like jsii-pacmak, a keyword gets a `_`, e.g. `AwsServicePrincipal.LAMBDA_`
      const constantName = (n) =>
        pythonKeywords.includes(n.toLowerCase()) ? `${n}_` : n;
      const args = (c) =>
        renderArgs(c, context, singleQuotedList, singleQuoted, constantName);
      return chain(
        `Statement.${statement.className || 'All'}()`,
        statement.calls,
        method,
        args,
        '    ',
      );
    },
    policy(statements) {
      const list = indent(statements.join(',\n'), '    ');
      return `policy = ManagedPolicyDocument(\n${list},\n)`;
    },
    imports(context) {
      const pkg = context.cdk ? 'cdk_iam_floyd' : 'iam_floyd';
      const names = [
        ...context.constants,
        'ManagedPolicyDocument',
        'Statement',
      ];
      return `from ${pkg} import ${names.sort().join(', ')}`;
    },
  };

  const java = {
    statement(statement, context) {
      const className = statement.className || 'All';
      context.classes.add(className);
      const method = (m) =>
        ['if', 'for'].includes(m) ? `do${upperFirst(m)}` : m;
      if (
        statement.calls.some((c) => c.args.some((a) => a.type === 'strings'))
      ) {
        context.listUsed = true;
      }
      const args = (c) =>
        renderArgs(
          c,
          context,
          (values) => `List.of(${values.map(doubleQuoted).join(', ')})`,
          doubleQuoted,
        );
      return chain(`new ${className}()`, statement.calls, method, args, '    ');
    },
    policy(statements) {
      const list = indent(statements.join(',\n'), '    ');
      return `ManagedPolicyDocument policy = new ManagedPolicyDocument(\n${list});`;
    },
    imports(context) {
      const pkg = context.cdk
        ? 'com.udondan.iamFloyd.cdk'
        : 'com.udondan.iamFloyd';
      const imports = [...context.classes].map((c) => `${pkg}.statement.${c}`);
      imports.push(`${pkg}.ManagedPolicyDocument`);
      imports.push(...[...context.constants].map((c) => `${pkg}.${c}`));
      if (context.listUsed) {
        imports.push('java.util.List');
      }
      return imports
        .sort()
        .map((i) => `import ${i};`)
        .join('\n');
    },
  };

  const csharp = {
    statement(statement, context) {
      const args = (c) =>
        renderArgs(
          c,
          context,
          (values) =>
            values.length
              ? `new[] { ${values.map(doubleQuoted).join(', ')} }`
              : 'new string[] { }',
          doubleQuoted,
        );
      return chain(
        `new Statement.${statement.className || 'All'}()`,
        statement.calls,
        upperFirst,
        args,
        '    ',
      );
    },
    policy(statements) {
      const list = indent(statements.join(',\n'), '    ');
      return `var policy = new ManagedPolicyDocument(\n${list});`;
    },
    imports(context) {
      const namespace = context.cdk ? 'CDK.IAM.Floyd' : 'IAM.Floyd';
      return `using ${namespace};\nusing Statement = ${namespace}.Statement;`;
    },
  };

  const go = {
    statement(statement, context) {
      // the helpers of the pointers
      const helper = context.cdk ? 'jsii' : 'iamfloyd';
      const pkg = context.cdk ? 'cdkiamfloyd' : 'iamfloyd';
      const args = (c) => {
        const values = c.args.map((a) => {
          // functions in jsii, string constants in the native package
          if (a.type === 'constant') {
            return context.cdk
              ? `${pkg}.${a.className}_${a.name}()`
              : `${pkg}.String(${pkg}.${a.className}_${a.name})`;
          }
          context.helperUsed = true;
          return a.type === 'strings'
            ? `${helper}.Strings(${a.value.map(doubleQuoted).join(', ')})`
            : `${helper}.String(${doubleQuoted(a.value)})`;
        });
        // the optional type of the principal
        if (c.method === 'for') values.push('nil');
        return values.join(', ');
      };
      const calls = statement.calls.map(
        (c) => `\t${upperFirst(c.method)}(${args(c)})`,
      );
      return [
        `statement.New${statement.className || 'All'}(nil)`,
        ...calls,
      ].join('.\n');
    },
    policy(statements, context) {
      const list = indent(statements.join(',\n'), '\t');
      const pkg = context.cdk ? 'cdkiamfloyd' : 'iamfloyd';
      return `policy := ${pkg}.NewManagedPolicyDocument(\n${list},\n)`;
    },
    imports(context) {
      const imports = context.cdk
        ? [
            ...(context.helperUsed ? ['github.com/aws/jsii-runtime-go'] : []),
            'udondan.github.io/iam-floyd/go/cdkiamfloyd',
            'udondan.github.io/iam-floyd/go/cdkiamfloyd/statement',
          ]
        : [
            'udondan.github.io/iam-floyd/go/iamfloyd',
            'udondan.github.io/iam-floyd/go/iamfloyd/statement',
          ];
      return `import (\n${imports.map((i) => `\t"${i}"`).join('\n')}\n)`;
    },
  };

  const languageSpecs = {
    TypeScript: typescript((name, pkg) => `import { ${name} } from '${pkg}';`),
    JavaScript: typescript(
      (name, pkg) => `const { ${name} } = require('${pkg}');`,
    ),
    Python: python,
    Java: java,
    'C#': csharp,
    Go: go,
  };

  return languageSpecs;
})(PolicyConverterCommon, PolicyConverterRender);

if (typeof module !== 'undefined') {
  module.exports = PolicyConverterLanguages;
}
