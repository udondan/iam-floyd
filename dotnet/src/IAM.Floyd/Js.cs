using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Text.RegularExpressions;

namespace IAM.Floyd;

/// <summary>
/// The semantics of JavaScript that the transpiled code relies on.
/// </summary>
internal static class Js
{
    /// <summary>
    /// Whether a value is a number.
    /// </summary>
    public static bool IsNumber(object value)
    {
        return IsInteger(value) || value is double || value is float || value is decimal;
    }

    private static bool IsInteger(object value)
    {
        return value is int || value is long || value is short || value is byte;
    }

    /// <summary>
    /// Array.isArray: whether a value is a sequence, other than a string or a dictionary.
    /// </summary>
    public static bool IsArray(object value)
    {
        return value is IEnumerable && !(value is string) && !(value is IDictionary);
    }

    /// <summary>
    /// A sequence as list.
    /// </summary>
    public static List<object> ToList(object value)
    {
        var result = new List<object>();
        foreach (var item in (IEnumerable)value)
        {
            result.Add(item);
        }
        return result;
    }

    /// <summary>
    /// A dictionary as dictionary of objects, for reading.
    /// </summary>
    public static Dictionary<string, object> ToRecord(object value)
    {
        var result = new Dictionary<string, object>();
        foreach (DictionaryEntry entry in (IDictionary)value)
        {
            result[(string)entry.Key] = entry.Value;
        }
        return result;
    }

    /// <summary>
    /// The result of the typeof operator of JavaScript.
    /// </summary>
    public static string Typeof(object value)
    {
        if (value is bool)
        {
            return "boolean";
        }
        if (IsNumber(value))
        {
            return "number";
        }
        if (value is string)
        {
            return "string";
        }
        return "object";
    }

    /// <summary>
    /// A boolean or a number as JavaScript converts it to a string.
    /// </summary>
    public static string ToString(object value)
    {
        if (value is bool flag)
        {
            return flag ? "true" : "false";
        }
        return Number(Convert.ToDouble(value, CultureInfo.InvariantCulture));
    }

    /// <summary>
    /// A number as JavaScript formats it: the shortest digits that round-trip.
    /// </summary>
    public static string Number(double value)
    {
        if (value < 0)
        {
            return "-" + Number(-value);
        }
        if (double.IsNaN(value))
        {
            return "NaN";
        }
        if (double.IsInfinity(value))
        {
            return "Infinity";
        }
        return value == 0 ? "0" : Format(ShortestDigits(value, out var n), n);
    }

    /// <summary>
    /// The significant digits of a positive number, and in n the position of the decimal point
    /// relative to the first digit.
    /// </summary>
    private static string ShortestDigits(double value, out int n)
    {
        // the shortest representation that parses back to the same value, e.g. 1.5E-07
        var shortest = value.ToString("R", CultureInfo.InvariantCulture);
        var e = shortest.IndexOf('E');
        var mantissa = e < 0 ? shortest : shortest.Substring(0, e);
        var exponent = e < 0 ? 0 : int.Parse(shortest.Substring(e + 1), CultureInfo.InvariantCulture);
        var point = mantissa.IndexOf('.');
        n = (point < 0 ? mantissa.Length : point) + exponent;
        var digits = point < 0 ? mantissa : mantissa.Remove(point, 1);
        var significant = digits.TrimStart('0');
        n -= digits.Length - significant.Length;
        // trailing zeros are not significant
        return significant.TrimEnd('0');
    }

    /// <summary>
    /// The digits of a number with the decimal point at n, as Number.prototype.toString.
    /// </summary>
    private static string Format(string digits, int n)
    {
        var k = digits.Length;
        if (k <= n && n <= 21)
        {
            return digits + new string('0', n - k);
        }
        if (0 < n && n <= 21)
        {
            return digits.Substring(0, n) + "." + digits.Substring(n);
        }
        if (-6 < n && n <= 0)
        {
            return "0." + new string('0', -n) + digits;
        }
        var fraction = k > 1 ? "." + digits.Substring(1) : "";
        var exponent = n - 1;
        return digits[0] + fraction + "e" + (exponent >= 0 ? "+" : "-")
            + Math.Abs(exponent).ToString(CultureInfo.InvariantCulture);
    }

    /// <summary>
    /// String.prototype.substring: the indexes are clamped.
    /// </summary>
    public static string Substring(string value, int start)
    {
        return Substring(value, start, value.Length);
    }

    /// <summary>
    /// String.prototype.substring: the indexes are clamped.
    /// </summary>
    public static string Substring(string value, int start, int end)
    {
        start = Math.Max(0, Math.Min(start, value.Length));
        end = Math.Max(0, Math.Min(end, value.Length));
        return value.Substring(start, end - start);
    }

    /// <summary>
    /// Array.prototype.filter.
    /// </summary>
    public static List<T> Filter<T>(List<T> list, Func<T, int, bool> predicate)
    {
        var result = new List<T>();
        for (var i = 0; i < list.Count; i++)
        {
            if (predicate(list[i], i))
            {
                result.Add(list[i]);
            }
        }
        return result;
    }

    /// <summary>
    /// Array.prototype.map.
    /// </summary>
    public static List<TResult> Map<T, TResult>(List<T> list, Func<T, int, TResult> fn)
    {
        var result = new List<TResult>();
        for (var i = 0; i < list.Count; i++)
        {
            result.Add(fn(list[i], i));
        }
        return result;
    }

    /// <summary>
    /// Array.prototype.sort without compare function: sorts strings by UTF-16 code units.
    /// </summary>
    public static List<string> Sort(List<string> list)
    {
        list.Sort(string.CompareOrdinal);
        return list;
    }

    /// <summary>
    /// Date.prototype.toISOString. Dates of an unspecified kind are in UTC.
    /// </summary>
    public static string ToISOString(DateTime value)
    {
        if (value.Kind == DateTimeKind.Local)
        {
            value = value.ToUniversalTime();
        }
        return value.ToString("yyyy-MM-dd'T'HH:mm:ss.fff'Z'", CultureInfo.InvariantCulture);
    }

    /// <summary>
    /// A regular expression like new RegExp(pattern, flags), with the flag i.
    /// </summary>
    public static Regex RegExp(string pattern, string flags)
    {
        var options = RegexOptions.None;
        foreach (var flag in flags)
        {
            switch (flag)
            {
                case 'i':
                    options |= RegexOptions.IgnoreCase | RegexOptions.CultureInvariant;
                    break;
                default:
                    throw new ArgumentException("Unsupported regular expression flag: " + flag);
            }
        }
        return new Regex(pattern, options);
    }
}
