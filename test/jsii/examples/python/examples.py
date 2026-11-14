"""Runs the Python examples of the docs, examples/*/*.py.

Prints one line per example: the name, a tab and the statements, the policy or the policies as JSON
(or FAIL).

Usage: examples.py <examples directory>
"""

import importlib.util
import json
import sys
import traceback
from pathlib import Path

import aws_cdk as cdk
from aws_cdk import aws_iam as iam

stack = cdk.Stack(cdk.App(), 'Stack')


def resolve(result):
    if isinstance(result, iam.PolicyDocument):
        return stack.resolve(result.to_json())
    if not isinstance(result, list):
        result = [result]
    # statements, or the policies of a split
    return [
        stack.resolve(item.to_json())
        if isinstance(item, iam.PolicyDocument)
        else stack.resolve(item.to_statement_json())
        for item in result
    ]


for path in sorted(Path(sys.argv[1]).glob('*/*.py')):
    name = path.parent.name
    try:
        spec = importlib.util.spec_from_file_location(name, path)
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
        print(f'{name}\t{json.dumps(resolve(module.example()))}')
    except Exception as e:  # noqa: BLE001
        print(f'{name}\tFAIL {type(e).__name__}: {e} {traceback.format_exc(limit=4)!r}')
