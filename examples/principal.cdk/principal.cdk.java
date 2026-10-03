import com.udondan.iamFloyd.cdk.statement.Sts;
import software.amazon.awscdk.services.iam.ServicePrincipal;

class ExamplePrincipalCdk {
  static Object example() {
    // doc-start
    Sts statement = new Sts()
        .allow()
        .toAssumeRole()
        .forCdkPrincipal(
            new ServicePrincipal("sns.amazonaws.com"),
            new ServicePrincipal("lambda.amazonaws.com")
        );
    // doc-end
    return statement;
  }
}
