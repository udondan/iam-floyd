# IAM Floyd

**AWS [IAM policy statement](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html) generator with fluent interface.**

This is the standalone .NET package, without dependencies. For use with AWS CDK, install `CDK.IAM.Floyd`.

```csharp
using IAM.Floyd;
using Statement = IAM.Floyd.Statement;

var statement = new Statement.Ec2()
    .Allow()
    .ToStartInstances()
    .IfAwsRequestTag("Owner", "${aws:username}");
Console.WriteLine(Json.Stringify(statement));
```

Find the documentation at [Read the Docs](https://iam-floyd.readthedocs.io/en/latest/) and the source on [GitHub](https://github.com/udondan/iam-floyd).
