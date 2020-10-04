import * as statement from 'iam-floyd';

new statement.Dynamodb()
  .allow()
  .toPutItem()
  .onTable('Thread')
  .ifAttributes(
    ['ID', 'Message', 'Tags'],
    new statement.Operator().stringEquals().forAllValues()
  );
