import * as statement from '../../lib';

// doc-start
new statement.Sts() //
  .allow()
  .toAssumeRole()
  .forAccount('1234567890');

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forService('lambda.amazonaws.com');

new statement.Sts() //
  .allow()
  .toAssumeRole()
  .forUser('1234567890', 'Bob');

new statement.Sts() //
  .allow()
  .toAssumeRole()
  .forRole('1234567890', 'role-name');

new statement.Sts() //
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedCognito();

new statement.Sts() //
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedAmazon();

new statement.Sts() //
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedGoogle();

new statement.Sts() //
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedFacebook();

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forSaml('1234567890', 'saml-provider');

new statement.Sts() //
  .allow()
  .toAssumeRole()
  .forPublic();

new statement.Sts()
  .allow()
  .toAssumeRole()
  .forAssumedRoleSession('123456789', 'role-name', 'session-name');

new statement.Sts() //
  .allow()
  .toAssumeRole()
  .forCanonicalUser('userID');

new statement.Sts() //
  .allow()
  .toAssumeRole()
  .for('arn:foo:bar');
