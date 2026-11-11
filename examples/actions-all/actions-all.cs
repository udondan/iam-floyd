using Statement = IAM.Floyd.Statement;

static class ExampleActionsAll
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .AllActions();
        // doc-end
        return statement;
    }
}
