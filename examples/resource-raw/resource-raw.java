import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleResourceRaw {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .allow()
        .allActions()
        .on("arn:aws:s3:::example-bucket", "arn:aws:s3:::another-bucket");
    // doc-end
    return statement;
  }
}
