import * as colors from 'colors/safe';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  MockInstance,
  vi,
} from 'vitest';

import type { Condition } from '../../lib/generator/condition';
import {
  arnFixer,
  conditionFixer,
  conditionKeyFixer,
  fixes,
  serviceFixer,
} from '../../lib/generator/fixes';

let write: MockInstance<typeof process.stdout.write>;
let warn: MockInstance<typeof console.warn>;

beforeEach(() => {
  write = vi.spyOn(process.stdout, 'write').mockReturnValue(true);
  warn = vi.spyOn(console, 'warn').mockReturnValue();
});

afterEach(() => {
  vi.restoreAllMocks();
});

/**
 * Adds a fix for a service of the test, which is removed after the callback
 */
function withFix<T>(
  service: string,
  fix: (typeof fixes)[string],
  fn: () => T,
): T {
  fixes[service] = fix;
  try {
    return fn();
  } finally {
    delete fixes[service];
  }
}

function condition(key: string, type: string): Condition {
  return {
    key,
    description: 'description',
    url: 'https://example.com',
    type,
    isGlobal: false,
  };
}

const output = () =>
  write.mock.calls.map(([text]) => colors.strip(String(text)));

describe('fixes', () => {
  it('ignores services which are EOL', () => {
    expect(fixes['awsiot1-click']).toEqual({ ignore: true });
  });

  it('renames services', () => {
    expect(fixes['pinpoint-email']?.name).toBe('ses-pinpoint');
  });

  it('has only valid ARNs', () => {
    for (const [service, fix] of Object.entries(fixes)) {
      for (const [resource, resourceFix] of Object.entries(
        fix?.resourceTypes ?? {},
      )) {
        if (typeof resourceFix.arn !== 'undefined') {
          expect(arnFixer(service, resource, 'anything')).toBe(resourceFix.arn);
        }
      }
    }
    expect(warn).not.toHaveBeenCalled();
  });

  it('has a reference interface or false for the resource types with cdkRef', () => {
    expect(fixes.secretsmanager?.resourceTypes?.Secret?.cdkRef).toEqual({
      interface: 'ISecretRef',
      arn: 'secretId',
    });
    expect(
      fixes.route53resolver?.resourceTypes?.['resolver-config']?.cdkRef,
    ).toBe(false);
    expect(fixes.stepfunctions?.cdkModule).toBe('aws_stepfunctions');
  });
});

describe('conditionFixer', () => {
  it.each([
    ['ArrayOfString', 'string'],
    ['ArrayOfARN', 'ARN'],
    ['ArrayOfNumeric', 'numeric'],
    ['ArrayOfBool', 'boolean'],
    ['Bool', 'boolean'],
    ['Long', 'numeric'],
  ])('normalizes the type %s to %s (L1)', (type, expected) => {
    const fixed = conditionFixer('ec2', condition('ec2:Foo', type));
    expect(fixed.type).toBe(expected);
    expect(output()).toEqual(['[L1 fix for condition Foo] ']);
  });

  it('keeps a valid type and reports nothing', () => {
    const original = condition('ec2:Foo', 'String');
    expect(conditionFixer('ec2', { ...original })).toEqual(original);
    expect(write).not.toHaveBeenCalled();
  });

  it('rewrites the key (L2)', () => {
    const fixed = conditionFixer(
      'secretsmanager',
      condition('secretsmanager:RequestTag/tag-key', 'ArrayOfString'),
    );
    expect(fixed.key).toBe('secretsmanager:RequestTag/${TagKey}');
    expect(fixed.type).toBe('string');
    expect(output()).toEqual(['[L2 fix for condition RequestTag/${TagKey}] ']);
  });

  it('overrides the operator type (L2)', () => {
    const fixed = conditionFixer(
      'ec2',
      condition('ec2:SnapshotTime', 'String'),
    );
    expect(fixed.type).toBe('date');
    expect(fixed.typeOverride).toBeUndefined();
    expect(output()).toEqual(['[L2 fix for condition SnapshotTime] ']);
  });

  it('sets the type override (L2)', () => {
    const fixed = withFix(
      'test-service',
      { conditions: { Foo: { operator: { override: ['Date'] } } } },
      () =>
        conditionFixer('test-service', condition('test-service:Foo', 'Date')),
    );
    expect(fixed.type).toBe('Date');
    expect(fixed.typeOverride).toEqual(['Date']);
    expect(output()).toEqual(['[L2 fix for condition Foo] ']);
  });
});

describe('conditionKeyFixer', () => {
  it('rewrites the key of the fixes', () => {
    expect(conditionKeyFixer('ssm', 'ssm:resourceTag/tag-key')).toBe(
      'ssm:resourceTag/${TagKey}',
    );
  });

  it('keeps other keys', () => {
    expect(conditionKeyFixer('ssm', 'aws:RequestTag/${TagKey}')).toBe(
      'aws:RequestTag/${TagKey}',
    );
    expect(conditionKeyFixer('unknown', 'unknown:Foo')).toBe('unknown:Foo');
  });

  it('keeps keys of a condition fix without key', () => {
    expect(conditionKeyFixer('ec2', 'ec2:SnapshotTime')).toBe(
      'ec2:SnapshotTime',
    );
  });
});

describe('arnFixer', () => {
  it('keeps a valid ARN and reports nothing', () => {
    const arn =
      'arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}';
    expect(arnFixer('ec2', 'instance', arn)).toBe(arn);
    expect(write).not.toHaveBeenCalled();
    expect(warn).not.toHaveBeenCalled();
  });

  it('uppercases the first letter of the placeholders (L1)', () => {
    expect(
      arnFixer(
        'ec2',
        'instance',
        'arn:${partition}:ec2:${region}:${account}:instance/${instanceId}',
      ),
    ).toBe('arn:${Partition}:ec2:${Region}:${Account}:instance/${InstanceId}');
    expect(output()).toEqual(['[L1 fix for resource type instance] ']);
  });

  it('replaces a trailing wildcard (L2)', () => {
    expect(
      arnFixer('foo', 'bar', 'arn:${Partition}:foo:${Region}:${Account}:bar/*'),
    ).toBe('arn:${Partition}:foo:${Region}:${Account}:bar/${ResourceName}');
    expect(output()).toEqual(['[L2 fix for resource type bar] ']);
  });

  it('numbers duplicate placeholders (L2)', () => {
    expect(
      arnFixer(
        'rekognition',
        'project',
        'arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/version/${ProjectName}/${ProjectName}',
      ),
    ).toBe(
      'arn:${Partition}:rekognition:${Region}:${Account}:project/${ProjectName}/version/${ProjectName2}/${ProjectName3}',
    );
    expect(output()).toEqual(['[L2 fix for resource type project] ']);
  });

  it('replaces the ARN of the fixes (L3)', () => {
    expect(arnFixer('events', 'rule', 'arn:${Partition}:events:rule/*')).toBe(
      'arn:${Partition}:events:${Region}:${Account}:rule/${RuleName}',
    );
    expect(output()).toEqual(['[L3 fix for resource type rule] ']);
  });

  it('warns about an ARN which does not match the pattern', () => {
    expect(arnFixer('foo', 'bar', 'arn:aws:foo:::bar')).toBe(
      'arn:aws:foo:::bar',
    );
    expect(warn).toHaveBeenCalledOnce();
    expect(colors.strip(String(warn.mock.calls[0][0]))).toBe(
      '\nARN for foo:bar did not match allowed pattern, possibly error in documentation: arn:aws:foo:::bar',
    );
  });

  it('does not warn about known ARNs which do not match the pattern', () => {
    expect(
      arnFixer(
        'securityhub',
        'hub',
        'arn:${Partition}:securityhub:${Region}:${Account}:hub/default',
      ),
    ).toBe('arn:${Partition}:securityhub:${Region}:${Account}:hub/default');
    expect(warn).not.toHaveBeenCalled();
  });
});

describe('serviceFixer', () => {
  it('keeps the service without fix', () => {
    expect(serviceFixer('ec2')).toBe('ec2');
    expect(serviceFixer('unknown')).toBe('unknown');
  });

  it('rewrites the service of the fixes', () => {
    expect(
      withFix('test-service', { service: 'test-prefix' }, () =>
        serviceFixer('test-service'),
      ),
    ).toBe('test-prefix');
  });
});
