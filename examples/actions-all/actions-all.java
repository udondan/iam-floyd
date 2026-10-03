import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleActionsAll {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .allActions();
    // doc-end
    return statement;
  }
}
