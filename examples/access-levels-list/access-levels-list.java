import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleAccessLevelsList {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allListActions();
    // doc-end
    return statement;
  }
}
