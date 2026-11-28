import com.udondan.iamFloyd.cdk.statement.Lambda;

class ExampleArnDefaultsSeparate {
  static Object example() {
    // doc-start
    Lambda statement = new Lambda()
        .allow()
        .toUpdateFunctionCode()
        .inAccount("098765432109")
        .inRegion("us-east-1")
        .inPartition("aws")
        .onFunction("my-function-1")
        .onFunction("my-function-2");
    // doc-end
    return statement;
  }
}
