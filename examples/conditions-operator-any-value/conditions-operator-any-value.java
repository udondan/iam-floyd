import com.udondan.iamFloyd.cdk.Operator;
import com.udondan.iamFloyd.cdk.statement.Dynamodb;
import java.util.List;

class ExampleConditionsOperatorAnyValue {
  static Object example() {
    // doc-start
    Dynamodb statement = new Dynamodb()
        .deny()
        .toPutItem()
        .onTable("Thread")
        .ifAttributes(List.of("ID", "PostDateTime"), new Operator().stringEquals().forAnyValue());
    // doc-end
    return statement;
  }
}
