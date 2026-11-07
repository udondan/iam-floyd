using CDK.IAM.Floyd;

static class ExampleCollection
{
    public static object Example()
    {
        // doc-start
        var statements = new Collection().AllowEc2InstanceDeleteByOwner();
        // doc-end
        return statements;
    }
}
