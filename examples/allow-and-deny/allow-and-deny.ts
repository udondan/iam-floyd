import * as statement from '../../lib';

// doc-start
new statement.Ec2() //
  .allow()
  .toStartInstances();

new statement.Ec2() //
  .deny()
  .toStopInstances();
