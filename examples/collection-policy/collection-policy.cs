using CDK.IAM.Floyd;

static class ExampleCollectionPolicy
{
    public static object Example()
    {
        // doc-start
        var policy = new Policy();
        foreach (var statement in new Collection().AllowEc2InstanceDeleteByOwner())
        {
            policy.AddStatements(statement);
        }
        // doc-end
        return policy;
    }
}
