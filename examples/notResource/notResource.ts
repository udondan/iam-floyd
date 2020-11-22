import * as statement from 'iam-floyd';

// doc-start
new statement.S3()
  .allow()
  .notResources()
  .toDeleteBucket()
  .onBucket('example-bucket');
