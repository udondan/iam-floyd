import * as statement from 'iam-floyd';

// doc-start
new statement.S3()
  .allow()
  .allActions()
  .onBucket('example-bucket')
  .onObject('example-bucket', 'some/path/*');
