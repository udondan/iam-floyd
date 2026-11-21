import com.udondan.iamFloyd.cdk.statement.Lambda;

class ExampleArnDefaultsOverride {
  static Object example() {
    // doc-start
    Lambda statement = new Lambda()
        .allow()
        .toUpdateFunctionCode()
        .in("098765432109", "us-west-1", "aws")
        .onFunction("my-function-1")
        .in("123456789012", "us-east-1", "aws")
        .onFunction("my-function-2");
    // doc-end
    return statement;
  }
}
