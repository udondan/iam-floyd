/**
 * The lines of a docstring with the given text
 */
export function docstring(text: string[]): string[] {
  // a quote must not start a triple quote, which would end the docstring
  const escaped = text.map((line) =>
    line
      .trimEnd()
      .replace(/\\/g, '\\\\')
      .replace(/"(?="")/g, '\\"'),
  );
  if (escaped.length == 1) {
    return [`"""${escaped[0].replace(/"$/, '\\"')}"""`];
  }
  return [`"""${escaped[0]}`, ...escaped.slice(1), '"""'];
}

const escapes = new Map([
  ['\\', '\\\\'],
  ["'", "\\'"],
  ['\n', '\\n'],
  ['\r', '\\r'],
  ['\t', '\\t'],
]);

function escapeChar(char: string): string {
  const code = char.codePointAt(0)!;
  const isControl = code < 0x20 || code == 0x7f;
  return (
    escapes.get(char) ??
    (isControl ? `\\x${code.toString(16).padStart(2, '0')}` : char)
  );
}

/**
 * A Python string literal
 */
export function pyString(value: string): string {
  return `'${[...value].map(escapeChar).join('')}'`;
}
