import com.udondan.iamFloyd.statement.Ec2;

class ExampleSid {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2("MYSID")
        .allow()
        .toStartInstances()
        .toStopInstances();
    // doc-end
    return statement;
  }
}
