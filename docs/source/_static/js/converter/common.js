/**
 * The helpers that the parts of the policy converter (converter.js) share.
 *
 * Each part is a script that sets a global in the browser, and a module in Node.js.
 */
var PolicyConverterCommon = (function () {
  // a method call of a statement
  function call(method, ...args) {
    return { method, args };
  }

  function str(value) {
    return { type: 'string', value };
  }

  // a static property, e.g. `AwsServicePrincipal.LAMBDA`
  function constant(className, name) {
    return { type: 'constant', className, name };
  }

  function upperFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function ensureList(input) {
    if (input === undefined) {
      return undefined;
    }
    return Array.isArray(input) ? input : [input];
  }

  return { call, str, constant, upperFirst, ensureList };
})();

if (typeof module !== 'undefined') {
  module.exports = PolicyConverterCommon;
}
