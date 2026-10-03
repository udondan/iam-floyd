using Amazon.CDK.AWS.IAM;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleFullEc2StopByOwner
{
    public static object Example()
    {
        // doc-start
        var policy = new PolicyDocument(new PolicyDocumentProps
        {
            Statements = new PolicyStatement[]
            {
                new Statement.Ec2()
                    .Allow()
                    .ToStartInstances()
                    .IfAwsRequestTag("Owner", "${aws:username}"),
                new Statement.Ec2()
                    .Allow()
                    .ToStopInstances()
                    .IfResourceTag("Owner", "${aws:username}"),
                new Statement.Ec2()
                    .Allow()
                    .AllListActions()
                    .AllReadActions(),
            },
        });
        // doc-end
        return policy;
    }
}
