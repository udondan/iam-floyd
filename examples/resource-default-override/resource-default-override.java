import com.udondan.iamFloyd.statement.Lambda;

class ExampleResourceDefaultOverride {
  static Object example() {
    // doc-start
    Lambda statement = new Lambda()
        .allow()
        .toUpdateFunctionCode()
        .onFunction("my-function", "098765432109", "us-east-1", "aws");
    // doc-end
    return statement;
  }
}
