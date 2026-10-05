// cdk-iam-floyd used directly and through a jsii library (floyd-consumer).
//
// Prints one line per scenario: the name, a tab and the IAM policies of the stack as JSON (or FAIL).

using System;
using System.Collections.Generic;
using System.Text.Json;
using Amazon.CDK;
using Amazon.CDK.Assertions;
using Amazon.CDK.AWS.IAM;
using Floyd.Consumer;
using IamPolicy = Amazon.CDK.AWS.IAM.Policy;
using IamPolicyStatement = Amazon.CDK.AWS.IAM.PolicyStatement;
using Policy = CDK.IAM.Floyd.Policy;
using PolicyType = CDK.IAM.Floyd.PolicyType;
using Statement = CDK.IAM.Floyd.Statement;

static Role NewRole(Stack stack) => new Role(stack, "Role", new RoleProps
{
    AssumedBy = new ServicePrincipal("lambda.amazonaws.com"),
});

static ReaderRole Reader(Stack stack) =>
    new ReaderRole(stack, "Reader", new ReaderRoleProps { BucketName = "bucket" });

static void Scenario(string name, Action<Stack> fn)
{
    try
    {
        var stack = new Stack(new App(), "Stack");
        fn(stack);
        var resources = (IDictionary<string, object>)Template.FromStack(stack).ToJSON()["Resources"];
        var policies = new SortedDictionary<string, object>();
        foreach (var (id, resource) in resources)
        {
            var r = (IDictionary<string, object>)resource;
            if ((string)r["Type"] == "AWS::IAM::Policy")
            {
                var properties = (IDictionary<string, object>)r["Properties"];
                policies[id] = ((IDictionary<string, object>)properties["PolicyDocument"])["Statement"];
            }
        }
        Console.WriteLine($"{name}\t{JsonSerializer.Serialize(policies)}");
    }
    catch (Exception e)
    {
        Console.WriteLine($"{name}\tFAIL {e.GetType().Name}: {e.Message}");
    }
}

Scenario("a direct use", stack =>
{
    IamPolicyStatement statement = new Statement.S3().Allow().ToGetObject().OnObject("my-bucket", "*");
    NewRole(stack).AddToPolicy(((Statement.S3)statement).IfAwsSourceIp("10.0.0.0/8"));
});

Scenario("b library uses floyd internally", stack => Reader(stack));

Scenario("c statements passed as iam.PolicyStatement[]", stack =>
    new ReaderRole(stack, "Reader", new ReaderRoleProps
    {
        BucketName = "bucket",
        ExtraStatements = new IamPolicyStatement[] { new Statement.Dynamodb().Allow().ToGetItem().OnTable("t") },
    }));

Scenario("d statement passed as Statement.S3", stack =>
    Reader(stack).AddS3Statement(new Statement.S3().Allow().ToPutObject().OnBucket("b")));

Scenario("e library calls a floyd method on a passed statement", stack =>
    Reader(stack).AddS3ListStatement(new Statement.S3().Allow().OnBucket("b")));

Scenario("f1 statement returned as iam.PolicyStatement", stack =>
    NewRole(stack).AddToPolicy(Statements.SqsRead()));

Scenario("f2 statement returned as Statement.S3, then chained", stack =>
    NewRole(stack).AddToPolicy(Statements.S3Read().OnBucket("chained").Deny()));

Scenario("g library subclasses a floyd class", stack =>
    NewRole(stack).AddToPolicy(new ListBuckets().ToListBucket()));

Scenario("h statement passed as floyd base class", stack =>
    NewRole(stack).AddToPolicy(Helpers.Denied(new Statement.S3().ToGetObject())));

Scenario("i policy used as document", stack =>
{
    var policy = new Policy(PolicyType.INLINE_ROLE);
    policy.AddStatements(
        new Statement.S3().Allow().ToGetObject().OnObject("bucket", "*"),
        new Statement.Sqs().Allow().ToSendMessage().OnQueue("queue"));
    policy.Validate();
    new IamPolicy(stack, "Document", new PolicyProps { Document = policy, Roles = new[] { NewRole(stack) } });
});

Scenario("j policies of split used as documents", stack =>
{
    var policy = new Policy(PolicyType.MANAGED, 500);
    policy.AddStatements(
        new Statement.S3().Allow().ToGetObject().OnObject("bucket", "*"),
        new Statement.Sqs().Allow().ToSendMessage().OnQueue("queue"),
        new Statement.Dynamodb().Allow().ToGetItem().OnTable("table"));
    var roles = new[] { NewRole(stack) };
    var parts = policy.Split();
    for (var index = 0; index < parts.Length; index++)
    {
        new IamPolicy(stack, $"Part{index}", new PolicyProps { Document = parts[index], Roles = roles });
    }
});
