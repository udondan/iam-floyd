using Statement = CDK.IAM.Floyd.Statement;

static class ExampleActionsRaw
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .To("missingAction");
        // doc-end
        return statement;
    }
}
