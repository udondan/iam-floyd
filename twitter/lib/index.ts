import * as events from '@aws-cdk/aws-events';
import * as targets from '@aws-cdk/aws-events-targets';
import * as iam from '@aws-cdk/aws-iam';
import * as kms from '@aws-cdk/aws-kms';
import * as lambda from '@aws-cdk/aws-lambda-nodejs';
import * as logs from '@aws-cdk/aws-logs';
import * as secretsmanager from '@aws-cdk/aws-secretsmanager';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';
import path = require('path');

const project = 'Floyd Tweeter';
const project_id = 'floyd-tweeter';

export class Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    cdk.Tags.of(scope).add('Project', project);

    const kmsKey = new kms.Key(this, 'KmsKey', {
      enableKeyRotation: false,
      description: `Encryption key for ${project}`,
      alias: `alias/${project_id}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const twitterCredentials = new secretsmanager.Secret(this, 'Credentials', {
      description: `${project}: Credentials for Twitter API`,
      encryptionKey: kmsKey,
      generateSecretString: {
        secretStringTemplate: JSON.stringify({
          consumer_key: '',
          consumer_secret: '',
          access_token: '',
        }),
        generateStringKey: 'access_token_secret',
      },
    });

    const queue = new sqs.Queue(this, 'Queue', {
      queueName: `${project_id}-tweets.fifo`,
      fifo: true,
      contentBasedDeduplication: true,
      retentionPeriod: cdk.Duration.days(14),
      encryption: sqs.QueueEncryption.KMS,
      encryptionMasterKey: kmsKey,
    });

    const schedule = new events.Rule(this, 'Schedule', {
      ruleName: `${project_id}-tweet`,
      description: `${project}: Trigger Tweeter function`,
      schedule: events.Schedule.rate(cdk.Duration.minutes(30)),
    });

    const role = new iam.Role(this, 'Role', {
      roleName: project_id,
      description: `Used by Lambda ${project}`,
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'service-role/AWSLambdaBasicExecutionRole'
        ),
      ],
    });

    queue.grantConsumeMessages(role);
    twitterCredentials.grantRead(role);
    kmsKey.grantEncryptDecrypt(role);

    const fn = new lambda.NodejsFunction(this, 'Tweeter', {
      functionName: `${project_id}-tweeter`,
      description: `${project}: Tweet one item from Floyd queue`,
      entry: path.join(__dirname, '../lambda/tweet/index.ts'),
      environmentEncryption: kmsKey,
      environment: {
        queue: queue.queueUrl,
        credentials: twitterCredentials.secretArn,
      },
      timeout: cdk.Duration.seconds(10),
      role: role,
      logRetention: logs.RetentionDays.ONE_WEEK,
    });

    const target = new targets.LambdaFunction(fn);
    schedule.addTarget(target);
  }
}
