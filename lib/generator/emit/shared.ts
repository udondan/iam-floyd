import * as fs from 'fs';

import {
  ActionModel,
  ArnPlaceholderKind,
  ConditionModel,
  ResourceModel,
  ServiceModel,
} from '../model';

/**
 * The code shared by the emitters of the native packages
 */

export const modelDir = 'lib/generated/model';

/**
 * The comment at the top of a generated file
 */
export function generatedHeader(comment: string, source: string): string {
  return `${comment} Generated from ${source} by bin/transpile.ts. Do not edit.`;
}

/**
 * All service models, sorted by file name
 */
export function readModels(): ServiceModel[] {
  return fs
    .readdirSync(modelDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map(
      (file) =>
        JSON.parse(
          fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
        ) as ServiceModel,
    );
}

/**
 * Writes lines of code, indented by `unit` per level
 */
export class Writer {
  private readonly lines: string[] = [];
  private indentation = '';

  public constructor(private readonly unit: string) {}

  public line(text = '') {
    this.lines.push(text.length ? this.indentation + text : '');
  }

  public indented(fn: () => void) {
    const previous = this.indentation;
    this.indentation += this.unit;
    fn();
    this.indentation = previous;
  }

  /**
   * A block with the braces on lines of their own
   */
  public block(header: string, fn: () => void) {
    this.line(header);
    this.line('{');
    this.indented(fn);
    this.line('}');
  }

  public toString(): string {
    return `${this.lines.join('\n')}\n`;
  }
}

/**
 * Throws if the class has a method with the same signature, or the method has duplicate
 * parameters
 */
export function assertUniqueMethod(
  signatures: Set<string>,
  signature: string,
  parameterNames: string[],
  methodName: string,
  className: string,
) {
  if (signatures.has(signature)) {
    throw new Error(`Duplicate method ${signature} in ${className}`);
  }
  signatures.add(signature);
  if (new Set(parameterNames).size != parameterNames.length) {
    throw new Error(`Duplicate parameters of ${methodName} in ${className}`);
  }
}

/**
 * The docs of the placeholders whose value has a default
 */
export const placeholderDefaultDocs: Record<
  Exclude<ArnPlaceholderKind, 'required'>,
  string
> = {
  partition:
    "Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack's partition.",
  region:
    "Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's region.",
  account:
    "Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack's account.",
};

/**
 * Whether a URL of the docs links to a page, not only to the start page
 */
function isDocsUrl(url: string): boolean {
  return url.length > 0 && url != 'https://docs.aws.amazon.com/';
}

/**
 * Appends a paragraph to the docs
 */
export function addParagraph(docs: string[], ...lines: string[]) {
  if (docs.length) {
    docs.push('');
  }
  docs.push(...lines);
}

/**
 * A list of the docs with a title
 */
function docList(title: string, items: string[]): string[] {
  return [title, '', ...items.map((item) => `- ${item}`)];
}

/**
 * The docs of an action. `docReference` is the reference of a method in the language.
 */
export function actionDocs(
  action: ActionModel,
  docReference: (methodName: string) => string,
): string[] {
  const docs = [action.description, '', `Access Level: ${action.accessLevel}`];
  if (action.conditionMethods) {
    docs.push(
      '',
      ...docList(
        'Possible conditions:',
        action.conditionMethods.map(docReference),
      ),
    );
  }
  if (action.dependentActions) {
    docs.push('', ...docList('Dependent actions:', action.dependentActions));
  }
  if (isDocsUrl(action.url)) {
    docs.push('', action.url);
  }
  return docs;
}

/**
 * The docs of a resource type, without the parameters
 */
export function resourceDocs(
  resource: ResourceModel,
  docReference: (methodName: string) => string,
): string[] {
  const docs = [`Adds a resource of type ${resource.name} to the statement`];
  if (isDocsUrl(resource.url)) {
    docs.push('', resource.url);
  }
  if (resource.conditionMethods.length) {
    docs.push(
      '',
      ...docList(
        'Possible conditions:',
        resource.conditionMethods.map(docReference),
      ),
    );
  }
  return docs;
}

/**
 * The docs of a condition, without the parameters
 */
export function conditionDocs(
  condition: ConditionModel,
  docReference: (methodName: string) => string,
): string[] {
  const docs: string[] = [];
  for (const paragraph of [condition.description, condition.url]) {
    if (paragraph.length) {
      addParagraph(docs, paragraph);
    }
  }
  if (condition.relatedActionMethods.length) {
    addParagraph(
      docs,
      ...docList(
        'Applies to actions:',
        condition.relatedActionMethods.map(docReference),
      ),
    );
  }
  if (condition.relatedResourceTypes.length) {
    addParagraph(
      docs,
      ...docList('Applies to resource types:', condition.relatedResourceTypes),
    );
  }
  return docs;
}

/**
 * Splits an ARN into literal text and the expressions of the placeholders. Placeholders without
 * expression stay literal text.
 */
export function arnParts(
  arn: string,
  expressions: Map<string, string>,
): { literal: string; expression?: string }[] {
  const parts: { literal: string; expression?: string }[] = [];
  let last = 0;
  for (const match of arn.matchAll(/\$\{([^}]+)\}/g)) {
    const expression = expressions.get(match[1]);
    if (expression === undefined) {
      continue;
    }
    parts.push({ literal: arn.slice(last, match.index), expression });
    last = match.index + match[0].length;
  }
  parts.push({ literal: arn.slice(last) });
  return parts;
}
