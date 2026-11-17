using System.Linq;
using IAM.Floyd;
using Statement = IAM.Floyd.Statement;

static class ExamplePolicySplit
{
    public static object Example()
    {
        // doc-start
        var buckets = Enumerable.Range(1, 50).Select(i => $"arn:aws:s3:::example-bucket-{i}/*").ToArray();
        var policy = new ManagedPolicyDocument(
            new Statement.S3()
                .Allow()
                .ToGetObject()
                .On(buckets),
            new Statement.S3()
                .Allow()
                .ToPutObject()
                .On(buckets),
            new Statement.S3()
                .Allow()
                .ToDeleteObject()
                .On(buckets),
            new Statement.S3()
                .Allow()
                .ToGetObjectTagging()
                .On(buckets));
        var policies = policy.Split(); // two policies of at most 6,144 characters each
        // doc-end
        return policies;
    }
}
