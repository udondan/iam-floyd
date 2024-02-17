import { Statement } from '../../lib';

function getPolicy() {
  function wrap() {
    // doc-start
    const policy = {
      Version: '2012-10-17',
      Statement: [
        new Statement.Cloudformation() // allow all CFN actions
          .allow()
          .allActions(),
        new Statement.All() // allow absolutely everything that is triggered via CFN
          .allow()
          .allActions()
          .ifAwsCalledVia('cloudformation.amazonaws.com'),
        new Statement.S3() // allow access to the CDK staging bucket
          .allow()
          .allActions()
          .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
        new Statement.Account() // even when triggered via CFN, do not allow modifications of the account
          .deny()
          .allPermissionManagementActions()
          .allWriteActions(),
        new Statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
          .deny()
          .allPermissionManagementActions()
          .allWriteActions(),
      ],
    };
    // doc-end
    return policy;
  }
  return wrap();
}

const policy = getPolicy();
const str = JSON.stringify(policy, null, 4);
console.log(str);
