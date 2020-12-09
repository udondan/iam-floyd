import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.Ec2()
      .allow()
      .toStartInstances()
      .ifEncrypted()
      .ifInstanceType(['t3.micro', 't3.nano'])
      .ifAssociatePublicIpAddress(false)
      .ifAwsRequestTag('Owner', 'John')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
