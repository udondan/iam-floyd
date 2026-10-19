using Statement = CDK.IAM.Floyd.Statement;

static class ExampleNotPrincipal
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Deny()
            .AllActions()
            .NotPrincipal()
            .ForUser("1234567890", "Bob")
            .OnObject("example-bucket", "*");
        // doc-end
        return statement;
    }
}
