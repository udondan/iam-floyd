import { aws_iam as iam } from 'aws-cdk-lib';

import { out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.Sts()
      .allow()
      .toAssumeRole()
      .forCdkPrincipal(
        new iam.ServicePrincipal('sns.amazonaws.com'),
        new iam.ServicePrincipal('lambda.amazonaws.com'),
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
