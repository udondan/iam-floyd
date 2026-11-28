import { describe, expect, expectTypeOf, it } from 'vitest';

import type { Condition, Conditions } from '../../lib/generator/condition';
import { conditionFixer } from '../../lib/generator/fixes';

describe('Condition', () => {
  it('describes a condition key, which the fixer and the model take', () => {
    const condition: Condition = {
      key: 'aws:RequestTag/${TagKey}',
      description: 'Filters access by the tags in the request',
      url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html',
      type: 'String',
      isGlobal: true,
      relatedActions: ['CreateSecret'],
      relatedResourceTypes: ['Secret'],
    };
    const conditions: Conditions = { [condition.key]: condition };

    expectTypeOf(conditionFixer).parameter(1).toEqualTypeOf<Condition>();
    expectTypeOf<Conditions[string]>().toEqualTypeOf<Condition>();
    expectTypeOf<Condition['typeOverride']>().toEqualTypeOf<
      string[] | undefined
    >();
    expect(conditionFixer('secretsmanager', conditions[condition.key])).toBe(
      condition,
    );
  });
});
