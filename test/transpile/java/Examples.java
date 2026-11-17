import com.udondan.iamFloyd.Json;
import com.udondan.iamFloyd.PolicyDocument;
import com.udondan.iamFloyd.PolicyStatement;
import java.io.ByteArrayOutputStream;
import java.io.FileDescriptor;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLClassLoader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;

/**
 * Runs the Java examples of the docs, examples/*&#47;*.java, against the native package.
 *
 * <p>The examples are written for iam-floyd. The examples of the CDK variant, *.cdk, are skipped.
 *
 * <p>Prints one line per example: the name, a tab and the statements, the policy or the policies
 * as JSON (or FAIL), like test/jsii/examples/java.
 *
 * <p>Usage: Examples &lt;examples directory&gt; &lt;working directory&gt;
 */
public final class Examples {
  /** The prefix of the line of an example that failed. */
  private static final String FAIL = "FAIL ";

  private Examples() {}

  static Object resolve(Object result) {
    if (result instanceof PolicyDocument) {
      return ((PolicyDocument) result).toJSON();
    }
    // statements, or the policies of a split
    List<?> items = result instanceof List ? (List<?>) result : Collections.singletonList(result);
    List<Object> json = new ArrayList<>();
    for (Object item : items) {
      json.add(
          item instanceof PolicyDocument
              ? ((PolicyDocument) item).toJSON()
              : ((PolicyStatement<?>) item).toJSON());
    }
    return json;
  }

  /** Compiles the example into the directory, returns the errors of the compiler, if any. */
  static String compile(Path source, Path classes) {
    JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
    ByteArrayOutputStream errors = new ByteArrayOutputStream();
    List<String> options =
        Arrays.asList(
            "-encoding",
            "UTF-8",
            "-cp",
            System.getProperty("java.class.path"),
            "-d",
            classes.toString(),
            "-proc:none",
            source.toString());
    int status =
        compiler.run(null, errors, errors, options.toArray(new String[0]));
    return status == 0 ? null : new String(errors.toByteArray(), StandardCharsets.UTF_8);
  }

  static String className(String name) {
    // e.g. access-levels-list: ExampleAccessLevelsList
    return "Example"
        + Arrays.stream(name.split("[-.]"))
            .map(part -> Character.toUpperCase(part.charAt(0)) + part.substring(1))
            .collect(Collectors.joining());
  }

  /** Runs all examples. */
  public static void main(String[] args) throws IOException {
    PrintStream out =
        new PrintStream(
            new FileOutputStream(FileDescriptor.out), true, StandardCharsets.UTF_8.name());
    Path work = Paths.get(args[1]);
    List<Path> directories;
    try (Stream<Path> list = Files.list(Paths.get(args[0]))) {
      directories = list.filter(Files::isDirectory).sorted().collect(Collectors.toList());
    }
    for (Path directory : directories) {
      String name = directory.getFileName().toString();
      Path file = directory.resolve(name + ".java");
      if (!name.endsWith(".cdk") && Files.isRegularFile(file)) {
        out.println(name + "\t" + run(name, file, work));
      }
    }
  }

  /** Compiles and runs the example, returns its JSON or FAIL and the error. */
  static String run(String name, Path file, Path work) throws IOException {
    try {
      Path classes = work.resolve("classes").resolve(name);
      Files.createDirectories(classes);
      String errors = compile(file, classes);
      return errors == null ? execute(name, classes) : FAIL + errors.replace('\n', ' ');
    } catch (InvocationTargetException e) {
      return FAIL + e.getCause();
    } catch (ReflectiveOperationException | RuntimeException e) {
      return FAIL + e;
    }
  }

  static String execute(String name, Path classes)
      throws IOException, ReflectiveOperationException {
    URL[] urls = {classes.toUri().toURL()};
    try (URLClassLoader loader = new URLClassLoader(urls, Examples.class.getClassLoader())) {
      Method example = loader.loadClass(className(name)).getDeclaredMethod("example");
      example.setAccessible(true);
      return Json.stringify(resolve(example.invoke(null)));
    }
  }
}
