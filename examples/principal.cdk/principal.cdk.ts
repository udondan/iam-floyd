import iam = require('@aws-cdk/aws-iam');

import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.Sts()
      .allow()
      .toAssumeRole()
      .forCdkPrincipal(
        new iam.ServicePrincipal('sns.amazonaws.com'),
        new iam.ServicePrincipal('lambda.amazonaws.com')
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
