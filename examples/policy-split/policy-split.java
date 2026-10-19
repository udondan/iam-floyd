import com.udondan.iamFloyd.cdk.ManagedPolicyDocument;
import com.udondan.iamFloyd.cdk.PolicyDocument;
import com.udondan.iamFloyd.cdk.statement.S3;
import java.util.List;

class ExamplePolicySplit {
  static Object example() {
    // doc-start
    String[] buckets = new String[50];
    for (int i = 1; i <= 50; i++) {
      buckets[i - 1] = "arn:aws:s3:::example-bucket-" + i + "/*";
    }
    ManagedPolicyDocument policy =
        new ManagedPolicyDocument(
            new S3()
                .allow()
                .toGetObject()
                .on(buckets),
            new S3()
                .allow()
                .toPutObject()
                .on(buckets),
            new S3()
                .allow()
                .toDeleteObject()
                .on(buckets),
            new S3()
                .allow()
                .toGetObjectTagging()
                .on(buckets));
    // two policies of at most 6,144 characters each
    List<PolicyDocument> policies = policy.split();
    // doc-end
    return policies;
  }
}
