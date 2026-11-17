import com.udondan.iamFloyd.statement.Ec2;

class ExampleConditionsOperatorString {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag("TagWithSpecialChars", "*John*", "StringEquals");
    // doc-end
    return statement;
  }
}
