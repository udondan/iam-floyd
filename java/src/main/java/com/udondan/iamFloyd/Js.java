package com.udondan.iamFloyd;

import java.math.BigDecimal;
import java.math.MathContext;
import java.math.RoundingMode;
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

  /** A boolean or a number as JavaScript converts it to a string. */
  static String toString(Object value) {
    if (value instanceof Number) {
      return number(((Number) value).doubleValue());
    }
    return value.toString();
  }

  /** A number as JavaScript formats it: the shortest digits that round-trip. */
  static String number(double value) {
    if (value < 0) {
      return "-" + number(-value);
    }
    if (Double.isNaN(value)) {
      return "NaN";
    }
    if (Double.isInfinite(value)) {
      return "Infinity";
    }
    return value == 0 ? "0" : format(shortest(value));
  }

  /**
   * The shortest decimal that parses back to the same positive value, without trailing zeros. Of
   * those with the fewest digits, the nearest to the value is the one with rounded digits.
   */
  private static BigDecimal shortest(double value) {
    BigDecimal exact = new BigDecimal(value);
    BigDecimal result = exact.round(new MathContext(1, RoundingMode.HALF_EVEN));
    for (int precision = 2; result.doubleValue() != value; precision++) {
      result = exact.round(new MathContext(precision, RoundingMode.HALF_EVEN));
    }
    return result.stripTrailingZeros();
  }

  /** A decimal as Number.prototype.toString formats it. */
  private static String format(BigDecimal decimal) {
    String digits = decimal.unscaledValue().toString();
    int k = digits.length();
    // n is the position of the decimal point relative to the first digit
    int n = k - decimal.scale();
    if (k <= n && n <= 21) {
      return digits + "0".repeat(n - k);
    }
    if (0 < n && n <= 21) {
      return digits.substring(0, n) + "." + digits.substring(n);
    }
    if (-6 < n && n <= 0) {
      return "0." + "0".repeat(-n) + digits;
    }
    String fraction = k > 1 ? "." + digits.substring(1) : "";
    return digits.charAt(0) + fraction + "e" + (n - 1 >= 0 ? "+" : "-") + Math.abs(n - 1);
  }

  /** String.prototype.substring: the indexes are clamped. */
  static String substring(String value, int start) {
    return substring(value, start, value.length());
  }

  /** String.prototype.substring: the indexes are clamped. */
  static String substring(String value, int start, int end) {
    start = Math.max(0, Math.min(start, value.length()));
    end = Math.max(0, Math.min(end, value.length()));
    return value.substring(start, end);
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

  /** A Pattern like new RegExp(pattern, flags), with the flag i. */
  static Pattern regExp(String pattern, String flags) {
    int result = 0;
    for (char flag : flags.toCharArray()) {
      if (flag != 'i') {
        throw new IllegalArgumentException("Unsupported regular expression flag: " + flag);
      }
      result |= Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE;
    }
    return Pattern.compile(pattern, result);
  }
}
