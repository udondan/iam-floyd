using Statement = CDK.IAM.Floyd.Statement;

static class ExamplePrincipal
{
    public static object Example()
    {
        // doc-start
        var s1 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForAccount("1234567890");

        var s2 = new Statement.Sts()
            .Allow()
            .ToAssumeRoleWithSAML()
            .ForService("lambda.amazonaws.com");

        var s3 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForUser("1234567890", "Bob");

        var s4 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForRole("1234567890", "role-name");

        var s5 = new Statement.Sts()
            .Allow()
            .ToAssumeRoleWithSAML()
            .ForFederatedCognito();

        var s6 = new Statement.Sts()
            .Allow()
            .ToAssumeRoleWithSAML()
            .ForFederatedAmazon();

        var s7 = new Statement.Sts()
            .Allow()
            .ToAssumeRoleWithSAML()
            .ForFederatedGoogle();

        var s8 = new Statement.Sts()
            .Allow()
            .ToAssumeRoleWithSAML()
            .ForFederatedFacebook();

        var s9 = new Statement.Sts()
            .Allow()
            .ToAssumeRoleWithSAML()
            .ForSaml("1234567890", "saml-provider");

        var s10 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForPublic();

        var s11 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForAssumedRoleSession("123456789", "role-name", "session-name");

        var s12 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .ForCanonicalUser("userID");

        var s13 = new Statement.Sts()
            .Allow()
            .ToAssumeRole()
            .For("arn:foo:bar");
        // doc-end
        return new object[] { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13 };
    }
}
