import com.udondan.iamFloyd.cdk.statement.Ec2;
import software.amazon.awscdk.services.iam.PolicyStatementProps;

class ExampleSid {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2(PolicyStatementProps.builder().sid("MYSID").build())
        .allow()
        .toStartInstances()
        .toStopInstances();
    // doc-end
    return statement;
  }
}
