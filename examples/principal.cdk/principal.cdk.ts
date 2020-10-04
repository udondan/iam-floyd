import iam = require('@aws-cdk/aws-iam');
import * as statement from 'cdk-iam-floyd';

// doc-start
new statement.Sts()
  .allow()
  .toAssumeRole()
  .forCdkPrincipal(
    new iam.ServicePrincipal('sns.amazonaws.com'),
    new iam.ServicePrincipal('lambda.amazonaws.com')
  );
