//import * as cdk from 'aws-cdk-lib';
//import iam = require('aws-cdk-lib/aws-iam');
import {
  CreatePolicyCommand,
  CreateRoleCommand,
  DeletePolicyCommand,
  DeleteRoleCommand,
  IAMClient,
  IAMClientConfig,
} from '@aws-sdk/client-iam';
import {
  CreateBucketCommand,
  DeleteBucketCommand,
  PutBucketPolicyCommand,
  S3Client,
  S3ClientConfig,
} from '@aws-sdk/client-s3';
import { randomBytes } from 'crypto';

import { PolicyStatement } from '../../lib/shared';

const region = 'us-east-1';

const clientConfig: IAMClientConfig = {
  region,
};
if (
  process.env.AWS_ACCESS_KEY_ID &&
  process.env.AWS_SECRET_ACCESS_KEY &&
  process.env.AWS_SESSION_TOKEN
) {
  clientConfig.credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  };
}

const iamClient = new IAMClient(clientConfig);
const s3Client = new S3Client(clientConfig as S3ClientConfig);

export function out(statements: PolicyStatement[]) {
  statements.forEach((statement) => {
    const str = JSON.stringify(statement.toJSON(), null, 4);
    console.log(str);
  });
}

export async function deploy(statements: PolicyStatement[], type = 'policy') {
  try {
    if (type == 'policy') {
      await deployPolicy(statements);
    } else if (type == 'assume') {
      await deployAssume(statements);
    } else if (type == 'access') {
      await deployAccess(statements);
      // } else if (type == 'cdk') {
      //   deployCdk(statements);
    } else {
      throw new Error(`Unknown deploy type: ${type}`);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

function deployPolicy(statements: PolicyStatement[]): Promise<void> {
  return new Promise(async function (resolve, reject) {
    const policyName = newRandomName();

    log(`Creating test policy ${policyName}...`);

    const document = makePolicyDocument(statements);

    try {
      const data = await iamClient.send(
        new CreatePolicyCommand({
          PolicyName: policyName,
          PolicyDocument: document,
          Description: 'Testing policy creation',
        }),
      );

      log(`Deleting test policy ${policyName}`);

      await iamClient.send(
        new DeletePolicyCommand({
          PolicyArn: data.Policy?.Arn,
        }),
      );
      resolve();
    } catch (err) {
      log(err);
      reject(err);
    }
  });
}

function deployAssume(statements: any[]): Promise<void> {
  return new Promise(async function (resolve, reject) {
    const roleName = newRandomName();

    log(`Creating test role ${roleName}...`);

    const document = makePolicyDocument(statements);

    try {
      const data = await iamClient.send(
        new CreateRoleCommand({
          RoleName: roleName,
          AssumeRolePolicyDocument: document,
          Description: 'Testing policy creation',
        }),
      );

      log(`Deleting test role ${roleName}`);

      await iamClient.send(
        new DeleteRoleCommand({
          RoleName: data.Role?.RoleName,
        }),
      );
      resolve();
    } catch (err) {
      log(err);
      reject(err);
    }
  });
}

function deployAccess(statements: any[]): Promise<void> {
  return new Promise(async function (resolve, reject) {
    const bucketName = `random-bucket-for-floyd-${newRandomName().toLowerCase()}`;

    log(`Creating test bucket ${bucketName}...`);

    const document = makePolicyDocument(statements);

    try {
      await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));

      log('Attaching bucket policy...');

      await s3Client.send(
        new PutBucketPolicyCommand({
          Bucket: bucketName,
          Policy: document,
        }),
      );

      log(`Deleting test bucket ${bucketName}`);

      await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName }));
      resolve();
    } catch (err) {
      log(err);
      reject(err);
    }
  });
}
//
//interface StackProps extends cdk.StackProps {
//  statements: iam.PolicyStatement[];
//}
//
//class Stack extends cdk.Stack {
//  constructor(scope: Construct, id: string, props: StackProps) {
//    super(scope, id, props);
//    new iam.Policy(this, 'Policy', {
//      statements: props.statements,
//    });
//  }
//}
//
//function deployCdk(statements: iam.PolicyStatement[]) {
//  const app = new cdk.App();
//  new Stack(app, 'TestStack' + newRandomName(), {
//    statements: statements,
//  });
//  app.synth();
//}

function makePolicyDocument(statements: any[]) {
  const j = {
    Version: '2012-10-17',
    Statement: statements.map((s) => s.toJSON()),
  };

  return JSON.stringify(j, null, 4);
}

function newRandomName() {
  return randomBytes(10).toString('hex');
}

function log(msg: any) {
  console.error(msg);
}
