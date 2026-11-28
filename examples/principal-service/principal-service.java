import com.udondan.iamFloyd.cdk.AwsServicePrincipal;
import com.udondan.iamFloyd.cdk.statement.Sts;
import java.util.List;

class ExamplePrincipalService {
  static Object example() {
    // doc-start
    Sts s1 = new Sts()
        .allow()
        .toAssumeRole()
        .forService(AwsServicePrincipal.LAMBDA);

    Sts s2 = new Sts()
        .allow()
        .toAssumeRole()
        .forService(AwsServicePrincipal.ECS_TASKS, AwsServicePrincipal.EC2);
    // doc-end
    return List.of(s1, s2);
  }
}
