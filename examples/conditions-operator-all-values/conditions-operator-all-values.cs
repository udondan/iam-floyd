using CDK.IAM.Floyd;
using Statement = CDK.IAM.Floyd.Statement;

static class ExampleConditionsOperatorAllValues
{
    public static object Example()
    {
        // doc-start
        var statement = new Statement.Dynamodb()
            .Allow()
            .ToGetItem()
            .OnTable("Thread")
            .IfAttributes(
                new[] { "ID", "Message", "Tags" },
                new Operator().StringEquals().ForAllValues()
            );
        // doc-end
        return statement;
    }
}
