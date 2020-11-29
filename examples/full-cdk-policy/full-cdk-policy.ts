import * as statement from '../../lib';

// doc-start
const policy = {
  Version: '2012-10-17',
  Statement: [
    new statement.Cloudformation() // allow all CFN actions
      .allow()
      .allActions(),
    new statement.All() // allow absolutely everything that is triggered via CFN
      .allow()
      .allActions()
      .ifAwsCalledVia('cloudformation.amazonaws.com'),
    new statement.S3() // allow access to the CDK staging bucket
      .allow()
      .allActions()
      .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
    new statement.Account() // even when triggered via CFN, do not allow modifications of the account
      .deny()
      .allPermissionManagementActions()
      .allWriteActions(),
    new statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
      .deny()
      .allPermissionManagementActions()
      .allWriteActions(),
  ],
};
