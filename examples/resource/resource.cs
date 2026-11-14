using Statement = CDK.IAM.Floyd.Statement;

static class ExampleResource
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllActions()
            .OnBucket("example-bucket")
            .OnObject("example-bucket", "some/path/*");
        // doc-end
        return statement;
    }
}
