import com.udondan.iamFloyd.Json;
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
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.tools.JavaCompiler;
import javax.tools.ToolProvider;
import software.amazon.awscdk.services.iam.PolicyDocument;

/**
 * Runs the Java examples of the docs, examples/*&#47;*.java, against the native package.
 *
 * <p>The examples are written for cdk-iam-floyd. They are compiled with com.udondan.iamFloyd in
 * place of com.udondan.iamFloyd.cdk and a stand-in for the PolicyDocument of the AWS CDK (in
 * stubs/, compiled with this class). Two parts of them are rewritten: the statements of the
 * collection are services, which extend the generic PolicyStatement, and the sid is passed to the
 * constructor instead of PolicyStatementProps. The examples of the CDK variant, *.cdk, are
 * skipped.
 *
 * <p>Prints one line per example: the name, a tab and the statements or the policy document as
 * JSON (or FAIL), like test/jsii/examples/java.
 *
 * <p>Usage: Examples &lt;examples directory&gt; &lt;working directory&gt;
 */
public final class Examples {
  private Examples() {}

  static String rewrite(String source) {
    return source
        .replace("com.udondan.iamFloyd.cdk.", "com.udondan.iamFloyd.")
        .replace("List<PolicyStatement>", "List<? extends PolicyStatement<?>>")
        .replace("import software.amazon.awscdk.services.iam.PolicyStatementProps;\n", "")
        .replaceAll("PolicyStatementProps\\.builder\\(\\)\\.sid\\(([^)]*)\\)\\.build\\(\\)", "$1");
  }

  static Object resolve(Object result) {
    if (result instanceof PolicyDocument) {
      return ((PolicyDocument) result).toJSON();
    }
    // a policy of the policy converter
    if (result instanceof Map) {
      return result;
    }
    List<?> statements =
        result instanceof List ? (List<?>) result : Collections.singletonList(result);
    List<Object> json = new ArrayList<>();
    for (Object statement : statements) {
      json.add(((PolicyStatement<?>) statement).toJSON());
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
      if (name.endsWith(".cdk") || !Files.isRegularFile(file)) {
        continue;
      }
      try {
        Path source = work.resolve("src").resolve(name).resolve(name + ".java");
        Path classes = work.resolve("classes").resolve(name);
        Files.createDirectories(source.getParent());
        Files.createDirectories(classes);
        String text = new String(Files.readAllBytes(file), StandardCharsets.UTF_8);
        Files.write(source, rewrite(text).getBytes(StandardCharsets.UTF_8));
        String errors = compile(source, classes);
        if (errors != null) {
          out.println(name + "\tFAIL " + errors.replace('\n', ' '));
          continue;
        }
        URL[] urls = {classes.toUri().toURL()};
        try (URLClassLoader loader = new URLClassLoader(urls, Examples.class.getClassLoader())) {
          Method example =
              loader.loadClass(className(name)).getDeclaredMethod("example");
          example.setAccessible(true);
          out.println(name + "\t" + Json.stringify(resolve(example.invoke(null))));
        }
      } catch (InvocationTargetException e) {
        out.println(name + "\tFAIL " + e.getCause());
      } catch (ReflectiveOperationException | RuntimeException e) {
        out.println(name + "\tFAIL " + e);
      }
    }
  }
}
