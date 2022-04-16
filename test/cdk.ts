import { App, Stack, StackProps } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';

import * as statement from '../lib';

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const policy = new iam.ManagedPolicy(this, 'Policy', {
      managedPolicyName: `${this.stackName}-testpolicy`,
      description: `test policy`,
      statements: [
        new statement.Ssm()
          .allow()
          .toListDocuments()
          .toListTagsForResource()
          .onInstance('asdf'),
        new statement.Ssm()
          .allow()
          .toCreateDocument()
          .toAddTagsToResource()
          .ifAwsRequestTag('CreatedBy', 'hello'),
        new statement.Ssm()
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

const app = new App();
new TestStack(app, 'IAM-Floyd-Test', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
