using Statement = CDK.IAM.Floyd.Statement;

static class ExampleActionChaining
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .ToStartInstances()
            .ToStopInstances();
        // doc-end
        return statement;
    }
}
