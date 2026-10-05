"""Runs the scenarios of test/transpile/scenarios.json against the transpiled Python core.

Prints one line per scenario: the name, a tab and the statement as JSON (or ERROR and the
message). For a scenario with a policy of statements: the maximum size, the estimated size, the
result of validate (OK or the error), the policy as JSON and the policies of split as JSON array
(or the error, or - for a class without split), separated by tabs.

Usage: run.py <scenarios.json>
"""

import datetime
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
# the package in python/, unless run.sh installed the built package
if 'IAM_FLOYD_INSTALLED' not in os.environ:
    sys.path.insert(0, str(ROOT / 'python'))

import iam_floyd  # noqa: E402
from iam_floyd import Operator, PolicyDocument, PolicyStatement, Statement  # noqa: E402

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


def build(scenario):
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
    return statement


def to_json(value):
    return json.dumps(value, separators=(',', ':'), ensure_ascii=False)


def attempt(fn):
    try:
        return fn()
    except Exception as e:  # noqa: BLE001
        return f'ERROR {e}'


def validate(policy):
    policy.validate()
    return 'OK'


def run_policy(scenario):
    options = scenario['policy']
    statements = [build(statement) for statement in scenario.get('statements', [])]
    given = [] if options.get('add') else statements
    if 'maximumSize' in options:
        policy = PolicyDocument(options['maximumSize'], *given)
    else:
        policy = getattr(iam_floyd, options.get('class', 'ManagedPolicyDocument'))(*given)
    if 'arnSizeEstimate' in options:
        policy.arn_size_estimate = options['arnSizeEstimate']
    if options.get('add'):
        policy.add_statements(*statements)
    split = '-'
    if hasattr(policy, 'split'):
        split = attempt(lambda: f'[{",".join(to_json(part.to_json()) for part in policy.split())}]')
    parts = [
        policy.maximum_size,
        policy.estimate_size(),
        attempt(lambda: validate(policy)),
        to_json(policy.to_json()),
        split,
    ]
    return '\t'.join(str(part) for part in parts)


def run(scenario):
    if 'policy' in scenario:
        return attempt(lambda: run_policy(scenario))
    return attempt(lambda: to_json(build(scenario).to_json()))


for scenario in json.loads(Path(sys.argv[1]).read_text()):
    print(f'{scenario["name"]}\t{run(scenario)}')
