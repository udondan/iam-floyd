export function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Text for an XML documentation comment: escaped, with the Markdown of the JSDoc (code, bold, links
 * and URLs) as XML
 */
export function xmlDocText(text: string): string {
  return escapeXml(text)
    .replace(/`([^`]+)`/g, '<c>$1</c>')
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      (_, label: string, url: string) =>
        `<see href="${url.replace(/"/g, '%22')}">${label}</see>`,
    )
    .replace(
      /^(https?:\/\/\S+)$/,
      (_, url: string) =>
        `<see href="${url.replace(/"/g, '%22')}">${url}</see>`,
    );
}

/**
 * The body of the summary: paragraphs, code blocks and lists
 */
class Summary {
  public readonly body: string[] = [];
  private paragraph: string[] = [];
  private code = false;
  private list = false;

  public add(line: string) {
    const item = /^\s*[-*] (.*)$/.exec(line);
    if (line.trim().startsWith('```')) {
      this.fence();
    } else if (this.code) {
      this.body.push(escapeXml(line));
    } else if (item) {
      this.item(item[1]);
    } else {
      this.text(line);
    }
  }

  public end() {
    this.flush();
    this.endList();
  }

  private fence() {
    this.flush();
    this.body.push(this.code ? '</code>' : '<code>');
    this.code = !this.code;
  }

  private item(text: string) {
    if (!this.list) {
      this.flush();
      this.body.push('<list type="bullet">');
      this.list = true;
    }
    this.body.push(
      `<item><description>${xmlDocText(text)}</description></item>`,
    );
  }

  private text(line: string) {
    this.endList();
    if (line.trim().length == 0) {
      this.flush();
    } else {
      this.paragraph.push(xmlDocText(line.trim()));
    }
  }

  private endList() {
    if (this.list) {
      this.body.push('</list>');
      this.list = false;
    }
  }

  private flush() {
    if (this.paragraph.length == 0) {
      return;
    }
    const text = this.paragraph.join('\n');
    this.body.push(this.body.length ? `<para>${text}</para>` : text);
    this.paragraph = [];
  }
}

/**
 * The lines of an XML documentation comment. The description is the summary, where blank lines
 * start a new paragraph; the tags are added as they are.
 */
export function xmlDoc(description: string[], tags: string[] = []): string[] {
  const summary = new Summary();
  for (const line of description) {
    summary.add(line.trimEnd());
  }
  summary.end();
  const lines: string[] = [];
  if (summary.body.length) {
    lines.push(
      '<summary>',
      ...summary.body.join('\n').split('\n'),
      '</summary>',
    );
  }
  lines.push(...tags.flatMap((tag) => tag.split('\n')));
  return lines.map((line) => `/// ${line}`.trimEnd());
}

/**
 * A `<param>` tag of an XML documentation comment
 */
export function xmlParam(name: string, text: string): string {
  return `<param name="${name.replace(/^@/, '')}">${text}</param>`;
}
