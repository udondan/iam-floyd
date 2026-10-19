import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleNotResource {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .notResource()
        .toDeleteBucket()
        .onBucket("example-bucket");
    // doc-end
    return statement;
  }
}
