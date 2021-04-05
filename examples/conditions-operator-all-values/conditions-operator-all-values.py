from iam_floyd import statement
import importlib
import os
import sys
import inspect

currentdir = os.path.dirname(os.path.abspath(
    inspect.getfile(inspect.currentframe())))
helperDir = '%s/../../helper/python' % currentdir
sys.path.insert(0, helperDir)

test = importlib.import_module('python_test')
out = getattr(test, 'out')
deploy = getattr(test, 'deploy')

s = (
    # doc-start
    statement.Dynamodb() \
        .allow() \
        .to_get_item() \
        .on_table('Thread') \
        .if_attributes(['ID', 'Message', 'Tags'],
                       statement.Operator().string_equals().for_all_values())
    # doc-end
)

all = [s]
out(all)
deploy(all)
