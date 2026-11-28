/**
 * The actions of a statement of the policy converter (converter.js)
 */
var PolicyConverterCommon;
if (typeof module !== 'undefined') {
  PolicyConverterCommon = require('./common.js');
}

var PolicyConverterActions = (function ({ call, str, upperFirst }) {
  /**
   * Splits the actions into statements of the classes of their services. Actions of services
   * without class go into a statement of `All`. A NotAction is not split, as that would allow
   * more: actions of several services go into `All`.
   */
  function splitActions(actions, notAction, services, errors) {
    const parsed = actions
      .map((action) => parseAction(action, errors))
      .filter((p) => p !== undefined);
    const groups = createGroups();

    if (notAction && new Set(parsed.map((p) => p.prefix)).size > 1) {
      for (const p of parsed) {
        groups.add(null, actionCall(p.action));
      }
      return groups.values();
    }

    for (const p of parsed) {
      p.classes = p.prefix === null ? undefined : services[p.prefix];
      if (p.classes) {
        p.className = findClass(p.classes, p.name);
      }
    }
    const counts = countClasses(parsed);
    for (const p of parsed) {
      const { className, method } = placeAction(p, counts);
      groups.add(className, method);
    }
    return groups.values();
  }

  // the statements by class, in the order of their first action
  function createGroups() {
    const groups = new Map();
    return {
      add(className, method) {
        const key = className || '';
        if (!groups.has(key)) {
          groups.set(key, { className, calls: [] });
        }
        groups.get(key).calls.push(method);
      },
      values: () => [...groups.values()],
    };
  }

  function parseAction(action, errors) {
    if (typeof action !== 'string') {
      errors.push(`Invalid action: ${JSON.stringify(action)}`);
      return undefined;
    }
    if (action === '*') {
      return { action, prefix: null, name: '*' };
    }
    const index = action.indexOf(':');
    if (index < 1) {
      errors.push(`Invalid action: ${action}`);
      return undefined;
    }
    return {
      action,
      prefix: action.slice(0, index).toLowerCase(),
      name: action.slice(index + 1),
    };
  }

  function actionCall(action) {
    return action === '*' ? call('allActions') : call('to', str(action));
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

  // the number of the actions per class
  function countClasses(parsed) {
    const counts = new Map();
    for (const p of parsed) {
      if (p.className) {
        counts.set(p.className, (counts.get(p.className) || 0) + 1);
      }
    }
    return counts;
  }

  /**
   * The class and the method call of an action
   */
  function placeAction(p, counts) {
    if (!p.classes) {
      return {
        className: null,
        method:
          p.prefix === null
            ? call('allActions')
            : call('to', str(`${p.prefix}:${p.name}`)),
      };
    }
    if (p.className) {
      const name = p.classes[p.className].find(
        (action) => action.toLowerCase() === p.name.toLowerCase(),
      );
      return { className: p.className, method: call(`to${upperFirst(name)}`) };
    }
    // the actions that no class has, e.g. with wildcards, go to the class with the most actions
    return {
      className: mostUsedClass(p.classes, counts),
      method: actionCall(p.name),
    };
  }

  function mostUsedClass(classes, counts) {
    let className = Object.keys(classes)[0];
    for (const name of Object.keys(classes)) {
      if ((counts.get(name) || 0) > (counts.get(className) || 0)) {
        className = name;
      }
    }
    return className;
  }

  return { splitActions };
})(PolicyConverterCommon);

if (typeof module !== 'undefined') {
  module.exports = PolicyConverterActions;
}
