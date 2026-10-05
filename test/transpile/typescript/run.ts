/**
 * Runs the scenarios of test/transpile/scenarios.json against the TypeScript core, which is the baseline for the
 * transpiled languages.
 *
 * Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the message). For a
 * scenario with a policy of statements: the maximum size, the estimated size, the result of validate (OK or the
 * error), the policy as JSON and the policies of split as JSON array (or the error), separated by tabs.
 */
import * as fs from 'fs';

import { AccessLevelList } from '../../../lib/shared/access-level';
import { Operator } from '../../../lib/shared/operators';
import { Policy, PolicyType } from '../../../lib/shared/policy';
import { PolicyStatement } from '../../../lib/shared/policy-statement';
import * as Statement from '../../../lib/statements';

interface Scenario {
  name: string;
  /**
   * A class of `Statement`
   */
  class?: string;
  /**
   * A service of the model, for a statement with the service prefix and the access levels
   */
  service?: string;
  sid?: string;
  calls: [string, ...unknown[]][];
  /**
   * A policy of the statements
   */
  policy?: {
    type?: PolicyType;
    maximumSize?: number;
    arnSizeEstimate?: number;
  };
  statements?: Scenario[];
}

interface Model {
  servicePrefix: string;
  accessLevelList: AccessLevelList;
}

type Methods = Record<string, (...args: unknown[]) => unknown>;

type Classes = Record<string, new (sid?: string) => PolicyStatement>;

/**
 * A service class like the generated ones, built from the model
 */
class Service extends PolicyStatement {
  constructor(model: Model, sid?: string) {
    super(sid);
    this.servicePrefix = model.servicePrefix;
    this.accessLevelList = model.accessLevelList;
  }
}

/**
 * Decodes the arguments that JSON cannot express: `{"operator": [methods]}` and `{"date": "ISO 8601"}`
 */
function decode(arg: unknown): unknown {
  if (Array.isArray(arg)) {
    return arg.map((item) => decode(item));
  }
  if (typeof arg === 'object' && arg !== null) {
    const encoded = arg as { operator?: string[]; date?: string };
    if (encoded.operator !== undefined) {
      let operator = new Operator();
      for (const method of encoded.operator) {
        operator = (operator as unknown as Methods)[method]() as Operator;
      }
      return operator;
    }
    if (encoded.date !== undefined) {
      return new Date(encoded.date);
    }
  }
  return arg;
}

function build(scenario: Scenario): PolicyStatement {
  let statement: PolicyStatement;
  if (scenario.class !== undefined) {
    statement = new (Statement as unknown as Classes)[scenario.class](
      scenario.sid,
    );
  } else if (scenario.service !== undefined) {
    statement = new Service(
      JSON.parse(
        fs.readFileSync(`lib/generated/model/${scenario.service}.json`, 'utf8'),
      ) as Model,
      scenario.sid,
    );
  } else {
    statement = new PolicyStatement(scenario.sid);
  }
  for (const [method, ...args] of scenario.calls) {
    (statement as unknown as Methods)[method](
      ...args.map((arg) => decode(arg)),
    );
  }
  return statement;
}

function attempt(fn: () => string): string {
  try {
    return fn();
  } catch (err) {
    return `ERROR ${(err as Error).message}`;
  }
}

function runPolicy(scenario: Scenario): string {
  const options = scenario.policy ?? {};
  const policy = new Policy(options.type, options.maximumSize);
  if (options.arnSizeEstimate !== undefined) {
    policy.arnSizeEstimate = options.arnSizeEstimate;
  }
  for (const statement of scenario.statements ?? []) {
    policy.addStatements(build(statement));
  }
  const validate = attempt(() => {
    policy.validate();
    return 'OK';
  });
  const split = attempt(
    () =>
      `[${policy
        .split()
        .map((part) => JSON.stringify(part.toJSON()))
        .join(',')}]`,
  );
  return [
    policy.maximumSize,
    policy.estimateSize(),
    validate,
    JSON.stringify(policy.toJSON()),
    split,
  ].join('\t');
}

function run(scenario: Scenario): string {
  return attempt(() =>
    scenario.policy !== undefined
      ? runPolicy(scenario)
      : JSON.stringify(build(scenario).toJSON()),
  );
}

const scenarios = JSON.parse(
  fs.readFileSync(process.argv[2], 'utf8'),
) as Scenario[];
for (const scenario of scenarios) {
  console.log(`${scenario.name}\t${run(scenario)}`);
}
