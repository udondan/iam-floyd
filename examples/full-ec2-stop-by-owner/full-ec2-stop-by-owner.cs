using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleFullEc2StopByOwner
{
    public static object Example()
    {
        // doc-start
        var policy = new ManagedPolicyDocument(
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
                .AllReadActions());
        // doc-end
        return policy;
    }
}
