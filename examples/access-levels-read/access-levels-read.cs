using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAccessLevelsRead
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllReadActions();
        // doc-end
        return statement;
    }
}
