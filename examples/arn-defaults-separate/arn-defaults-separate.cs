using Statement = CDK.IAM.Floyd.Statement;

static class ExampleArnDefaultsSeparate
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Lambda()
            .Allow()
            .ToUpdateFunctionCode()
            .InAccount("098765432109")
            .InRegion("us-east-1")
            .InPartition("aws")
            .OnFunction("my-function-1")
            .OnFunction("my-function-2");
        // doc-end
        return statement;
    }
}
