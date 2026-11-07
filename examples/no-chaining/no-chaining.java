import com.udondan.iamFloyd.cdk.statement.Ec2;

class ExampleNoChaining {
  static Object example() {
    // doc-start
    Ec2 myStatement = new Ec2();
    myStatement.allow();
    myStatement.toStartInstances();
    myStatement.toStopInstances();
    // doc-end
    return myStatement;
  }
}
