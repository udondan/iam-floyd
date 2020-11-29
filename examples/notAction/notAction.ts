import * as statement from '../../lib';

// doc-start
new statement.S3()
  .allow()
  .notActions()
  .toDeleteBucket()
  .onBucket('example-bucket');
