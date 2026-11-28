import { out } from '../../helper/typescript/typescript_test';
import { AwsServicePrincipal, Statement } from '../../lib';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new Statement.Sts()
      .allow()
      .toAssumeRole()
      .forService(AwsServicePrincipal.LAMBDA);

    const s2 = new Statement.Sts()
      .allow()
      .toAssumeRole()
      .forService(AwsServicePrincipal.ECS_TASKS, AwsServicePrincipal.EC2);
    // doc-end
    return [s1, s2];
  }
  return wrap();
}
const s = getStatements();
out(s);
// deploy(s); //Disabled, because we need valid principals to test
