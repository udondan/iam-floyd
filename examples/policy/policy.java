import com.udondan.iamFloyd.cdk.InlineRolePolicyDocument;
import com.udondan.iamFloyd.cdk.statement.S3;
import com.udondan.iamFloyd.cdk.statement.Sqs;

class ExamplePolicy {
  static Object example() {
    // doc-start
    InlineRolePolicyDocument policy =
        new InlineRolePolicyDocument(
            new S3()
                .allow()
                .toGetObject()
                .on("arn:aws:s3:::example-bucket/*"));
    policy.addStatements(
        new Sqs()
            .allow()
            .toSendMessage()
            .on("arn:aws:sqs:us-east-1:123456789012:example-queue"));
    policy.validate(); // throws, if it exceeds the maximum size of an inline policy of a role
    // doc-end
    return policy;
  }
}
