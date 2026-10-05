import com.udondan.iamFloyd.cdk.Policy;
import com.udondan.iamFloyd.cdk.PolicyType;
import com.udondan.iamFloyd.cdk.statement.Dynamodb;
import com.udondan.iamFloyd.cdk.statement.S3;
import com.udondan.iamFloyd.cdk.statement.Sqs;
import java.util.List;

class ExamplePolicySplit {
  static Object example() {
    // doc-start
    Policy policy = new Policy(PolicyType.MANAGED, 300);
    policy.addStatements(
        new S3()
            .allow()
            .toGetObject()
            .on("arn:aws:s3:::example-bucket/*"),
        new Sqs()
            .allow()
            .toSendMessage()
            .on("arn:aws:sqs:us-east-1:123456789012:example-queue"),
        new Dynamodb()
            .allow()
            .toGetItem()
            .toQuery()
            .on("arn:aws:dynamodb:us-east-1:123456789012:table/example-table"));
    List<Policy> policies = policy.split(); // two policies of at most 300 characters each
    // doc-end
    return policies;
  }
}
