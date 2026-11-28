import com.udondan.iamFloyd.cdk.Collection;
import com.udondan.iamFloyd.cdk.PolicyStatement;
import java.util.List;

class ExampleCollection {
  static Object example() {
    // doc-start
    List<PolicyStatement> statements = new Collection().allowEc2InstanceDeleteByOwner();
    // doc-end
    return statements;
  }
}
