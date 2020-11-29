import * as statement from '../../lib';

// doc-start
new statement.S3()
  .allow()
  .allActions()
  .onBucket('example-bucket')
  .onObject('example-bucket', 'some/path/*');
