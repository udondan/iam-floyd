using Statement = CDK.IAM.Floyd.Statement;

static class ExampleCompact
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .AllReadActions()
            .AllListActions()
            .Compact();
        // doc-end
        return statement;
    }
}
