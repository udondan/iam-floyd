import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  emitGo,
  emitGoFromModels,
  goModulePath,
} from '../../../lib/generator/emit/go';
import { changes, reset, virtualDirs, written } from './fs-mock';
import { duplicateMethod, duplicateParameters, serviceModel } from './model';

vi.mock('fs', async (importOriginal) =>
  (await import('./fs-mock')).mockFs(await importOriginal()),
);

describe('emitGo', () => {
  const code = emitGo(serviceModel());

  it('writes the header, the imports, the struct, the access levels and the constructor', () => {
    expect(goModulePath).toBe('udondan.github.io/iam-floyd/go/iamfloyd');
    expect(code).toContain(
      `// Code generated from lib/generated/model/thing.json by bin/transpile.ts. DO NOT EDIT.

package statement

import (
\t"sync"

\t"udondan.github.io/iam-floyd/go/iamfloyd"
\t"udondan.github.io/iam-floyd/go/iamfloyd/internal/js"
)

// Thing is the statement provider for service [Amazon Thing].
//
// https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html
type Thing struct {
\tiamfloyd.PolicyStatement[*Thing]
}

var accessLevelsThing = sync.OnceValue(func() *js.Record[[]string] {
\tlevels := js.NewRecord[[]string]()
\tlevels.Set("Read", []string{
\t\t"GetThing",
\t})`,
    );
    expect(code).toContain(
      `// NewThing returns a new statement provider for service [Amazon Thing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html).
//
// sid: [SID](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html) of the statement, or nil
func NewThing(sid *string) *Thing {
\tthis := &Thing{}
\tiamfloyd.InitPolicyStatement(&this.PolicyStatement, this, sid)
\tthis.ServicePrefix = "thing"
\tthis.AccessLevelList = accessLevelsThing()
\treturn this
}`,
    );
  });

  it('writes the actions', () => {
    expect(code).toContain(`// Grants permission to get a thing
//
// Access Level: Read
//
// Possible conditions:
//
// - .IfAwsRequestTag()
//
// Dependent actions:
//
// - iam:PassRole
//
// https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html
func (this *Thing) ToGetThing() *Thing {
\treturn this.To(iamfloyd.String("GetThing"))
}`);
    expect(code).toContain(`// Grants permission to list things
//
// Access Level: List
func (this *Thing) ToListThings() *Thing {`);
    expect(code).toContain(`// Grants permission to delete a thing
//
// Access Level: Write
func (this *Thing) ToDeleteThing() *Thing {`);
  });

  it('writes the resources', () => {
    expect(code).toContain(`// Adds a resource of type thing to the statement
//
// https://docs.aws.amazon.com/thing/latest/things.html
//
// Possible conditions:
//
// - .IfAwsResourceTag()
//
// Parameters:
//
// - thingId: Identifier for the thingId.
// - partition: Partition of the AWS account [aws, aws-cn, aws-us-gov]; nil for the default \`aws\`.
// - region: Region of the resource; nil for the default \`*\`.
// - account: Account of the resource; nil for the default \`*\`.
func (this *Thing) OnThing(thingId *string, partition *string, region *string, account *string) *Thing {
\treturn this.On(js.Ptr("arn:" + js.Or(partition, this.DefaultPartition) + ":thing:" + js.Or(region, this.DefaultRegion) + ":" + js.Or(account, this.DefaultAccount) + ":thing/" + *thingId))
}`);
    // a placeholder without parameter stays in the ARN
    expect(code).toContain(`// Adds a resource of type widget to the statement
//
// Parameters:
//
// - widgetName: Identifier for the widgetName.
func (this *Thing) OnWidget(widgetName *string) *Thing {
\treturn this.On(js.Ptr(*widgetName + ":widget/\${Unknown}"))
}`);
    expect(code).toContain(`// Adds a resource of type gadget to the statement
func (this *Thing) OnGadget() *Thing {
\treturn this.On(js.Ptr("arn:aws:thing:::gadget/*"))
}`);
  });

  it('writes the conditions', () => {
    expect(code).toContain(`// Filters access by the tags in the request
//
// https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag
//
// Applies to actions:
//
// - .ToGetThing()
//
// Applies to resource types:
//
// - thing
//
// Parameters:
//
// - tagKey: The tag key to check
// - value: The value(s) to check: *string, *[]*string
// - operator: Works with [string operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String): a string or *iamfloyd.Operator; nil for the default \`StringLike\`
func (this *Thing) IfAwsRequestTag(tagKey *string, value interface{}, operator interface{}) *Thing {
\treturn this.If(js.Ptr("aws:RequestTag/" + *tagKey), value, js.Coalesce(operator, "StringLike"))
}`);
    // without description, the key is the description
    expect(code).toContain(`// Filters access by agent.\${Domain}.thing:Branch
//
// Parameters:
//
// - value: The value(s) to check: *string, *[]*string`);
    expect(code)
      .toContain(`// - value: \`true\` or \`false\`; nil for the default \`true\`
func (this *Thing) IfEnabled(value *bool) *Thing {
\treturn this.If(js.Ptr("Enabled"), js.Or(value, true), "Bool")
}`);
    expect(code).toContain(`// Filters access by thing:Flag/\${FlagKey}
//
// Parameters:
//
// - flagKey: The tag key to check
// - value: \`true\` or \`false\`; nil for the default \`true\`
func (this *Thing) IfFlag(flagKey *string, value *bool) *Thing {
\treturn this.If(js.Ptr("Flag/" + *flagKey), js.Or(value, true), "Bool")
}`);
    expect(code)
      .toContain(`// - value: The value(s) to check: *time.Time, *[]*time.Time, *string, *[]*string
// - operator: Works with [date operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Date): a string or *iamfloyd.Operator; nil for the default \`DateEquals\`
func (this *Thing) IfCreatedAt(value interface{}, operator interface{}) *Thing {
\treturn this.If(js.Ptr("CreatedAt"), js.Dates(value), js.Coalesce(operator, "DateEquals"))
}`);
    expect(code)
      .toContain(`// - value: The value(s) to check: *float64, *[]*float64
// - operator: Works with [numeric operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_Numeric): a string or *iamfloyd.Operator; nil for the default \`NumericEquals\`
func (this *Thing) IfCount(value interface{}, operator interface{}) *Thing {
\treturn this.If(js.Ptr("Count"), value, js.Coalesce(operator, "NumericEquals"))
}
`);
  });

  it('fails on duplicate methods', () => {
    expect(() => emitGo(duplicateMethod())).toThrow(
      'Duplicate method ToGetThing in Thing',
    );
  });

  it('fails on duplicate parameters', () => {
    expect(() => emitGo(duplicateParameters())).toThrow(
      'Duplicate parameters of OnGadget in Thing',
    );
  });
});

describe('emitGoFromModels', () => {
  beforeEach(reset);

  it('writes a file per service', () => {
    virtualDirs.set('lib/generated/model', [
      'rhelkb.json',
      'wam.json',
      'README.md',
    ]);
    emitGoFromModels();

    const outDir = 'go/iamfloyd/statement';
    expect(changes).toEqual([`mkdir ${outDir}`]);
    expect([...written.keys()]).toEqual([
      `${outDir}/rhelkb.go`,
      `${outDir}/wam.go`,
    ]);
    expect(written.get(`${outDir}/rhelkb.go`)).toContain(
      'func (this *Rhelkb) ToGetRhelURL() *Rhelkb {',
    );
  });
});
