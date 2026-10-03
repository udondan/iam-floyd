var preferredLanguage = 'TypeScript';
var preferredVariant = 'CDK';
var preferredImports = 'Yes';

var selectFilled = false;
var selectExtensionLoaded = false;

// holds patterns for detecting principal method
const principalPattern = {
  AWS: {
    _0_Account: /^arn:[a-z]+:iam:[^:]*:(\d+):root$/, // account
    _1_User: /^arn:[a-z]+:iam:[^:]*:(\d+):user\/([^/]+)$/, // account user
    _2_Role: /^arn:[a-z]+:iam:[^:]*:(\d+):role\/([^/]+)$/, // account role
    _3_AssumedRoleSession:
      /^arn:[a-z]+:sts:[^:]*:(\d+):assumed-role\/([^/]+)\/([^/]+)$/, // account role sessionName
    _4_Public: /^\*$/,
    _5_: /^(.*)$/,
  },
  Federated: {
    _0_FederatedFacebook: /^graph\.facebook\.com$/,
    _1_FederatedCognito: /^cognito-identity\.amazonaws\.com$/,
    _2_FederatedAmazon: /^www\.amazon\.com$/,
    _3_FederatedGoogle: /^accounts\.google\.com$/,
    _4_Saml: /^arn:[a-z]+:iam:[^:]*:(\d+):saml-provider\/(.+)$/, // account providerName
    _5_Federated: /^(.*)$/,
  },
  CanonicalUser: {
    _0_CanonicalUser: /^(.*)$/,
  },
  Service: {
    _0_Service: /^(.*)$/,
  },
};

$(function () {
  activateNavItem();
  populateManagedPolicies();
  $('#managedPolicies').change(loadManagedPolicy);
  $(':radio, #policyConverterInput').change(function () {
    preferredVariant = $("input[name='policyConverterVariant']:checked").val();
    preferredLanguage = $(
      "input[name='policyConverterLanguage']:checked",
    ).val();
    preferredImports = $("input[name='policyConverterImports']:checked").val();
    convertInputPolicy();
  });

  $('head').append(
    '<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css">',
    '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.min.css">',
    '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/labelauty/1.1.4/jquery-labelauty.css" integrity="sha512-NUD74ySmYmRWEO5NXZ2EU0FfFhCIVhsxSoi3i4fybJYVhr5DkV+gdyEBd8tO0Pl/CspRwllRSAaUG7theVh1dA==" crossorigin="anonymous" />',
  );

  $.getScript(
    '//cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js',
    function () {
      selectExtensionLoaded = true;
      beautifySelect();
    },
  );

  $.getScript(
    '//cdnjs.cloudflare.com/ajax/libs/labelauty/1.1.4/jquery-labelauty.min.js',
    function () {
      $('input[type=radio]').labelauty({
        label: true,
      });
    },
  );
});

function beautifySelect() {
  if (!selectExtensionLoaded || !selectFilled) {
    return;
  }
  $('#managedPolicies').chosen({
    search_contains: true,
    placeholder_text_single: 'Select policy to import',
  });

  // fallback for when chosen did not apply (e.g. mobile)
  const currentWidth = $('#managedPolicies').width();
  const parentWidth = $('#policy-converter').width();
  if (currentWidth > parentWidth) {
    $('#managedPolicies').width('100%');
  }
}

function convertInputPolicy() {
  setError('');
  let input = $('#policyConverterInput').val();
  if (!input.length) {
    return;
  }
  try {
    var parsed = JSON.parse(input);
  } catch (e) {
    setError('Invalid input policy');
    return;
  }

  convert(preferredLanguage, parsed);
}

function setError(value) {
  const text = document.createTextNode(value);
  $('#policyConverterError').empty();
  $('#policyConverterError').append(text);
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
        options,
      );
      statements.push(statementCode);
    }
  }

  let output = '';

  if (preferredImports == 'Yes') {
    let package;
    switch (preferredLanguage) {
      case 'TypeScript':
        if (preferredVariant == 'CDK') {
          output += "import { aws_iam } from 'aws-cdk-lib';\n";
        }
        package = preferredVariant == 'CDK' ? 'cdk-iam-floyd' : 'iam-floyd';
        output += "import { Statement } from '" + package + "';";
        break;
      case 'JavaScript':
        if (preferredVariant == 'CDK') {
          output += "const { aws_iam } = require('aws-cdk-lib');\n";
        }
        package = preferredVariant == 'CDK' ? 'cdk-iam-floyd' : 'iam-floyd';
        output += "const { Statement } = require('" + package + "');";
        break;
    }
    output += '\n\n';
  }

  switch (preferredLanguage) {
    case 'TypeScript':
    case 'JavaScript':
      if (preferredVariant == 'CDK') {
        output +=
          'const policy = new aws_iam.PolicyDocument({\n\
  statements: [\n' +
          indent(statements.join(',\n'), ' ', 4) +
          '\n\
  ]\n\
});';
      } else {
        output +=
          "const policy = {\n\
  Version: '2012-10-17',\n\
  Statement: [\n" +
          indent(statements.join(',\n'), ' ', 4) +
          '\n\
  ]\n\
};';
      }
      break;
  }

  $('#policyConverterOutput').val(output);
  $('#policyConverterResult').show();
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
  options,
) {
  let code = '';
  let caseFunction = camelCase; // default case function
  switch (language) {
    case 'TypeScript':
    case 'JavaScript':
      code += 'new Statement';
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
        code += makeMethodCall(caseFunction('to'), [action]);
      } else {
        code += makeMethodCall(caseFunction('to ' + action));
      }
    }
  }

  for (let resource of resources) {
    if (resource != '*') {
      code += makeMethodCall(caseFunction('on'), [resource]);
    }
  }

  for (const [conditionOperator, conditionItems] of Object.entries(
    conditions,
  )) {
    for (const [conditionKey, conditionValue] of Object.entries(
      conditionItems,
    )) {
      code += makeMethodCall(caseFunction('if'), [
        conditionKey,
        conditionValue,
        conditionOperator,
      ]);
    }
  }

  if (typeof principals === 'string') {
    if (principals == '*') {
      code += makeMethodCall(caseFunction('forPublic'));
    } else {
      setError('Unsupported principal: ' + principals);
    }
  } else {
    for (const [principalType, principal] of Object.entries(principals)) {
      if (typeof principalPattern[principalType] === 'undefined') {
        setError('Unsupported principal type: ' + principalType);
        return;
      }

      let pFound = false;
      for (const [pMethod, pPattern] of Object.entries(
        principalPattern[principalType],
      )) {
        const params = pPattern.exec(principal);
        if (params !== null) {
          pFound = true;
          params.shift();

          const methodName = 'for' + pMethod.substring(3);
          code += makeMethodCall(caseFunction(methodName), params);
          break;
        }
      }
      if (!pFound) {
        setError('Unsupported principal: ' + principal);
      }
    }
  }

  if (preferredVariant != 'CDK') {
    code += makeMethodCall(caseFunction('toJSON'));
  }

  // formatting code
  switch (language) {
    case 'TypeScript':
    case 'JavaScript':
      code = code.replace(/\)\./g, ')\n  .');
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

function makeMethodCall(method, params = []) {
  let code = '.' + method + '(';
  if (params.length) {
    const paramList = [];
    for (let param of params) {
      if (typeof param === 'string') {
        paramList.push("'" + param + "'");
      } else {
        paramList.push(JSON.stringify(param));
      }
    }
    code += paramList.join(', ');
  }
  code += ')';
  return code;
}

function populateManagedPolicies() {
  $.getJSON('_static/managed-policies/index.json', function (data) {
    data.sort();
    $.each(data, function (_, value) {
      $('#managedPolicies').append(new Option(value, value));
    });
    selectFilled = true;
    beautifySelect();
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
      convertInputPolicy();
    },
  });
}

function activateNavItem() {
  $('div[role="navigation"] a:contains("Policy Converter")')
    .addClass('current')
    .parent()
    .addClass('current');
}

function indent(str, character, amount) {
  return str.replace(/^/gm, character.repeat(amount));
}
