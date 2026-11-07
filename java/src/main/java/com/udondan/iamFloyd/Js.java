package com.udondan.iamFloyd;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.function.BiFunction;
import java.util.function.BiPredicate;
import java.util.regex.Pattern;

/** The semantics of JavaScript that the transpiled code relies on. */
final class Js {
  private Js() {}

  /** Whether a string is truthy: not null and not empty. */
  static boolean truthy(String value) {
    return value != null && !value.isEmpty();
  }

  /** The result of the typeof operator of JavaScript. */
  static String typeof(Object value) {
    if (value == null) {
      return "undefined";
    }
    if (value instanceof Boolean) {
      return "boolean";
    }
    if (value instanceof Number) {
      return "number";
    }
    if (value instanceof String) {
      return "string";
    }
    return "object";
  }

  /** A value as JavaScript converts it to a string. */
  static String toString(Object value) {
    if (value == null) {
      return "undefined";
    }
    if (value instanceof String) {
      return (String) value;
    }
    if (value instanceof Integer || value instanceof Long || value instanceof Short
        || value instanceof Byte) {
      return value.toString();
    }
    if (value instanceof Number) {
      return number(((Number) value).doubleValue());
    }
    if (value instanceof List) {
      StringBuilder result = new StringBuilder();
      boolean first = true;
      for (Object item : (List<?>) value) {
        if (!first) {
          result.append(',');
        }
        first = false;
        if (item != null) {
          result.append(toString(item));
        }
      }
      return result.toString();
    }
    return value.toString();
  }

  /** A number as JavaScript formats it: the shortest digits that round-trip. */
  static String number(double value) {
    if (Double.isNaN(value)) {
      return "NaN";
    }
    if (Double.isInfinite(value)) {
      return value > 0 ? "Infinity" : "-Infinity";
    }
    if (value == 0) {
      return "0";
    }
    if (value < 0) {
      return "-" + number(-value);
    }
    // the shortest scientific representation that parses back to the same value
    String scientific = null;
    for (int precision = 0; precision < 17; precision++) {
      String candidate = String.format(Locale.ROOT, "%." + precision + "e", value);
      if (Double.parseDouble(candidate) == value) {
        scientific = candidate;
        break;
      }
    }
    if (scientific == null) {
      scientific = String.format(Locale.ROOT, "%.16e", value);
    }
    int e = scientific.indexOf('e');
    String digits = scientific.substring(0, e).replace(".", "");
    // trailing zeros are not significant
    while (digits.length() > 1 && digits.endsWith("0")) {
      digits = digits.substring(0, digits.length() - 1);
    }
    int k = digits.length();
    int n = Integer.parseInt(scientific.substring(e + 1)) + 1;
    StringBuilder result = new StringBuilder();
    if (k <= n && n <= 21) {
      result.append(digits);
      for (int i = 0; i < n - k; i++) {
        result.append('0');
      }
    } else if (0 < n && n <= 21) {
      result.append(digits, 0, n).append('.').append(digits.substring(n));
    } else if (-6 < n && n <= 0) {
      result.append("0.");
      for (int i = 0; i < -n; i++) {
        result.append('0');
      }
      result.append(digits);
    } else {
      result.append(digits.charAt(0));
      if (k > 1) {
        result.append('.').append(digits.substring(1));
      }
      result.append('e').append(n - 1 >= 0 ? "+" : "-").append(Math.abs(n - 1));
    }
    return result.toString();
  }

  /** String.prototype.substring: the indexes are clamped, and swapped if start is after end. */
  static String substring(String value, int start) {
    return substring(value, start, value.length());
  }

  /** String.prototype.substring: the indexes are clamped, and swapped if start is after end. */
  static String substring(String value, int start, int end) {
    start = Math.max(0, Math.min(start, value.length()));
    end = Math.max(0, Math.min(end, value.length()));
    return start <= end ? value.substring(start, end) : value.substring(end, start);
  }

  /** Array.prototype.filter. */
  static <T> List<T> filter(List<T> list, BiPredicate<? super T, Integer> predicate) {
    List<T> result = new ArrayList<>();
    for (int i = 0; i < list.size(); i++) {
      if (predicate.test(list.get(i), i)) {
        result.add(list.get(i));
      }
    }
    return result;
  }

  /** Array.prototype.map. */
  static <T, R> List<R> map(List<T> list, BiFunction<? super T, Integer, ? extends R> fn) {
    List<R> result = new ArrayList<>();
    for (int i = 0; i < list.size(); i++) {
      result.add(fn.apply(list.get(i), i));
    }
    return result;
  }

  /** Array.prototype.sort without compare function: sorts strings by UTF-16 code units. */
  static <T extends Comparable<? super T>> List<T> sort(List<T> list) {
    Collections.sort(list);
    return list;
  }

  /** Date.prototype.toISOString. */
  static String toISOString(Instant value) {
    LocalDateTime time = LocalDateTime.ofInstant(value, ZoneOffset.UTC);
    int year = time.getYear();
    String yearText;
    if (year >= 0 && year <= 9999) {
      yearText = String.format(Locale.ROOT, "%04d", year);
    } else {
      yearText = (year < 0 ? "-" : "+") + String.format(Locale.ROOT, "%06d", Math.abs(year));
    }
    return String.format(
        Locale.ROOT,
        "%s-%02d-%02dT%02d:%02d:%02d.%03dZ",
        yearText,
        time.getMonthValue(),
        time.getDayOfMonth(),
        time.getHour(),
        time.getMinute(),
        time.getSecond(),
        time.getNano() / 1000000);
  }

  /** A Pattern like new RegExp(pattern, flags), with the flags i, m and s. */
  static Pattern regExp(String pattern, String flags) {
    int result = 0;
    for (char flag : flags.toCharArray()) {
      switch (flag) {
        case 'i':
          result |= Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE;
          break;
        case 'm':
          result |= Pattern.MULTILINE;
          break;
        case 's':
          result |= Pattern.DOTALL;
          break;
        default:
          throw new IllegalArgumentException("Unsupported regular expression flag: " + flag);
      }
    }
    return Pattern.compile(pattern, result);
  }
}
