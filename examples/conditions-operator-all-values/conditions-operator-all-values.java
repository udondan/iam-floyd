import com.udondan.iamFloyd.cdk.Operator;
import com.udondan.iamFloyd.cdk.statement.Dynamodb;
import java.util.List;

class ExampleConditionsOperatorAllValues {
  static Object example() {
    // doc-start
    Dynamodb statement = new Dynamodb()
        .allow()
        .toGetItem()
        .onTable("Thread")
        .ifAttributes(
            List.of("ID", "Message", "Tags"),
            new Operator().stringEquals().forAllValues()
        );
    // doc-end
    return statement;
  }
}
