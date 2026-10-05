import com.example.floydconsumer.Helpers;
import com.example.floydconsumer.ListBuckets;
import com.example.floydconsumer.ReaderRole;
import com.example.floydconsumer.ReaderRoleProps;
import com.example.floydconsumer.Statements;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.udondan.iamFloyd.cdk.Policy;
import com.udondan.iamFloyd.cdk.PolicyType;
import com.udondan.iamFloyd.cdk.statement.Dynamodb;
import com.udondan.iamFloyd.cdk.statement.S3;
import com.udondan.iamFloyd.cdk.statement.Sqs;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.function.Consumer;
import software.amazon.awscdk.App;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.assertions.Template;
import software.amazon.awscdk.services.iam.IRole;
import software.amazon.awscdk.services.iam.PolicyProps;
import software.amazon.awscdk.services.iam.PolicyStatement;
import software.amazon.awscdk.services.iam.Role;
import software.amazon.awscdk.services.iam.ServicePrincipal;

/**
 * Runs the scenarios of cdk-iam-floyd, used directly and through a jsii library
 * (floyd-consumer).
 *
 * <p>Prints one line per scenario: the name, a tab and the IAM policies of the stack as JSON (or
 * FAIL).
 */
public class Main {
  static Role role(Stack stack) {
    return Role.Builder.create(stack, "Role")
        .assumedBy(new ServicePrincipal("lambda.amazonaws.com"))
        .build();
  }

  static ReaderRole reader(Stack stack) {
    return new ReaderRole(stack, "Reader", ReaderRoleProps.builder().bucketName("bucket").build());
  }

  @SuppressWarnings("unchecked")
  static void scenario(String name, Consumer<Stack> fn) {
    try {
      Stack stack = new Stack(new App(), "Stack");
      fn.accept(stack);
      Map<String, Object> resources =
          (Map<String, Object>) Template.fromStack(stack).toJSON().get("Resources");
      Map<String, Object> policies = new TreeMap<>();
      resources.forEach(
          (id, resource) -> {
            Map<String, Object> r = (Map<String, Object>) resource;
            if ("AWS::IAM::Policy".equals(r.get("Type"))) {
              Map<String, Object> properties = (Map<String, Object>) r.get("Properties");
              policies.put(
                  id, ((Map<String, Object>) properties.get("PolicyDocument")).get("Statement"));
            }
          });
      System.out.println(name + "\t" + new ObjectMapper().writeValueAsString(policies));
    } catch (Exception e) {
      System.out.println(name + "\tFAIL " + e);
    }
  }

  /** Runs all scenarios. */
  public static void main(String[] args) {
    scenario(
        "a direct use",
        stack -> {
          PolicyStatement statement = new S3().allow().toGetObject().onObject("my-bucket", "*");
          role(stack).addToPolicy(((S3) statement).ifAwsSourceIp("10.0.0.0/8"));
        });

    scenario("b library uses floyd internally", stack -> reader(stack));

    scenario(
        "c statements passed as iam.PolicyStatement[]",
        stack ->
            new ReaderRole(
                stack,
                "Reader",
                ReaderRoleProps.builder()
                    .bucketName("bucket")
                    .extraStatements(
                        List.<PolicyStatement>of(new Dynamodb().allow().toGetItem().onTable("t")))
                    .build()));

    scenario(
        "d statement passed as Statement.S3",
        stack -> reader(stack).addS3Statement(new S3().allow().toPutObject().onBucket("b")));

    scenario(
        "e library calls a floyd method on a passed statement",
        stack -> reader(stack).addS3ListStatement(new S3().allow().onBucket("b")));

    scenario(
        "f1 statement returned as iam.PolicyStatement",
        stack -> role(stack).addToPolicy(Statements.sqsRead()));

    scenario(
        "f2 statement returned as Statement.S3, then chained",
        stack -> role(stack).addToPolicy(Statements.s3Read().onBucket("chained").deny()));

    scenario(
        "g library subclasses a floyd class",
        stack -> role(stack).addToPolicy(new ListBuckets().toListBucket()));

    scenario(
        "h statement passed as floyd base class",
        stack -> role(stack).addToPolicy(Helpers.denied(new S3().toGetObject())));

    scenario(
        "i policy used as document",
        stack -> {
          Policy policy = new Policy(PolicyType.INLINE_ROLE);
          policy.addStatements(
              new S3().allow().toGetObject().onObject("bucket", "*"),
              new Sqs().allow().toSendMessage().onQueue("queue"));
          policy.validate();
          new software.amazon.awscdk.services.iam.Policy(
              stack,
              "Document",
              PolicyProps.builder().document(policy).roles(List.of(role(stack))).build());
        });

    scenario(
        "j policies of split used as documents",
        stack -> {
          Policy policy = new Policy(PolicyType.MANAGED, 500);
          policy.addStatements(
              new S3().allow().toGetObject().onObject("bucket", "*"),
              new Sqs().allow().toSendMessage().onQueue("queue"),
              new Dynamodb().allow().toGetItem().onTable("table"));
          List<IRole> roles = List.of(role(stack));
          List<Policy> parts = policy.split();
          for (int index = 0; index < parts.size(); index++) {
            new software.amazon.awscdk.services.iam.Policy(
                stack,
                "Part" + index,
                PolicyProps.builder().document(parts.get(index)).roles(roles).build());
          }
        });
  }
}
