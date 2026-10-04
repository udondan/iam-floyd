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

/**
 * Creates and deletes the statements in AWS, as a policy, as trust policy of a role or as bucket
 * policy. Exits on failure.
 */
export function deploy(statements: PolicyStatement[], type = 'policy') {
  deployByType(statements, type).catch((error: unknown) => {
    console.error(error);
    process.exit(1);
  });
}

async function deployByType(statements: PolicyStatement[], type: string) {
  if (type == 'policy') {
    await deployPolicy(statements);
  } else if (type == 'assume') {
    await deployAssume(statements);
  } else if (type == 'access') {
    await deployAccess(statements);
  } else {
    throw new Error(`Unknown deploy type: ${type}`);
  }
}

async function deployPolicy(statements: PolicyStatement[]) {
  const policyName = newRandomName();

  log(`Creating test policy ${policyName}...`);

  const data = await iamClient.send(
    new CreatePolicyCommand({
      PolicyName: policyName,
      PolicyDocument: makePolicyDocument(statements),
      Description: 'Testing policy creation',
    }),
  );

  log(`Deleting test policy ${policyName}`);

  await iamClient.send(
    new DeletePolicyCommand({
      PolicyArn: data.Policy?.Arn,
    }),
  );
}

async function deployAssume(statements: PolicyStatement[]) {
  const roleName = newRandomName();

  log(`Creating test role ${roleName}...`);

  const data = await iamClient.send(
    new CreateRoleCommand({
      RoleName: roleName,
      AssumeRolePolicyDocument: makePolicyDocument(statements),
      Description: 'Testing policy creation',
    }),
  );

  log(`Deleting test role ${roleName}`);

  await iamClient.send(
    new DeleteRoleCommand({
      RoleName: data.Role?.RoleName,
    }),
  );
}

async function deployAccess(statements: PolicyStatement[]) {
  const bucketName = `random-bucket-for-floyd-${newRandomName().toLowerCase()}`;

  log(`Creating test bucket ${bucketName}...`);

  await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));

  log('Attaching bucket policy...');

  await s3Client.send(
    new PutBucketPolicyCommand({
      Bucket: bucketName,
      Policy: makePolicyDocument(statements),
    }),
  );

  log(`Deleting test bucket ${bucketName}`);

  await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName }));
}

function makePolicyDocument(statements: PolicyStatement[]) {
  const j = {
    Version: '2012-10-17',
    Statement: statements.map((s) => s.toJSON() as unknown),
  };

  return JSON.stringify(j, null, 4);
}

function newRandomName() {
  return randomBytes(10).toString('hex');
}

function log(msg: string) {
  console.error(msg);
}
