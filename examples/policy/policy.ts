import { Policy, PolicyType, Statement } from '../../lib';

function getPolicy() {
  function wrap() {
    // doc-start
    const policy = new Policy(PolicyType.inlineRole);
    policy.addStatements(
      new Statement.S3() //
        .allow()
        .toGetObject()
        .on('arn:aws:s3:::example-bucket/*'),
      new Statement.Sqs()
        .allow()
        .toSendMessage()
        .on('arn:aws:sqs:us-east-1:123456789012:example-queue'),
    );
    policy.validate(); // throws, if it exceeds the maximum size of an inline policy of a role
    // doc-end
    return policy;
  }
  return wrap();
}

const policy = getPolicy();
const str = JSON.stringify(policy, null, 4);
console.log(str);
