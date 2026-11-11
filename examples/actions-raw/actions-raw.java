import com.udondan.iamFloyd.statement.Ec2;

class ExampleActionsRaw {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .to("missingAction");
    // doc-end
    return statement;
  }
}
