using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleFullCdkPolicy
{
    public static object Example()
    {
        // doc-start
        var policy = new ManagedPolicyDocument(
            // allow all CFN actions
            new Statement.Cloudformation()
                .Allow()
                .AllActions(),
            // allow absolutely everything that is triggered via CFN
            new Statement.All()
                .Allow()
                .AllActions()
                .IfAwsCalledVia("cloudformation.amazonaws.com"),
            // allow access to the CDK staging bucket
            new Statement.S3()
                .Allow()
                .AllActions()
                .On("arn:aws:s3:::cdktoolkit-stagingbucket-*"),
            // even when triggered via CFN, do not allow modifications of the account
            new Statement.Account()
                .Deny()
                .AllPermissionManagementActions()
                .AllWriteActions(),
            // even when triggered via CFN, do not allow modifications of the organization
            new Statement.Organizations()
                .Deny()
                .AllPermissionManagementActions()
                .AllWriteActions());
        // doc-end
        return policy;
    }
}
