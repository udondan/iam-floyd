import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleNotAction {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .notAction()
        .toDeleteBucket()
        .onBucket("example-bucket");
    // doc-end
    return statement;
  }
}
