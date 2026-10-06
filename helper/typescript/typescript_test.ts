import {
  CreatePolicyCommand,
  DeletePolicyCommand,
  IAMClient,
  IAMClientConfig,
  paginateListPolicies,
} from '@aws-sdk/client-iam';
import {
  CreateBucketCommand,
  DeleteBucketCommand,
  paginateListBuckets,
  PutBucketPolicyCommand,
  S3Client,
  S3ClientConfig,
} from '@aws-sdk/client-s3';
import { randomBytes } from 'crypto';

import { PolicyStatement } from '../../lib/shared';

const region = 'us-east-1';

// the path of the test policies and the prefix of the test buckets, to find leftovers of cancelled
// runs, see cleanUp()
const policyPath = '/iam-floyd-test/';
const bucketPrefix = 'random-bucket-for-floyd-';

// leftovers older than this are deleted by cleanUp(), younger ones may belong to a running test
const maxAge = 60 * 60 * 1000;

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
 * Creates and deletes the statements in AWS, as a policy or as bucket policy. Exits on failure.
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
      Path: policyPath,
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

async function deployAccess(statements: PolicyStatement[]) {
  const bucketName = `${bucketPrefix}${newRandomName().toLowerCase()}`;

  log(`Creating test bucket ${bucketName}...`);

  await s3Client.send(new CreateBucketCommand({ Bucket: bucketName }));

  try {
    log('Attaching bucket policy...');

    await s3Client.send(
      new PutBucketPolicyCommand({
        Bucket: bucketName,
        Policy: makePolicyDocument(statements),
      }),
    );
  } finally {
    log(`Deleting test bucket ${bucketName}`);

    await s3Client.send(new DeleteBucketCommand({ Bucket: bucketName }));
  }
}

/**
 * Deletes the test policies and buckets older than an hour, which cancelled or failed runs left
 * behind
 */
export async function cleanUp() {
  const before = Date.now() - maxAge;
  const old = (date?: Date) => date !== undefined && date.getTime() < before;

  for await (const page of paginateListPolicies(
    { client: iamClient },
    { Scope: 'Local', PathPrefix: policyPath },
  )) {
    for (const policy of page.Policies ?? []) {
      if (!old(policy.CreateDate)) continue;
      log(`Deleting leftover test policy ${policy.PolicyName}`);
      await iamClient.send(new DeletePolicyCommand({ PolicyArn: policy.Arn }));
    }
  }

  for await (const page of paginateListBuckets(
    { client: s3Client },
    { Prefix: bucketPrefix },
  )) {
    for (const bucket of page.Buckets ?? []) {
      if (!old(bucket.CreationDate)) continue;
      log(`Deleting leftover test bucket ${bucket.Name}`);
      await s3Client.send(new DeleteBucketCommand({ Bucket: bucket.Name }));
    }
  }
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
