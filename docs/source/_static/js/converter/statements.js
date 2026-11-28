/**
 * Converts the statements of a policy for the policy converter (converter.js): a class (null for
 * `All`) and the method calls per statement
 */
var PolicyConverterCommon;
var PolicyConverterActions;
var PolicyConverterPrincipals;
if (typeof module !== 'undefined') {
  PolicyConverterCommon = require('./common.js');
  PolicyConverterActions = require('./actions.js');
  PolicyConverterPrincipals = require('./principals.js');
}

var PolicyConverterStatements = (function (
  { call, str, ensureList },
  { splitActions },
  { convertPrincipals },
) {
  const inversions = ['notAction', 'notResource', 'notPrincipal'];

  function convertStatement(statement, index, errors) {
    const effect = convertEffect(statement.Effect, errors);

    const notAction = Object.hasOwn(statement, 'NotAction');
    const actions = ensureList(
      notAction ? statement.NotAction : statement.Action,
    );
    if (!actions || !actions.length) {
      errors.push('Statement has no element Action');
      return [];
    }

    const inverted = {
      notAction,
      notResource: Object.hasOwn(statement, 'NotResource'),
      notPrincipal: Object.hasOwn(statement, 'NotPrincipal'),
    };
    const principals = inverted.notPrincipal
      ? statement.NotPrincipal
      : statement.Principal;

    // the calls after the actions, the same for every statement the actions are split into
    const common = [
      ...convertResources(statement, inverted.notResource, principals),
      ...convertConditions(statement.Condition || {}, errors),
    ];
    if (principals !== undefined) {
      common.push(
        ...convertPrincipals(principals, index.servicePrincipals, errors),
      );
    }

    const head = [
      call(effect),
      ...inversions.filter((name) => inverted[name]).map((name) => call(name)),
    ];
    return splitActions(actions, notAction, index.services, errors).map(
      (group) => ({
        className: group.className,
        calls: [...head, ...group.calls, ...common],
      }),
    );
  }

  function convertEffect(effect, errors) {
    if (effect && !['Allow', 'Deny'].includes(effect)) {
      errors.push(`Invalid effect: ${effect}`);
    }
    return effect === 'Deny' ? 'deny' : 'allow';
  }

  function convertResources(statement, notResource, principals) {
    const resources =
      ensureList(notResource ? statement.NotResource : statement.Resource) ||
      [];
    // without principals, and unless inverted, a statement applies to all resources by default
    const allResources =
      resources.length > 1 || notResource || principals !== undefined;
    return resources
      .filter((resource) => resource !== '*' || allResources)
      .map((resource) =>
        resource === '*' ? call('onAllResources') : call('on', str(resource)),
      );
  }

  function convertConditions(condition, errors) {
    const calls = [];
    for (const [operator, items] of Object.entries(condition)) {
      for (const [key, value] of Object.entries(items)) {
        const conditionValue = convertConditionValue(value);
        if (conditionValue === undefined) {
          errors.push(`Unsupported value of condition ${key}`);
          continue;
        }
        calls.push(call('if', str(key), conditionValue, str(operator)));
      }
    }
    return calls;
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

  return { convertStatement };
})(PolicyConverterCommon, PolicyConverterActions, PolicyConverterPrincipals);

if (typeof module !== 'undefined') {
  module.exports = PolicyConverterStatements;
}
