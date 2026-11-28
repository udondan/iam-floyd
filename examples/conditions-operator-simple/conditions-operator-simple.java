import com.udondan.iamFloyd.cdk.Operator;
import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleConditionsOperatorSimple {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag("TagWithSpecialChars", "*John*", new Operator().stringEquals());
    // doc-end
    return statement;
  }
}
