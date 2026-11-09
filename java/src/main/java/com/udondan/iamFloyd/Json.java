package com.udondan.iamFloyd;

import java.lang.reflect.InvocationTargetException;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.function.BiConsumer;

/** Serializes statements and their parts to JSON, as JSON.stringify of JavaScript. */
public final class Json {
  /** The writers of the types of values, in the order they are checked. */
  private static final Map<Class<?>, BiConsumer<StringBuilder, Object>> WRITERS =
      new LinkedHashMap<>();

  private static final Map<Character, String> ESCAPES =
      Map.of(
          '"', "\\\"",
          '\\', "\\\\",
          '\b', "\\b",
          '\f', "\\f",
          '\n', "\\n",
          '\r', "\\r",
          '\t', "\\t");

  static {
    WRITERS.put(String.class, (result, value) -> string(result, (String) value));
    WRITERS.put(Boolean.class, StringBuilder::append);
    WRITERS.put(Number.class, (result, value) -> number(result, (Number) value));
    WRITERS.put(Instant.class, (result, value) -> string(result, Js.toISOString((Instant) value)));
    WRITERS.put(Map.class, (result, value) -> object(result, (Map<?, ?>) value));
    WRITERS.put(List.class, (result, value) -> array(result, ((List<?>) value).toArray()));
    WRITERS.put(Object[].class, (result, value) -> array(result, (Object[]) value));
  }

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
    } else {
      writer(value).accept(result, value);
    }
  }

  private static BiConsumer<StringBuilder, Object> writer(Object value) {
    for (Map.Entry<Class<?>, BiConsumer<StringBuilder, Object>> entry : WRITERS.entrySet()) {
      if (entry.getKey().isInstance(value)) {
        return entry.getValue();
      }
    }
    return (result, object) -> write(result, toJson(object));
  }

  private static void number(StringBuilder result, Number value) {
    double number = value.doubleValue();
    result.append(Double.isNaN(number) || Double.isInfinite(number) ? "null" : Js.number(number));
  }

  private static void object(StringBuilder result, Map<?, ?> value) {
    result.append('{');
    boolean first = true;
    for (Map.Entry<?, ?> entry : value.entrySet()) {
      if (!first) {
        result.append(',');
      }
      first = false;
      string(result, String.valueOf(entry.getKey()));
      result.append(':');
      write(result, entry.getValue());
    }
    result.append('}');
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
    try {
      return value.getClass().getMethod("toJSON").invoke(value);
    } catch (InvocationTargetException e) {
      if (e.getCause() instanceof RuntimeException) {
        throw (RuntimeException) e.getCause();
      }
      throw new IllegalStateException(e.getCause());
    } catch (ReflectiveOperationException e) {
      throw new IllegalArgumentException(
          "Cannot serialize " + value.getClass().getName() + " to JSON", e);
    }
  }

  private static void string(StringBuilder result, String value) {
    result.append('"');
    for (int i = 0; i < value.length(); i++) {
      char c = value.charAt(i);
      String escape = ESCAPES.get(c);
      if (escape != null) {
        result.append(escape);
      } else if (c < 0x20 || isLoneSurrogate(value, i)) {
        result.append(String.format(Locale.ROOT, "\\u%04x", (int) c));
      } else {
        result.append(c);
      }
    }
    result.append('"');
  }

  /** Whether the character at the index is half of a surrogate pair without the other half. */
  private static boolean isLoneSurrogate(String value, int index) {
    char c = value.charAt(index);
    if (Character.isHighSurrogate(c)) {
      return index + 1 >= value.length() || !Character.isLowSurrogate(value.charAt(index + 1));
    }
    return Character.isLowSurrogate(c)
        && (index == 0 || !Character.isHighSurrogate(value.charAt(index - 1)));
  }
}
