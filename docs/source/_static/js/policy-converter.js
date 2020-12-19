$(function() {
  $('.convertButton').click(function() {
    setError('')
    let input = $('#policyConverterInput').val();
    try {
      var parsed = JSON.parse(input);
    }
    catch (e) {
      setError('Invalid input policy');
      return;
    }
    convert($(this).attr('value'), parsed);
  });
});


function setError(value) {
  $('#policyConverterError').html(value);
}

function convert(convertTarget, data) {

  if (!data.hasOwnProperty('Statement')) {
    setError('Policy has no statements');
    return;
  }

  const statements = []

  for(let statement of data.Statement) {
    const effect = getEffect(statement);
    const actions = getActions(statement);
    const resources = getResources(statement);
    const conditions = getConditions(statement);
    const principals = getPrincipals(statement);
    // @TODO: notAction, notResource, notPrincipal

    const serviceActions = splitActionsByService(actions)

    for (let service in serviceActions) {
      const statementCode = makeStatementCode(convertTarget, effect, service, serviceActions[service], resources, conditions, principals)
      statements.push(statementCode)
    }
  };

  const output = statements.join('\n\n');
  $('#policyConverterOutput').val(output);
}

function getEffect(statement) {
  if (!statement.hasOwnProperty('Effect')) {
    return 'Allow';
  }
  return statement.Effect;
}

function getActions(statement) {
  if (!statement.hasOwnProperty('Action')) {
    return [];
  }

  if (typeof statement.Action === 'string') {
    return [statement.Action];
  }

  return statement.Action;
}

function getResources(statement) {
  if (!statement.hasOwnProperty('Resource')) {
    return [];
  }

  if (typeof statement.Resource === 'string') {
    return [statement.Resource];
  }

  return statement.Resource;
}

function getConditions(statement) {
  if (!statement.hasOwnProperty('Condition')) {
    return {};
  }

  return statement.Condition;
}

function getPrincipals(statement) {
  if (!statement.hasOwnProperty('Principal')) {
    return {};
  }

  return statement.Principal;
}

function splitActionsByService(actions) {
  const serviceActions = {};
  for(let action of actions) {
    const split = action.split(':');
    if(split.length == 1 && action != '*') {
      setError('Invalid action: ' + action);
      return false;
    }

    let service
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

function makeStatementCode(language, effect, service, actions, resources, conditions, principals) {
  let code = '';
  let caseFunction = camelCase // default case function
  switch(language) {
    case 'JavaScript':
      code += 'new statement';
      break;
    case 'Python':
      code += 'statement';
      caseFunction = snakeCase
      break;
  }

  code += makeMethodCall(camelCase(service, true));
  code += makeMethodCall(camelCase(effect));

  for(let action of actions) {
    if (action == '*') {
      code += makeMethodCall(caseFunction('allActions'));
    } else {
      if (action.indexOf('*') > -1) {
        code += '.to(\''+ service + ':' + action +'\')';
      } else {
        code += makeMethodCall(caseFunction('to ' + action));
      }
    }
  }

  for(let resource of resources) {
    if(resource != '*') {
      code += '.on(\''+ resource +'\')';
    }
  }

  for (const [conditionOperator, conditionItems] of Object.entries(conditions)) {
    for (const [conditionKey, conditionValue] of Object.entries(conditionItems)) {
      code += '.if(\'' + conditionKey + '\', \'' + conditionValue + '\', \'' + conditionOperator + '\')'
    }
  }

  for (const [principalType, principal] of Object.entries(principals)) {
    // @TODO: add principal logic
    console.log(principalType, principal)
  }

  // formatting code
  switch(language) {
    case 'JavaScript':
      code = code.replace(/\)\./g, ')\n  .') + ';'
      break;
    case 'Python':
      code = code.replace(/\)\./g, ') \\\n\t.')
      code = code.replace('.if(', '.if_(')
      code = code.replace('.for(', '.for_(')
      break;
  }

  return code
}

function camelCase(input, includingFirst) {
  return input.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return '';
    return index === 0 && !includingFirst ? match.toLowerCase() : match.toUpperCase();
  });
}

function snakeCase(input) {
  return camelCase(input).replace(/[A-Z][a-z]/g, function(match) {
    return '_' + match.toLowerCase()
  }).replace(/[A-Z]+/, function(match) { // same regex. we first need to replace all patterns above, before we can run this one again, to replace multiple uppercase letters such as AWS
    return '_' + match.toLowerCase()
  })
}

function makeMethodCall(method) {
  return '.' + method + '()';
}
