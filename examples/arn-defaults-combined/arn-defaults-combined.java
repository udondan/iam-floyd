import com.udondan.iamFloyd.cdk.statement.Lambda;

class ExampleArnDefaultsCombined {
  static Object example() {
    // doc-start
    Lambda statement = new Lambda()
        .allow()
        .toUpdateFunctionCode()
        .in("098765432109", "us-west-1", "aws")
        .onFunction("my-function-1")
        .onFunction("my-function-2");
    // doc-end
    return statement;
  }
}
