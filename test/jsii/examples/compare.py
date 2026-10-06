"""Compares the results of the examples of the docs in each language to their .result files.

Usage: compare.py [--standalone] <examples directory> <result.txt>...

With --standalone, the results are of the native iam-floyd packages, and the examples of the CDK
variant, *.cdk, are skipped.

A result file has one line per example: the name, a tab and the statements or the policy document
as JSON (or FAIL), like test/jsii/compare.py. Every example needs a file in every language, e.g.
examples/allow/allow.py.

The examples run with cdk-iam-floyd, where the ARN defaults are references to the stack. These
are replaced by the defaults of iam-floyd, which the .result files are written with.
"""

import json
import os
import re
import sys

EXTENSIONS = {'python': 'py', 'java': 'java', 'dotnet': 'cs', 'go': 'go'}
PSEUDO_PARAMETERS = {
    'AWS::Partition': 'aws',
    'AWS::Region': '*',
    'AWS::AccountId': '*',
    'AWS::URLSuffix': 'amazonaws.com',
}


def read_results(path):
    results = {}
    with open(path) as file:
        for line in file:
            name, sep, value = line.rstrip('\n').partition('\t')
            if sep:
                results[name] = value
    return results


def read_expected(path):
    """A .result file has the statements or the policies one after another, or a policy document."""
    with open(path) as file:
        # Tokens of TypeScript examples, like `${Token[sns.amazonaws.com.9]}`
        text = re.sub(r'\$\{Token\[(.+?)\.\d+\]\}', r'\1', file.read())
    decoder = json.JSONDecoder()
    values = []
    index = 0
    while index < len(text):
        if text[index].isspace():
            index += 1
            continue
        value, index = decoder.raw_decode(text, index)
        values.append(value)
    if len(values) == 1 and 'Statement' in values[0]:
        return values[0]
    return values


def unresolve(value):
    """Replaces the references to pseudo parameters, e.g. {"Ref": "AWS::Partition"}, and those to
    resources, which the TypeScript examples print as `${Token[TOKEN.24]}`."""
    if isinstance(value, list):
        return [unresolve(item) for item in value]
    if isinstance(value, dict):
        if list(value) == ['Ref']:
            return PSEUDO_PARAMETERS.get(value['Ref'], 'TOKEN')
        if list(value) == ['Fn::GetAtt']:
            return 'TOKEN'
        if list(value) == ['Fn::Join']:
            separator, parts = value['Fn::Join']
            return separator.join(unresolve(part) for part in parts)
        return {key: unresolve(item) for key, item in value.items()}
    return value


def normalize(value):
    """CDK writes a single principal as a string, iam-floyd as a list with one item."""
    if isinstance(value, list):
        return [normalize(item) for item in value]
    if isinstance(value, dict):
        return {
            key: (
                {k: v[0] if isinstance(v, list) and len(v) == 1 else v for k, v in item.items()}
                if key in ('Principal', 'NotPrincipal') and isinstance(item, dict)
                else normalize(item)
            )
            for key, item in value.items()
        }
    return value


args = sys.argv[1:]
standalone = '--standalone' in args
if standalone:
    args.remove('--standalone')
examples_path, *result_paths = args
names = sorted(
    name
    for name in os.listdir(examples_path)
    if os.path.isfile(os.path.join(examples_path, name, f'{name}.result'))
    and not (standalone and name.endswith('.cdk'))
)

failed = False
for path in result_paths:
    language = os.path.splitext(os.path.basename(path))[0].removeprefix('examples-')
    results = read_results(path)
    for name in names:
        source = os.path.join(examples_path, name, f'{name}.{EXTENSIONS[language]}')
        expected = normalize(read_expected(os.path.join(examples_path, name, f'{name}.result')))
        value = results.get(name)
        if not os.path.isfile(source):
            status = f'MISSING {source}'
        elif value is None:
            status = 'MISSING'
        elif value.startswith('FAIL'):
            status = value
        elif normalize(unresolve(json.loads(value))) != expected:
            status = f'DIFFERENT\n    expected: {json.dumps(expected)}\n    actual:   {value}'
        else:
            status = 'OK'
        if status != 'OK':
            failed = True
        print(f'{language:<7} {name}: {status}')

sys.exit(1 if failed else 0)
