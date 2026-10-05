"""Runs the Python examples of the docs, examples/*/*.py, against the native package.

The examples are written for cdk-iam-floyd. They run with iam_floyd in place of cdk_iam_floyd. The
examples of the CDK variant, *.cdk, are skipped.

Prints one line per example: the name, a tab and the statements, the policy or the policies as JSON
(or FAIL), like test/jsii/examples/python/examples.py.

Usage: examples.py <examples directory>
"""

import importlib.util
import json
import os
import sys
import traceback
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
# the package in python/, unless run.sh installed the built package
if 'IAM_FLOYD_INSTALLED' not in os.environ:
    sys.path.insert(0, str(ROOT / 'python'))

import iam_floyd  # noqa: E402

sys.modules['cdk_iam_floyd'] = iam_floyd


def resolve(result):
    if isinstance(result, iam_floyd.PolicyDocument):
        return result.to_json()
    if not isinstance(result, list):
        result = [result]
    # statements, or the policies of a split
    return [item.to_json() for item in result]


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
