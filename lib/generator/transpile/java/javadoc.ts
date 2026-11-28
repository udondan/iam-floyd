/**
 * Text for a Javadoc comment: HTML special characters are escaped, and so are `@` (tags), `*\/` (end of
 * the comment) and backslashes (javac reads `\u` as Unicode escape even in comments)
 */
export function escapeJavadoc(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/@/g, '&#64;')
    .replace(/\*\//g, '*&#47;')
    .replace(/\\/g, '&#92;');
}

/**
 * Text for a Javadoc comment: escaped, with the Markdown of the JSDoc (code, bold, links and URLs)
 * as HTML
 */
export function javadocText(text: string): string {
  return escapeJavadoc(text)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/^(https?:\/\/\S+)$/, '<a href="$1">$1</a>');
}

/**
 * The body of a Javadoc comment, written line by line: code blocks, lists and paragraphs
 */
class JavadocBody {
  public readonly lines: string[] = [];
  private paragraph = false;
  private code = false;
  private list = false;

  public add(line: string) {
    if (line.trim().startsWith('```')) {
      this.fence();
    } else if (this.code) {
      this.lines.push(escapeJavadoc(line));
    } else {
      this.markdown(line);
    }
  }

  public closeList() {
    if (this.list) {
      this.lines.push('</ul>');
      this.list = false;
    }
  }

  private fence() {
    this.lines.push(this.code ? '</pre>' : '<pre>');
    this.code = !this.code;
    this.paragraph = false;
  }

  private markdown(line: string) {
    const item = /^\s*[-*] (.*)$/.exec(line);
    if (item) {
      this.item(item[1]);
      return;
    }
    this.closeList();
    if (line.trim().length == 0) {
      this.paragraph = this.lines.length > 0;
    } else {
      this.text(line);
    }
  }

  private item(text: string) {
    if (!this.list) {
      this.lines.push(...(this.lines.length ? [''] : []), '<ul>');
      this.list = true;
      this.paragraph = false;
    }
    this.lines.push(`<li>${javadocText(text)}</li>`);
  }

  private text(line: string) {
    if (this.paragraph) {
      this.lines.push('', `<p>${javadocText(line.trim())}`);
      this.paragraph = false;
    } else {
      this.lines.push(javadocText(line));
    }
  }
}

/**
 * The lines of a Javadoc comment. The description is escaped, blank lines start a new paragraph; the
 * tags are added as they are.
 */
export function javadoc(description: string[], tags: string[] = []): string[] {
  const body = new JavadocBody();
  for (const line of description) {
    body.add(line.trimEnd());
  }
  body.closeList();
  const separator = body.lines.length && tags.length ? [''] : [];
  const lines = [...body.lines, ...separator, ...tags];
  if (lines.length == 0) {
    return [];
  }
  return [
    '/**',
    ...lines.map((line) => (line.length ? ` * ${line}` : ' *')),
    ' */',
  ];
}
