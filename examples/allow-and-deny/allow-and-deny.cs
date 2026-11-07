using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAllowAndDeny
{
    public static object Example()
    {
        // doc-start
        var s1 = new Statement.Ec2()
            .Allow()
            .ToStartInstances();

        var s2 = new Statement.Ec2()
            .Deny()
            .ToStopInstances();
        // doc-end
        return new object[] { s1, s2 };
    }
}
