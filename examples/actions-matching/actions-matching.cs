using Statement = CDK.IAM.Floyd.Statement;

static class ExampleActionsMatching
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Deny()
            .AllMatchingActions("/vpn/i");
        // doc-end
        return statement;
    }
}
