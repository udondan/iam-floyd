import * as statement from 'iam-floyd';

new statement.Ec2() //
  .deny()
  .toStartInstances()
  .toStopInstances();
