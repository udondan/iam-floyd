import com.udondan.iamFloyd.cdk.Policy;
import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleFullEc2StopByOwner {
  static Object example() {
    // doc-start
    Policy policy = new Policy();
    policy.addStatements(
        new Ec2()
            .allow()
            .toStartInstances()
            .ifAwsRequestTag("Owner", "${aws:username}"),
        new Ec2()
            .allow()
            .toStopInstances()
            .ifResourceTag("Owner", "${aws:username}"),
        new Ec2()
            .allow()
            .allListActions()
            .allReadActions());
    // doc-end
    return policy;
  }
}
