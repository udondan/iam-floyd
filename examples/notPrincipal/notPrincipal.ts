import * as statement from '../../lib';

// doc-start
new statement.S3()
  .allow()
  .allActions()
  .notPrincipals()
  .forUser('1234567890', 'Bob')
  .onObject('example-bucket', '*');
