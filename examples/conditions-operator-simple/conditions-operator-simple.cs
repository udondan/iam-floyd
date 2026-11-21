using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditionsOperatorSimple
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .IfAwsRequestTag("TagWithSpecialChars", "*John*", new Operator().StringEquals());
        // doc-end
        return statement;
    }
}
