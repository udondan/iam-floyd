import { ManagedPolicyDocument, Statement } from '../../lib';

function getPolicies() {
  function wrap() {
    // doc-start
    const buckets: string[] = [];
    for (let i = 1; i <= 50; i++) {
      buckets.push(`arn:aws:s3:::example-bucket-${i}/*`);
    }
    const policy = new ManagedPolicyDocument(
      new Statement.S3()
        .allow()
        .toGetObject()
        .on(...buckets),
      new Statement.S3()
        .allow()
        .toPutObject()
        .on(...buckets),
      new Statement.S3()
        .allow()
        .toDeleteObject()
        .on(...buckets),
      new Statement.S3()
        .allow()
        .toGetObjectTagging()
        .on(...buckets),
    );
    const policies = policy.split(); // two policies of at most 6,144 characters each
    // doc-end
    return policies;
  }
  return wrap();
}

for (const policy of getPolicies()) {
  const str = JSON.stringify(policy, null, 4);
  console.log(str);
}
