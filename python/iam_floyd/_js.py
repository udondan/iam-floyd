"""JavaScript semantics that the code transpiled from TypeScript relies on and Python lacks."""

from __future__ import annotations

import datetime
import decimal
import json
import math
import re
from collections.abc import Callable
from typing import Any


def typeof(value: Any) -> str:
    """The result of the JavaScript `typeof` operator."""
    if isinstance(value, bool):
        return 'boolean'
    if isinstance(value, (int, float)):
        return 'number'
    if isinstance(value, str):
        return 'string'
    return 'object'


def to_string(value: bool | float) -> str:
    """The result of JavaScript's `String(value)` for a boolean or a number."""
    if isinstance(value, bool):
        return 'true' if value else 'false'
    return _number_to_string(float(value))


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


def sort(values: list[str]) -> list[str]:
    """`Array.sort()` without compare function.

    Sorts the strings in place by their UTF-16 code units.
    """
    values.sort(key=lambda item: item.encode('utf-16-be'))
    return values


def reg_exp(pattern: str, flags: str) -> re.Pattern[str]:
    """`new RegExp(pattern, flags)`. The pattern uses the syntax of Python's `re` module."""
    options = 0
    for flag in flags:
        if flag == 'i':
            options |= re.IGNORECASE
        else:
            raise ValueError(f'Unsupported regular expression flag: {flag}')
    return re.compile(pattern, options)


def test(pattern: re.Pattern[str], value: str) -> bool:
    """`RegExp.test()`."""
    return pattern.search(value) is not None


def stringify(value: Any) -> str:
    """`JSON.stringify()` without indentation."""
    if value is None:
        return 'null'
    for types, serialize in _SERIALIZERS:
        if isinstance(value, types):
            return serialize(value)
    raise TypeError(f'Cannot serialize {type(value).__name__} to JSON')


def _stringify_number(value: bool | float) -> str:
    # booleans are numbers in Python, to_string() formats them as JavaScript
    if math.isnan(value) or math.isinf(value):
        return 'null'
    return to_string(value)


def _stringify_list(value: list[Any] | tuple[Any, ...]) -> str:
    return f'[{",".join(stringify(item) for item in value)}]'


def _stringify_dict(value: dict[Any, Any]) -> str:
    items = (
        f'{stringify(str(key))}:{stringify(item)}'
        for key, item in value.items()
        if item is not None
    )
    return f'{{{",".join(items)}}}'


_SERIALIZERS: tuple[tuple[type | tuple[type, ...], Callable[[Any], str]], ...] = (
    ((int, float), _stringify_number),
    (str, lambda value: json.dumps(value, ensure_ascii=False)),
    (datetime.datetime, lambda value: stringify(to_iso_string(value))),
    ((list, tuple), _stringify_list),
    (dict, _stringify_dict),
)
