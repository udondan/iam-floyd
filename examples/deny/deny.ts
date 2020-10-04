import * as statement from 'iam-floyd';

// doc-start
new statement.Ec2() //
  .deny()
  .toStartInstances()
  .toStopInstances();
