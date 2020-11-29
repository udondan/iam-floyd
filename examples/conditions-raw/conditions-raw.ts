import * as statement from '../../lib';

// doc-start
new statement.Ec2()
  .allow()
  .toStartInstances()
  .if('ec2:missingCondition', 'some-value');
