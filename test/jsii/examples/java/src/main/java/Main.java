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
 * <p>Prints one line per example: the name, a tab and the statements or the policy document as
 * JSON (or FAIL).
 */
public class Main {
  /** Runs all examples. */
  public static void main(String[] args) throws Exception {
    Stack stack = new Stack(new App(), "Stack");
    ObjectMapper mapper = new ObjectMapper();
    File[] directories = new File(args[0]).listFiles(File::isDirectory);
    Arrays.sort(directories);
    for (File directory : directories) {
      String name = directory.getName();
      if (!new File(directory, name + ".java").isFile()) {
        continue;
      }
      // e.g. access-levels-list: ExampleAccessLevelsList
      String className =
          "Example"
              + Arrays.stream(name.split("[-.]"))
                  .map(part -> Character.toUpperCase(part.charAt(0)) + part.substring(1))
                  .collect(Collectors.joining());
      try {
        Object result = Class.forName(className).getDeclaredMethod("example").invoke(null);
        Object json;
        if (result instanceof PolicyDocument document) {
          json = stack.resolve(document.toJSON());
        } else {
          List<?> statements = result instanceof List<?> list ? list : List.of(result);
          json =
              statements.stream()
                  .map(statement -> stack.resolve(((PolicyStatement) statement).toStatementJson()))
                  .toList();
        }
        System.out.println(name + "\t" + mapper.writeValueAsString(json));
      } catch (Exception e) {
        Throwable cause = e instanceof InvocationTargetException ? e.getCause() : e;
        System.out.println(name + "\tFAIL " + cause);
      }
    }
  }
}
