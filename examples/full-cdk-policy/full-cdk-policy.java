import com.udondan.iamFloyd.cdk.statement.Account;
import com.udondan.iamFloyd.cdk.statement.All;
import com.udondan.iamFloyd.cdk.statement.Cloudformation;
import com.udondan.iamFloyd.cdk.statement.Organizations;
import com.udondan.iamFloyd.cdk.statement.S3;
import java.util.List;
import software.amazon.awscdk.services.iam.PolicyDocument;

class ExampleFullCdkPolicy {
  static Object example() {
    // doc-start
    PolicyDocument policy = PolicyDocument.Builder.create()
        .statements(List.of(
            // allow all CFN actions
            new Cloudformation()
                .allow()
                .allActions(),
            // allow absolutely everything that is triggered via CFN
            new All()
                .allow()
                .allActions()
                .ifAwsCalledVia("cloudformation.amazonaws.com"),
            // allow access to the CDK staging bucket
            new S3()
                .allow()
                .allActions()
                .on("arn:aws:s3:::cdktoolkit-stagingbucket-*"),
            // even when triggered via CFN, do not allow modifications of the account
            new Account()
                .deny()
                .allPermissionManagementActions()
                .allWriteActions(),
            // even when triggered via CFN, do not allow modifications of the organization
            new Organizations()
                .deny()
                .allPermissionManagementActions()
                .allWriteActions()))
        .build();
    // doc-end
    return policy;
  }
}
