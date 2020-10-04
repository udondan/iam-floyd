import * as statement from 'iam-floyd';

// doc-start
new statement.Ec2()
  .allow()
  .toStartInstances()
  .ifAwsRequestTag(
    'Environment',
    ['Production', 'Staging', 'Dev'],
    new statement.Operator().stringEquals().ifExists()
  );
