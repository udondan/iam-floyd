using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAccessLevelsTagging
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllTaggingActions();
        // doc-end
        return statement;
    }
}
