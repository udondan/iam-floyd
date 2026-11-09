/**
 * The principals of a statement of the policy converter (converter.js)
 */
var PolicyConverterCommon;
if (typeof module !== 'undefined') {
  PolicyConverterCommon = require('./common.js');
}

var PolicyConverterPrincipals = (function ({
  call,
  str,
  constant,
  ensureList,
}) {
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

  function convertPrincipals(principals, servicePrincipals, errors) {
    if (typeof principals === 'string' || principals === null) {
      return convertPublic(principals, errors);
    }
    const calls = [];
    for (const [type, values] of Object.entries(principals)) {
      if (!principalPatterns[type]) {
        errors.push(`Unsupported principal type: ${type}`);
        continue;
      }
      for (const value of ensureList(values)) {
        calls.push(...principalCalls(type, value, servicePrincipals, errors));
      }
    }
    return calls;
  }

  // a principal that is not an object, e.g. `"Principal": "*"`
  function convertPublic(principals, errors) {
    if (principals === '*') {
      return [call('forPublic')];
    }
    errors.push(`Unsupported principal: ${principals}`);
    return [];
  }

  /**
   * The call of a principal of a type, none if it isn't supported
   */
  function principalCalls(type, value, servicePrincipals, errors) {
    if (typeof value !== 'string') {
      errors.push(`Unsupported principal: ${JSON.stringify(value)}`);
      return [];
    }
    if (type === 'Service' && Object.hasOwn(servicePrincipals, value)) {
      return [
        call(
          'forService',
          constant('AwsServicePrincipal', servicePrincipals[value]),
        ),
      ];
    }
    // the first pattern that matches
    return principalPatterns[type]
      .map(([method, pattern]) => [method, pattern.exec(value)])
      .filter(([, match]) => match)
      .slice(0, 1)
      .map(([method, match]) => call(method, ...match.slice(1).map(str)));
  }

  return { convertPrincipals };
})(PolicyConverterCommon);

if (typeof module !== 'undefined') {
  module.exports = PolicyConverterPrincipals;
}
