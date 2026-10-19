import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleAccessLevelsRead {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allReadActions();
    // doc-end
    return statement;
  }
}
