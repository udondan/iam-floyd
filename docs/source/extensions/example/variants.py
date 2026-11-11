"""The examples of the docs in both variants, iam-floyd and cdk-iam-floyd.

The examples, examples/<name>/<name>.<extension>, are written for iam-floyd. Their code for
cdk-iam-floyd is derived from them by renaming: the imports, the helpers for pointers in Go, and the
constants of iam-floyd, which are methods in jsii. Where the variants differ in more than names,
like the SID, examples/<name>/cdk/<name>.<extension> has the code for cdk-iam-floyd. The examples of
the CDK only, examples/<name>.cdk/, are written for cdk-iam-floyd.

The docs show both variants, and test/jsii/run.sh runs the code for cdk-iam-floyd:

Usage: variants.py <examples directory>, which replaces the examples with their code for
cdk-iam-floyd
"""

import re
import shutil
import sys
from pathlib import Path

EXTENSIONS = ('ts', 'py', 'java', 'cs', 'go')

GO_MODULE = 'udondan.github.io/iam-floyd/go'
GO_IMPORTS = {
    'awsiam': '"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"',
    'cdkiamfloyd': f'"{GO_MODULE}/cdkiamfloyd"',
    'jsii': '"github.com/aws/jsii-runtime-go"',
    'statement': f'"{GO_MODULE}/cdkiamfloyd/statement"',
}

# a constant of Operator, e.g. Operator.STRING_EQUALS, in jsii the method stringEquals()
OPERATOR = r'(?<![\w.])Operator\.([A-Z][A-Z0-9_]*)\b'


def camel(name):
    """STRING_EQUALS -> stringEquals"""
    first, *rest = name.lower().split('_')
    return first + ''.join(part.capitalize() for part in rest)


def pascal(name):
    """STRING_EQUALS -> StringEquals"""
    return ''.join(part.capitalize() for part in name.lower().split('_'))


def python(source):
    source = re.sub(r'^from iam_floyd import ', 'from cdk_iam_floyd import ', source, flags=re.M)
    return re.sub(OPERATOR, lambda m: f'Operator().{m[1].lower()}()', source)


def java(source):
    source = re.sub(
        r'^import com\.udondan\.iamFloyd\.', 'import com.udondan.iamFloyd.cdk.', source, flags=re.M
    )
    return re.sub(OPERATOR, lambda m: f'new Operator().{camel(m[1])}()', source)


def csharp(source):
    source = re.sub(r'(?<![\w.])IAM\.Floyd\b', 'CDK.IAM.Floyd', source)
    return re.sub(OPERATOR, lambda m: f'new Operator().{pascal(m[1])}()', source)


def go_imports(source):
    """The imports of the code for cdk-iam-floyd, of the packages it uses, sorted like gofmt"""
    imports = [
        line.strip()
        for line in re.search(r'^import \(\n(.*?)^\)', source, flags=re.M | re.S)[1].splitlines()
    ]
    # the packages of iam-floyd are replaced by those of cdk-iam-floyd
    imports = [spec for spec in imports if spec and f'"{GO_MODULE}/iamfloyd' not in spec]
    imports += [
        spec
        for package, spec in GO_IMPORTS.items()
        if re.search(rf'(?<![\w.]){package}\.', source) and spec not in imports
    ]
    # the standard library first, separated by an empty line
    groups = [
        ''.join(f'\t{spec}\n' for spec in sorted(group, key=lambda spec: spec.split('"')[1]))
        for group in (
            [spec for spec in imports if '.' not in spec.split('"')[1].split('/')[0]],
            [spec for spec in imports if '.' in spec.split('"')[1].split('/')[0]],
        )
        if group
    ]
    lines = '\n'.join(groups)
    return re.sub(r'^import \(\n.*?^\)', f'import (\n{lines})', source, count=1, flags=re.M | re.S)


def go(source):
    # constants of iam-floyd are functions in jsii
    source = re.sub(
        r'iamfloyd\.String\(iamfloyd\.AwsServicePrincipal_(\w+)\)',
        r'cdkiamfloyd.AwsServicePrincipal_\1()',
        source,
    )
    source = re.sub(
        r'(?<![\w.])iamfloyd\.Operator_(\w+)',
        lambda m: f'cdkiamfloyd.NewOperator().{pascal(m[1])}()',
        source,
    )
    source = re.sub(r'(?<![\w.])iamfloyd\.(String|Strings|Number|Bool)\(', r'jsii.\1(', source)
    # in jsii, the collection is in the main package, and returns a pointer to the slice
    source = re.sub(
        r'range collection\.NewCollection\(\)', 'range *cdkiamfloyd.NewCollection()', source
    )
    source = re.sub(
        r'(?<![\w.])collection\.NewCollection\(\)', 'cdkiamfloyd.NewCollection()', source
    )
    source = re.sub(r'(?<![\w.])iamfloyd\.', 'cdkiamfloyd.', source)
    return go_imports(source)


DERIVE = {
    'ts': lambda source: source,
    'py': python,
    'java': java,
    'cs': csharp,
    'go': go,
}


def cdk(path):
    """The code of the example at path for cdk-iam-floyd"""
    path = Path(path)
    override = path.parent / 'cdk' / path.name
    if path.parent.name.endswith('.cdk'):
        return path.read_text()
    if override.exists():
        return override.read_text()
    return DERIVE[path.suffix[1:]](path.read_text())


# the names of one variant, which the code of the other must not have
CDK_NAMES = re.compile(
    r'cdk_iam_floyd|iamFloyd\.cdk|CDK\.IAM\.Floyd|cdkiamfloyd|jsii|awsiam|aws-cdk'
)
STANDALONE_NAMES = re.compile(
    r'(?<![\w.])(iam_floyd|iamfloyd)\b|/iamfloyd\b|com\.udondan\.iamFloyd\.(?!cdk\.)'
    r'|(?<![\w.])IAM\.Floyd\b|\'iam-floyd\''
)


def check(path):
    """Raises an error if the code of a variant of the example at path has names of the other"""
    path = Path(path)
    if path.parent.name.endswith('.cdk'):
        return
    for variant, code, names in (
        ('iam-floyd', path.read_text(), CDK_NAMES),
        ('cdk-iam-floyd', cdk(path), STANDALONE_NAMES),
    ):
        found = names.search(code)
        if found:
            raise ValueError(f'{path}: the code for {variant} has {found[0]}')


def main(examples):
    for directory in sorted(Path(examples).iterdir()):
        if not directory.is_dir():
            continue
        for extension in EXTENSIONS:
            path = directory / f'{directory.name}.{extension}'
            if path.exists():
                check(path)
                path.write_text(cdk(path))
        shutil.rmtree(directory / 'cdk', ignore_errors=True)


if __name__ == '__main__':
    main(sys.argv[1])
