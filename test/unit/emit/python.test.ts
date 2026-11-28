import { beforeEach, describe, expect, it, vi } from 'vitest';

import {
  emitPython,
  emitPythonFromModels,
} from '../../../lib/generator/emit/python';
import { changes, reset, virtualDirs, virtualFiles, written } from './fs-mock';
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

describe('emitPython', () => {
  const code = emitPython(serviceModel());

  it('writes the header, the imports and the access levels', () => {
    expect(code).toContain(
      '# Generated from lib/generated/model/thing.json by bin/transpile.ts. Do not edit.\n',
    );
    expect(code).toContain(
      'from .._shared import PolicyStatement, _date_to_string\n',
    );
    expect(code).toContain(`if TYPE_CHECKING:
    import datetime as _datetime

    from typing_extensions import Self

    from .._shared import Operator
`);
    expect(code).toContain(`_ACCESS_LEVEL_LIST: dict[str, list[str]] = {
    "Read": [
        "GetThing"
    ],`);
    expect(code).toContain(`class Thing(PolicyStatement):
    """Statement provider for service [Amazon Thing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonthing.html).`);
    expect(code)
      .toContain(`    def __init__(self, sid: str | None = None) -> None:
        super().__init__(sid)
        self.service_prefix = 'thing'
        self._access_level_list = _ACCESS_LEVEL_LIST
`);
  });

  it('writes the actions', () => {
    expect(code).toContain(`    def to_get_thing(self) -> Self:
        """Grants permission to get a thing

        Access Level: Read

        Possible conditions:

        - .if_aws_request_tag()

        Dependent actions:

        - iam:PassRole

        https://docs.aws.amazon.com/thing/latest/APIReference/API_GetThing.html
        """
        return self.to('GetThing')
`);
    expect(code).toContain(`    def to_list_things(self) -> Self:
        """Grants permission to list things

        Access Level: List
        """
        return self.to('ListThings')
`);
    expect(code).toContain(`    def to_delete_thing(self) -> Self:
        """Grants permission to delete a thing

        Access Level: Write
        """`);
  });

  it('writes the resources', () => {
    expect(code).toContain(
      '    def on_thing(self, thing_id: str, partition: str | None = None, region: str | None = None, account: str | None = None) -> Self:\n        """Adds a resource of type thing to the statement\n\n        https://docs.aws.amazon.com/thing/latest/things.html\n\n        Possible conditions:\n\n        - .if_aws_resource_tag()\n\n        :param thing_id: Identifier for the thingId.\n        :param partition: Partition of the AWS account [aws, aws-cn, aws-us-gov]; defaults to `aws`, unless using the CDK, where the default is the current Stack\'s partition.\n        :param region: Region of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack\'s region.\n        :param account: Account of the resource; defaults to `*`, unless using the CDK, where the default is the current Stack\'s account.\n        """\n',
    );
    expect(code).toContain(
      "        return self.on(f'arn:{partition if partition is not None else self._default_partition}:thing:{region if region is not None else self._default_region}:{account if account is not None else self._default_account}:thing/{thing_id}')\n",
    );
    // a placeholder without parameter is literal text in the f-string
    expect(code).toContain(`    def on_widget(self, widget_name: str) -> Self:
        """Adds a resource of type widget to the statement

        :param widget_name: Identifier for the widgetName.
        """
        return self.on(f'{widget_name}:widget/\${{Unknown}}')
`);
    // with nothing to substitute a plain string, whose braces are not doubled
    expect(code).toContain(`    def on_gadget(self) -> Self:
        """Adds a resource of type gadget to the statement"""
        return self.on('arn:aws:thing:::gadget/\${Unknown}')
`);
  });

  it('writes the conditions', () => {
    expect(code).toContain(
      '    def if_aws_request_tag(self, tag_key: str, value: str | list[str], operator: Operator | str | None = None) -> Self:\n        """Filters access by the tags in the request\n\n        https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html#condition-keys-requesttag\n\n        Applies to actions:\n\n        - .to_get_thing()\n\n        Applies to resource types:\n\n        - thing\n\n        :param tag_key: The tag key to check\n        :param value: The value(s) to check\n',
    );
    expect(code).toContain(
      "        return self.if_('aws:RequestTag/' + tag_key, value, operator if operator is not None else 'StringLike')\n",
    );
    // without docs, the parameters come first
    expect(code)
      .toContain(`    def if_agent_domain_branch(self, value: str | list[str], operator: Operator | str | None = None) -> Self:
        """:param value: The value(s) to check`);
    expect(code)
      .toContain(`    def if_enabled(self, value: bool | None = None) -> Self:
        """Filters access by whether the thing is enabled

        :param value: \`true\` or \`false\`. **Default:** \`true\`
        """
        return self.if_('Enabled', value if value is not None else True, 'Bool')
`);
    expect(code).toContain(
      "        return self.if_('Flag/' + flag_key, value if value is not None else True, 'Bool')\n",
    );
    expect(code).toContain(
      '    def if_created_at(self, value: _datetime.datetime | str | list[_datetime.datetime | str], operator: Operator | str | None = None) -> Self:\n',
    );
    expect(code).toContain(
      "        return self.if_('CreatedAt', [_date_to_string(item) for item in value] if isinstance(value, list) else _date_to_string(value), operator if operator is not None else 'DateEquals')\n",
    );
    expect(code).toContain(
      '    def if_count(self, value: float | list[float], operator: Operator | str | None = None) -> Self:\n',
    );
  });

  it('maps booleans to bool', () => {
    expect(
      emitPython(
        serviceModel({
          conditions: [{ ...conditions.count, valueTypes: ['boolean'] }],
        }),
      ),
    ).toContain('def if_count(self, value: bool | list[bool], ');
  });

  it('imports neither dates nor operators without conditions that need them', () => {
    const plain = emitPython(
      serviceModel({ conditions: [conditions.enabled] }),
    );
    expect(plain).toContain('from .._shared import PolicyStatement\n');
    expect(plain).toContain(`if TYPE_CHECKING:
    from typing_extensions import Self

_ACCESS_LEVEL_LIST`);
  });

  it('fails on an unknown type of value', () => {
    expect(() => emitPython(unknownValueType())).toThrow(
      'Unexpected condition value type: bigint',
    );
  });

  it('fails on duplicate methods', () => {
    expect(() => emitPython(duplicateMethod())).toThrow(
      'Duplicate method to_get_thing in Thing',
    );
  });

  it('fails on duplicate parameters', () => {
    expect(() => emitPython(duplicateParameters())).toThrow(
      'Duplicate parameters of on_gadget in Thing',
    );
  });
});

describe('emitPythonFromModels', () => {
  beforeEach(reset);

  it('writes a module per service and the package, which imports them lazily', () => {
    // the file name of a model doesn't matter, the module is named after its `filename`
    virtualDirs.set('lib/generated/model', [
      'a.json',
      'rhelkb.json',
      'wam.json',
      'README.md',
    ]);
    virtualFiles.set(
      'lib/generated/model/a.json',
      JSON.stringify(
        serviceModel({
          filename: 'thing-with-a-very-long-name-for-testing',
          className: 'ThingWithAVeryLongNameForTestingTheWrappingOfImports',
        }),
      ),
    );
    emitPythonFromModels();

    const outDir = 'python/iam_floyd/statement';
    expect(changes).toEqual([`rm ${outDir}`, `mkdir ${outDir}`]);
    expect([...written.keys()]).toEqual([
      `${outDir}/_thing_with_a_very_long_name_for_testing.py`,
      `${outDir}/_rhelkb.py`,
      `${outDir}/_wam.py`,
      `${outDir}/__init__.py`,
    ]);
    expect(written.get(`${outDir}/_rhelkb.py`)).toContain(
      'class Rhelkb(PolicyStatement):',
    );
    const init = written.get(`${outDir}/__init__.py`)!;
    expect(init).toContain(`"""Statement providers of all services."""

# Generated from lib/generated/model by bin/transpile.ts. Do not edit.
`);
    // sorted by module; a line longer than 100 characters is wrapped
    expect(init).toContain(`if TYPE_CHECKING:
    from ._rhelkb import Rhelkb
    from ._thing_with_a_very_long_name_for_testing import (
        ThingWithAVeryLongNameForTestingTheWrappingOfImports,
    )
    from ._wam import Wam
`);
    expect(init).toContain(`_MODULES = {
    'ThingWithAVeryLongNameForTestingTheWrappingOfImports': '_thing_with_a_very_long_name_for_testing',
    'Rhelkb': '_rhelkb',
    'Wam': '_wam',
}`);
    expect(init).toContain(`__all__ = [
    'All',
    'ThingWithAVeryLongNameForTestingTheWrappingOfImports',
    'Rhelkb',
    'Wam',
]`);
    expect(init).toContain(`def __dir__() -> list[str]:
    return __all__
`);
  });
});
