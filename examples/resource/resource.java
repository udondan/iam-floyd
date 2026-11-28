import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleResource {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allActions()
        .onBucket("example-bucket")
        .onObject("example-bucket", "some/path/*");
    // doc-end
    return statement;
  }
}
