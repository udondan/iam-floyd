import * as path from 'path';
import { Project, QuoteKind, SourceFile } from 'ts-morph';
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import {
  emitTypeScript,
  emitTypeScriptFromModels,
} from '../../../lib/generator/emit/typescript';
import { changes, reset, virtualDirs } from './fs-mock';
import { conditions, resources, serviceModel } from './model';

vi.mock('fs', async (importOriginal) =>
  (await import('./fs-mock')).mockFs(await importOriginal()),
);

function emit(
  ...args: Parameters<typeof emitTypeScript> extends [Project, ...infer Rest]
    ? Rest
    : never
): string {
  const project = new Project({ useInMemoryFileSystem: true });
  project.manipulationSettings.set({ quoteKind: QuoteKind.Single });
  return emitTypeScript(project, ...args).getFullText();
}

describe('emitTypeScript', () => {
  const code = emit(serviceModel());
  const cdk = emit(serviceModel(), { cdk: true });

  it('writes the imports, the class and the constructor', () => {
    expect(code)
      .toContain(`import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement, Operator } from '../../shared';

/**
 * Statement provider for service [Amazon Thing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html).
 *
 * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
 */
export class Thing extends PolicyStatement {
  public servicePrefix = 'thing';

  /**
   * Statement provider for service [Amazon Thing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html).
   *
   * @param sid [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement
   */
  constructor(sid?: string) {
    super(sid);
  }
`);
    expect(code).toContain(`  protected accessLevelList: AccessLevelList = {
    Read: [
      'GetThing'
    ],
    List: [
      'ListThings'
    ],
    Write: [
      'DeleteThing'
    ]
  };`);
  });

  it('writes the actions', () => {
    expect(code).toContain(`  /**
   * Grants permission to get a thing
   *
   * Access Level: Read
   *
   * Possible conditions:
   * - .ifAwsRequestTag()
   *
   * Dependent actions:
   * - iam:PassRole
   *
   * https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html
   */
  public toGetThing() {
    return this.to('GetThing');
  }`);
    expect(code).toContain(`  /**
   * Grants permission to list things
   *
   * Access Level: List
   */
  public toListThings() {`);
    expect(code).toContain(`  /**
   * Grants permission to delete a thing
   *
   * Access Level: Write
   */
  public toDeleteThing() {`);
  });

  it('writes the resources', () => {
    expect(code).toContain(`  /**
   * Adds a resource of type thing to the statement
   *
   * https://docs.aws.amazon.com/thing/latest/things.html
   *
   * @param thingId - Identifier for the thingId.
   * @param partition - Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to \`aws\`, unless using the CDK, where the default is the current Stack's partition.
   * @param region - Region of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's region.
   * @param account - Account of the resource; defaults to \`*\`, unless using the CDK, where the default is the current Stack's account.
   *
   * Possible conditions:
   * - .ifAwsResourceTag()
   */
  public onThing(thingId: string, partition?: string, region?: string, account?: string) {
    return this.on(\`arn:\${ partition ?? this.defaultPartition }:thing:\${ region ?? this.defaultRegion }:\${ account ?? this.defaultAccount }:thing/\${ thingId }\`);
  }`);
    expect(code).toContain(`  /**
   * Adds a resource of type widget to the statement
   *
   * @param widgetName - Identifier for the widgetName.
   */
  public onWidget(widgetName: string) {`);
    expect(code).toContain(`  /**
   * Adds a resource of type gadget to the statement
   *
   */
  public onGadget() {
    return this.on(\`arn:aws:thing:::gadget/*\`);
  }`);
  });

  it('writes the conditions', () => {
    expect(code).toContain(`  /**
   * Filters access by the tags in the request
   *
   * https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
   *
   * Applies to actions:
   * - .toGetThing()
   *
   * Applies to resource types:
   * - thing
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** \`StringLike\`
   */
  public ifAwsRequestTag(tagKey: string, value: string | string[], operator?: Operator | string) {
    return this.if(\`aws:RequestTag/\${ tagKey }\`, value, operator ?? 'StringLike');
  }`);
    // a $ in the key is escaped
    expect(code).toContain(`  /**
   * @param value The value(s) to check
   * @param operator Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String). **Default:** \`StringLike\`
   */
  public ifAgentDomainBranch(value: string | string[], operator?: Operator | string) {
    return this.if(\`agent.\\\${Domain}.thing:Branch\`, value, operator ?? 'StringLike');
  }`);
    expect(code).toContain(`  /**
   * Filters access by whether the thing is enabled
   *
   * @param value \`true\` or \`false\`. **Default:** \`true\`
   */
  public ifEnabled(value?: boolean) {
    return this.if(\`Enabled\`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }`);
    expect(code).toContain(`  public ifFlag(flagKey: string, value?: boolean) {
    return this.if(\`Flag/\${ flagKey }\`, (typeof value !== 'undefined' ? value : true), 'Bool');
  }`);
    expect(code)
      .toContain(`  public ifCreatedAt(value: Date | string | (Date | string)[], operator?: Operator | string) {
    if (typeof (value as Date).getMonth === "function") {
      value = (value as Date).toISOString();
    } else if (Array.isArray(value)) {
      value = value.map((item) => {
        if (typeof (item as Date).getMonth === "function") {
          item = (item as Date).toISOString();
        }
        return item;
      });
    }
    return this.if(\`CreatedAt\`, value, operator ?? 'DateEquals');
  }`);
    expect(code)
      .toContain(`  public ifCount(value: number | number[], operator?: Operator | string) {
    return this.if(\`Count\`, value, operator ?? 'NumericEquals');
  }
}
`);
  });

  it('writes the CDK variant, which takes props and constructs', () => {
    expect(cdk)
      .toContain(`import { PolicyStatement, Operator } from '../../shared';
import { aws_iam as iam, interfaces } from 'aws-cdk-lib';
`);
    expect(cdk).toContain(`  /**
   * Statement provider for service [Amazon Thing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html).
   *
   */
  constructor(props?: iam.PolicyStatementProps) {
    super(props);
  }`);
    expect(cdk)
      .toContain(`   * @param thingId - Identifier for the thingId, or a construct that implements \`interfaces.aws_thing.IThingRef\`, whose ARN is used. Then the partition, region and account are ignored.
   * @param partition - Partition`);
    expect(cdk)
      .toContain(`  public onThing(thingId: string | interfaces.aws_thing.IThingRef, partition?: string, region?: string, account?: string) {
    if (typeof thingId !== 'string') {
      return this.on(thingId.thingRef.thingArn);
    }

    return this.on(\`arn:`);
    expect(cdk)
      .toContain(`   * @param widgetName - Identifier for the widgetName, or a construct that implements \`interfaces.aws_thing.IWidgetRef\`.
   */
  public onWidget(widgetName: string | interfaces.aws_thing.IWidgetRef) {
    if (typeof widgetName !== 'string') {
      widgetName = widgetName.widgetRef.widgetId;
    }
`);
  });

  it('imports only aws_iam in the CDK variant without constructs', () => {
    expect(
      emit(serviceModel({ resources: [resources.gadget] }), { cdk: true }),
    ).toContain(`import { aws_iam as iam } from 'aws-cdk-lib';`);
  });

  it('imports no operators with only boolean conditions', () => {
    const plain = emit(serviceModel({ conditions: [conditions.enabled] }));
    expect(plain).toContain(`import { PolicyStatement } from '../../shared';`);
    expect(plain).not.toContain('aws-cdk-lib');
  });
});

describe('emitTypeScriptFromModels', () => {
  const saved = new Map<string, string>();
  const relative = (file: string) =>
    path.relative(process.cwd(), file).split(path.sep).join('/');

  beforeAll(() => {
    // nothing is written into the repository
    vi.spyOn(SourceFile.prototype, 'save').mockImplementation(async function (
      this: SourceFile,
    ) {
      saved.set(relative(this.getFilePath()), this.getFullText());
      return Promise.resolve();
    });
    vi.spyOn(Project.prototype, 'save').mockImplementation(async function (
      this: Project,
    ) {
      for (const file of this.getSourceFiles()) {
        saved.set(relative(file.getFilePath()), file.getFullText());
      }
      return Promise.resolve();
    });
  });
  afterAll(() => {
    vi.restoreAllMocks();
  });
  beforeEach(() => {
    reset();
    saved.clear();
  });

  it('writes a class per service and the index, and removes the files of removed services', async () => {
    const outDir = 'lib/generated/policy-statements';
    virtualDirs.set('lib/generated/model', [
      'wam.json',
      'rhelkb.json',
      'README.md',
    ]);
    virtualDirs.set(outDir, [
      'rhelkb.ts',
      'rhelkb.js',
      'rhelkb.d.ts',
      'removed.ts',
      'removed.js',
      'removed.d.ts',
      'README.md',
    ]);
    await emitTypeScriptFromModels();

    expect(changes).toEqual([
      `mkdir ${outDir}`,
      `unlink ${outDir}/removed.ts`,
      `unlink ${outDir}/removed.js`,
      `unlink ${outDir}/removed.d.ts`,
    ]);
    expect([...saved.keys()]).toEqual([
      `${outDir}/rhelkb.ts`,
      `${outDir}/wam.ts`,
      'lib/generated/index.ts',
    ]);
    const rhelkb = saved.get(`${outDir}/rhelkb.ts`)!;
    expect(rhelkb)
      .toContain(`import { AccessLevelList } from '../../shared/access-level';
import { PolicyStatement } from '../../shared';
`);
    expect(rhelkb).toContain(`  constructor(sid?: string) {`);
    expect(saved.get('lib/generated/index.ts')).toBe(
      `export { Rhelkb } from './policy-statements/rhelkb';
export { Wam } from './policy-statements/wam';
`,
    );
  });

  it('writes the CDK variant', async () => {
    virtualDirs.set('lib/generated/model', ['rhelkb.json']);
    virtualDirs.set('lib/generated/policy-statements', []);
    await emitTypeScriptFromModels({ cdk: true });

    expect(saved.get('lib/generated/policy-statements/rhelkb.ts')).toContain(
      `  constructor(props?: iam.PolicyStatementProps) {`,
    );
  });
});
