using System;
using System.Collections.Generic;
using IAM.Floyd;

/// <summary>
/// Tests the cases of the hand-written runtime that the scenarios cannot reach: values that JSON
/// cannot express (NaN, Infinity, local dates, objects with ToJSON) and the errors of the runtime
/// </summary>
static class Runtime
{
    private static readonly List<string> Failures = new List<string>();
    private static int count;

    private static void Check(string name, object actual, object expected)
    {
        count++;
        if (!Equals(actual, expected))
        {
            Failures.Add($"{name}: expected {expected}, got {actual}");
        }
    }

    private static string Error(Action action)
    {
        try
        {
            action();
        }
        catch (Exception e)
        {
            return $"{e.GetType().Name}: {e.Message}";
        }
        return "no error";
    }

    public static int Run()
    {
        Check("Number NaN", Js.Number(double.NaN), "NaN");
        Check("Number Infinity", Js.Number(double.PositiveInfinity), "Infinity");
        Check("Number -Infinity", Js.Number(double.NegativeInfinity), "-Infinity");

        var utc = new DateTime(2024, 2, 29, 13, 14, 15, 678, DateTimeKind.Utc);
        Check("ToISOString local", Js.ToISOString(utc.ToLocalTime()), "2024-02-29T13:14:15.678Z");

        Check("RegExp i", Js.RegExp("^a$", "i").IsMatch("A"), true);
        Check(
            "RegExp unsupported flag",
            Error(() => Js.RegExp("a", "g")),
            "ArgumentException: Unsupported regular expression flag: g");

        Check("Stringify NaN", Json.Stringify(double.NaN), "null");
        Check(
            "Stringify Infinity",
            Json.Stringify(new object[] { double.PositiveInfinity, double.NegativeInfinity }),
            "[null,null]");
        Check("Stringify numbers", Json.Stringify(new object[] { 1, 2L, 1.5m, 0.5f }), "[1,2,1.5,0.5]");
        Check(
            "Stringify statement",
            Json.Stringify(new IAM.Floyd.Statement.S3().Allow().ToGetObject()),
            "{\"Action\":\"s3:GetObject\",\"Resource\":\"*\",\"Effect\":\"Allow\"}");
        Check("Stringify pair", Json.Stringify("\ud83d\ude00"), "\"\ud83d\ude00\"");
        Check("Stringify high surrogate", Json.Stringify("\ud800a"), "\"\\ud800a\"");
        Check("Stringify high surrogate at end", Json.Stringify("a\ud800"), "\"a\\ud800\"");
        Check("Stringify low surrogate", Json.Stringify("a\udc00"), "\"a\\udc00\"");
        Check("Stringify low surrogate at start", Json.Stringify("\udc00a"), "\"\\udc00a\"");
        Check(
            "Stringify object",
            Error(() => Json.Stringify(new object())),
            "ArgumentException: Cannot serialize System.Object to JSON");

        if (Failures.Count > 0)
        {
            Failures.ForEach(Console.WriteLine);
            return 1;
        }
        Console.WriteLine($"All {count} runtime tests passed");
        return 0;
    }
}
