"""JavaScript semantics that the code transpiled from TypeScript relies on and Python lacks."""

from __future__ import annotations

import datetime
import decimal
import math
import re
from typing import Any


def typeof(value: Any) -> str:
    """The result of the JavaScript `typeof` operator."""
    if value is None:
        return 'undefined'
    if isinstance(value, bool):
        return 'boolean'
    if isinstance(value, (int, float)):
        return 'number'
    if isinstance(value, str):
        return 'string'
    if callable(value):
        return 'function'
    return 'object'


def to_string(value: Any) -> str:
    """The result of JavaScript's `String(value)`."""
    if value is None:
        return 'undefined'
    if isinstance(value, bool):
        return 'true' if value else 'false'
    if isinstance(value, int):
        return str(value)
    if isinstance(value, float):
        return _number_to_string(value)
    if isinstance(value, (list, tuple)):
        return ','.join('' if item is None else to_string(item) for item in value)
    return str(value)


def _number_to_string(value: float) -> str:
    if math.isnan(value):
        return 'NaN'
    if math.isinf(value):
        return 'Infinity' if value > 0 else '-Infinity'
    if value == 0:
        return '0'
    # repr() gives the shortest digits that round-trip, like JavaScript, but switches to the
    # exponent notation at other magnitudes
    digits = decimal.Decimal(repr(value))
    if 1e-6 <= abs(value) < 1e21:
        text = format(digits, 'f')
        return text.rstrip('0').rstrip('.') if '.' in text else text
    mantissa, exponent = format(digits.normalize(), 'e').split('e')
    return f'{mantissa}e{"+" if int(exponent) > 0 else "-"}{abs(int(exponent))}'


def to_iso_string(value: datetime.datetime) -> str:
    """The result of JavaScript's `Date.toISOString()`.

    A datetime without time zone is local time, like in JavaScript.
    """
    if value.tzinfo is None:
        value = value.astimezone()
    value = value.astimezone(datetime.timezone.utc)
    return f'{value.strftime("%Y-%m-%dT%H:%M:%S")}.{value.microsecond // 1000:03d}Z'


def index_of(values: list[Any] | tuple[Any, ...], value: Any) -> int:
    """`Array.indexOf()`, which compares with `===`."""
    for index, item in enumerate(values):
        if typeof(item) == typeof(value) and item == value:
            return index
    return -1


def sort(values: list[Any]) -> list[Any]:
    """`Array.sort()` without compare function.

    Sorts in place by the UTF-16 code units of the string values.
    """
    values.sort(key=lambda item: to_string(item).encode('utf-16-be'))
    return values


def reg_exp(pattern: str, flags: str) -> re.Pattern[str]:
    """`new RegExp(pattern, flags)`. The pattern uses the syntax of Python's `re` module."""
    options = 0
    for flag in flags:
        if flag == 'i':
            options |= re.IGNORECASE
        elif flag == 'm':
            options |= re.MULTILINE
        elif flag == 's':
            options |= re.DOTALL
        else:
            raise Exception(f'Unsupported regular expression flag: {flag}')
    return re.compile(pattern, options)


def test(pattern: re.Pattern[str], value: str) -> bool:
    """`RegExp.test()`."""
    return pattern.search(value) is not None
