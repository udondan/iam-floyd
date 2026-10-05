using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExamplePolicySplit
{
    public static object Example()
    {
        // doc-start
        var policy = new Policy(PolicyType.MANAGED, 300);
        policy.AddStatements(
            new Statement.S3()
                .Allow()
                .ToGetObject()
                .On("arn:aws:s3:::example-bucket/*"),
            new Statement.Sqs()
                .Allow()
                .ToSendMessage()
                .On("arn:aws:sqs:us-east-1:123456789012:example-queue"),
            new Statement.Dynamodb()
                .Allow()
                .ToGetItem()
                .ToQuery()
                .On("arn:aws:dynamodb:us-east-1:123456789012:table/example-table"));
        var policies = policy.Split(); // two policies of at most 300 characters each
        // doc-end
        return policies;
    }
}
