import com.udondan.iamFloyd.statement.Ec2;

class ExampleCompact {
  static Object example() {
    // doc-start
    Ec2 statement = new Ec2()
        .allow()
        .allReadActions()
        .allListActions()
        .compact();
    // doc-end
    return statement;
  }
}
