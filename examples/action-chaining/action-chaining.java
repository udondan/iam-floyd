import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleActionChaining {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .toStartInstances()
        .toStopInstances();
    // doc-end
    return statement;
  }
}
