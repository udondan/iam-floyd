import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleDeny {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .deny()
        .toStartInstances()
        .toStopInstances();
    // doc-end
    return statement;
  }
}
