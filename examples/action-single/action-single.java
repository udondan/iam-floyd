import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleActionSingle {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2().toStartInstances();
    // doc-end
    return statement;
  }
}
