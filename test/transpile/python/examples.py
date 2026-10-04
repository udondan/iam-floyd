"""Runs the Python examples of the docs, examples/*/*.py, against the native package.

The examples are written for cdk-iam-floyd. They run with iam_floyd in place of cdk_iam_floyd and a
stand-in for aws_cdk.aws_iam.PolicyDocument, which builds the policy document like the TypeScript
examples of iam-floyd do. The examples of the CDK variant, *.cdk, are skipped.

Prints one line per example: the name, a tab and the statements or the policy document as JSON
(or FAIL), like test/jsii/examples/python/examples.py.

Usage: examples.py <examples directory>
"""

import importlib.util
import json
import sys
import traceback
import types
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(ROOT / 'python'))

import iam_floyd  # noqa: E402


class PolicyDocument:
    """The part of aws_cdk.aws_iam.PolicyDocument that the examples use."""

    def __init__(self, statements):
        self.statements = statements

    def to_json(self):
        return {
            'Version': '2012-10-17',
            'Statement': [statement.to_json() for statement in self.statements],
        }


aws_cdk = types.ModuleType('aws_cdk')
aws_cdk.aws_iam = types.ModuleType('aws_cdk.aws_iam')
aws_cdk.aws_iam.PolicyDocument = PolicyDocument
sys.modules['aws_cdk'] = aws_cdk
sys.modules['aws_cdk.aws_iam'] = aws_cdk.aws_iam
sys.modules['cdk_iam_floyd'] = iam_floyd


def resolve(result):
    if isinstance(result, PolicyDocument):
        return result.to_json()
    if not isinstance(result, list):
        result = [result]
    return [statement.to_json() for statement in result]


for path in sorted(Path(sys.argv[1]).glob('*/*.py')):
    name = path.parent.name
    if name.endswith('.cdk'):
        continue
    try:
        spec = importlib.util.spec_from_file_location(name, path)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        print(f'{name}\t{json.dumps(resolve(module.example()))}')
    except Exception as e:  # noqa: BLE001
        print(f'{name}\tFAIL {type(e).__name__}: {e} {traceback.format_exc(limit=4)!r}')
