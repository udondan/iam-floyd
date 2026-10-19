using Statement = CDK.IAM.Floyd.Statement;

static class ExamplePrincipalMultiple
{
    public static object Example()
    {
        // doc-start
        var s1 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForAccount("1234567890", "0987654321");

        // when you already have a list:
        var accounts = new[] { "1234567890", "0987654321" };
        var s2 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForAccount(accounts);

        var s3 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForUser("1234567890", "Bob", "John");

        // when you already have a list:
        var users = new[] { "Bob", "John" };
        var s4 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForUser("1234567890", users);
        // doc-end
        return new object[] { s1, s2, s3, s4 };
    }
}
