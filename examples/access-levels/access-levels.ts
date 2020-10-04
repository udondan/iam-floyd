import * as statement from 'iam-floyd';

// doc-start
new statement.Ec2() //
  .deny()
  .allPermissionManagementActions();

new statement.Ec2() //
  .allow()
  .allListActions()
  .allReadActions();
