import * as statement from '../../lib';

// doc-start
new statement.Dynamodb()
  .deny()
  .toPutItem()
  .onTable('Thread')
  .ifAttributes(
    ['ID', 'PostDateTime'],
    new statement.Operator().stringEquals().forAnyValue()
  );
