import com.udondan.iamFloyd.cdk.Collection;
import com.udondan.iamFloyd.cdk.ManagedPolicyDocument;
import com.udondan.iamFloyd.cdk.PolicyStatement;

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
