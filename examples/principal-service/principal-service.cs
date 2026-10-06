using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExamplePrincipalService
{
    public static object Example()
    {
        // doc-start
        var s1 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForService(AwsServicePrincipal.LAMBDA);

        var s2 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForService(AwsServicePrincipal.ECS_TASKS, AwsServicePrincipal.EC2);
        // doc-end
        return new object[] { s1, s2 };
    }
}
