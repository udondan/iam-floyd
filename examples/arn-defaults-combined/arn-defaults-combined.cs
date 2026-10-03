using Statement = CDK.IAM.Floyd.Statement;

static class ExampleArnDefaultsCombined
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Lambda()
            .Allow()
            .ToUpdateFunctionCode()
            .In("098765432109", "us-west-1", "aws")
            .OnFunction("my-function-1")
            .OnFunction("my-function-2");
        // doc-end
        return statement;
    }
}
