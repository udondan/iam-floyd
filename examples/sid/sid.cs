using Amazon.CDK.AWS.IAM;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleSid
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2(new PolicyStatementProps { Sid = "MYSID" })
            .Allow()
            .ToStartInstances()
            .ToStopInstances();
        // doc-end
        return statement;
    }
}
