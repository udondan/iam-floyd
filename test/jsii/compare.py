"""Compares the scenario results of each language to the expected policies.

Usage: compare.py <expected.json> <result.txt>...

A result file has one line per scenario: the name, a tab and the policies as JSON (or FAIL). Other
lines, like build output, are ignored. Set UPDATE=1 to write the first result file to expected.json.
"""

import json
import os
import sys


def read_results(path, names=None):
    results = {}
    with open(path) as file:
        for line in file:
            name, sep, value = line.rstrip('\n').partition('\t')
            if not sep or (names is not None and name not in names):
                continue
            results[name] = value
    return results


expected_path, *result_paths = sys.argv[1:]

if os.environ.get('UPDATE'):
    results = read_results(result_paths[0])
    expected = {name: json.loads(value) for name, value in results.items()}
    with open(expected_path, 'w') as file:
        json.dump(expected, file, indent=2, sort_keys=True)
        file.write('\n')
    print(f'Wrote {len(expected)} scenarios to {expected_path}')
    sys.exit(0)

with open(expected_path) as file:
    expected = json.load(file)

failed = False
for path in result_paths:
    language = os.path.splitext(os.path.basename(path))[0]
    results = read_results(path, expected)
    for name, policies in expected.items():
        value = results.get(name)
        if value is None:
            status = 'MISSING'
        elif value.startswith('FAIL'):
            status = value
        elif json.loads(value) != policies:
            status = f'DIFFERENT\n    expected: {json.dumps(policies)}\n    actual:   {value}'
        else:
            status = 'OK'
        if status != 'OK':
            failed = True
        print(f'{language:<7} {name}: {status}')

sys.exit(1 if failed else 0)
