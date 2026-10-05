/**
 * Converts an IAM policy to IAM Floyd code in TypeScript, JavaScript, Python, Java, C# and Go, for
 * the CDK and the standalone variant. Used by the policy converter in the docs and by the test in
 * test/converter/.
 *
 * `services` is the index written by lib/generator/emit/converter.ts: the service prefixes with
 * their classes and the names of their actions.
 */
var PolicyConverter = (function () {
  const languages = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'Go'];
  const variants = ['CDK', 'Standalone'];

  // Principals with their methods, of the partition aws only, as the methods use the default
  // partition. Others are added with `for*()` of their type.
  const principalPatterns = {
    AWS: [
      ['forAccount', /^arn:aws:iam::(\d{12}):root$/],
      ['forUser', /^arn:aws:iam::(\d{12}):user\/([^/]+)$/],
      ['forRole', /^arn:aws:iam::(\d{12}):role\/([^/]+)$/],
      [
        'forAssumedRoleSession',
        /^arn:aws:sts::(\d{12}):assumed-role\/([^/]+)\/([^/]+)$/,
      ],
      ['forPublic', /^\*$/],
      ['for', /^(.*)$/],
    ],
    Federated: [
      ['forFederatedFacebook', /^graph\.facebook\.com$/],
      ['forFederatedCognito', /^cognito-identity\.amazonaws\.com$/],
      ['forFederatedAmazon', /^www\.amazon\.com$/],
      ['forFederatedGoogle', /^accounts\.google\.com$/],
      ['forSaml', /^arn:aws:iam::(\d{12}):saml-provider\/(.+)$/],
      ['forFederated', /^(.*)$/],
    ],
    CanonicalUser: [['forCanonicalUser', /^(.*)$/]],
    Service: [['forService', /^(.*)$/]],
  };

  const pythonKeywords = ['for', 'if', 'in'];

  /**
   * Converts the policy. Returns the imports, the code that assigns the policy to the variable
   * `policy`, and the errors.
   *
   * @param policy The policy, parsed from JSON
   * @param services The index of the services
   * @param language One of `languages`
   * @param variant One of `variants`
   */
  function convert(policy, services, language, variant) {
    const errors = [];
    const lang = languageSpecs[language];
    if (!lang) {
      throw new Error(`Unknown language: ${language}`);
    }
    const cdk = variant === 'CDK';
    if (
      typeof policy !== 'object' ||
      policy === null ||
      !Object.hasOwn(policy, 'Statement')
    ) {
      return { imports: '', code: '', errors: ['Policy has no statements'] };
    }

    const statements = [];
    for (const statement of ensureList(policy.Statement)) {
      statements.push(...convertStatement(statement, services, errors));
    }

    const context = { cdk, helperUsed: false, classes: new Set() };
    const code = lang.policy(
      statements.map((statement) => lang.statement(statement, context)),
      context,
    );
    return { imports: lang.imports(context), code, errors };
  }

  /**
   * The code with the imports, if wanted
   */
  function render(result, withImports) {
    if (withImports && result.imports.length) {
      return `${result.imports}\n\n${result.code}`;
    }
    return result.code;
  }

  // ---------------------------------------------------------------------------------------------
  // Policy to statements: a class (null for `All`) and the method calls

  function call(method, ...args) {
    return { method, args };
  }

  function str(value) {
    return { type: 'string', value };
  }

  function convertStatement(statement, services, errors) {
    const effect = statement.Effect === 'Deny' ? 'deny' : 'allow';
    if (statement.Effect && !['Allow', 'Deny'].includes(statement.Effect)) {
      errors.push(`Invalid effect: ${statement.Effect}`);
    }

    const notAction = Object.hasOwn(statement, 'NotAction');
    const actions = ensureList(
      notAction ? statement.NotAction : statement.Action,
    );
    if (!actions || !actions.length) {
      errors.push('Statement has no element Action');
      return [];
    }

    const notResource = Object.hasOwn(statement, 'NotResource');
    const resources =
      ensureList(notResource ? statement.NotResource : statement.Resource) ||
      [];

    const notPrincipal = Object.hasOwn(statement, 'NotPrincipal');
    const principals = notPrincipal
      ? statement.NotPrincipal
      : statement.Principal;

    // the calls after the actions, the same for every statement the actions are split into
    const common = [];
    for (const resource of resources) {
      if (resource === '*') {
        // without principals, and unless inverted, a statement applies to all resources by default
        if (resources.length > 1 || notResource || principals !== undefined) {
          common.push(call('onAllResources'));
        }
      } else {
        common.push(call('on', str(resource)));
      }
    }
    for (const [operator, items] of Object.entries(statement.Condition || {})) {
      for (const [key, value] of Object.entries(items)) {
        const conditionValue = convertConditionValue(value);
        if (conditionValue === undefined) {
          errors.push(`Unsupported value of condition ${key}`);
          continue;
        }
        common.push(call('if', str(key), conditionValue, str(operator)));
      }
    }
    if (principals !== undefined) {
      common.push(...convertPrincipals(principals, errors));
    }

    const head = [call(effect)];
    if (notAction) head.push(call('notAction'));
    if (notResource) head.push(call('notResource'));
    if (notPrincipal) head.push(call('notPrincipal'));

    return splitActions(actions, notAction, services, errors).map((group) => ({
      className: group.className,
      calls: [...head, ...group.calls, ...common],
    }));
  }

  /**
   * Splits the actions into statements of the classes of their services. Actions of services
   * without class go into a statement of `All`. A NotAction is not split, as that would allow
   * more: actions of several services go into `All`.
   */
  function splitActions(actions, notAction, services, errors) {
    const groups = new Map();
    const group = (className) => {
      const key = className || '';
      if (!groups.has(key)) {
        groups.set(key, { className, calls: [] });
      }
      return groups.get(key);
    };

    const parsed = [];
    for (const action of actions) {
      if (typeof action !== 'string') {
        errors.push(`Invalid action: ${JSON.stringify(action)}`);
        continue;
      }
      if (action === '*') {
        parsed.push({ action, prefix: null, name: '*' });
        continue;
      }
      const index = action.indexOf(':');
      if (index < 1) {
        errors.push(`Invalid action: ${action}`);
        continue;
      }
      parsed.push({
        action,
        prefix: action.slice(0, index).toLowerCase(),
        name: action.slice(index + 1),
      });
    }

    const prefixes = new Set(parsed.map((p) => p.prefix));
    if (notAction && prefixes.size > 1) {
      const all = group(null);
      for (const p of parsed) {
        all.calls.push(
          p.action === '*' ? call('allActions') : call('to', str(p.action)),
        );
      }
      return [...groups.values()];
    }

    for (const p of parsed) {
      p.classes = p.prefix === null ? undefined : services[p.prefix];
      if (p.classes) {
        p.className = findClass(p.classes, p.name);
      }
    }

    // the actions that no class has, e.g. with wildcards, go to the class with the most actions
    const counts = new Map();
    for (const p of parsed) {
      if (p.className) {
        counts.set(p.className, (counts.get(p.className) || 0) + 1);
      }
    }
    for (const p of parsed) {
      if (p.prefix === null) {
        group(null).calls.push(call('allActions'));
        continue;
      }
      if (!p.classes) {
        group(null).calls.push(call('to', str(`${p.prefix}:${p.name}`)));
        continue;
      }
      if (p.className) {
        const name = p.classes[p.className].find(
          (action) => action.toLowerCase() === p.name.toLowerCase(),
        );
        group(p.className).calls.push(call(`to${upperFirst(name)}`));
        continue;
      }
      let className = Object.keys(p.classes)[0];
      for (const name of Object.keys(p.classes)) {
        if ((counts.get(name) || 0) > (counts.get(className) || 0)) {
          className = name;
        }
      }
      group(className).calls.push(
        p.name === '*' ? call('allActions') : call('to', str(p.name)),
      );
    }
    return [...groups.values()];
  }

  function findClass(classes, name) {
    if (/[*?]/.test(name)) {
      return undefined;
    }
    const lower = name.toLowerCase();
    return Object.keys(classes).find((className) =>
      classes[className].some((action) => action.toLowerCase() === lower),
    );
  }

  function convertConditionValue(value) {
    const scalar = (v) =>
      ['string', 'number', 'boolean'].includes(typeof v)
        ? String(v)
        : undefined;
    if (Array.isArray(value)) {
      const values = value.map(scalar);
      if (values.includes(undefined)) {
        return undefined;
      }
      return { type: 'strings', value: values };
    }
    const v = scalar(value);
    return v === undefined ? undefined : str(v);
  }

  function convertPrincipals(principals, errors) {
    const calls = [];
    if (typeof principals === 'string') {
      if (principals === '*') {
        calls.push(call('forPublic'));
      } else {
        errors.push(`Unsupported principal: ${principals}`);
      }
      return calls;
    }
    for (const [type, values] of Object.entries(principals || {})) {
      const patterns = principalPatterns[type];
      if (!patterns) {
        errors.push(`Unsupported principal type: ${type}`);
        continue;
      }
      for (const value of ensureList(values)) {
        if (typeof value !== 'string') {
          errors.push(`Unsupported principal: ${JSON.stringify(value)}`);
          continue;
        }
        for (const [method, pattern] of patterns) {
          const match = pattern.exec(value);
          if (match) {
            calls.push(call(method, ...match.slice(1).map(str)));
            break;
          }
        }
      }
    }
    return calls;
  }

  // ---------------------------------------------------------------------------------------------
  // Statements to code

  // TypeScript, JavaScript and Python: 'single quotes', unless the value has more single than
  // double quotes, like prettier and ruff format write them
  function singleQuoted(value) {
    const single = (value.match(/'/g) || []).length;
    const double = (value.match(/"/g) || []).length;
    const json = JSON.stringify(value);
    if (single > double) {
      return json;
    }
    return `'${json.slice(1, -1).replace(/\\"/g, '"').replace(/'/g, "\\'")}'`;
  }

  function doubleQuoted(value) {
    return JSON.stringify(value);
  }

  function upperFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  // as jsii-pacmak names the Python methods, see lib/generator/transpile/python.ts
  function snakeCase(name) {
    return name
      .replace(/([\p{Ll}\d])(\p{Lu})/gu, '$1_$2')
      .replace(/(\p{Lu})(\p{Lu}\p{Ll}+)/gu, '$1_$2')
      .toLowerCase();
  }

  function indent(code, prefix) {
    return code.replace(/^(?=.)/gm, prefix);
  }

  /**
   * A chain of method calls: the constructor, then one call per line
   */
  function chain(constructor, calls, method, args, prefix) {
    return [
      constructor,
      ...calls.map((c) => `${prefix}.${method(c.method)}(${args(c)})`),
    ].join('\n');
  }

  const typescript = (declaration) => ({
    statement(statement) {
      const args = (c) =>
        c.args
          .map((a) =>
            a.type === 'strings'
              ? `[${a.value.map(singleQuoted).join(', ')}]`
              : singleQuoted(a.value),
          )
          .join(', ');
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
      return `const policy = new Policy();\npolicy.addStatements(\n${list},\n);`;
    },
    imports(context) {
      const pkg = context.cdk ? 'cdk-iam-floyd' : 'iam-floyd';
      return declaration('Policy, Statement', pkg);
    },
  });

  const python = {
    statement(statement) {
      const method = (m) => {
        const snake = snakeCase(m);
        return pythonKeywords.includes(snake) ? `${snake}_` : snake;
      };
      const args = (c) =>
        c.args
          .map((a) =>
            a.type === 'strings'
              ? `[${a.value.map(singleQuoted).join(', ')}]`
              : singleQuoted(a.value),
          )
          .join(', ');
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
      return `policy = Policy()\npolicy.add_statements(\n${list},\n)`;
    },
    imports(context) {
      const pkg = context.cdk ? 'cdk_iam_floyd' : 'iam_floyd';
      return `from ${pkg} import Policy, Statement`;
    },
  };

  const javaArgs = (c) =>
    c.args
      .map((a) =>
        a.type === 'strings'
          ? `List.of(${a.value.map(doubleQuoted).join(', ')})`
          : doubleQuoted(a.value),
      )
      .join(', ');

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
      return chain(
        `new ${className}()`,
        statement.calls,
        method,
        javaArgs,
        '    ',
      );
    },
    policy(statements) {
      const list = indent(statements.join(',\n'), '    ');
      return `Policy policy = new Policy();\npolicy.addStatements(\n${list});`;
    },
    imports(context) {
      const pkg = context.cdk
        ? 'com.udondan.iamFloyd.cdk'
        : 'com.udondan.iamFloyd';
      const imports = [...context.classes].map((c) => `${pkg}.statement.${c}`);
      imports.push(`${pkg}.Policy`);
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
    statement(statement) {
      const args = (c) =>
        c.args
          .map((a) =>
            a.type === 'strings'
              ? a.value.length
                ? `new[] { ${a.value.map(doubleQuoted).join(', ')} }`
                : 'new string[] { }'
              : doubleQuoted(a.value),
          )
          .join(', ');
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
      return `var policy = new Policy();\npolicy.AddStatements(\n${list});`;
    },
    imports(context) {
      const namespace = context.cdk ? 'CDK.IAM.Floyd' : 'IAM.Floyd';
      return `using Policy = ${namespace}.Policy;\nusing Statement = ${namespace}.Statement;`;
    },
  };

  const go = {
    statement(statement, context) {
      // the helpers of the pointers
      const helper = context.cdk ? 'jsii' : 'iamfloyd';
      const args = (c) => {
        const values = c.args.map((a) => {
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
      const constructor = context.cdk
        ? 'cdkiamfloyd.NewPolicy("", nil)'
        : 'iamfloyd.NewPolicy(nil, nil)';
      return `policy := ${constructor}\npolicy.AddStatements(\n${list},\n)`;
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

  function ensureList(input) {
    if (input === undefined) {
      return undefined;
    }
    return Array.isArray(input) ? input : [input];
  }

  return { convert, render, languages, variants };
})();

if (typeof module !== 'undefined') {
  module.exports = PolicyConverter;
}
