import { beforeEach, describe, expect, it, vi } from 'vitest';

import { emitJava, emitJavaFromModels } from '../../../lib/generator/emit/java';
import { changes, reset, virtualDirs, written } from './fs-mock';
import {
  conditions,
  duplicateMethod,
  duplicateParameters,
  serviceModel,
  unknownValueType,
} from './model';

vi.mock('fs', async (importOriginal) =>
  (await import('./fs-mock')).mockFs(await importOriginal()),
);

describe('emitJava', () => {
  const code = emitJava(serviceModel());

  it('writes the header, the imports, the access levels and the constructors', () => {
    expect(code).toContain(
      `// Generated from lib/generated/model/thing.json by bin/transpile.ts. Do not edit.
package com.udondan.iamFloyd.statement;

import com.udondan.iamFloyd.Operator;
import com.udondan.iamFloyd.PolicyStatement;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
`,
    );
    expect(code).toContain(`public class Thing extends PolicyStatement<Thing> {
  private static final Map<String, List<String>> ACCESS_LEVEL_LIST = new LinkedHashMap<>();

  static {
    ACCESS_LEVEL_LIST.put("Read", Arrays.asList(
      "GetThing"));`);
    expect(code).toContain(`  public Thing() {
    this((String) null);
  }`);
    expect(code)
      .toContain(`   * @param sid <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">SID</a> of the statement
   */
  public Thing(String sid) {
    super(sid);
    this.servicePrefix = "thing";
    this.accessLevelList = ACCESS_LEVEL_LIST;
  }`);
  });

  it('writes the actions', () => {
    expect(code).toContain(`  /**
   * Grants permission to get a thing
   *
   * <p>Access Level: Read
   *
   * <p>Possible conditions:
   *
   * <ul>
   * <li><code>.ifAwsRequestTag()</code></li>
   * </ul>
   *
   * <p>Dependent actions:
   *
   * <ul>
   * <li>iam:PassRole</li>
   * </ul>
   *
   * <p><a href="https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html">https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html</a>
   */
  public Thing toGetThing() {
    return to("GetThing");
  }`);
    expect(code).toContain(`  /**
   * Grants permission to list things
   *
   * <p>Access Level: List
   */
  public Thing toListThings() {`);
    expect(code).toContain(`  /**
   * Grants permission to delete a thing
   *
   * <p>Access Level: Write
   */
  public Thing toDeleteThing() {`);
  });

  it('writes an overload per optional parameter of a resource', () => {
    expect(code)
      .toContain(`   * <p><a href="https://docs.aws.amazon.com/thing/latest/things.html">https://docs.aws.amazon.com/thing/latest/things.html</a>
   *
   * <p>Possible conditions:
   *
   * <ul>
   * <li><code>.ifAwsResourceTag()</code></li>
   * </ul>
   *
   * @param thingId Identifier for the thingId.
   */
  public Thing onThing(String thingId) {
    return onThing(thingId, null, null, null);
  }`);
    expect(code)
      .toContain(`  public Thing onThing(String thingId, String partition) {
    return onThing(thingId, partition, null, null);
  }`);
    expect(code)
      .toContain(`  public Thing onThing(String thingId, String partition, String region) {
    return onThing(thingId, partition, region, null);
  }`);
    expect(code).toContain(
      '   * @param account Account of the resource; defaults to <code>*</code>, unless using the CDK, where the default is the current Stack\'s account.\n   */\n  public Thing onThing(String thingId, String partition, String region, String account) {\n    return on("arn:" + (partition != null ? partition : this.defaultPartition) + ":thing:" + (region != null ? region : this.defaultRegion) + ":" + (account != null ? account : this.defaultAccount) + ":thing/" + thingId);\n  }',
    );
    // the expression starts with a string, a placeholder without parameter stays in the ARN
    expect(code).toContain(`  /**
   * Adds a resource of type widget to the statement
   *
   * @param widgetName Identifier for the widgetName.
   */
  public Thing onWidget(String widgetName) {
    return on("" + widgetName + ":widget/\${Unknown}");
  }`);
    expect(code).toContain(`  /**
   * Adds a resource of type gadget to the statement
   */
  public Thing onGadget() {
    return on("arn:aws:thing:::gadget/*");
  }`);
  });

  it('writes an overload per type of value and operator of a condition', () => {
    expect(code).toContain(`   * <p>Applies to actions:
   *
   * <ul>
   * <li><code>.toGetThing()</code></li>
   * </ul>
   *
   * <p>Applies to resource types:
   *
   * <ul>
   * <li>thing</li>
   * </ul>
   *
   * @param tagKey The tag key to check
   * @param value The value(s) to check
   */
  public Thing ifAwsRequestTag(String tagKey, String value) {
    return doIf("aws:RequestTag/" + tagKey, (Object) value, (Object) "StringLike");
  }`);
    const signatures = [
      ...code.matchAll(/ {2}public Thing (if\w+\(.*\))/g),
    ].map((match) => match[1]);
    expect(signatures).toEqual([
      'ifAwsRequestTag(String tagKey, String value)',
      'ifAwsRequestTag(String tagKey, String value, Operator operator)',
      'ifAwsRequestTag(String tagKey, String value, String operator)',
      'ifAwsRequestTag(String tagKey, List<String> value)',
      'ifAwsRequestTag(String tagKey, List<String> value, Operator operator)',
      'ifAwsRequestTag(String tagKey, List<String> value, String operator)',
      'ifAgentDomainBranch(String value)',
      'ifAgentDomainBranch(String value, Operator operator)',
      'ifAgentDomainBranch(String value, String operator)',
      'ifAgentDomainBranch(List<String> value)',
      'ifAgentDomainBranch(List<String> value, Operator operator)',
      'ifAgentDomainBranch(List<String> value, String operator)',
      'ifEnabled()',
      'ifEnabled(Boolean value)',
      'ifFlag(String flagKey)',
      'ifFlag(String flagKey, Boolean value)',
      'ifCreatedAt(Instant value)',
      'ifCreatedAt(Instant value, Operator operator)',
      'ifCreatedAt(Instant value, String operator)',
      'ifCreatedAt(String value)',
      'ifCreatedAt(String value, Operator operator)',
      'ifCreatedAt(String value, String operator)',
      'ifCreatedAt(List<?> value)',
      'ifCreatedAt(List<?> value, Operator operator)',
      'ifCreatedAt(List<?> value, String operator)',
      'ifCount(Number value)',
      'ifCount(Number value, Operator operator)',
      'ifCount(Number value, String operator)',
      'ifCount(List<? extends Number> value)',
      'ifCount(List<? extends Number> value, Operator operator)',
      'ifCount(List<? extends Number> value, String operator)',
    ]);
    expect(code)
      .toContain(`  public Thing ifAwsRequestTag(String tagKey, List<String> value, String operator) {
    return doIf("aws:RequestTag/" + tagKey, (Object) value, operator != null ? (Object) operator : "StringLike");
  }`);
    expect(code).toContain(`  /**
   * @param value The value(s) to check
   */
  public Thing ifAgentDomainBranch(String value) {`);
    expect(code).toContain(`  /**
   * Filters access by whether the thing is enabled
   */
  public Thing ifEnabled() {
    return doIf("Enabled", (Object) true, (Object) "Bool");
  }`);
    expect(code)
      .toContain(`   * @param value <code>true</code> or <code>false</code>. <b>Default:</b> <code>true</code>
   */
  public Thing ifEnabled(Boolean value) {
    return doIf("Enabled", (Object) (value != null ? value : true), (Object) "Bool");
  }`);
    expect(code).toContain(
      '    return doIf("Flag/" + flagKey, (Object) true, (Object) "Bool");',
    );
    expect(code).toContain(
      '    return doIf("CreatedAt", (Object) dateToString(value), (Object) "DateEquals");',
    );
    expect(code).toContain(
      '    return doIf("CreatedAt", (Object) dateStrings(value), operator != null ? (Object) operator : "DateEquals");',
    );
    expect(code)
      .toContain(`  private static List<Object> dateStrings(List<?> values) {
    List<Object> result = new ArrayList<>();
    for (Object value : values) {
      result.add(dateToString(value));
    }
    return result;
  }
}
`);
  });

  it('imports neither dates nor operators without conditions that need them', () => {
    const plain = emitJava(serviceModel({ conditions: [conditions.enabled] }));
    expect(plain).toContain(`package com.udondan.iamFloyd.statement;

import com.udondan.iamFloyd.PolicyStatement;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
`);
    expect(plain).not.toContain('dateStrings');
  });

  it('writes the actions of an access level as a list', () => {
    expect(
      emitJava(
        serviceModel({
          accessLevelList: { Write: ['DeleteThing', 'PutThing'] },
        }),
      ),
    ).toContain(`  static {
    ACCESS_LEVEL_LIST.put("Write", Arrays.asList(
      "DeleteThing",
      "PutThing"));
  }`);
  });

  it('fails on an unknown type of value', () => {
    expect(() => emitJava(unknownValueType())).toThrow(
      'Unexpected condition value type: bigint',
    );
  });

  it('fails on several types of value without dates', () => {
    expect(() =>
      emitJava(
        serviceModel({
          conditions: [
            { ...conditions.count, valueTypes: ['number', 'string'] },
          ],
        }),
      ),
    ).toThrow('Unexpected condition value types of thing:Count');
  });

  it('fails on duplicate methods', () => {
    expect(() => emitJava(duplicateMethod())).toThrow(
      'Duplicate method toGetThing() in Thing',
    );
  });

  it('fails on duplicate parameters', () => {
    expect(() => emitJava(duplicateParameters())).toThrow(
      'Duplicate parameters of onGadget in Thing',
    );
  });
});

describe('emitJavaFromModels', () => {
  beforeEach(reset);

  it('writes a class per service', () => {
    virtualDirs.set('lib/generated/model', [
      'rhelkb.json',
      'wam.json',
      'README.md',
    ]);
    emitJavaFromModels();

    const outDir = 'java/src/main/java/com/udondan/iamFloyd/statement';
    expect(changes).toEqual([`mkdir ${outDir}`]);
    expect([...written.keys()]).toEqual([
      `${outDir}/Rhelkb.java`,
      `${outDir}/Wam.java`,
    ]);
    expect(written.get(`${outDir}/Rhelkb.java`)).toContain(
      'public class Rhelkb extends PolicyStatement<Rhelkb> {',
    );
  });
});
