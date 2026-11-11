using IAM.Floyd;
using Statement = IAM.Floyd.Statement;

static class ExampleConditionsOperatorSimple
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Ec2()
            .Allow()
            .ToStartInstances()
            .IfAwsRequestTag("TagWithSpecialChars", "*John*", Operator.STRING_EQUALS);
        // doc-end
        return statement;
    }
}
