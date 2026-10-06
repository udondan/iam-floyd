using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditionsOperatorAnyValue
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Dynamodb()
            .Deny()
            .ToPutItem()
            .OnTable("Thread")
            .IfAttributes(
                new[] { "ID", "PostDateTime" },
                new Operator().StringEquals().ForAnyValue()
            );
        // doc-end
        return statement;
    }
}
