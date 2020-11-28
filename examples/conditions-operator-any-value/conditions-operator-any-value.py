import iam_floyd as statement
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
    .deny() \
    .to_put_item() \
    .on_table('Thread') \
    .if_attributes(['ID', 'PostDateTime'],
                   statement.Operator().string_equals().for_any_value())
    # doc-end
)

all = [s]
out(all)
deploy(all)
