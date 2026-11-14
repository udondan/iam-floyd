package com.udondan.iamFloyd;

import com.udondan.iamFloyd.statement.S3;
import java.io.IOException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

/**
 * Tests the cases of the hand-written runtime that the scenarios cannot reach: values that JSON
 * cannot express (NaN, Infinity, arrays, objects with toJSON) and the errors of the runtime. In the
 * package of the runtime, as Js is not public.
 *
 * <p>Usage: com.udondan.iamFloyd.RuntimeTest
 */
public final class RuntimeTest {
  private static final List<String> FAILURES = new ArrayList<>();
  private static int count;

  private RuntimeTest() {}

  /** An object whose toJSON throws an unchecked exception. */
  public static final class Unchecked {
    /** Throws. */
    public Object toJSON() {
      throw new IllegalStateException("unchecked");
    }
  }

  /** An object whose toJSON throws a checked exception. */
  public static final class Checked {
    /** Throws. */
    public Object toJSON() throws IOException {
      throw new IOException("checked");
    }
  }

  private static void check(String name, Object actual, Object expected) {
    count++;
    if (!Objects.equals(actual, expected)) {
      FAILURES.add(name + ": expected " + expected + ", got " + actual);
    }
  }

  private static String error(String name, Runnable runnable) {
    try {
      runnable.run();
    } catch (RuntimeException e) {
      return e.getClass().getSimpleName() + ": " + e.getMessage();
    }
    return name + " did not throw";
  }

  /** Runs the tests. */
  public static void main(String[] args) {
    check("number NaN", Js.number(Double.NaN), "NaN");
    check("number Infinity", Js.number(Double.POSITIVE_INFINITY), "Infinity");
    check("number -Infinity", Js.number(Double.NEGATIVE_INFINITY), "-Infinity");

    check(
        "toISOString year 10000",
        Js.toISOString(Instant.parse("+10000-01-02T03:04:05.678Z")),
        "+010000-01-02T03:04:05.678Z");
    check(
        "toISOString year -1",
        Js.toISOString(Instant.parse("-0001-01-02T03:04:05Z")),
        "-000001-01-02T03:04:05.000Z");

    check("regExp i", Js.regExp("^a$", "i").matcher("A").find(), true);
    check(
        "regExp unsupported flag",
        error("regExp", () -> Js.regExp("a", "g")),
        "IllegalArgumentException: Unsupported regular expression flag: g");

    check("stringify NaN", Json.stringify(Double.NaN), "null");
    check(
        "stringify Infinity",
        Json.stringify(Arrays.asList(Double.POSITIVE_INFINITY, Double.NEGATIVE_INFINITY)),
        "[null,null]");
    check("stringify array", Json.stringify(new Object[] {"a", 1, null}), "[\"a\",1,null]");
    check(
        "stringify statement",
        Json.stringify(new S3().allow().toGetObject()),
        "{\"Action\":\"s3:GetObject\",\"Resource\":\"*\",\"Effect\":\"Allow\"}");
    check("stringify pair", Json.stringify("\ud83d\ude00"), "\"\ud83d\ude00\"");
    check("stringify high surrogate", Json.stringify("\ud800a"), "\"\\ud800a\"");
    check("stringify high surrogate at end", Json.stringify("a\ud800"), "\"a\\ud800\"");
    check("stringify low surrogate", Json.stringify("a\udc00"), "\"a\\udc00\"");
    check("stringify low surrogate at start", Json.stringify("\udc00a"), "\"\\udc00a\"");
    check(
        "stringify object",
        error("stringify object", () -> Json.stringify(new Object())),
        "IllegalArgumentException: Cannot serialize java.lang.Object to JSON");
    check(
        "stringify unchecked",
        error("stringify unchecked", () -> Json.stringify(new Unchecked())),
        "IllegalStateException: unchecked");
    check(
        "stringify checked",
        error("stringify checked", () -> Json.stringify(new Checked())),
        "IllegalStateException: java.io.IOException: checked");

    if (!FAILURES.isEmpty()) {
      FAILURES.forEach(System.out::println);
      System.exit(1);
    }
    System.out.println("All " + count + " runtime tests passed");
  }
}
