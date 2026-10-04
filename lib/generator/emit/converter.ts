import * as fs from 'fs';

import { ServiceModel } from '../model';

const modelDir = 'lib/generated/model';
const outFile = 'docs/source/_static/policy-converter/services.json';

/**
 * Writes the index of the policy converter: the service prefixes with their classes and the
 * names of their actions, e.g. `{ "s3": { "S3": ["AbortMultipartUpload", ...] } }`. The method of
 * an action is `to` plus the name with the first letter in upper case.
 *
 * When several classes have the same prefix, the class named after the prefix comes first, e.g.
 * `Ses` before `SesV2`.
 */
export function emitConverterIndex(): void {
  const models = fs
    .readdirSync(modelDir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map(
      (file) =>
        JSON.parse(
          fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
        ) as ServiceModel,
    );

  const index: Record<string, Record<string, string[]>> = {};
  const main = (model: ServiceModel) =>
    model.className.toLowerCase() ===
    model.servicePrefix.replace(/-/g, '').toLowerCase()
      ? 0
      : 1;
  models.sort(
    (a, b) =>
      (a.servicePrefix < b.servicePrefix ? -1 : 0) ||
      (a.servicePrefix > b.servicePrefix ? 1 : 0) ||
      main(a) - main(b) ||
      (a.className < b.className ? -1 : 1),
  );
  for (const model of models) {
    const actions = model.actions.map((action) => {
      const methodName = `to${action.name.charAt(0).toUpperCase()}${action.name.slice(1)}`;
      if (action.methodName !== methodName) {
        throw new Error(
          `${model.className}: method ${action.methodName} of action ${action.name} is not ${methodName}`,
        );
      }
      return action.name;
    });
    index[model.servicePrefix] ??= {};
    index[model.servicePrefix][model.className] = actions;
  }

  fs.mkdirSync(outFile.replace(/\/[^/]+$/, ''), { recursive: true });
  fs.writeFileSync(outFile, `${JSON.stringify(index, null, 2)}\n`);
}
