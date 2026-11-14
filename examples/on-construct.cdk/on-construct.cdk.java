import com.udondan.iamFloyd.cdk.statement.S3;
import com.udondan.iamFloyd.cdk.statement.Sns;
import java.util.List;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.services.s3.Bucket;
import software.amazon.awscdk.services.sns.CfnTopic;

class ExampleOnConstructCdk {
  static Object example() {
    Stack stack = new Stack();
    // doc-start
    Bucket bucket = new Bucket(stack, "Bucket");
    CfnTopic topic = new CfnTopic(stack, "Topic");

    S3 s1 = new S3()
        .allow()
        .toListBucket()
        .onBucket(bucket);

    Sns s2 = new Sns()
        .allow()
        .toPublish()
        .onTopic(topic);
    // doc-end
    return List.of(s1, s2);
  }
}
