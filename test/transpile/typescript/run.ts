/**
 * Runs the scenarios of test/transpile/scenarios.json against the TypeScript core, which is the baseline for the
 * transpiled languages.
 *
 * Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the message).
 */
import * as fs from 'fs';

import { AccessLevelList } from '../../../lib/shared/access-level';
import { Operator } from '../../../lib/shared/operators';
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

function run(scenario: Scenario): string {
  try {
    let statement: PolicyStatement;
    if (scenario.class !== undefined) {
      statement = new (Statement as unknown as Classes)[scenario.class](
        scenario.sid,
      );
    } else if (scenario.service !== undefined) {
      statement = new Service(
        JSON.parse(
          fs.readFileSync(
            `lib/generated/model/${scenario.service}.json`,
            'utf8',
          ),
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
    return JSON.stringify(statement.toJSON());
  } catch (err) {
    return `ERROR ${(err as Error).message}`;
  }
}

const scenarios = JSON.parse(
  fs.readFileSync(process.argv[2], 'utf8'),
) as Scenario[];
for (const scenario of scenarios) {
  console.log(`${scenario.name}\t${run(scenario)}`);
}
