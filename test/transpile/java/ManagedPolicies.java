import com.udondan.iamFloyd.AwsManagedPolicy;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.TreeMap;
import java.util.TreeSet;

/**
 * Compares the AWS managed policies of the native package with those of TypeScript.
 *
 * <p>Every static property of TypeScript must be a constant with the same value, and there must be
 * no other constants.
 *
 * <p>Usage: ManagedPolicies &lt;managed-policies.json of typescript/managed-policies.ts&gt;
 */
public final class ManagedPolicies {
  private ManagedPolicies() {}

  /** The Java name of a static property, like the transpiler names it. */
  static String constantName(String name) {
    return name.replaceAll("([\\p{Ll}\\d])(\\p{Lu})", "$1_$2")
        .replaceAll("(\\p{Lu})(\\p{Lu}\\p{Ll}+)", "$1_$2")
        .toUpperCase();
  }

  /** Compares the managed policies. */
  public static void main(String[] args) throws Exception {
    String json = new String(Files.readAllBytes(Paths.get(args[0])), StandardCharsets.UTF_8);
    Map<String, Object> expected = new TreeMap<>();
    for (Map.Entry<?, ?> entry : ((Map<?, ?>) JsonParser.parse(json)).entrySet()) {
      expected.put(constantName((String) entry.getKey()), entry.getValue());
    }
    Map<String, Object> actual = new TreeMap<>();
    for (Field field : AwsManagedPolicy.class.getFields()) {
      if (Modifier.isStatic(field.getModifiers())) {
        actual.put(field.getName(), field.get(null));
      }
    }
    TreeSet<String> names = new TreeSet<>(expected.keySet());
    names.addAll(actual.keySet());
    List<String> errors = new ArrayList<>();
    for (String name : names) {
      if (!Objects.equals(expected.get(name), actual.get(name))) {
        errors.add(
            name + ": expected " + expected.get(name) + ", got " + actual.get(name));
      }
    }
    for (String error : errors.subList(0, Math.min(50, errors.size()))) {
      System.out.println(error);
    }
    if (!errors.isEmpty()) {
      System.exit(1);
    }
    System.out.println("All " + expected.size() + " AWS managed policies passed");
  }
}
