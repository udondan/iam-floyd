import { Collection, Operator, Statement } from 'cdk-iam-floyd';

function printPolicyWithStatements(statements: any[]) {
  console.log(
    JSON.stringify(
      {
        Version: '2012-10-17',
        Statement: [...statements],
      },
      null,
      2,
    ),
  );
}

printPolicyWithStatements([
  new Statement.Sts() //
    .allow()
    .toAssumeRole()
    .forService('rds.amazonaws.com'),
]);

printPolicyWithStatements(new Collection().allowEc2InstanceDeleteByOwner());

printPolicyWithStatements([
  new Statement.Secretsmanager()
    .allow()
    .allActions()
    .ifResourceTag('CreatedBy', 'me'),
]);

printPolicyWithStatements([
  new Statement.Ec2().allow().allMatchingActions('/vpn/i'),
]);

printPolicyWithStatements([
  new Statement.Ec2().allow().allPermissionManagementActions(),
]);

printPolicyWithStatements([
  new Statement.Ec2()
    .allow()
    .allPermissionManagementActions()
    .ifAwsSourceIp('1.2.3.4', new Operator().notIpAddress().ifExists()),
]);
