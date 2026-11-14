import com.udondan.iamFloyd.Json;
import com.udondan.iamFloyd.Operator;
import com.udondan.iamFloyd.PolicyDocument;
import com.udondan.iamFloyd.PolicyStatement;
import java.io.FileDescriptor;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.lang.reflect.Array;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Runs the scenarios of test/transpile/scenarios.json against the native Java package.
 *
 * <p>Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the
 * message). For a scenario with a policy of statements: the maximum size, the estimated size, the
 * result of validate (OK or the error), the policy as JSON and the policies of split as JSON array
 * (or the error, or - for a class without split), separated by tabs. The methods are called by
 * reflection: of the overloads that accept the arguments, the one with the fewest parameters of
 * type Object, without varargs if possible.
 *
 * <p>Usage: Run &lt;scenarios.json&gt;
 */
public final class Run {
  private static final List<String> RESERVED = Arrays.asList("if", "for");
  private static final String PACKAGE = "com.udondan.iamFloyd.";
  private static final String CLASS = "class";

  private Run() {}

  /** A service class like the generated ones, built from the model. */
  static final class Service extends PolicyStatement<Service> {
    @SuppressWarnings("unchecked")
    Service(Map<String, Object> model, String sid) {
      super(sid);
      this.servicePrefix = (String) model.get("servicePrefix");
      Map<String, Object> accessLevelList = (Map<String, Object>) model.get("accessLevelList");
      for (Map.Entry<String, Object> entry : accessLevelList.entrySet()) {
        List<String> actions = new ArrayList<>();
        for (Object action : (List<Object>) entry.getValue()) {
          actions.add((String) action);
        }
        this.accessLevelList.put(entry.getKey(), actions);
      }
    }
  }

  /** A method with the arguments it accepts. */
  private static final class Overload {
    final Method method;
    final Object[] args;

    Overload(Method method, Object[] args) {
      this.method = method;
      this.args = args;
    }
  }

  /** The Java name of a TypeScript method, like the transpiler names it. */
  static String javaName(String name) {
    if (RESERVED.contains(name)) {
      return "do" + Character.toUpperCase(name.charAt(0)) + name.substring(1);
    }
    return name;
  }

  /**
   * Decodes the arguments that JSON cannot express.
   *
   * <p>These are {@code {"operator": [methods]}} and {@code {"date": "ISO 8601"}}.
   */
  static Object decode(Object arg) throws ReflectiveOperationException {
    if (arg instanceof List) {
      List<Object> list = new ArrayList<>();
      for (Object item : (List<?>) arg) {
        list.add(decode(item));
      }
      return list;
    }
    if (arg instanceof Map) {
      return decodeObject((Map<?, ?>) arg);
    }
    return arg;
  }

  private static Object decodeObject(Map<?, ?> map) throws ReflectiveOperationException {
    if (map.containsKey("operator")) {
      Object operator = new Operator();
      for (Object method : (List<?>) map.get("operator")) {
        operator = invoke(operator, (String) method, new ArrayList<>());
      }
      return operator;
    }
    if (map.containsKey("date")) {
      return Instant.parse((String) map.get("date"));
    }
    return map;
  }

  private static boolean accepts(Class<?> type, Object arg) {
    if (arg == null) {
      return !type.isPrimitive();
    }
    if (type == boolean.class) {
      return arg instanceof Boolean;
    }
    return type.isInstance(arg);
  }

  /** Whether the parameters accept the arguments, the rest of them as varargs. */
  private static boolean acceptsAll(Class<?>[] types, int fixed, List<Object> args) {
    for (int i = 0; i < args.size(); i++) {
      Class<?> type = i < fixed ? types[i] : types[fixed].getComponentType();
      if (!accepts(type, args.get(i))) {
        return false;
      }
    }
    return true;
  }

  /** The arguments for the method, if it accepts them. */
  private static Optional<Object[]> arguments(Method method, List<Object> args) {
    Class<?>[] types = method.getParameterTypes();
    int fixed = method.isVarArgs() ? types.length - 1 : types.length;
    boolean count = method.isVarArgs() ? args.size() >= fixed : args.size() == fixed;
    if (!count || !acceptsAll(types, fixed, args)) {
      return Optional.empty();
    }
    Object[] result = Arrays.copyOf(args.subList(0, fixed).toArray(), types.length);
    if (method.isVarArgs()) {
      List<Object> rest = args.subList(fixed, args.size());
      Object varargs = Array.newInstance(types[fixed].getComponentType(), rest.size());
      for (int i = 0; i < rest.size(); i++) {
        Array.set(varargs, i, rest.get(i));
      }
      result[fixed] = varargs;
    }
    return Optional.of(result);
  }

  private static int cost(Overload overload) {
    int cost = overload.method.isVarArgs() ? 100 : 0;
    for (Class<?> type : overload.method.getParameterTypes()) {
      if (type == Object.class) {
        cost++;
      }
    }
    return cost;
  }

  /** The overloads of the method with the lowest cost that accept the arguments. */
  private static List<Overload> overloads(Object target, String javaName, List<Object> args) {
    List<Overload> candidates = new ArrayList<>();
    for (Method method : target.getClass().getMethods()) {
      if (!method.isBridge() && method.getName().equals(javaName)) {
        arguments(method, args)
            .ifPresent(arguments -> candidates.add(new Overload(method, arguments)));
      }
    }
    int lowest = candidates.stream().mapToInt(Run::cost).min().orElse(0);
    return candidates.stream()
        .filter(candidate -> cost(candidate) == lowest)
        .collect(Collectors.toList());
  }

  static Object invoke(Object target, String name, List<Object> args)
      throws ReflectiveOperationException {
    String javaName = javaName(name);
    List<Overload> overloads = overloads(target, javaName, args);
    if (overloads.size() != 1) {
      throw new NoSuchMethodException(
          (overloads.isEmpty() ? "no method " : "ambiguous method ") + javaName + " for " + args);
    }
    Overload overload = overloads.get(0);
    try {
      return overload.method.invoke(target, overload.args);
    } catch (InvocationTargetException e) {
      throw unwrap(e);
    }
  }

  /** The exception that the invoked method threw, which is unchecked in the package. */
  private static RuntimeException unwrap(InvocationTargetException e)
      throws InvocationTargetException {
    if (e.getCause() instanceof RuntimeException) {
      return (RuntimeException) e.getCause();
    }
    throw e;
  }

  @SuppressWarnings({"rawtypes", "unchecked"})
  private static Object statement(Map<String, Object> scenario, String sid)
      throws ReflectiveOperationException, IOException {
    if (scenario.containsKey(CLASS)) {
      return Class.forName(PACKAGE + "statement." + scenario.get(CLASS))
          .getConstructor(String.class)
          .newInstance(sid);
    }
    if (scenario.containsKey("service")) {
      String model =
          new String(
              Files.readAllBytes(
                  Paths.get("lib/generated/model", scenario.get("service") + ".json")),
              StandardCharsets.UTF_8);
      return new Service((Map<String, Object>) JsonParser.parse(model), sid);
    }
    return new PolicyStatement(sid);
  }

  @SuppressWarnings("unchecked")
  static PolicyStatement<?> build(Map<String, Object> scenario)
      throws ReflectiveOperationException, IOException {
    Object statement = statement(scenario, (String) scenario.get("sid"));
    for (Object call : (List<Object>) scenario.get("calls")) {
      List<Object> list = (List<Object>) call;
      List<Object> args = new ArrayList<>();
      for (Object arg : list.subList(1, list.size())) {
        args.add(decode(arg));
      }
      invoke(statement, (String) list.get(0), args);
    }
    return (PolicyStatement<?>) statement;
  }

  /** A function that can throw, for {@link #attempt}. */
  interface Result {
    String get() throws ReflectiveOperationException, IOException;
  }

  static String attempt(Result result) {
    try {
      return result.get();
    } catch (ReflectiveOperationException | IOException | RuntimeException e) {
      return "ERROR " + e.getMessage();
    }
  }

  private static PolicyDocument policy(Map<String, Object> options, PolicyStatement<?>[] given)
      throws ReflectiveOperationException {
    if (options.containsKey("maximumSize")) {
      return new PolicyDocument((Number) options.get("maximumSize"), given);
    }
    String name = (String) options.getOrDefault(CLASS, "ManagedPolicyDocument");
    return (PolicyDocument)
        Class.forName(PACKAGE + name)
            .getConstructor(PolicyStatement[].class)
            .newInstance((Object) given);
  }

  private static boolean hasSplit(PolicyDocument policy) {
    try {
      policy.getClass().getMethod("split");
      return true;
    } catch (NoSuchMethodException e) {
      return false;
    }
  }

  /** The policies of split as JSON array, or - for a class without split. */
  private static String split(PolicyDocument policy) {
    if (!hasSplit(policy)) {
      return "-";
    }
    return attempt(
        () -> {
          List<String> parts = new ArrayList<>();
          for (Object part : (List<?>) invoke(policy, "split", new ArrayList<>())) {
            parts.add(Json.stringify(((PolicyDocument) part).toJSON()));
          }
          return "[" + String.join(",", parts) + "]";
        });
  }

  @SuppressWarnings("unchecked")
  static String runPolicy(Map<String, Object> scenario)
      throws ReflectiveOperationException, IOException {
    Map<String, Object> options = (Map<String, Object>) scenario.get("policy");
    List<PolicyStatement<?>> statements = new ArrayList<>();
    for (Object statement : (List<Object>) scenario.getOrDefault("statements", List.of())) {
      statements.add(build((Map<String, Object>) statement));
    }
    boolean add = Boolean.TRUE.equals(options.get("add"));
    PolicyDocument policy =
        policy(
            options,
            add ? new PolicyStatement<?>[0] : statements.toArray(new PolicyStatement<?>[0]));
    if (options.containsKey("arnSizeEstimate")) {
      policy.arnSizeEstimate = ((Number) options.get("arnSizeEstimate")).intValue();
    }
    if (add) {
      statements.forEach(policy::addStatements);
    }
    String validate =
        attempt(
            () -> {
              policy.validate();
              return "OK";
            });
    String split = split(policy);
    return String.join(
        "\t",
        String.valueOf(policy.maximumSize),
        String.valueOf(policy.estimateSize()),
        validate,
        Json.stringify(policy.toJSON()),
        split);
  }

  static String run(Map<String, Object> scenario) {
    return attempt(
        () ->
            scenario.containsKey("policy")
                ? runPolicy(scenario)
                : Json.stringify(build(scenario).toJSON()));
  }

  /** Runs the scenarios. */
  @SuppressWarnings("unchecked")
  public static void main(String[] args) throws IOException {
    PrintStream out =
        new PrintStream(
            new FileOutputStream(FileDescriptor.out), true, StandardCharsets.UTF_8.name());
    String json = new String(Files.readAllBytes(Paths.get(args[0])), StandardCharsets.UTF_8);
    for (Object scenario : (List<Object>) JsonParser.parse(json)) {
      Map<String, Object> map = (Map<String, Object>) scenario;
      out.println(map.get("name") + "\t" + run(new LinkedHashMap<>(map)));
    }
  }
}
