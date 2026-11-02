import com.udondan.iamFloyd.cdk.statement.S3;

class ExampleNotPrincipal {
  static Object example() {
    // doc-start
    S3 statement = new S3()
        .deny()
        .allActions()
        .notPrincipal()
        .forUser("1234567890", "Bob")
        .onObject("example-bucket", "*");
    // doc-end
    return statement;
  }
}
