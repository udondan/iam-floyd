import * as statement from 'iam-floyd';

// doc-start
new statement.Ec2()
  .allow()
  .toStartInstances()
  .if('ec2:missingCondition', 'some-value');
