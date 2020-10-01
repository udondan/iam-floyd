import * as statement from '../lib';

function printPolicyWithStatements(statements: any[]) {
  console.log(
    JSON.stringify(
      {
        Version: '2012-10-17',
        Statement: [...statements],
      },
      null,
      2
    )
  );
}

printPolicyWithStatements([
  new statement.Sts() //
    .allow()
    .toAssumeRole()
    .forService('rds.amazonaws.com'),
]);

printPolicyWithStatements(
  new statement.Collection().allowEc2InstanceDeleteByOwner()
);

printPolicyWithStatements([
  new statement.Secretsmanager()
    .allow()
    .allActions()
    .ifResourceTag('CreatedBy', 'me'),
]);

printPolicyWithStatements([
  new statement.Ec2().allow().allMatchingActions('/vpn/i'),
]);

printPolicyWithStatements([
  new statement.Ec2().allow().allPermissionManagementActions(),
]);
