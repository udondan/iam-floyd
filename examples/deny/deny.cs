using Statement = CDK.IAM.Floyd.Statement;

static class ExampleDeny
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Deny()
            .ToStartInstances()
            .ToStopInstances();
        // doc-end
        return statement;
    }
}
