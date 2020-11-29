import * as statement from '../../lib';

// doc-start
new statement.Ec2()
  .allow()
  .toStartInstances()
  .ifAwsRequestTag(
    'Environment',
    ['Production', 'Staging', 'Dev'],
    new statement.Operator().stringEquals().ifExists()
  );
