import * as statement from 'iam-floyd';

// doc-start
new statement.Ec2() //
  .allow()
  .toStartInstances();

new statement.Ec2() //
  .deny()
  .toStopInstances();
