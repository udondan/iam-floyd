using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAccessLevelsWrite
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllWriteActions();
        // doc-end
        return statement;
    }
}
