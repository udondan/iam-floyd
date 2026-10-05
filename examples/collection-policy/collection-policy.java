import com.udondan.iamFloyd.cdk.Collection;
import com.udondan.iamFloyd.cdk.Policy;

class ExampleCollectionPolicy {
  static Object example() {
    // doc-start
    Policy policy = new Policy();
    for (var statement : new Collection().allowEc2InstanceDeleteByOwner()) {
      policy.addStatements(statement);
    }
    // doc-end
    return policy;
  }
}
