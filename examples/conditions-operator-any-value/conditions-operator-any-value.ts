import * as statement from 'iam-floyd';

// doc-start
new statement.Dynamodb()
  .deny()
  .toPutItem()
  .onTable('Thread')
  .ifAttributes(
    ['ID', 'PostDateTime'],
    new statement.Operator().stringEquals().forAnyValue()
  );
