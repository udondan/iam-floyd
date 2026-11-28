import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleAccessLevelsTagging {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allTaggingActions();
    // doc-end
    return statement;
  }
}
