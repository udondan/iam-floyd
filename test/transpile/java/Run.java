import com.udondan.iamFloyd.Json;
import com.udondan.iamFloyd.Operator;
import com.udondan.iamFloyd.PolicyStatement;
import java.io.FileDescriptor;
import java.io.FileOutputStream;
import java.io.PrintStream;
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

/**
 * Runs the scenarios of test/transpile/scenarios.json against the native Java package.
 *
 * <p>Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the
 * message). The methods are called by reflection: of the overloads that accept the arguments, the
 * one with the fewest parameters of type Object, without varargs if possible.
 *
 * <p>Usage: Run &lt;scenarios.json&gt;
 */
public final class Run {
  private static final List<String> RESERVED = Arrays.asList("if", "for");

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
  static Object decode(Object arg) throws Exception {
    if (arg instanceof List) {
      List<Object> list = new ArrayList<>();
      for (Object item : (List<?>) arg) {
        list.add(decode(item));
      }
      return list;
    }
    if (arg instanceof Map) {
      Map<?, ?> map = (Map<?, ?>) arg;
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
    }
    return arg;
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

  /** The arguments for the method, or null if it does not accept them. */
  private static Object[] arguments(Method method, List<Object> args) {
    Class<?>[] types = method.getParameterTypes();
    int fixed = method.isVarArgs() ? types.length - 1 : types.length;
    if (method.isVarArgs() ? args.size() < fixed : args.size() != fixed) {
      return null;
    }
    Object[] result = new Object[types.length];
    for (int i = 0; i < fixed; i++) {
      if (!accepts(types[i], args.get(i))) {
        return null;
      }
      result[i] = args.get(i);
    }
    if (method.isVarArgs()) {
      Class<?> component = types[fixed].getComponentType();
      Object rest = java.lang.reflect.Array.newInstance(component, args.size() - fixed);
      for (int i = fixed; i < args.size(); i++) {
        if (!accepts(component, args.get(i))) {
          return null;
        }
        java.lang.reflect.Array.set(rest, i - fixed, args.get(i));
      }
      result[fixed] = rest;
    }
    return result;
  }

  private static int cost(Method method) {
    int cost = method.isVarArgs() ? 100 : 0;
    for (Class<?> type : method.getParameterTypes()) {
      if (type == Object.class) {
        cost++;
      }
    }
    return cost;
  }

  static Object invoke(Object target, String name, List<Object> args) throws Exception {
    String javaName = javaName(name);
    Method best = null;
    Object[] bestArgs = null;
    boolean ambiguous = false;
    for (Method method : target.getClass().getMethods()) {
      if (method.isBridge() || !method.getName().equals(javaName)) {
        continue;
      }
      Object[] arguments = arguments(method, args);
      if (arguments == null) {
        continue;
      }
      if (best == null || cost(method) < cost(best)) {
        best = method;
        bestArgs = arguments;
        ambiguous = false;
      } else if (cost(method) == cost(best)) {
        ambiguous = true;
      }
    }
    if (best == null || ambiguous) {
      throw new NoSuchMethodException(
          (best == null ? "no method " : "ambiguous method ") + javaName + " for " + args);
    }
    try {
      return best.invoke(target, bestArgs);
    } catch (InvocationTargetException e) {
      Throwable cause = e.getCause();
      throw cause instanceof Exception ? (Exception) cause : new RuntimeException(cause);
    }
  }

  @SuppressWarnings({"rawtypes", "unchecked"})
  static String run(Map<String, Object> scenario) {
    try {
      String sid = (String) scenario.get("sid");
      Object statement;
      if (scenario.containsKey("class")) {
        statement =
            Class.forName("com.udondan.iamFloyd.statement." + scenario.get("class"))
                .getConstructor(String.class)
                .newInstance(sid);
      } else if (scenario.containsKey("service")) {
        String model =
            new String(
                Files.readAllBytes(
                    Paths.get("lib/generated/model", scenario.get("service") + ".json")),
                StandardCharsets.UTF_8);
        statement = new Service((Map<String, Object>) JsonParser.parse(model), sid);
      } else {
        statement = new PolicyStatement(sid);
      }
      for (Object call : (List<Object>) scenario.get("calls")) {
        List<Object> list = (List<Object>) call;
        List<Object> args = new ArrayList<>();
        for (Object arg : list.subList(1, list.size())) {
          args.add(decode(arg));
        }
        invoke(statement, (String) list.get(0), args);
      }
      return Json.stringify(((PolicyStatement) statement).toJSON());
    } catch (Exception e) {
      return "ERROR " + e.getMessage();
    }
  }

  /** Runs the scenarios. */
  @SuppressWarnings("unchecked")
  public static void main(String[] args) throws Exception {
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
