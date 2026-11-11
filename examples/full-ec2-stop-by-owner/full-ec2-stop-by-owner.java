import com.udondan.iamFloyd.ManagedPolicyDocument;
import com.udondan.iamFloyd.statement.Ec2;

class ExampleFullEc2StopByOwner {
  static Object example() {
    // doc-start
    ManagedPolicyDocument policy = new ManagedPolicyDocument(
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
