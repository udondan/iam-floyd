using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditions
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .IfEncrypted()
            .IfInstanceType(new[] { "t3.micro", "t3.nano" })
            .IfAssociatePublicIpAddress(false)
            .IfAwsRequestTag("Owner", "John");
        // doc-end
        return statement;
    }
}
