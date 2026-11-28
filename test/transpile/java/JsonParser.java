import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Parses the JSON of the scenarios and the models: objects become a LinkedHashMap, arrays an
 * ArrayList, numbers of up to 9 digits without fraction and exponent an Integer, all other numbers
 * a Double.
 */
final class JsonParser {
  private static final Map<Character, Character> ESCAPES =
      Map.of('b', '\b', 'f', '\f', 'n', '\n', 'r', '\r', 't', '\t');

  private final String text;
  private int pos;

  private JsonParser(String text) {
    this.text = text;
  }

  static Object parse(String text) {
    JsonParser parser = new JsonParser(text);
    Object value = parser.value();
    parser.whitespace();
    if (parser.pos != text.length()) {
      throw parser.error("trailing characters");
    }
    return value;
  }

  private IllegalArgumentException error(String message) {
    return new IllegalArgumentException(message + " at " + pos);
  }

  private void whitespace() {
    while (pos < text.length() && " \t\r\n".indexOf(text.charAt(pos)) >= 0) {
      pos++;
    }
  }

  private void expect(char c) {
    whitespace();
    if (pos >= text.length() || text.charAt(pos) != c) {
      throw error("expected " + c);
    }
    pos++;
  }

  private boolean consume(char c) {
    whitespace();
    if (pos < text.length() && text.charAt(pos) == c) {
      pos++;
      return true;
    }
    return false;
  }

  private Object value() {
    whitespace();
    if (pos >= text.length()) {
      throw error("unexpected end");
    }
    char c = text.charAt(pos);
    if (c == '{') {
      return object();
    }
    if (c == '[') {
      return array();
    }
    return c == '"' ? string() : literal();
  }

  private Map<String, Object> object() {
    pos++;
    Map<String, Object> map = new LinkedHashMap<>();
    if (!consume('}')) {
      do {
        whitespace();
        String key = string();
        expect(':');
        map.put(key, value());
      } while (consume(','));
      expect('}');
    }
    return map;
  }

  private List<Object> array() {
    pos++;
    List<Object> list = new ArrayList<>();
    if (!consume(']')) {
      do {
        list.add(value());
      } while (consume(','));
      expect(']');
    }
    return list;
  }

  private Object literal() {
    for (String literal : new String[] {"true", "false", "null"}) {
      if (text.startsWith(literal, pos)) {
        pos += literal.length();
        return literal.equals("null") ? null : Boolean.valueOf(literal);
      }
    }
    return number();
  }

  private String string() {
    if (pos >= text.length() || text.charAt(pos) != '"') {
      throw error("expected a string");
    }
    pos++;
    StringBuilder builder = new StringBuilder();
    for (char c = next(); c != '"'; c = next()) {
      builder.append(c == '\\' ? escape() : c);
    }
    return builder.toString();
  }

  /** The next character of a string. */
  private char next() {
    if (pos >= text.length()) {
      throw error("unterminated string");
    }
    return text.charAt(pos++);
  }

  /** The character of an escape sequence, after the backslash. */
  private char escape() {
    char escape = text.charAt(pos++);
    if (escape != 'u') {
      return ESCAPES.getOrDefault(escape, escape);
    }
    char c = (char) Integer.parseInt(text.substring(pos, pos + 4), 16);
    pos += 4;
    return c;
  }

  private Object number() {
    int start = pos;
    while (pos < text.length() && "+-0123456789.eE".indexOf(text.charAt(pos)) >= 0) {
      pos++;
    }
    String number = text.substring(start, pos);
    if (number.isEmpty()) {
      throw error("unexpected character");
    }
    if (number.matches("-?\\d{1,9}")) {
      return Integer.valueOf(number);
    }
    return Double.valueOf(number);
  }
}
