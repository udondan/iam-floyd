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


def get_statement():
    # doc-start
    my_statement = statement.Ec2()
    my_statement.allow()
    my_statement.to_start_instances()
    my_statement.to_stop_instances()
    # doc-end
    return my_statement


all = [get_statement()]
out(all)
deploy(all)
