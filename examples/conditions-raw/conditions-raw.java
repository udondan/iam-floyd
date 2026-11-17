import com.udondan.iamFloyd.statement.Ec2;

class ExampleConditionsRaw {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .doIf("ec2:missingCondition", "some-value");
    // doc-end
    return statement;
  }
}
