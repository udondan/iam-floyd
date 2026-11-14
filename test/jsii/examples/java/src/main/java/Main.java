import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.lang.reflect.InvocationTargetException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import software.amazon.awscdk.App;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.services.iam.PolicyDocument;
import software.amazon.awscdk.services.iam.PolicyStatement;

/**
 * Runs the Java examples of the docs, examples/*&#47;*.java, which are compiled with this class.
 *
 * <p>Prints one line per example: the name, a tab and the statements, the policy or the policies
 * as JSON (or FAIL).
 */
public class Main {
  private static final Stack STACK = new Stack(new App(), "Stack");
  private static final ObjectMapper MAPPER = new ObjectMapper();

  static String className(String name) {
    // e.g. access-levels-list: ExampleAccessLevelsList
    return "Example"
        + Arrays.stream(name.split("[-.]"))
            .map(part -> Character.toUpperCase(part.charAt(0)) + part.substring(1))
            .collect(Collectors.joining());
  }

  static Object resolve(Object item) {
    return item instanceof PolicyDocument document
        ? STACK.resolve(document.toJSON())
        : STACK.resolve(((PolicyStatement) item).toStatementJson());
  }

  /** The JSON of the result of an example: the statements, the policy or the policies. */
  static Object json(Object result) {
    if (result instanceof PolicyDocument) {
      return resolve(result);
    }
    // statements, or the policies of a split
    List<?> items = result instanceof List<?> list ? list : List.of(result);
    return items.stream().map(Main::resolve).toList();
  }

  /** Runs the example, returns its JSON or FAIL and the error. */
  static String run(String name) {
    try {
      Object result = Class.forName(className(name)).getDeclaredMethod("example").invoke(null);
      return MAPPER.writeValueAsString(json(result));
    } catch (InvocationTargetException e) {
      return "FAIL " + e.getCause();
    } catch (ReflectiveOperationException | JsonProcessingException | RuntimeException e) {
      return "FAIL " + e;
    }
  }

  /** Runs all examples. */
  public static void main(String[] args) {
    File[] directories = new File(args[0]).listFiles(File::isDirectory);
    Arrays.sort(directories);
    for (File directory : directories) {
      String name = directory.getName();
      if (new File(directory, name + ".java").isFile()) {
        System.out.println(name + "\t" + run(name));
      }
    }
  }
}
