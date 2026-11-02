/**
 * Prints scenarios that call every method of every service class, built from lib/generated/model/.
 * Each service gets two scenarios: one with the required arguments only, and one that also passes
 * all optional arguments.
 */
import * as fs from 'fs';

import { ConditionModel, ServiceModel } from '../../lib/generator/model';

const modelDir = 'lib/generated/model';

function conditionCall(condition: ConditionModel, full: boolean): unknown[] {
  const call: unknown[] = [condition.methodName];
  if (condition.keyParam !== undefined) {
    call.push('Key');
  }
  if (condition.valueKind == 'boolean') {
    if (full) {
      call.push(false);
    }
    return call;
  }
  const types = condition.valueTypes!;
  if (types.includes('Date')) {
    call.push(
      full
        ? [{ date: '2020-02-03T04:05:06.789Z' }, '2021-01-01']
        : '2020-01-01',
    );
  } else if (types.includes('number')) {
    call.push(full ? [1, 2.5] : 42);
  } else {
    call.push(full ? ['a', 'b'] : 'v');
  }
  if (full) {
    call.push({ operator: ['forAnyValue', 'stringEquals', 'ifExists'] });
  }
  return call;
}

const scenarios = [];
for (const file of fs.readdirSync(modelDir).sort()) {
  if (!file.endsWith('.json')) {
    continue;
  }
  const model = JSON.parse(
    fs.readFileSync(`${modelDir}/${file}`, 'utf8'),
  ) as ServiceModel;
  for (const full of [false, true]) {
    const calls: unknown[][] = [];
    for (const action of model.actions) {
      calls.push([action.methodName]);
    }
    for (const resource of model.resources) {
      const required = resource.placeholders
        .filter((placeholder) => placeholder.kind == 'required')
        .map((placeholder) => placeholder.name);
      const optional = full
        ? resource.placeholders
            .filter((placeholder) => placeholder.kind != 'required')
            .map((placeholder) => `${placeholder.kind}-value`)
        : [];
      calls.push([resource.methodName, ...required, ...optional]);
    }
    for (const condition of model.conditions) {
      calls.push(conditionCall(condition, full));
    }
    scenarios.push({
      name: `${model.className}${full ? ' with all arguments' : ''}`,
      class: model.className,
      ...(full ? { sid: 'Sid' } : {}),
      calls,
    });
  }
}
console.log(JSON.stringify(scenarios));
