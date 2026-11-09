import { JSDocableNode, JSDocTag, Node } from 'ts-morph';

import { fail, tagComment } from '../index';
import { Context } from './context';
import { goLocalName } from './names';

/**
 * The lines of a Go doc comment, from the Markdown of a JSDoc
 */
export function goDoc(lines: string[]): string[] {
  const out: string[] = [];
  let code = false;
  for (const line of trimmed(lines)) {
    if (line.trim().startsWith('```')) {
      code = !code;
    } else {
      out.push((code ? `//\t${line}` : `// ${line.trim()}`).trimEnd());
    }
  }
  return out;
}

/**
 * The lines without trailing whitespace and without empty lines at the start and the end
 */
function trimmed(lines: string[]): string[] {
  const result = lines.map((line) => line.trimEnd());
  const first = result.findIndex((line) => line.trim().length);
  if (first < 0) {
    return [];
  }
  const last =
    result.length -
    [...result].reverse().findIndex((line) => line.trim().length);
  return result.slice(first, last);
}

const tagPrefixes = new Map([
  ['returns', 'Returns '],
  ['see', 'See '],
  ['deprecated', 'Deprecated: '],
]);

/**
 * Emits the doc comment of a node from its last JSDoc
 */
export function docs(ctx: Context, node: JSDocableNode & Node) {
  const jsDocs = node.getJsDocs();
  if (jsDocs.length == 0) {
    return;
  }
  const doc = jsDocs[jsDocs.length - 1];
  const lines = doc.getDescription().trim().split('\n');
  for (const tag of doc.getTags()) {
    lines.push(...tagLines(tag));
  }
  ctx.emitLines(goDoc(lines));
}

function tagLines(tag: JSDocTag): string[] {
  const comment = tagComment(tag);
  if (Node.isJSDocParameterTag(tag)) {
    return comment.length
      ? ['', ...`${goLocalName(tag.getName())}: ${comment}`.split('\n')]
      : [];
  }
  const prefix = tagPrefixes.get(tag.getTagName());
  if (prefix === undefined) {
    return fail(tag, 'Unsupported JSDoc tag');
  }
  return ['', ...`${prefix}${comment}`.split('\n')];
}
