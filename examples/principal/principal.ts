import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forAccount('1234567890');

    const s2 = new statement.Sts()
      .allow()
      .toAssumeRoleWithSAML()
      .forService('lambda.amazonaws.com');

    const s3 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forUser('1234567890', 'Bob');

    const s4 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forRole('1234567890', 'role-name');

    const s5 = new statement.Sts()
      .allow()
      .toAssumeRoleWithSAML()
      .forFederatedCognito();

    const s6 = new statement.Sts()
      .allow()
      .toAssumeRoleWithSAML()
      .forFederatedAmazon();

    const s7 = new statement.Sts()
      .allow()
      .toAssumeRoleWithSAML()
      .forFederatedGoogle();

    const s8 = new statement.Sts()
      .allow()
      .toAssumeRoleWithSAML()
      .forFederatedFacebook();

    const s9 = new statement.Sts()
      .allow()
      .toAssumeRoleWithSAML()
      .forSaml('1234567890', 'saml-provider');

    const s10 = new statement.Sts() //
      .allow()
      .toAssumeRole()
      .forPublic();

    const s11 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forAssumedRoleSession('123456789', 'role-name', 'session-name');

    const s12 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forCanonicalUser('userID');

    const s13 = new statement.Sts() //
      .allow()
      .toAssumeRole()
      .for('arn:foo:bar');
    // doc-end
    return [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];
  }
  return wrap();
}
const s = getStatements();
out(s);
deploy(s);
