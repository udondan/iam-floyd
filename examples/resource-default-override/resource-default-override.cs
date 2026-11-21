using Statement = CDK.IAM.Floyd.Statement;

static class ExampleResourceDefaultOverride
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Lambda()
            .Allow()
            .ToUpdateFunctionCode()
            .OnFunction("my-function", "098765432109", "us-east-1", "aws");
        // doc-end
        return statement;
    }
}
