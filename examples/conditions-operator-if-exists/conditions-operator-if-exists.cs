using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditionsOperatorIfExists
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .IfAwsRequestTag(
                "Environment",
                new[] { "Production", "Staging", "Dev" },
                new Operator().StringEquals().IfExists()
            );
        // doc-end
        return statement;
    }
}
