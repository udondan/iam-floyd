"""Runs the scenarios of test/transpile/scenarios.json against the transpiled Python core.

Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the message).

Usage: run.py <scenarios.json>
"""

import datetime
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(ROOT / 'python'))

from iam_floyd import Operator, PolicyStatement, Statement  # noqa: E402

KEYWORDS = {'if', 'in', 'for'}


def python_name(name):
    """The Python name of a TypeScript method, like the transpiler names it."""
    snake = re.sub(r'([a-z\d])([A-Z])', r'\1_\2', name)
    snake = re.sub(r'([A-Z])([A-Z][a-z]+)', r'\1_\2', snake).lower()
    return f'{snake}_' if snake in KEYWORDS else snake


class Service(PolicyStatement):
    """A service class like the generated ones, built from the model."""

    def __init__(self, model, sid=None):
        super().__init__(sid)
        self.service_prefix = model['servicePrefix']
        self._access_level_list = model['accessLevelList']


def decode(arg):
    """Decodes the arguments that JSON cannot express.

    These are `{"operator": [methods]}` and `{"date": "ISO 8601"}`.
    """
    if isinstance(arg, list):
        return [decode(item) for item in arg]
    if isinstance(arg, dict):
        if 'operator' in arg:
            operator = Operator()
            for method in arg['operator']:
                operator = getattr(operator, python_name(method))()
            return operator
        if 'date' in arg:
            return datetime.datetime.fromisoformat(arg['date'].replace('Z', '+00:00'))
    return arg


def run(scenario):
    try:
        if 'class' in scenario:
            statement = getattr(Statement, scenario['class'])(scenario.get('sid'))
        elif 'service' in scenario:
            model = json.loads(
                (ROOT / 'lib/generated/model' / f'{scenario["service"]}.json').read_text()
            )
            statement = Service(model, scenario.get('sid'))
        else:
            statement = PolicyStatement(scenario.get('sid'))
        for method, *args in scenario['calls']:
            getattr(statement, python_name(method))(*[decode(arg) for arg in args])
        return json.dumps(statement.to_json(), separators=(',', ':'), ensure_ascii=False)
    except Exception as e:  # noqa: BLE001
        return f'ERROR {e}'


for scenario in json.loads(Path(sys.argv[1]).read_text()):
    print(f'{scenario["name"]}\t{run(scenario)}')
