import * as statement from '../../lib';

// doc-start
new statement.S3()
  .allow()
  .notResources()
  .toDeleteBucket()
  .onBucket('example-bucket');
