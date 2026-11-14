/**
 * Tests the parts of the policy documents that only the CDK variant has: the size estimate of values
 * with tokens, which are only resolved on deployment, and of the principal `*`, which the AWS CDK
 * writes as a string.
 *
 * Usage, after `make cdk`: ts-node test/cdk-variant/policy-document.ts
 */
import { aws_iam as iam, aws_s3 as s3, Stack } from 'aws-cdk-lib';

import { PolicyDocument, Statement } from '../../lib';

function assertEqual(
  actual: number | string,
  expected: number | string,
  message: string,
) {
  if (actual !== expected) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}

function size(...statements: Statement.S3[]): number {
  return new PolicyDocument(10000, ...statements).estimateSize();
}

const stack = new Stack();
const bucket = new s3.Bucket(stack, 'Bucket');

// an ARN with tokens counts as arnSizeEstimate (150) characters
assertEqual(
  size(new Statement.S3().allow().toGetObject().onBucket(bucket)),
  size(new Statement.S3().allow().toGetObject().on('a'.repeat(150))),
  'The size of an ARN with tokens',
);

// the principal `*` of StarPrincipal, which the AWS CDK writes as a string, counts as one ARN:
// `"Principal":` and the comma plus arnSizeEstimate
const statement = new Statement.S3()
  .allow()
  .toGetObject()
  .on('arn:aws:s3:::bucket/*');
assertEqual(
  size(
    new Statement.S3()
      .allow()
      .toGetObject()
      .on('arn:aws:s3:::bucket/*')
      .forCdkPrincipal(new iam.StarPrincipal()),
  ) - size(statement),
  14 + 150,
  'The size of the principal *',
);

// freezing a statement twice applies the CDK specifics once
const frozen = new Statement.S3().allow().toGetObject().onBucket(bucket);
frozen.freeze();
frozen.freeze();
assertEqual(
  JSON.stringify(stack.resolve(frozen.toStatementJson())),
  JSON.stringify(stack.resolve(frozen.toStatementJson())),
  'The statement after freezing it twice',
);
assertEqual(
  (frozen.toStatementJson() as { Action: string }).Action,
  's3:GetObject',
  'The actions of the frozen statement',
);

console.log('Tested the policy documents of the CDK variant');
