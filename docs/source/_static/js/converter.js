/**
 * Converts an IAM policy to IAM Floyd code in TypeScript, JavaScript, Python, Java, C# and Go, for
 * the CDK and the standalone variant. Used by the policy converter in the docs and by the test in
 * test/converter/.
 *
 * `index` is the index written by lib/generator/emit/converter.ts: the service prefixes with
 * their classes and the names of their actions, and the service principals with the names of their
 * constants in `AwsServicePrincipal`.
 *
 * The parts are in converter/, without bundler: in the browser, each is a script that sets a
 * global and must be loaded before this one, in the order of their dependencies; in Node.js, they
 * are required.
 */
var PolicyConverterCommon;
var PolicyConverterStatements;
var PolicyConverterLanguages;
if (typeof module !== 'undefined') {
  PolicyConverterCommon = require('./converter/common.js');
  PolicyConverterStatements = require('./converter/statements.js');
  PolicyConverterLanguages = require('./converter/languages.js');
}

var PolicyConverter = (function (
  { ensureList },
  { convertStatement },
  languageSpecs,
) {
  const languages = ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#', 'Go'];
  const variants = ['CDK', 'Standalone'];

  /**
   * Converts the policy. Returns the imports, the code that assigns the policy to the variable
   * `policy`, and the errors.
   *
   * @param policy The policy, parsed from JSON
   * @param index The index of the services and service principals
   * @param language One of `languages`
   * @param variant One of `variants`
   */
  function convert(policy, index, language, variant) {
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
      statements.push(...convertStatement(statement, index, errors));
    }

    const context = {
      cdk,
      helperUsed: false,
      classes: new Set(),
      constants: new Set(),
    };
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

  return { convert, render, languages, variants };
})(PolicyConverterCommon, PolicyConverterStatements, PolicyConverterLanguages);

if (typeof module !== 'undefined') {
  module.exports = PolicyConverter;
}
