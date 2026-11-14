using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAllow
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .ToStopInstances();
        // doc-end
        return statement;
    }
}
