import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  emitCSharp,
  emitCSharpFromModels,
} from '../../../lib/generator/emit/csharp';
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

describe('emitCSharp', () => {
  const code = emitCSharp(serviceModel(), new Set(['IfAwsRequestTag']));

  it('writes the header, the usings, the access levels and the constructors', () => {
    expect(code).toContain(
      `// Generated from lib/generated/model/thing.json by bin/transpile.ts. Do not edit.
using IAM.Floyd;
using System;
using System.Collections;
using System.Collections.Generic;

namespace IAM.Floyd.Statement;

/// <summary>
/// Statement provider for service <see href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html">Amazon Thing</see>.
/// </summary>
public class Thing : PolicyStatement<Thing>
{
    private static readonly Dictionary<string, List<string>> ACCESS_LEVELS = new Dictionary<string, List<string>>
    {
        ["Read"] = new List<string>
        {
            "GetThing",
        },`,
    );
    expect(code).toContain(`    public Thing()
        : this((string)null)
    {
    }`);
    expect(code)
      .toContain(`    /// <param name="sid"><see href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">SID</see> of the statement</param>
    public Thing(string sid)
        : base(sid)
    {
        ServicePrefix = "thing";
        AccessLevelList = ACCESS_LEVELS;
    }`);
  });

  it('writes the actions', () => {
    expect(code).toContain(`    /// <summary>
    /// Grants permission to get a thing
    /// <para>Access Level: Read</para>
    /// <para>Possible conditions:</para>
    /// <list type="bullet">
    /// <item><description><c>.IfAwsRequestTag()</c></description></item>
    /// </list>
    /// <para>Dependent actions:</para>
    /// <list type="bullet">
    /// <item><description>iam:PassRole</description></item>
    /// </list>
    /// <para><see href="https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html">https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html</see></para>
    /// </summary>
    public Thing ToGetThing()
    {
        return To("GetThing");
    }`);
    expect(code).toContain(`    /// <summary>
    /// Grants permission to list things
    /// <para>Access Level: List</para>
    /// </summary>
    public Thing ToListThings()`);
    expect(code).toContain(`    /// <summary>
    /// Grants permission to delete a thing
    /// <para>Access Level: Write</para>
    /// </summary>
    public Thing ToDeleteThing()`);
  });

  it('writes an overload per optional parameter of a resource', () => {
    expect(code).toContain(`    /// <summary>
    /// Adds a resource of type thing to the statement
    /// <para><see href="https://docs.aws.amazon.com/thing/latest/things.html">https://docs.aws.amazon.com/thing/latest/things.html</see></para>
    /// <para>Possible conditions:</para>
    /// <list type="bullet">
    /// <item><description><c>.IfAwsResourceTag()</c></description></item>
    /// </list>
    /// </summary>
    /// <param name="thingId">Identifier for the thingId.</param>
    public Thing OnThing(string thingId)
    {
        return OnThing(thingId, (string)null, (string)null, (string)null);
    }`);
    expect(code).toContain(
      '        return OnThing(thingId, partition, (string)null, (string)null);',
    );
    expect(code).toContain(
      '        return OnThing(thingId, partition, region, (string)null);',
    );
    expect(code).toContain(
      '    /// <param name="account">Account of the resource; defaults to <c>*</c>, unless using the CDK, where the default is the current Stack\'s account.</param>\n    public Thing OnThing(string thingId, string partition, string region, string account)\n    {\n        return On("arn:" + (partition ?? DefaultPartition) + ":thing:" + (region ?? DefaultRegion) + ":" + (account ?? DefaultAccount) + ":thing/" + thingId);\n    }',
    );
    expect(code).toContain(`    /// <summary>
    /// Adds a resource of type widget to the statement
    /// </summary>
    /// <param name="widgetName">Identifier for the widgetName.</param>
    public Thing OnWidget(string widgetName)
    {
        return On("" + widgetName + ":widget/\${Unknown}");
    }`);
    expect(code).toContain(`    /// <summary>
    /// Adds a resource of type gadget to the statement
    /// </summary>
    public Thing OnGadget()
    {
        return On("arn:aws:thing:::gadget/*");
    }`);
  });

  it('writes an overload per type of value and operator of a condition', () => {
    const signatures = [
      ...code.matchAll(/ {4}public (?:new )?Thing (If\w+\(.*\))/g),
    ].map((match) => match[0].trim());
    expect(signatures).toEqual([
      'public new Thing IfAwsRequestTag(string tagKey, string value)',
      'public new Thing IfAwsRequestTag(string tagKey, string value, Operator @operator)',
      'public new Thing IfAwsRequestTag(string tagKey, string value, string @operator)',
      'public new Thing IfAwsRequestTag(string tagKey, IEnumerable<string> value)',
      'public new Thing IfAwsRequestTag(string tagKey, IEnumerable<string> value, Operator @operator)',
      'public new Thing IfAwsRequestTag(string tagKey, IEnumerable<string> value, string @operator)',
      'public Thing IfAgentDomainBranch(string value)',
      'public Thing IfAgentDomainBranch(string value, Operator @operator)',
      'public Thing IfAgentDomainBranch(string value, string @operator)',
      'public Thing IfAgentDomainBranch(IEnumerable<string> value)',
      'public Thing IfAgentDomainBranch(IEnumerable<string> value, Operator @operator)',
      'public Thing IfAgentDomainBranch(IEnumerable<string> value, string @operator)',
      'public Thing IfEnabled()',
      'public Thing IfEnabled(bool? value)',
      'public Thing IfFlag(string flagKey)',
      'public Thing IfFlag(string flagKey, bool? value)',
      'public Thing IfCreatedAt(DateTime value)',
      'public Thing IfCreatedAt(DateTime value, Operator @operator)',
      'public Thing IfCreatedAt(DateTime value, string @operator)',
      'public Thing IfCreatedAt(string value)',
      'public Thing IfCreatedAt(string value, Operator @operator)',
      'public Thing IfCreatedAt(string value, string @operator)',
      'public Thing IfCreatedAt(IEnumerable value)',
      'public Thing IfCreatedAt(IEnumerable value, Operator @operator)',
      'public Thing IfCreatedAt(IEnumerable value, string @operator)',
      'public Thing IfCount(double value)',
      'public Thing IfCount(double value, Operator @operator)',
      'public Thing IfCount(double value, string @operator)',
      'public Thing IfCount(IEnumerable<double> value)',
      'public Thing IfCount(IEnumerable<double> value, Operator @operator)',
      'public Thing IfCount(IEnumerable<double> value, string @operator)',
    ]);
    expect(code).toContain(`    /// <para>Applies to actions:</para>
    /// <list type="bullet">
    /// <item><description><c>.ToGetThing()</c></description></item>
    /// </list>
    /// <para>Applies to resource types:</para>
    /// <list type="bullet">
    /// <item><description>thing</description></item>
    /// </list>
    /// </summary>
    /// <param name="tagKey">The tag key to check</param>
    /// <param name="value">The value(s) to check</param>
    public new Thing IfAwsRequestTag(string tagKey, string value)
    {
        return If("aws:RequestTag/" + tagKey, (object)value, (object)"StringLike");
    }`);
    expect(code).toContain(
      '        return If("aws:RequestTag/" + tagKey, (object)new List<string>(value), @operator != null ? (object)@operator : "StringLike");',
    );
    expect(code).toContain(`    /// <summary>
    /// Filters access by whether the thing is enabled
    /// </summary>
    public Thing IfEnabled()
    {
        return If("Enabled", (object)true, (object)"Bool");
    }`);
    expect(code)
      .toContain(`    /// <param name="value"><c>true</c> or <c>false</c>. <b>Default:</b> <c>true</c></param>
    public Thing IfEnabled(bool? value)
    {
        return If("Enabled", (object)(value ?? true), (object)"Bool");
    }`);
    expect(code)
      .toContain(`    /// <param name="flagKey">The tag key to check</param>
    public Thing IfFlag(string flagKey)
    {
        return If("Flag/" + flagKey, (object)true, (object)"Bool");
    }`);
    expect(code).toContain(
      '        return If("CreatedAt", (object)DateToString(value), (object)"DateEquals");',
    );
    expect(code).toContain(
      '        return If("CreatedAt", (object)DateStrings(value), @operator != null ? (object)@operator : "DateEquals");',
    );
    expect(code).toContain(
      '        return If("Count", (object)new List<double>(value), (object)"NumericEquals");',
    );
    expect(code)
      .toContain(`    private static List<object> DateStrings(IEnumerable values)
    {
        var result = new List<object>();
        foreach (var value in values)
        {
            result.Add(DateToString(value));
        }
        return result;
    }
}
`);
  });

  it('hides no methods by default', () => {
    expect(
      emitCSharp(serviceModel({ conditions: [conditions.requestTag] })),
    ).toContain(
      '    public Thing IfAwsRequestTag(string tagKey, string value)',
    );
  });

  it('uses System.Collections for numbers without dates', () => {
    expect(emitCSharp(serviceModel({ conditions: [conditions.count] })))
      .toContain(`using IAM.Floyd;
using System.Collections;
using System.Collections.Generic;

namespace`);
  });

  it('uses neither System nor System.Collections without dates and numbers', () => {
    const plain = emitCSharp(
      serviceModel({ conditions: [conditions.enabled] }),
    );
    expect(plain).toContain(`using IAM.Floyd;
using System.Collections.Generic;

namespace`);
    expect(plain).not.toContain('DateStrings');
  });

  it('fails on an unknown type of value', () => {
    expect(() => emitCSharp(unknownValueType())).toThrow(
      'Unexpected condition value type: bigint',
    );
  });

  it('fails on several types of value without dates', () => {
    expect(() =>
      emitCSharp(
        serviceModel({
          conditions: [
            { ...conditions.count, valueTypes: ['number', 'string'] },
          ],
        }),
      ),
    ).toThrow('Unexpected condition value types of thing:Count');
  });

  it('fails on duplicate methods', () => {
    expect(() => emitCSharp(duplicateMethod())).toThrow(
      'Duplicate method ToGetThing() in Thing',
    );
  });

  it('fails on duplicate parameters', () => {
    expect(() => emitCSharp(duplicateParameters())).toThrow(
      'Duplicate parameters of OnGadget in Thing',
    );
  });
});

describe('emitCSharpFromModels', () => {
  beforeEach(reset);

  it('writes a class per service, which hides the inherited methods', () => {
    virtualDirs.set('lib/generated/model', [
      'rhelkb.json',
      'wam.json',
      'README.md',
    ]);
    emitCSharpFromModels(new Set(['ToGetRhelURL']));

    const outDir = 'dotnet/src/IAM.Floyd/Statement';
    expect(changes).toEqual([`mkdir ${outDir}`]);
    expect([...written.keys()]).toEqual([
      `${outDir}/Rhelkb.cs`,
      `${outDir}/Wam.cs`,
    ]);
    expect(written.get(`${outDir}/Rhelkb.cs`)).toContain(
      '    public new Rhelkb ToGetRhelURL()',
    );
  });
});
