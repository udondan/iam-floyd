import * as statement from 'iam-floyd';

// doc-start
new statement.S3() //
  .allow()
  .allActions()
  .on(
    'arn:aws:s3:::some-bucket', //
    'arn:aws:s3:::another-bucket'
  );
