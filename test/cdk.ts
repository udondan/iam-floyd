import { App, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Statement } from 'cdk-iam-floyd';
import { Construct } from 'constructs';

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const policy = new iam.ManagedPolicy(this, 'Policy', {
      managedPolicyName: `${this.stackName}-testpolicy`,
      description: `test policy`,
      statements: [
        new Statement.Ssm()
          .allow()
          .toListDocuments()
          .toListTagsForResource()
          .onInstance('i-1234567890'),
        new Statement.Ssm()
          .allow()
          .toCreateDocument()
          .toAddTagsToResource()
          .ifAwsRequestTag('CreatedBy', 'Bob'),
        new Statement.Ssm()
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
          .ifResourceTag('CreatedBy', 'Bob'),
      ],
    });

    const role = new iam.Role(this, 'Role', {
      roleName: `${this.stackName}-testrole`,
      description: 'Test Role',
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [policy],
    });

    const bucket = new s3.Bucket(this, 'Bucket', {
      removalPolicy: RemovalPolicy.DESTROY,
    });

    bucket.addToResourcePolicy(
      new Statement.S3() //
        .allow()
        .toGetObject()
        .onObject(bucket.bucketName, '*')
        .forAccount(this.account)
        .forCdkPrincipal(role),
    );
  }
}

const app = new App();
new TestStack(app, 'IAM-Floyd-Test', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
});
