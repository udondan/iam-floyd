/**
 * The helpers that the languages of the policy converter (converter.js) render the code with
 */
var PolicyConverterRender = (function () {
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

  const singleQuotedList = (values) =>
    `[${values.map(singleQuoted).join(', ')}]`;

  // as jsii-pacmak names the Python methods, see lib/generator/transpile/python.ts
  function snakeCase(name) {
    return name
      .replace(/([\p{Ll}\d])(\p{Lu})/gu, '$1_$2')
      .replace(/(\p{Lu})(\p{Lu}\p{Ll}+)/gu, '$1_$2')
      .toLowerCase();
  }

  /**
   * The arguments of a call. A constant is `Class.NAME`, the class is added to the imports
   */
  function renderArgs(c, context, strings, string, constantName = (n) => n) {
    return c.args
      .map((a) => {
        if (a.type === 'constant') {
          context.constants.add(a.className);
          return `${a.className}.${constantName(a.name)}`;
        }
        return a.type === 'strings' ? strings(a.value) : string(a.value);
      })
      .join(', ');
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

  return {
    singleQuoted,
    doubleQuoted,
    singleQuotedList,
    snakeCase,
    renderArgs,
    indent,
    chain,
  };
})();

if (typeof module !== 'undefined') {
  module.exports = PolicyConverterRender;
}
