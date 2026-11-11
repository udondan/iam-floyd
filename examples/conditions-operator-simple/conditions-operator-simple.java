import com.udondan.iamFloyd.Operator;
import com.udondan.iamFloyd.statement.Ec2;

class ExampleConditionsOperatorSimple {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag("TagWithSpecialChars", "*John*", Operator.STRING_EQUALS);
    // doc-end
    return statement;
  }
}
