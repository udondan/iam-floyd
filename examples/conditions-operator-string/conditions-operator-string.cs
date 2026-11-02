using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditionsOperatorString
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .IfAwsRequestTag("TagWithSpecialChars", "*John*", "StringEquals");
        // doc-end
        return statement;
    }
}
