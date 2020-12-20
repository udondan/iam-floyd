var preferredLanguage = false;

$(function () {
  activateNavItem();
  populateManagedPolicies();
  $('#policyConverterImport').click(loadManagedPolicy);
  $('#managedPolicies').change(loadManagedPolicy);
  $('.convertButton').click(function () {
    preferredLanguage = $(this).attr('value');
    convertInputPolicy();
  });
});

function convertInputPolicy() {
  setError('');
  let input = $('#policyConverterInput').val();
  try {
    var parsed = JSON.parse(input);
  } catch (e) {
    setError('Invalid input policy');
    return;
  }

  convert(preferredLanguage, parsed);
}

function setError(value) {
  $('#policyConverterError').html(value);
}

function convert(convertTarget, data) {
  if (!data.hasOwnProperty('Statement')) {
    setError('Policy has no statements');
    return;
  }

  const statements = [];

  for (let statement of data.Statement) {
    const effect = getEffect(statement);
    const actions = getActions(statement);
    const resources = getResources(statement);
    const conditions = getConditions(statement);
    const principals = getPrincipals(statement);

    const options = {
      NotAction: actions[1],
      NotPrincipal: principals[1],
      NotResource: resources[1],
    };

    const serviceActions = splitActionsByService(actions[0]);

    for (let service in serviceActions) {
      const statementCode = makeStatementCode(
        convertTarget,
        effect,
        service,
        serviceActions[service],
        resources[0],
        conditions,
        principals[0],
        options
      );
      statements.push(statementCode);
    }
  }

  const output = statements.join('\n\n');
  $('#policyConverterOutput').val(output).show();
}

function getEffect(statement) {
  if (!statement.hasOwnProperty('Effect')) {
    return 'Allow';
  }
  return statement.Effect;
}

function getResourceKey(statement, searchKey, required = false) {
  let key = '';

  if (statement.hasOwnProperty(searchKey)) {
    key = searchKey;
  } else if (statement.hasOwnProperty('Not' + searchKey)) {
    key = 'Not' + searchKey;
  }

  if (!key.length && required) {
    setError('Policy has no element ' + searchKey);
    return false;
  }

  return key;
}

function ensureList(input) {
  if (typeof input === 'string') {
    return [input];
  }
  return input;
}

function getActions(statement) {
  const key = getResourceKey(statement, 'Action', true);
  if (!key) {
    return [[], false];
  }

  const actions = ensureList(statement[key]);
  return [actions, key == 'NotAction'];
}

function getResources(statement) {
  const key = getResourceKey(statement, 'Resource');
  if (!key) {
    return [[], false];
  }

  const resources = ensureList(statement[key]);
  return [resources, key == 'NotResource'];
}

function getPrincipals(statement) {
  const key = getResourceKey(statement, 'Principal');
  if (!key) {
    return [{}, false];
  }

  return [statement[key], key == 'NotPrincipal'];
}

function getConditions(statement) {
  if (!statement.hasOwnProperty('Condition')) {
    return {};
  }

  return statement.Condition;
}

function splitActionsByService(actions) {
  const serviceActions = {};
  for (let action of actions) {
    const split = action.split(':');
    if (split.length == 1 && action != '*') {
      setError('Invalid action: ' + action);
      return false;
    }

    let service;
    if (action == '*') {
      service = 'all';
    } else {
      service = split[0];
    }

    if (!serviceActions.hasOwnProperty(service)) {
      serviceActions[service] = [];
    }

    serviceActions[service].push(split[1] || '*');
  }
  return serviceActions;
}

function makeStatementCode(
  language,
  effect,
  service,
  actions,
  resources,
  conditions,
  principals,
  options
) {
  let code = '';
  let caseFunction = camelCase; // default case function
  switch (language) {
    case 'JavaScript':
      code += 'new statement';
      break;
    case 'Python':
      code += 'statement';
      caseFunction = snakeCase;
      break;
  }

  code += makeMethodCall(camelCase(service, true));
  code += makeMethodCall(camelCase(effect));

  if (options.NotAction) {
    code += makeMethodCall(caseFunction('notActions'));
  }
  if (options.NotPrincipal) {
    code += makeMethodCall(caseFunction('notPrincipals'));
  }
  if (options.NotResource) {
    code += makeMethodCall(caseFunction('notResources'));
  }

  for (let action of actions) {
    if (action == '*') {
      code += makeMethodCall(caseFunction('allActions'));
    } else {
      if (action.indexOf('*') > -1) {
        code += ".to('" + action + "')";
      } else {
        code += makeMethodCall(caseFunction('to ' + action));
      }
    }
  }

  for (let resource of resources) {
    if (resource != '*') {
      code += ".on('" + resource + "')";
    }
  }

  for (const [conditionOperator, conditionItems] of Object.entries(
    conditions
  )) {
    for (const [conditionKey, conditionValue] of Object.entries(
      conditionItems
    )) {
      let value = conditionValue;
      if (typeof conditionValue !== 'string') {
        let newConditionValue = "['";
        newConditionValue += conditionValue.join("', '");
        newConditionValue += "']";
        value = newConditionValue;
      }
      code +=
        ".if('" +
        conditionKey +
        "', '" +
        value +
        "', '" +
        conditionOperator +
        "')";
    }
  }

  for (const [principalType, principal] of Object.entries(principals)) {
    // @TODO: add principal logic
    console.log(principalType, principal);
  }

  // formatting code
  switch (language) {
    case 'JavaScript':
      code = code.replace(/\)\./g, ')\n  .') + ';';
      break;
    case 'Python':
      code = code.replace(/\)\./g, ') \\\n\t.');
      code = code.replace(/\.if\(/g, '.if_(');
      code = code.replace(/\.for\(/g, '.for_(');
      break;
  }

  return code;
}

function camelCase(input, includingFirst) {
  return input
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return '';
      return index === 0 && !includingFirst
        ? match.toLowerCase()
        : match.toUpperCase();
    })
    .replace('-', '');
}

function snakeCase(input) {
  return camelCase(input)
    .replace(/[A-Z][a-z]/g, function (match) {
      return '_' + match.toLowerCase();
    })
    .replace(/[A-Z]+/, function (match) {
      // same regex. we first need to replace all patterns above, before we can run this one again, to replace multiple uppercase letters such as AWS
      return '_' + match.toLowerCase();
    });
}

function makeMethodCall(method) {
  return '.' + method + '()';
}

function populateManagedPolicies() {
  $.getJSON('_static/managed-policies/index.json', function (data) {
    data.sort();
    $.each(data, function (_, value) {
      $('#managedPolicies').append(new Option(value, value));
    });
  });
}

function loadManagedPolicy() {
  const file =
    '_static/managed-policies/' + $('#managedPolicies').val() + '.json';
  $.ajax({
    url: file,
    dataType: 'text',
    success: function (data) {
      $('#policyConverterInput').val(data);
      if (preferredLanguage) {
        convertInputPolicy();
      }
    },
  });
}

function activateNavItem() {
  $('div[role="navigation"] a:contains("Policy Converter")')
    .addClass('current')
    .parent()
    .addClass('current');
}
