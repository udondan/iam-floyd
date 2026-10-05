using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExamplePolicy
{
    public static object Example()
    {
        // doc-start
        var policy = new Policy(PolicyType.INLINE_ROLE);
        policy.AddStatements(
            new Statement.S3()
                .Allow()
                .ToGetObject()
                .On("arn:aws:s3:::example-bucket/*"),
            new Statement.Sqs()
                .Allow()
                .ToSendMessage()
                .On("arn:aws:sqs:us-east-1:123456789012:example-queue"));
        policy.Validate(); // throws, if it exceeds the maximum size of an inline policy of a role
        // doc-end
        return policy;
    }
}
