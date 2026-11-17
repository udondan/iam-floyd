import com.udondan.iamFloyd.Collection;
import com.udondan.iamFloyd.ManagedPolicyDocument;
import com.udondan.iamFloyd.PolicyStatement;

class ExampleCollectionPolicy {
  static Object example() {
    // doc-start
    ManagedPolicyDocument policy =
        new ManagedPolicyDocument(
            new Collection().allowEc2InstanceDeleteByOwner().toArray(new PolicyStatement[0]));
    // doc-end
    return policy;
  }
}
