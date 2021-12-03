import { Duration, RemovalPolicy, Stack as CdkStack, StackProps, Tags } from 'aws-cdk-lib';
import { aws_sqs as sqs } from 'aws-cdk-lib';
import { aws_secretsmanager as secretsmanager } from 'aws-cdk-lib';
import { aws_logs as logs } from 'aws-cdk-lib';
import { aws_lambda_nodejs as lambda } from 'aws-cdk-lib';
import { aws_kms as kms } from 'aws-cdk-lib';
import { aws_events as events } from 'aws-cdk-lib';
import { aws_events_targets as targets } from 'aws-cdk-lib';
import { aws_iam as iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import path = require('path');

const project = 'Floyd Tweeter';
const project_id = 'floyd-tweeter';

export class Stack extends CdkStack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    Tags.of(scope).add('Project', project);

    const kmsKey = new kms.Key(this, 'KmsKey', {
      enableKeyRotation: false,
      description: `Encryption key for ${project}`,
      alias: `alias/${project_id}`,
      removalPolicy: RemovalPolicy.DESTROY,
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
      retentionPeriod: Duration.days(14),
      encryption: sqs.QueueEncryption.KMS,
      encryptionMasterKey: kmsKey,
    });

    const schedule = new events.Rule(this, 'Schedule', {
      ruleName: `${project_id}-tweet`,
      description: `${project}: Trigger Tweeter function`,
      schedule: events.Schedule.rate(Duration.minutes(30)),
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
      timeout: Duration.seconds(10),
      role: role,
      logRetention: logs.RetentionDays.ONE_WEEK,
    });

    const target = new targets.LambdaFunction(fn);
    schedule.addTarget(target);
  }
}
