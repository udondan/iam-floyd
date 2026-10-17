import { Stack, aws_s3 as s3, aws_sns as sns } from 'aws-cdk-lib';

import { out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatements() {
  const stack = new Stack();
  // doc-start
  const bucket = new s3.Bucket(stack, 'Bucket');
  const topic = new sns.CfnTopic(stack, 'Topic');

  const s1 = new Statement.S3() //
    .allow()
    .toListBucket()
    .onBucket(bucket);

  const s2 = new Statement.Sns() //
    .allow()
    .toPublish()
    .onTopic(topic);
  // doc-end
  return [s1, s2];
}
const s = getStatements();
out(s);
