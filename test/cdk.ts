import {
  App,
  aws_iam,
  aws_s3,
  RemovalPolicy,
  Stack,
  StackProps,
} from 'aws-cdk-lib';
import {
  AwsManagedPolicy,
  ManagedPolicyDocument,
  Statement,
} from 'cdk-iam-floyd';
import { Construct } from 'constructs';

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const policy = new aws_iam.ManagedPolicy(this, 'Policy', {
      managedPolicyName: `${this.stackName}-testpolicy`,
      description: 'test policy',
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

    const document = new ManagedPolicyDocument();
    const statements = [
      new Statement.Sqs({ sid: 'Queue' })
        .allow()
        .toSendMessage()
        .toReceiveMessage()
        .onQueue(`${this.stackName}-queue`),
      new Statement.Ec2().deny().allActions().ifAwsRequestedRegion('eu-west-1'),
    ];
    document.addStatements(...statements);
    checkEstimate(document, statements);
    new aws_iam.ManagedPolicy(this, 'Document', {
      managedPolicyName: `${this.stackName}-testdocument`,
      document,
    });

    const role = new aws_iam.Role(this, 'Role', {
      roleName: `${this.stackName}-test-role`,
      description: 'Test Role',
      assumedBy: new aws_iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        policy,
        new AwsManagedPolicy().ServiceQuotasReadOnlyAccess(),
      ],
    });

    const bucket = new aws_s3.Bucket(this, 'Bucket', {
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

/**
 * The size of a policy is estimated like in the AWS CDK, plus what the AWS CDK leaves out: the
 * document, the braces and commas, the Sid and the key of the conditions. Fails if the estimate of
 * the AWS CDK changes, as the estimate of the policy must then be adjusted.
 */
function checkEstimate(
  document: ManagedPolicyDocument,
  statements: aws_iam.PolicyStatement[],
) {
  // first, as it applies the values of the statements to the AWS CDK
  const floydEstimate = document.estimateSize();
  let cdkEstimate = 0;
  for (const statement of statements) {
    cdkEstimate += (
      statement as unknown as {
        _estimateSize(options: {
          actionEstimate: number;
          arnEstimate: number;
        }): number;
      }
    )._estimateSize({ actionEstimate: 20, arnEstimate: 150 });
  }
  const expected = { cdk: 339, floyd: 408 };
  const actual = { cdk: cdkEstimate, floyd: floydEstimate };
  if (JSON.stringify(actual) != JSON.stringify(expected)) {
    throw new Error(
      `Estimated size ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`,
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
