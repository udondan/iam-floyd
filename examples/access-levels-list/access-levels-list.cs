using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAccessLevelsList
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllListActions();
        // doc-end
        return statement;
    }
}
