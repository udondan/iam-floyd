using Amazon.CDK.AWS.IAM;
using Statement = CDK.IAM.Floyd.Statement;

static class ExamplePrincipalCdk
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForCdkPrincipal(
                new ServicePrincipal("sns.amazonaws.com"),
                new ServicePrincipal("lambda.amazonaws.com")
            );
        // doc-end
        return statement;
    }
}
