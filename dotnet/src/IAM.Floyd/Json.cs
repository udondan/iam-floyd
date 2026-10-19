using System;
using System.Collections;
using System.Globalization;
using System.Reflection;
using System.Text;

namespace IAM.Floyd;

/// <summary>
/// Serializes statements and their parts to JSON, as <c>JSON.stringify</c> of JavaScript.
/// </summary>
public static class Json
{
    /// <summary>
    /// The JSON of a value: dictionaries in the order of their keys, sequences, strings, numbers,
    /// booleans, null, dates as ISO strings, and objects with a public <c>ToJSON()</c> method, such
    /// as statements.
    /// </summary>
    /// <param name="value">The value</param>
    /// <returns>The JSON, without whitespace</returns>
    public static string Stringify(object value)
    {
        var result = new StringBuilder();
        Write(result, value);
        return result.ToString();
    }

    private static void Write(StringBuilder result, object value)
    {
        switch (value)
        {
            case null:
                result.Append("null");
                break;
            case string text:
                WriteString(result, text);
                break;
            case bool flag:
                result.Append(flag ? "true" : "false");
                break;
            case double or float or decimal:
                var number = Convert.ToDouble(value, CultureInfo.InvariantCulture);
                result.Append(double.IsNaN(number) || double.IsInfinity(number) ? "null" : Js.Number(number));
                break;
            case IFormattable formattable when Js.IsNumber(value):
                result.Append(formattable.ToString(null, CultureInfo.InvariantCulture));
                break;
            case DateTime date:
                WriteString(result, Js.ToISOString(date));
                break;
            case IDictionary dictionary:
                result.Append('{');
                var first = true;
                foreach (DictionaryEntry entry in dictionary)
                {
                    if (!first)
                    {
                        result.Append(',');
                    }
                    first = false;
                    WriteString(result, Convert.ToString(entry.Key, CultureInfo.InvariantCulture));
                    result.Append(':');
                    Write(result, entry.Value);
                }
                result.Append('}');
                break;
            case IEnumerable items:
                result.Append('[');
                var firstItem = true;
                foreach (var item in items)
                {
                    if (!firstItem)
                    {
                        result.Append(',');
                    }
                    firstItem = false;
                    Write(result, item);
                }
                result.Append(']');
                break;
            default:
                Write(result, ToJson(value));
                break;
        }
    }

    private static object ToJson(object value)
    {
        var method = value.GetType().GetMethod("ToJSON", Type.EmptyTypes);
        if (method == null)
        {
            throw new ArgumentException("Cannot serialize " + value.GetType().FullName + " to JSON");
        }
        try
        {
            return method.Invoke(value, null);
        }
        catch (TargetInvocationException e) when (e.InnerException != null)
        {
            System.Runtime.ExceptionServices.ExceptionDispatchInfo.Capture(e.InnerException).Throw();
            throw;
        }
    }

    private static void WriteString(StringBuilder result, string value)
    {
        result.Append('"');
        for (var i = 0; i < value.Length; i++)
        {
            var c = value[i];
            switch (c)
            {
                case '"':
                    result.Append("\\\"");
                    break;
                case '\\':
                    result.Append("\\\\");
                    break;
                case '\b':
                    result.Append("\\b");
                    break;
                case '\f':
                    result.Append("\\f");
                    break;
                case '\n':
                    result.Append("\\n");
                    break;
                case '\r':
                    result.Append("\\r");
                    break;
                case '\t':
                    result.Append("\\t");
                    break;
                default:
                    var loneSurrogate = char.IsHighSurrogate(c)
                        ? i + 1 >= value.Length || !char.IsLowSurrogate(value[i + 1])
                        : char.IsLowSurrogate(c) && (i == 0 || !char.IsHighSurrogate(value[i - 1]));
                    if (c < 0x20 || loneSurrogate)
                    {
                        result.Append("\\u").Append(((int)c).ToString("x4", CultureInfo.InvariantCulture));
                    }
                    else
                    {
                        result.Append(c);
                    }
                    break;
            }
        }
        result.Append('"');
    }
}
