import {
  aws_events,
  aws_events_targets,
  aws_iam,
  aws_kms,
  aws_lambda,
  aws_lambda_nodejs,
  aws_logs,
  aws_secretsmanager,
  aws_sqs,
  Duration,
  RemovalPolicy,
  Stack as CdkStack,
  StackProps,
  Tags,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import path = require('path');

const project = 'Floyd Tweeter';
const project_id = 'floyd-tweeter';

export class Stack extends CdkStack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    Tags.of(scope).add('Project', project);

    const kmsKey = new aws_kms.Key(this, 'KmsKey', {
      enableKeyRotation: false,
      description: `Encryption key for ${project}`,
      alias: `alias/${project_id}`,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const twitterCredentials = new aws_secretsmanager.Secret(
      this,
      'Credentials',
      {
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
      }
    );

    const mastodonCredentials = new aws_secretsmanager.Secret(
      this,
      'MastodonCredentials',
      {
        description: `${project}: Credentials for Mastodon API`,
        encryptionKey: kmsKey,
        generateSecretString: {
          secretStringTemplate: JSON.stringify({
            client_key: '',
            client_secret: '',
            access_token: '',
          }),
          generateStringKey: 'access_token_secret',
        },
      }
    );

    const twitterQueue = new aws_sqs.Queue(this, 'Queue', {
      queueName: `${project_id}-tweets.fifo`,
      fifo: true,
      contentBasedDeduplication: true,
      retentionPeriod: Duration.days(14),
      encryption: aws_sqs.QueueEncryption.KMS,
      encryptionMasterKey: kmsKey,
    });

    const mastodonQueue = new aws_sqs.Queue(this, 'MastodonQueue', {
      queueName: `${project_id}-toots.fifo`,
      fifo: true,
      contentBasedDeduplication: true,
      retentionPeriod: Duration.days(14),
      encryption: aws_sqs.QueueEncryption.KMS,
      encryptionMasterKey: kmsKey,
    });

    const schedule = new aws_events.Rule(this, 'Schedule', {
      ruleName: `${project_id}-tweet`,
      description: `${project}: Trigger Tweeter & Tooter function`,
      schedule: aws_events.Schedule.rate(Duration.minutes(30)),
    });

    const twitterFn = new aws_lambda_nodejs.NodejsFunction(this, 'Tweeter', {
      functionName: `${project_id}-tweeter`,
      description: `${project}: Tweet one item from Floyd queue`,
      entry: path.join(__dirname, '../lambda/tweet/index.ts'),
      environmentEncryption: kmsKey,
      environment: {
        queue: twitterQueue.queueUrl,
        credentials: twitterCredentials.secretArn,
      },
      runtime: aws_lambda.Runtime.NODEJS_14_X,
      timeout: Duration.seconds(10),
      logRetention: aws_logs.RetentionDays.ONE_WEEK,
    });

    const mastodonFn = new aws_lambda_nodejs.NodejsFunction(this, 'Tooter', {
      functionName: `${project_id}-tooter`,
      description: `${project}: Toot one item from Floyd queue`,
      entry: path.join(__dirname, '../lambda/toot/index.ts'),
      environmentEncryption: kmsKey,
      environment: {
        queue: mastodonQueue.queueUrl,
        credentials: mastodonCredentials.secretArn,
      },
      runtime: aws_lambda.Runtime.NODEJS_16_X,
      timeout: Duration.seconds(10),
      logRetention: aws_logs.RetentionDays.ONE_WEEK,
    });

    twitterQueue.grantConsumeMessages(twitterFn);
    twitterCredentials.grantRead(twitterFn);

    mastodonQueue.grantConsumeMessages(mastodonFn);
    mastodonCredentials.grantRead(mastodonFn);

    kmsKey.grantEncryptDecrypt(twitterFn);
    kmsKey.grantEncryptDecrypt(mastodonFn);

    const twitterTarget = new aws_events_targets.LambdaFunction(twitterFn);
    const mastodonTarget = new aws_events_targets.LambdaFunction(mastodonFn);
    schedule.addTarget(twitterTarget);
    schedule.addTarget(mastodonTarget);
  }
}
