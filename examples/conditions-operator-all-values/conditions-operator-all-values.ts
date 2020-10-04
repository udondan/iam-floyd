import * as statement from 'iam-floyd';

// doc-start
new statement.Dynamodb()
  .allow()
  .toGetItem()
  .onTable('Thread')
  .ifAttributes(
    ['ID', 'Message', 'Tags'],
    new statement.Operator().stringEquals().forAllValues()
  );
