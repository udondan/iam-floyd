import { Policy, PolicyType, Statement } from '../../lib';

function getPolicies() {
  function wrap() {
    // doc-start
    const policy = new Policy(PolicyType.managed, 300);
    policy.addStatements(
      new Statement.S3() //
        .allow()
        .toGetObject()
        .on('arn:aws:s3:::example-bucket/*'),
      new Statement.Sqs()
        .allow()
        .toSendMessage()
        .on('arn:aws:sqs:us-east-1:123456789012:example-queue'),
      new Statement.Dynamodb()
        .allow()
        .toGetItem()
        .toQuery()
        .on('arn:aws:dynamodb:us-east-1:123456789012:table/example-table'),
    );
    const policies = policy.split(); // two policies of at most 300 characters each
    // doc-end
    return policies;
  }
  return wrap();
}

for (const policy of getPolicies()) {
  const str = JSON.stringify(policy, null, 4);
  console.log(str);
}
