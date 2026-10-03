using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAccessLevels
{
    public static object Example()
    {
        // doc-start
        var s1 = new Statement.S3()
            .Deny()
            .AllPermissionManagementActions();

        var s2 = new Statement.S3()
            .Allow()
            .AllListActions()
            .AllReadActions();
        // doc-end
        return new object[] { s1, s2 };
    }
}
