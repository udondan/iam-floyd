// Runs the .NET examples of the docs, examples/*/*.cs, which are compiled into this project.
//
// Prints one line per example: the name, a tab and the statements, the policy or the policies as JSON
// (or FAIL).

using System;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using Amazon.CDK;
using Amazon.CDK.AWS.IAM;

var stack = new Stack(new App(), "Stack");

foreach (var directory in Directory.GetDirectories(args[0]).OrderBy(d => d, StringComparer.Ordinal))
{
    var name = Path.GetFileName(directory);
    if (!File.Exists(Path.Combine(directory, $"{name}.cs")))
    {
        continue;
    }
    // e.g. access-levels-list: ExampleAccessLevelsList
    var className = "Example" + string.Concat(name.Split('-', '.').Select(p => char.ToUpper(p[0]) + p[1..]));
    try
    {
        var result = Type.GetType(className).GetMethod("Example").Invoke(null, null);
        object json = result switch
        {
            PolicyDocument document => stack.Resolve(document.ToJSON()),
            PolicyStatement statement => new[] { stack.Resolve(statement.ToStatementJson()) },
            // statements, or the policies of a split
            System.Collections.IEnumerable items => items.Cast<object>().Select(item => item is PolicyDocument document
                ? stack.Resolve(document.ToJSON())
                : stack.Resolve(((PolicyStatement)item).ToStatementJson())).ToArray(),
            _ => throw new ArgumentException($"Unexpected result {result}"),
        };
        Console.WriteLine($"{name}\t{JsonSerializer.Serialize(json)}");
    }
    catch (Exception e)
    {
        var cause = e is TargetInvocationException ? e.InnerException : e;
        Console.WriteLine($"{name}\tFAIL {cause.GetType().Name}: {cause.Message}");
    }
}
