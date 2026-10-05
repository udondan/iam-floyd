import com.udondan.iamFloyd.cdk.Policy;
import com.udondan.iamFloyd.cdk.PolicyType;
import com.udondan.iamFloyd.cdk.statement.S3;
import com.udondan.iamFloyd.cdk.statement.Sqs;

class ExamplePolicy {
  static Object example() {
    // doc-start
    Policy policy = new Policy(PolicyType.INLINE_ROLE);
    policy.addStatements(
        new S3()
            .allow()
            .toGetObject()
            .on("arn:aws:s3:::example-bucket/*"),
        new Sqs()
            .allow()
            .toSendMessage()
            .on("arn:aws:sqs:us-east-1:123456789012:example-queue"));
    policy.validate(); // throws, if it exceeds the maximum size of an inline policy of a role
    // doc-end
    return policy;
  }
}
