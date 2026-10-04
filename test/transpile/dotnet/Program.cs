// Tests the native .NET package of iam-floyd.
//
// Usage:
//   Test scenarios <scenarios.json>             runs the scenarios of test/transpile/
//   Test examples <examples directory>          runs the examples of the docs
//   Test managed-policies <managed-policies.json>  compares the AWS managed policies

using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Text.Json;
using IAM.Floyd;

Console.OutputEncoding = new UTF8Encoding(false);
switch (args[0])
{
    case "scenarios":
        Scenarios.Run(args[1]);
        break;
    case "examples":
        Examples.Run(args[1]);
        break;
    case "managed-policies":
        Environment.Exit(ManagedPolicies.Run(args[1]));
        break;
    default:
        throw new ArgumentException($"Unknown command {args[0]}");
}

/// <summary>
/// A statement without service, like a PolicyStatement of TypeScript
/// </summary>
class Plain : PolicyStatement<Plain>
{
    public Plain(string sid) : base(sid)
    {
    }
}

/// <summary>
/// A service class like the generated ones, built from the model
/// </summary>
class Service : PolicyStatement<Service>
{
    public Service(JsonElement model, string sid) : base(sid)
    {
        ServicePrefix = model.GetProperty("servicePrefix").GetString();
        foreach (var level in model.GetProperty("accessLevelList").EnumerateObject())
        {
            AccessLevelList[level.Name] = level.Value.EnumerateArray().Select(action => action.GetString()).ToList();
        }
    }
}

/// <summary>
/// Runs the scenarios of test/transpile/scenarios.json against the native package.
///
/// Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the
/// message). The methods are called by reflection: of the overloads that accept the arguments, the
/// one whose parameters match the arguments best, without params arrays if possible.
/// </summary>
static class Scenarios
{
    public static void Run(string path)
    {
        using var document = JsonDocument.Parse(File.ReadAllText(path));
        foreach (var scenario in document.RootElement.EnumerateArray())
        {
            Console.WriteLine($"{scenario.GetProperty("name").GetString()}\t{RunScenario(scenario)}");
        }
    }

    static string RunScenario(JsonElement scenario)
    {
        try
        {
            var sid = scenario.TryGetProperty("sid", out var sidElement) ? sidElement.GetString() : null;
            object statement;
            if (scenario.TryGetProperty("class", out var className))
            {
                var type = typeof(Json).Assembly.GetType($"IAM.Floyd.Statement.{className.GetString()}");
                statement = Activator.CreateInstance(type, sid);
            }
            else if (scenario.TryGetProperty("service", out var service))
            {
                using var model = JsonDocument.Parse(File.ReadAllText($"lib/generated/model/{service.GetString()}.json"));
                statement = new Service(model.RootElement, sid);
            }
            else
            {
                statement = new Plain(sid);
            }
            foreach (var call in scenario.GetProperty("calls").EnumerateArray())
            {
                var items = call.EnumerateArray().ToList();
                Invoke(statement, items[0].GetString(), items.Skip(1).Select(Decode).ToList());
            }
            return Json.Stringify(statement);
        }
        catch (Exception e)
        {
            return $"ERROR {e.Message}";
        }
    }

    /// <summary>
    /// Decodes an argument. Lists of strings and numbers are typed, and the arguments that JSON
    /// cannot express are <c>{"operator": [methods]}</c> and <c>{"date": "ISO 8601"}</c>.
    /// </summary>
    static object Decode(JsonElement arg)
    {
        switch (arg.ValueKind)
        {
            case JsonValueKind.String:
                return arg.GetString();
            case JsonValueKind.Number:
                return arg.GetDouble();
            case JsonValueKind.True:
                return true;
            case JsonValueKind.False:
                return false;
            case JsonValueKind.Null:
                return null;
            case JsonValueKind.Array:
                var items = arg.EnumerateArray().Select(Decode).ToList();
                if (items.Count > 0 && items.All(item => item is string))
                {
                    return items.Cast<string>().ToList();
                }
                if (items.Count > 0 && items.All(item => item is double))
                {
                    return items.Cast<double>().ToList();
                }
                return items;
        }
        if (arg.TryGetProperty("operator", out var methods))
        {
            object op = new Operator();
            foreach (var method in methods.EnumerateArray())
            {
                op = Invoke(op, method.GetString(), new List<object>());
            }
            return op;
        }
        if (arg.TryGetProperty("date", out var date))
        {
            return DateTime.Parse(date.GetString(), CultureInfo.InvariantCulture,
                DateTimeStyles.AdjustToUniversal | DateTimeStyles.AssumeUniversal);
        }
        throw new ArgumentException($"Unknown argument {arg}");
    }

    static bool Accepts(Type type, object arg)
    {
        if (arg == null)
        {
            return !type.IsValueType || Nullable.GetUnderlyingType(type) != null;
        }
        return (Nullable.GetUnderlyingType(type) ?? type).IsInstanceOfType(arg);
    }

    /// <summary>
    /// How well a parameter matches an argument: 0 for its type, 1 for a base type or an interface, 2
    /// for object
    /// </summary>
    static int Cost(Type type, object arg)
    {
        if (type == typeof(object))
        {
            return 2;
        }
        return arg != null && (Nullable.GetUnderlyingType(type) ?? type) == arg.GetType() ? 0 : 1;
    }

    /// <summary>
    /// The arguments for the method and how well they match, or null if it does not accept them
    /// </summary>
    static (object[] Args, int Cost)? Arguments(MethodInfo method, List<object> args)
    {
        var parameters = method.GetParameters();
        var isParams = parameters.Length > 0 && parameters[^1].IsDefined(typeof(ParamArrayAttribute));
        var fix = isParams ? parameters.Length - 1 : parameters.Length;
        if (isParams ? args.Count < fix : args.Count != fix)
        {
            return null;
        }
        var result = new object[parameters.Length];
        var cost = isParams ? 100 : 0;
        for (var i = 0; i < fix; i++)
        {
            if (!Accepts(parameters[i].ParameterType, args[i]))
            {
                return null;
            }
            result[i] = args[i];
            cost += Cost(parameters[i].ParameterType, args[i]);
        }
        if (isParams)
        {
            var element = parameters[^1].ParameterType.GetElementType();
            var rest = Array.CreateInstance(element, args.Count - fix);
            for (var i = fix; i < args.Count; i++)
            {
                if (!Accepts(element, args[i]))
                {
                    return null;
                }
                rest.SetValue(args[i], i - fix);
            }
            result[fix] = rest;
        }
        return (result, cost);
    }

    public static object Invoke(object target, string name, List<object> args)
    {
        var csharpName = char.ToUpperInvariant(name[0]) + name.Substring(1);
        // the methods that the services hide with `new` are public in the base classes too
        var methods = new Dictionary<string, MethodInfo>();
        foreach (var method in target.GetType().GetMethods())
        {
            if (method.Name != csharpName)
            {
                continue;
            }
            var signature = string.Join(",", method.GetParameters().Select(p => p.ParameterType.FullName));
            if (!methods.TryGetValue(signature, out var existing) || method.DeclaringType.IsSubclassOf(existing.DeclaringType))
            {
                methods[signature] = method;
            }
        }
        MethodInfo best = null;
        object[] bestArgs = null;
        var bestCost = 0;
        var ambiguous = false;
        foreach (var method in methods.Values)
        {
            var arguments = Arguments(method, args);
            if (arguments == null)
            {
                continue;
            }
            if (best == null || arguments.Value.Cost < bestCost)
            {
                best = method;
                bestArgs = arguments.Value.Args;
                bestCost = arguments.Value.Cost;
                ambiguous = false;
            }
            else if (arguments.Value.Cost == bestCost)
            {
                ambiguous = true;
            }
        }
        if (best == null || ambiguous)
        {
            throw new MissingMethodException($"{(best == null ? "no method" : "ambiguous method")} {csharpName} for {Json.Stringify(args)}");
        }
        try
        {
            return best.Invoke(target, bestArgs);
        }
        catch (TargetInvocationException e) when (e.InnerException != null)
        {
            System.Runtime.ExceptionServices.ExceptionDispatchInfo.Capture(e.InnerException).Throw();
            throw;
        }
    }
}

/// <summary>
/// Runs the C# examples of the docs, examples/*/*.cs, which run.sh rewrote for the native package
/// and compiled into this project.
///
/// Prints one line per example: the name, a tab and the statements or the policy document as JSON
/// (or FAIL), like test/jsii/examples/dotnet.
/// </summary>
static class Examples
{
    public static void Run(string examples)
    {
        foreach (var directory in Directory.GetDirectories(examples).OrderBy(d => d, StringComparer.Ordinal))
        {
            var name = Path.GetFileName(directory);
            if (name.EndsWith(".cdk", StringComparison.Ordinal) || !File.Exists(Path.Combine(directory, $"{name}.cs")))
            {
                continue;
            }
            // e.g. access-levels-list: ExampleAccessLevelsList
            var className = "Example" + string.Concat(name.Split('-', '.').Select(p => char.ToUpperInvariant(p[0]) + p[1..]));
            try
            {
                var result = Type.GetType(className).GetMethod("Example").Invoke(null, null);
                object json = result switch
                {
                    Amazon.CDK.AWS.IAM.PolicyDocument document => document.ToJSON(),
                    IEnumerable statements => statements,
                    _ => new[] { result },
                };
                Console.WriteLine($"{name}\t{Json.Stringify(json)}");
            }
            catch (Exception e)
            {
                var cause = e is TargetInvocationException ? e.InnerException : e;
                Console.WriteLine($"{name}\tFAIL {cause.GetType().Name}: {cause.Message}");
            }
        }
    }
}

/// <summary>
/// Compares the AWS managed policies of the native package with those of TypeScript.
///
/// Every static property of TypeScript must be a constant with the same value, and there must be no
/// other constants.
/// </summary>
static class ManagedPolicies
{
    /// <summary>
    /// The C# name of a static property, like the transpiler names it
    /// </summary>
    static string ConstantName(string name)
    {
        name = System.Text.RegularExpressions.Regex.Replace(name, @"([\p{Ll}\d])(\p{Lu})", "$1_$2");
        name = System.Text.RegularExpressions.Regex.Replace(name, @"(\p{Lu})(\p{Lu}\p{Ll}+)", "$1_$2");
        return name.ToUpperInvariant();
    }

    public static int Run(string path)
    {
        using var document = JsonDocument.Parse(File.ReadAllText(path));
        var expected = new SortedDictionary<string, string>(StringComparer.Ordinal);
        foreach (var policy in document.RootElement.EnumerateObject())
        {
            expected[ConstantName(policy.Name)] = policy.Value.GetString();
        }
        var actual = new SortedDictionary<string, string>(StringComparer.Ordinal);
        foreach (var field in typeof(AwsManagedPolicy).GetFields(BindingFlags.Public | BindingFlags.Static))
        {
            actual[field.Name] = (string)field.GetValue(null);
        }
        var errors = new List<string>();
        foreach (var name in expected.Keys.Union(actual.Keys).OrderBy(n => n, StringComparer.Ordinal))
        {
            expected.TryGetValue(name, out var expectedValue);
            actual.TryGetValue(name, out var actualValue);
            if (expectedValue != actualValue)
            {
                errors.Add($"{name}: expected {expectedValue}, got {actualValue}");
            }
        }
        foreach (var error in errors.Take(50))
        {
            Console.WriteLine(error);
        }
        if (errors.Count > 0)
        {
            return 1;
        }
        Console.WriteLine($"All {expected.Count} AWS managed policies passed");
        return 0;
    }
}
