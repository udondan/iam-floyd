using Statement = CDK.IAM.Floyd.Statement;

static class ExampleArnDefaultsOverride
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Lambda()
            .Allow()
            .ToUpdateFunctionCode()
            .In("098765432109", "us-west-1", "aws")
            .OnFunction("my-function-1")
            .In("123456789012", "us-east-1", "aws")
            .OnFunction("my-function-2");
        // doc-end
        return statement;
    }
}
