import os
from docutils import nodes
from docutils.statemachine import ViewList
from sphinx.util.docutils import SphinxDirective
from sphinx.util.nodes import nested_parse_with_titles

dir_path = os.path.dirname(os.path.realpath(__file__))
with open('{}/example.rst.tmpl'.format(dir_path), 'r') as f:
    lines = f.readlines()


def make_example(dir):
    path = '../../examples/{0}/{0}'.format(dir)
    rst = ViewList()
    line_no = 0
    for line in lines:
        line_no += 1
        rst.append(line.format(path).rstrip(), 'example.rst', line_no)
    return rst


class ExampleDirective(SphinxDirective):
    has_content = True

    def run(self):
        dir = self.content[0]
        rst = make_example(dir)
        node = nodes.section()
        node.document = self.state.document
        nested_parse_with_titles(self.state, rst, node)
        return node.children


def setup(app):
    app.add_directive('example', ExampleDirective)
    return {
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }
