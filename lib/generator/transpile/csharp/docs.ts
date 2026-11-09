import { JSDocableNode, JSDocTag, Node } from 'ts-morph';

import { fail, tagComment } from '../index';
import { Context } from './context';
import { csharpLocalName } from './names';
import { escapeXml, xmlDoc, xmlDocText, xmlParam } from './xml';

/**
 * The XML tags of the JSDoc tags other than `@param`, by the name of the tag
 */
const tagFormats = new Map<string, (tag: JSDocTag, comment: string) => string>([
  ['returns', (_, comment) => `<returns>${comment}</returns>`],
  [
    'see',
    (tag) => {
      const url = tagComment(tag).replace(/"/g, '%22');
      return `<seealso href="${url}">${escapeXml(url)}</seealso>`;
    },
  ],
  ['deprecated', (_, comment) => `<remarks>Deprecated: ${comment}</remarks>`],
]);

/**
 * The XML tags of a JSDoc tag. Parameters are documented only if they are in `params`.
 */
function docTag(tag: JSDocTag, params: string[] | undefined): string[] {
  const comment = xmlDocText(tagComment(tag));
  if (Node.isJSDocParameterTag(tag)) {
    const name = csharpLocalName(tag.getName());
    return params === undefined || params.includes(name)
      ? [xmlParam(name, comment)]
      : [];
  }
  const format = tagFormats.get(tag.getTagName());
  if (format === undefined) {
    return fail(tag, 'Unsupported JSDoc tag');
  }
  return [format(tag, comment)];
}

/**
 * Emits the XML documentation comment of a public declaration from its JSDoc
 */
export function docs(
  ctx: Context,
  node: JSDocableNode & Node,
  params?: string[],
  isPublic = true,
) {
  if (!isPublic) {
    return;
  }
  const jsDocs = node.getJsDocs();
  if (jsDocs.length == 0) {
    return;
  }
  const doc = jsDocs[jsDocs.length - 1];
  const description = doc.getDescription().trim();
  const tags = doc.getTags().flatMap((tag) => docTag(tag, params));
  ctx.emitLines(
    xmlDoc(description.length ? description.split('\n') : [], tags),
  );
}
