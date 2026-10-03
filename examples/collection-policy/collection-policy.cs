using Amazon.CDK.AWS.IAM;
using CDK.IAM.Floyd;

static class ExampleCollectionPolicy
{
    public static object Example()
    {
        // doc-start
        var policy = new PolicyDocument(new PolicyDocumentProps
        {
            Statements = new Collection().AllowEc2InstanceDeleteByOwner(),
        });
        // doc-end
        return policy;
    }
}
