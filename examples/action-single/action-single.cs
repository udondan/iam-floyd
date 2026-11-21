using Statement = CDK.IAM.Floyd.Statement;

static class ExampleActionSingle
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2().ToStartInstances();
        // doc-end
        return statement;
    }
}
