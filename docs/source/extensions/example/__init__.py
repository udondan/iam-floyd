"""The directives of the docs for the examples and the variants.

``.. example:: <name>`` shows the code between doc-start and doc-end of examples/<name>/<name>.* in
tabs per language, for iam-floyd and cdk-iam-floyd (see variants.py), and the result. Where the
code is the same in both variants, it is shown once.

``.. variant:: <iam-floyd|cdk-iam-floyd>`` holds content for one variant. The switch of the page
(_static/js/variant.js) shows the content of the chosen variant.
"""

import textwrap
from pathlib import Path

from docutils import nodes
from docutils.parsers.rst import directives
from docutils.statemachine import ViewList
from sphinx.util.docutils import SphinxDirective
from sphinx.util.nodes import nested_parse_with_titles

from . import variants

EXAMPLES = Path(__file__).resolve().parents[4] / 'examples'

VARIANTS = ('iam-floyd', 'cdk-iam-floyd')

LANGUAGES = (
    ('TypeScript', 'ts', 'typescript'),
    ('Python', 'py', 'python'),
    ('Java', 'java', 'java'),
    ('C#', 'cs', 'csharp'),
    ('Go', 'go', 'go'),
)


def snippet(source, extension):
    """The code between doc-start and doc-end, without the common indentation"""
    lines = source.splitlines()
    start = next(i for i, line in enumerate(lines) if 'doc-start' in line)
    end = next(i for i, line in enumerate(lines) if 'doc-end' in line)
    code = '\n'.join(lines[start + 1 : end])
    if extension == 'go':
        code = code.expandtabs(4)
    return textwrap.dedent(code).strip('\n')


def code_block(language, code, indent):
    rst = [f'{indent}.. code-block:: {language}', '']
    rst += [f'{indent}   {line}' if line else '' for line in code.splitlines()]
    return rst + ['']


def variant_block(variant, content, indent):
    return [f'{indent}.. variant:: {variant}', ''] + [
        f'{indent}   {line}' if line else '' for line in content
    ]


def has_arn_defaults(result):
    """Whether the result has ARNs with the default partition, region or account"""
    return '"arn:aws:' in result


def example_rst(name):
    """The reStructuredText of the example"""
    directory = EXAMPLES / name
    cdk_only = name.endswith('.cdk')
    rst = ['.. tabs::', '']
    for label, extension, language in LANGUAGES:
        path = directory / f'{name}.{extension}'
        variants.check(path)
        rst += [f'   .. group-tab:: {label}', '']
        indent = '      '
        standalone = snippet(path.read_text(), extension)
        cdk = snippet(variants.cdk(path), extension)
        if cdk_only:
            rst += variant_block('cdk-iam-floyd', code_block(language, cdk, ''), indent)
        elif standalone == cdk:
            rst += code_block(language, standalone, indent)
        else:
            rst += variant_block('iam-floyd', code_block(language, standalone, ''), indent)
            rst += variant_block('cdk-iam-floyd', code_block(language, cdk, ''), indent)
    result = (directory / f'{name}.result').read_text()
    rst += ['   .. group-tab:: Result', '']
    rst += code_block('json', result.strip('\n'), '      ')
    if not cdk_only and has_arn_defaults(result):
        rst += variant_block(
            'cdk-iam-floyd',
            [
                'In cdk-iam-floyd, the default partition, region and account of the ARNs are',
                'those of the stack: tokens like ``${Token[AWS.Partition.8]}``, which',
                'CloudFormation resolves.',
            ],
            '      ',
        )
    return rst


def parse(directive, rst):
    content = ViewList()
    for line_no, line in enumerate(rst, start=1):
        content.append(line, 'example.rst', line_no)
    node = nodes.section()
    node.document = directive.state.document
    nested_parse_with_titles(directive.state, content, node)
    return node.children


class ExampleDirective(SphinxDirective):
    has_content = True

    def run(self):
        name = self.content[0]
        for path in (EXAMPLES / name).rglob('*'):
            self.env.note_dependency(str(path))
        return parse(self, example_rst(name))


class VariantDirective(SphinxDirective):
    has_content = True
    required_arguments = 1

    def run(self):
        variant = directives.choice(self.arguments[0], VARIANTS)
        node = nodes.container(classes=['floyd-variant', f'floyd-variant-{variant}'])
        self.state.nested_parse(self.content, self.content_offset, node)
        return [node]


def setup(app):
    app.add_directive('example', ExampleDirective)
    app.add_directive('variant', VariantDirective)
    app.add_js_file('js/variant.js')
    app.add_css_file('css/variant.css')
    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
