using System.Linq;
using CDK.IAM.Floyd;

static class ExampleCollectionPolicy
{
    public static object Example()
    {
        // doc-start
        var policy = new ManagedPolicyDocument(
            new Collection().AllowEc2InstanceDeleteByOwner().ToArray());
        // doc-end
        return policy;
    }
}
