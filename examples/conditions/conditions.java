import com.udondan.iamFloyd.cdk.statement.Ec2;
import java.util.List;

class ExampleConditions {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .ifEncrypted()
        .ifInstanceType(List.of("t3.micro", "t3.nano"))
        .ifAssociatePublicIpAddress(false)
        .ifAwsRequestTag("Owner", "John");
    // doc-end
    return statement;
  }
}
