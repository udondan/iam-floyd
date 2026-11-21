using Statement = CDK.IAM.Floyd.Statement;

static class ExampleNoChaining
{
    public static object Example()
    {
        // doc-start
        var myStatement = new Statement.Ec2();
        myStatement.Allow();
        myStatement.ToStartInstances();
        myStatement.ToStopInstances();
        // doc-end
        return myStatement;
    }
}
