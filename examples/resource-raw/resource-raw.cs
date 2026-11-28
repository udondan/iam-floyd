using Statement = CDK.IAM.Floyd.Statement;

static class ExampleResourceRaw
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllActions()
            .On("arn:aws:s3:::example-bucket", "arn:aws:s3:::another-bucket");
        // doc-end
        return statement;
    }
}
