using Statement = CDK.IAM.Floyd.Statement;

static class ExampleNotAction
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .NotAction()
            .ToDeleteBucket()
            .OnBucket("example-bucket");
        // doc-end
        return statement;
    }
}
