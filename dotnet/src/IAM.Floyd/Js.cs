using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
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
        return value is double || value is int || value is long || value is float
            || value is short || value is byte || value is decimal;
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
        if (value == null)
        {
            return "undefined";
        }
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
    /// A value as JavaScript converts it to a string.
    /// </summary>
    public static string ToString(object value)
    {
        switch (value)
        {
            case null:
                return "undefined";
            case string text:
                return text;
            case bool flag:
                return flag ? "true" : "false";
            case double number:
                return Number(number);
            case float number:
                return Number(number);
            case decimal number:
                return Number((double)number);
            case IFormattable formattable when IsNumber(value):
                return formattable.ToString(null, CultureInfo.InvariantCulture);
            case IEnumerable items when !(value is IDictionary):
                var result = new StringBuilder();
                var first = true;
                foreach (var item in items)
                {
                    if (!first)
                    {
                        result.Append(',');
                    }
                    first = false;
                    if (item != null)
                    {
                        result.Append(ToString(item));
                    }
                }
                return result.ToString();
        }
        return value.ToString();
    }

    /// <summary>
    /// A number as JavaScript formats it: the shortest digits that round-trip.
    /// </summary>
    public static string Number(double value)
    {
        if (double.IsNaN(value))
        {
            return "NaN";
        }
        if (double.IsInfinity(value))
        {
            return value > 0 ? "Infinity" : "-Infinity";
        }
        if (value == 0)
        {
            return "0";
        }
        if (value < 0)
        {
            return "-" + Number(-value);
        }
        // the shortest representation that parses back to the same value, e.g. 1.5E-07
        var shortest = value.ToString("R", CultureInfo.InvariantCulture);
        var e = shortest.IndexOf('E');
        var mantissa = e < 0 ? shortest : shortest.Substring(0, e);
        var exponent = e < 0 ? 0 : int.Parse(shortest.Substring(e + 1), CultureInfo.InvariantCulture);
        var point = mantissa.IndexOf('.');
        var digits = point < 0 ? mantissa : mantissa.Remove(point, 1);
        // n is the position of the decimal point relative to the first digit
        var n = (point < 0 ? mantissa.Length : point) + exponent;
        while (digits.Length > 1 && digits[0] == '0')
        {
            digits = digits.Substring(1);
            n--;
        }
        // trailing zeros are not significant
        while (digits.Length > 1 && digits[digits.Length - 1] == '0')
        {
            digits = digits.Substring(0, digits.Length - 1);
        }
        var k = digits.Length;
        var result = new StringBuilder();
        if (k <= n && n <= 21)
        {
            result.Append(digits).Append('0', n - k);
        }
        else if (0 < n && n <= 21)
        {
            result.Append(digits, 0, n).Append('.').Append(digits.Substring(n));
        }
        else if (-6 < n && n <= 0)
        {
            result.Append("0.").Append('0', -n).Append(digits);
        }
        else
        {
            result.Append(digits[0]);
            if (k > 1)
            {
                result.Append('.').Append(digits.Substring(1));
            }
            result.Append('e').Append(n - 1 >= 0 ? "+" : "-")
                .Append(Math.Abs(n - 1).ToString(CultureInfo.InvariantCulture));
        }
        return result.ToString();
    }

    /// <summary>
    /// String.prototype.substring: the indexes are clamped, and swapped if start is after end.
    /// </summary>
    public static string Substring(string value, int start)
    {
        return Substring(value, start, value.Length);
    }

    /// <summary>
    /// String.prototype.substring: the indexes are clamped, and swapped if start is after end.
    /// </summary>
    public static string Substring(string value, int start, int end)
    {
        start = Math.Max(0, Math.Min(start, value.Length));
        end = Math.Max(0, Math.Min(end, value.Length));
        return start <= end
            ? value.Substring(start, end - start)
            : value.Substring(end, start - end);
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
    /// A regular expression like new RegExp(pattern, flags), with the flags i, m and s.
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
                case 'm':
                    options |= RegexOptions.Multiline;
                    break;
                case 's':
                    options |= RegexOptions.Singleline;
                    break;
                default:
                    throw new ArgumentException("Unsupported regular expression flag: " + flag);
            }
        }
        return new Regex(pattern, options);
    }
}
