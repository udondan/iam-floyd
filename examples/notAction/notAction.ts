import * as statement from 'iam-floyd';

// doc-start
new statement.S3()
  .allow()
  .notActions()
  .toDeleteBucket()
  .onBucket('example-bucket');
