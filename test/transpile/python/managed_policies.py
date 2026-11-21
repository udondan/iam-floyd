"""Compares the AWS managed policies of the native package with those of TypeScript.

Every static property of TypeScript must be a constant with the same value, and there must be no
other constants.

Usage: managed_policies.py <managed-policies.json of typescript/managed-policies.ts>
"""

import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
# the package in python/, unless run.sh installed the built package
if 'IAM_FLOYD_INSTALLED' not in os.environ:
    sys.path.insert(0, str(ROOT / 'python'))

from iam_floyd import AwsManagedPolicy  # noqa: E402


def constant_name(name):
    """The Python name of a static property, like the transpiler names it."""
    snake = re.sub(r'([a-z\d])([A-Z])', r'\1_\2', name)
    return re.sub(r'([A-Z])([A-Z][a-z]+)', r'\1_\2', snake).upper()


with open(sys.argv[1]) as file:
    expected = {constant_name(name): value for name, value in json.load(file).items()}
actual = {name: value for name, value in vars(AwsManagedPolicy).items() if name.isupper()}

errors = [
    f'{name}: expected {expected.get(name)!r}, got {actual.get(name)!r}'
    for name in sorted(set(expected) | set(actual))
    if expected.get(name) != actual.get(name)
]
for error in errors[:50]:
    print(error)
if errors:
    sys.exit(1)
print(f'All {len(expected)} AWS managed policies passed')
