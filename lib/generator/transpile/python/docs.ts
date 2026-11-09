import { JSDocableNode, JSDocTag, Node } from 'ts-morph';

import { tagComment } from '../index';
import { Context } from './context';
import { pythonName } from './names';
import { docstring } from './strings';

function docTag(tag: JSDocTag): string {
  const comment = tagComment(tag);
  if (Node.isJSDocParameterTag(tag)) {
    return `:param ${pythonName(tag.getName())}: ${comment}`;
  }
  if (tag.getTagName() == 'returns') {
    return `:returns: ${comment}`;
  }
  return `@${tag.getTagName()} ${comment}`.trim();
}

/**
 * Emits the docstring of the last JSDoc of the node, if it has one
 */
export function emitDocstring(ctx: Context, node: JSDocableNode & Node) {
  const docs = node.getJsDocs();
  if (docs.length == 0) {
    return;
  }
  const doc = docs[docs.length - 1];
  const text: string[] = [];
  const description = doc.getDescription().trim();
  if (description.length) {
    text.push(...description.split('\n'));
  }
  const tags = doc.getTags().map(docTag);
  if (tags.length && text.length) {
    text.push('');
  }
  text.push(...tags);
  for (const line of docstring(text)) {
    ctx.emit(line);
  }
}
