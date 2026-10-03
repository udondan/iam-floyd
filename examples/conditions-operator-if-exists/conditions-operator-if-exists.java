import com.udondan.iamFloyd.cdk.Operator;
import com.udondan.iamFloyd.cdk.statement.Ec2;
import java.util.List;

class ExampleConditionsOperatorIfExists {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag(
            "Environment",
            List.of("Production", "Staging", "Dev"),
            new Operator().stringEquals().ifExists()
        );
    // doc-end
    return statement;
  }
}
