import * as statement from '../../lib';

// doc-start
new statement.Ec2() //
  .deny()
  .allPermissionManagementActions();

new statement.Ec2() //
  .allow()
  .allListActions()
  .allReadActions();
