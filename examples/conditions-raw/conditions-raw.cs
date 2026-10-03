using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditionsRaw
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .If("ec2:missingCondition", "some-value");
        // doc-end
        return statement;
    }
}
