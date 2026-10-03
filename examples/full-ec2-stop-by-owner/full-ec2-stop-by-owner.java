import com.udondan.iamFloyd.cdk.statement.Ec2;
import java.util.List;
import software.amazon.awscdk.services.iam.PolicyDocument;

class ExampleFullEc2StopByOwner {
  static Object example() {
    // doc-start
    PolicyDocument policy = PolicyDocument.Builder.create()
        .statements(List.of(
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
                .allReadActions()))
        .build();
    // doc-end
    return policy;
  }
}
