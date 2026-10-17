import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleAccessLevelsWrite {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allWriteActions();
    // doc-end
    return statement;
  }
}
