using Amazon.CDK;
using Amazon.CDK.AWS.S3;
using Amazon.CDK.AWS.SNS;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleOnConstructCdk
{
    public static object Example()
    {
        var stack = new Stack();
        // doc-start
        var bucket = new Bucket(stack, "Bucket");
        var topic = new CfnTopic(stack, "Topic");

        var s1 = new Statement.S3()
            .Allow()
            .ToListBucket()
            .OnBucket(bucket);

        var s2 = new Statement.Sns()
            .Allow()
            .ToPublish()
            .OnTopic(topic);
        // doc-end
        return new object[] { s1, s2 };
    }
}
