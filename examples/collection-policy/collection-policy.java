import com.udondan.iamFloyd.cdk.Collection;
import com.udondan.iamFloyd.cdk.ManagedPolicyDocument;

class ExampleCollectionPolicy {
  static Object example() {
    // doc-start
    ManagedPolicyDocument policy = new ManagedPolicyDocument();
    for (var statement : new Collection().allowEc2InstanceDeleteByOwner()) {
      policy.addStatements(statement);
    }
    // doc-end
    return policy;
  }
}
