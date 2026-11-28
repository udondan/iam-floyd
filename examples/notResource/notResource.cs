using Statement = CDK.IAM.Floyd.Statement;

static class ExampleNotResource
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .NotResource()
            .ToDeleteBucket()
            .OnBucket("example-bucket");
        // doc-end
        return statement;
    }
}
