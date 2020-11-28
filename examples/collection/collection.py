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


def statements():
    # doc-start
    statements = statement.Collection().allow_ec2_instance_delete_by_owner()
    # doc-end
    return statements


all = statements()
out(all)
deploy(all)
