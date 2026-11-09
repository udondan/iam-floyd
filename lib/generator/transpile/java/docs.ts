import { JSDocableNode, JSDocTag, Node } from 'ts-morph';

import { fail, tagComment } from '../index';
import { Context } from './context';
import { escapeJavadoc, javadoc, javadocText } from './javadoc';
import { javaLocalName } from './names';

/**
 * The Javadoc of the JSDoc tags other than `@param`, by tag name
 */
const tagFormats = new Map<string, (tag: JSDocTag, comment: string) => string>([
  ['returns', (_tag, comment) => `@return ${comment}`.trim()],
  [
    'see',
    (tag) => {
      const url = tagComment(tag).replace(/"/g, '%22');
      return `@see <a href="${url}">${escapeJavadoc(url)}</a>`;
    },
  ],
  ['deprecated', (_tag, comment) => `@deprecated ${comment}`.trim()],
]);

/**
 * The Javadoc of a JSDoc tag. `@param` tags are left out for parameters not in `params`.
 */
function tagLine(tag: JSDocTag, params?: string[]): string | undefined {
  const comment = javadocText(tagComment(tag));
  if (Node.isJSDocParameterTag(tag)) {
    const name = javaLocalName(tag.getName());
    const documented = params === undefined || params.includes(name);
    return documented ? `@param ${name} ${comment}`.trim() : undefined;
  }
  const format = tagFormats.get(tag.getTagName());
  if (format === undefined) {
    return fail(tag, 'Unsupported JSDoc tag');
  }
  return format(tag, comment);
}

/**
 * Emits the Javadoc of a public declaration from its JSDoc. `params` are the Java names of the
 * parameters of the overload, if not all.
 */
export function docs(
  ctx: Context,
  node: JSDocableNode & Node,
  params?: string[],
  isPublic = true,
) {
  const jsDocs = node.getJsDocs();
  if (!isPublic || jsDocs.length == 0) {
    return;
  }
  const doc = jsDocs[jsDocs.length - 1];
  const description = doc.getDescription().trim();
  const tags: string[] = [];
  for (const tag of doc.getTags()) {
    const line = tagLine(tag, params);
    if (line !== undefined) {
      tags.push(line);
    }
  }
  ctx.emitLines(
    javadoc(description.length ? description.split('\n') : [], tags),
  );
}
