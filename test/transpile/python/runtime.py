"""Tests the cases of the hand-written runtime that the scenarios cannot reach.

Those are values that JSON cannot express (NaN, Infinity, datetimes without time zone) and the
errors of the runtime.

Usage: runtime.py
"""

import datetime
import math
import os
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
# the package in python/, unless run.sh installed the built package
if 'IAM_FLOYD_INSTALLED' not in os.environ:
    sys.path.insert(0, str(ROOT / 'python'))

import iam_floyd  # noqa: E402
from iam_floyd import _js  # noqa: E402

failures = []
count = 0


def check(name, actual, expected):
    global count
    count += 1
    if actual != expected:
        failures.append(f'{name}: expected {expected!r}, got {actual!r}')


def check_raises(name, error, function):
    global count
    count += 1
    try:
        function()
    except error as e:
        return str(e)
    failures.append(f'{name}: expected {error.__name__}')
    return None


check('to_string NaN', _js.to_string(math.nan), 'NaN')
check('to_string Infinity', _js.to_string(math.inf), 'Infinity')
check('to_string -Infinity', _js.to_string(-math.inf), '-Infinity')
check('to_string int', _js.to_string(3600), '3600')
check('to_string -0', _js.to_string(-0.0), '0')

# a datetime without time zone is local time
utc = datetime.datetime(2024, 2, 29, 13, 14, 15, 678000, tzinfo=datetime.timezone.utc)
check(
    'to_iso_string local',
    _js.to_iso_string(utc.astimezone().replace(tzinfo=None)),
    '2024-02-29T13:14:15.678Z',
)

check('index_of', _js.index_of(['a', 1, True], 1), 1)
check('index_of missing', _js.index_of(['a', 1], 'b'), -1)
# like ===, 1 is not true
check('index_of other type', _js.index_of([True], 1), -1)

check('reg_exp i', _js.test(_js.reg_exp('^a$', 'i'), 'A'), True)
check('reg_exp', _js.test(_js.reg_exp('^a$', ''), 'A'), False)
check(
    'reg_exp unsupported flag',
    check_raises('reg_exp g', Exception, lambda: _js.reg_exp('a', 'g')),
    'Unsupported regular expression flag: g',
)

check('stringify NaN', _js.stringify(math.nan), 'null')
check('stringify Infinity', _js.stringify([math.inf, -math.inf]), '[null,null]')
check('stringify tuple', _js.stringify(('a', 1)), '["a",1]')
check(
    'stringify datetime',
    _js.stringify(datetime.datetime(2024, 1, 2, 3, 4, 5, tzinfo=datetime.timezone.utc)),
    '"2024-01-02T03:04:05.000Z"',
)
check(
    'stringify object',
    check_raises('stringify object', TypeError, lambda: _js.stringify(object())),
    'Cannot serialize object to JSON',
)

check(
    'module attribute',
    check_raises('module attribute', AttributeError, lambda: iam_floyd.Missing),
    "module 'iam_floyd' has no attribute 'Missing'",
)
check('module dir', set(iam_floyd.__all__) <= set(dir(iam_floyd)), True)

if failures:
    print('\n'.join(failures))
    sys.exit(1)
print(f'All {count} runtime tests passed')
