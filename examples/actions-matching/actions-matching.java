import com.udondan.iamFloyd.statement.Ec2;

class ExampleActionsMatching {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .deny()
        .allMatchingActions("/vpn/i");
    // doc-end
    return statement;
  }
}
