import com.udondan.iamFloyd.cdk.Collection;
import java.util.ArrayList;
import software.amazon.awscdk.services.iam.PolicyDocument;

class ExampleCollectionPolicy {
  static Object example() {
    // doc-start
    PolicyDocument policy = PolicyDocument.Builder.create()
        .statements(new ArrayList<>(new Collection().allowEc2InstanceDeleteByOwner()))
        .build();
    // doc-end
    return policy;
  }
}
