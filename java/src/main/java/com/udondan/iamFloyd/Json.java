package com.udondan.iamFloyd;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.time.Instant;
import java.util.List;
import java.util.Map;

/** Serializes statements and their parts to JSON, as JSON.stringify of JavaScript. */
public final class Json {
  private Json() {}

  /**
   * The JSON of a value: maps in the order of their keys, lists and arrays, strings, numbers,
   * booleans, null, instants as ISO strings, and objects with a public {@code toJSON()} method,
   * such as statements.
   *
   * @param value the value
   * @return the JSON, without whitespace
   */
  public static String stringify(Object value) {
    StringBuilder result = new StringBuilder();
    write(result, value);
    return result.toString();
  }

  private static void write(StringBuilder result, Object value) {
    if (value == null) {
      result.append("null");
    } else if (value instanceof String) {
      string(result, (String) value);
    } else if (value instanceof Boolean) {
      result.append(value);
    } else if (value instanceof Integer || value instanceof Long || value instanceof Short
        || value instanceof Byte) {
      result.append(value);
    } else if (value instanceof Number) {
      double number = ((Number) value).doubleValue();
      result.append(Double.isNaN(number) || Double.isInfinite(number) ? "null" : Js.number(number));
    } else if (value instanceof Instant) {
      string(result, Js.toISOString((Instant) value));
    } else if (value instanceof Map) {
      result.append('{');
      boolean first = true;
      for (Map.Entry<?, ?> entry : ((Map<?, ?>) value).entrySet()) {
        if (!first) {
          result.append(',');
        }
        first = false;
        string(result, String.valueOf(entry.getKey()));
        result.append(':');
        write(result, entry.getValue());
      }
      result.append('}');
    } else if (value instanceof List) {
      array(result, ((List<?>) value).toArray());
    } else if (value instanceof Object[]) {
      array(result, (Object[]) value);
    } else {
      write(result, toJson(value));
    }
  }

  private static void array(StringBuilder result, Object[] values) {
    result.append('[');
    for (int i = 0; i < values.length; i++) {
      if (i > 0) {
        result.append(',');
      }
      write(result, values[i]);
    }
    result.append(']');
  }

  private static Object toJson(Object value) {
    Method method;
    try {
      method = value.getClass().getMethod("toJSON");
    } catch (NoSuchMethodException e) {
      throw new IllegalArgumentException(
          "Cannot serialize " + value.getClass().getName() + " to JSON", e);
    }
    try {
      return method.invoke(value);
    } catch (IllegalAccessException e) {
      throw new IllegalStateException(e);
    } catch (InvocationTargetException e) {
      Throwable cause = e.getCause();
      if (cause instanceof RuntimeException) {
        throw (RuntimeException) cause;
      }
      throw new IllegalStateException(cause);
    }
  }

  private static void string(StringBuilder result, String value) {
    result.append('"');
    for (int i = 0; i < value.length(); i++) {
      char c = value.charAt(i);
      switch (c) {
        case '"':
          result.append("\\\"");
          break;
        case '\\':
          result.append("\\\\");
          break;
        case '\b':
          result.append("\\b");
          break;
        case '\f':
          result.append("\\f");
          break;
        case '\n':
          result.append("\\n");
          break;
        case '\r':
          result.append("\\r");
          break;
        case '\t':
          result.append("\\t");
          break;
        default:
          boolean loneSurrogate =
              Character.isHighSurrogate(c)
                  ? i + 1 >= value.length() || !Character.isLowSurrogate(value.charAt(i + 1))
                  : Character.isLowSurrogate(c)
                      && (i == 0 || !Character.isHighSurrogate(value.charAt(i - 1)));
          if (c < 0x20 || loneSurrogate) {
            result.append(String.format("\\u%04x", (int) c));
          } else {
            result.append(c);
          }
      }
    }
    result.append('"');
  }
}
