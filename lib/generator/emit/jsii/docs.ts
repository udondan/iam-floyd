import {
  ClassDeclaration,
  EnumDeclaration,
  EnumMember,
  JSDoc,
  Node,
} from 'ts-morph';

import { tagComment } from '../../transpile';
import { Docs } from './types';

export const warnings = new Set<string>();

export function warn(message: string) {
  if (!warnings.has(message)) {
    warnings.add(message);
    console.warn(`[jsii] ${message}`);
  }
}

/**
 * Splits a doc comment the way jsii does: the first sentence becomes the summary, the rest
 * the remarks.
 */
export function splitDocs(text: string | undefined): Docs {
  const docs: Docs = {};
  const trimmed = (text ?? '').trim();
  if (!trimmed.length) return docs;
  const match = /^([\s\S]*?[.?!])(\s+)([\s\S]*)$/.exec(trimmed);
  const firstParagraph = trimmed.split(/\n\s*\n/)[0];
  if (match && match[1].length <= firstParagraph.length) {
    docs.summary = match[1].replace(/\s+/g, ' ');
    // never empty: the text is trimmed, so something follows the whitespace
    docs.remarks = match[3];
  } else {
    docs.summary = firstParagraph.replace(/\s+/g, ' ');
    const rest = trimmed.slice(firstParagraph.length).trim();
    if (rest.length) docs.remarks = rest;
  }
  return docs;
}

export function withStability(docs: Docs): Docs {
  return { ...docs, stability: 'stable' };
}

/**
 * The remarks, unless they are empty
 */
export function optionalRemarks(remarks: string): Docs {
  const trimmed = remarks.trim();
  return trimmed.length ? { remarks: trimmed } : {};
}

/**
 * The description of the last doc comment of a declaration
 */
export function jsDocText(
  node: ClassDeclaration | EnumDeclaration | EnumMember,
): string | undefined {
  const jsDocs = node.getJsDocs();
  if (!jsDocs.length) return undefined;
  return jsDocs[jsDocs.length - 1].getDescription();
}

/**
 * The tags of a doc comment and the field of the docs they set
 */
const docTags = new Map<string, keyof Docs>([
  ['returns', 'returns'],
  ['return', 'returns'],
  ['default', 'default'],
  ['deprecated', 'deprecated'],
  ['see', 'see'],
  ['example', 'example'],
]);

/**
 * The docs of the last doc comment
 */
export function jsDocs(comments: JSDoc[]): Docs {
  if (!comments.length) return {};
  const jsDoc = comments[comments.length - 1];
  const docs = splitDocs(jsDoc.getDescription());
  for (const tag of jsDoc.getTags()) {
    const field = docTags.get(tag.getTagName());
    if (field) {
      docs[field] = tagComment(tag);
    }
  }
  return docs;
}

/**
 * The docs of a parameter, from its `@param` tag
 */
export function paramDoc(comments: JSDoc[], name: string): string | undefined {
  const tag = comments
    .flatMap((jsDoc) => jsDoc.getTags())
    .find((tag) => Node.isJSDocParameterTag(tag) && tag.getName() == name);
  return tag
    ? (tag.getCommentText() ?? '').replace(/^\s*-\s*/, '').trim()
    : undefined;
}
