import * as statement from '../lib';

function printPolicyWitStatements(statements: any[]) {
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

printPolicyWitStatements(
  new statement.Collection().allowEc2InstanceDeleteByOwner()
);

printPolicyWitStatements([
  new statement.Secretsmanager()
    .allow()
    .allActions()
    .ifResourceTag('CreatedBy', 'me'),
]);
