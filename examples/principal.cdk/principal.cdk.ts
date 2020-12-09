import iam = require('@aws-cdk/aws-iam');
import * as statement from 'cdk-iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

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
