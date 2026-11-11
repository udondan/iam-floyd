import com.udondan.iamFloyd.statement.Ec2;

class ExampleAllow {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .toStartInstances()
        .toStopInstances();
    // doc-end
    return statement;
  }
}
