using Statement = IAM.Floyd.Statement;

static class ExampleSid
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2("MYSID")
            .Allow()
            .ToStartInstances()
            .ToStopInstances();
        // doc-end
        return statement;
    }
}
