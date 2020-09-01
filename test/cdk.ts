import iam = require('@aws-cdk/aws-iam');
import * as cdk from '@aws-cdk/core';

import * as statement from '../lib';

export class TestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const policy = new iam.ManagedPolicy(this, 'Policy', {
      managedPolicyName: `${this.stackName}-testpolicy`,
      description: `test policy`,
      statements: [
        new statement.Ssm({})
          .allow()
          .toListDocuments()
          .toListTagsForResource()
          .onInstance('asdf'),
        new statement.Ssm({})
          .allow()
          .toCreateDocument()
          .toAddTagsToResource()
          .ifRequestTag('CreatedBy', 'hello'),
        new statement.Ssm({})
          .allow()
          .toDeleteDocument()
          .toDescribeDocument()
          .toGetDocument()
          .toListDocumentVersions()
          .toModifyDocumentPermission()
          .toUpdateDocument()
          .toUpdateDocumentDefaultVersion()
          .toAddTagsToResource()
          .toRemoveTagsFromResource()
          .ifResourceTag('CreatedBy', 'hello'),
      ],
    });

    new iam.Role(this, 'Role', {
      roleName: `${this.stackName}-testrole`,
      description: 'Test Role',
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [policy],
    });
  }
}

const app = new cdk.App();
new TestStack(app, 'IAM-Floyd-Test', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
