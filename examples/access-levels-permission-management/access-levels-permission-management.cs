using Statement = CDK.IAM.Floyd.Statement;

static class ExampleAccessLevelsPermissionManagement
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.S3()
            .Allow()
            .AllPermissionManagementActions();
        // doc-end
        return statement;
    }
}
