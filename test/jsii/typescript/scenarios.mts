// cdk-iam-floyd used directly and through a jsii library (floyd-consumer), without jsii in between.
// This is the baseline for the other languages.
//
// Prints one line per scenario: the name, a tab and the IAM policies of the stack as JSON (or FAIL).
// Runs with Node's type stripping from the floyd-consumer build directory.

import type { Stack as StackType } from 'aws-cdk-lib';
import cdk from 'aws-cdk-lib';
import floyd from 'cdk-iam-floyd';
import consumer from './lib/index.js';

const { App, Stack, assertions, aws_iam: iam } = cdk;
const { InlineRolePolicyDocument, ManagedPolicyDocument, Statement } = floyd;

function scenario(name: string, fn: (stack: StackType) => void) {
  const stack = new Stack(new App(), 'Stack');
  try {
    fn(stack);
    const resources: Record<
      string,
      { Type: string; Properties: { PolicyDocument: { Statement: unknown } } }
    > = assertions.Template.fromStack(stack).toJSON().Resources ?? {};
    const policies = Object.fromEntries(
      Object.entries(resources)
        .filter(([, resource]) => resource.Type === 'AWS::IAM::Policy')
        .map(([id, resource]) => [
          id,
          resource.Properties.PolicyDocument.Statement,
        ]),
    );
    console.log(`${name}\t${JSON.stringify(policies)}`);
  } catch (e) {
    console.log(
      `${name}\tFAIL ${e instanceof Error ? e.stack : e}`.replace(/\n/g, ' '),
    );
  }
}

function role(stack: StackType) {
  return new iam.Role(stack, 'Role', {
    assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
  });
}

function reader(
  stack: StackType,
  extraStatements?: InstanceType<typeof iam.PolicyStatement>[],
) {
  return new consumer.ReaderRole(stack, 'Reader', {
    bucketName: 'bucket',
    extraStatements,
  });
}

scenario('a direct use', (stack) => {
  const statement = new Statement.S3()
    .allow()
    .toGetObject()
    .onObject('my-bucket', '*');
  if (!(statement instanceof iam.PolicyStatement)) {
    throw new Error('not an iam.PolicyStatement');
  }
  role(stack).addToPolicy(statement.ifAwsSourceIp('10.0.0.0/8'));
});

scenario('b library uses floyd internally', (stack) => {
  reader(stack);
});

scenario('c statements passed as iam.PolicyStatement[]', (stack) => {
  reader(stack, [new Statement.Dynamodb().allow().toGetItem().onTable('t')]);
});

scenario('d statement passed as Statement.S3', (stack) => {
  reader(stack).addS3Statement(
    new Statement.S3().allow().toPutObject().onBucket('b'),
  );
});

scenario('e library calls a floyd method on a passed statement', (stack) => {
  reader(stack).addS3ListStatement(new Statement.S3().allow().onBucket('b'));
});

scenario('f1 statement returned as iam.PolicyStatement', (stack) => {
  role(stack).addToPolicy(consumer.Statements.sqsRead());
});

scenario('f2 statement returned as Statement.S3, then chained', (stack) => {
  role(stack).addToPolicy(
    consumer.Statements.s3Read().onBucket('chained').deny(),
  );
});

scenario('g library subclasses a floyd class', (stack) => {
  role(stack).addToPolicy(new consumer.ListBuckets().toListBucket());
});

scenario('h statement passed as floyd base class', (stack) => {
  role(stack).addToPolicy(
    consumer.Helpers.denied(new Statement.S3().toGetObject()),
  );
});

scenario('i policy used as document', (stack) => {
  const policy = new InlineRolePolicyDocument(
    new Statement.S3().allow().toGetObject().onObject('bucket', '*'),
  );
  policy.addStatements(
    new Statement.Sqs().allow().toSendMessage().onQueue('queue'),
  );
  policy.validate();
  new iam.Policy(stack, 'Document', { document: policy, roles: [role(stack)] });
});

scenario('j policies of split used as documents', (stack) => {
  const policy = new ManagedPolicyDocument(
    new Statement.S3().allow().toGetObject().onObject('bucket', '*'),
    new Statement.Sqs().allow().toSendMessage().onQueue('queue'),
    new Statement.Dynamodb().allow().toGetItem().onTable('table'),
  );
  // two statements per policy
  policy.arnSizeEstimate = 2500;
  const roles = [role(stack)];
  policy.split().forEach((part, index) => {
    new iam.Policy(stack, `Part${index}`, { document: part, roles });
  });
});
