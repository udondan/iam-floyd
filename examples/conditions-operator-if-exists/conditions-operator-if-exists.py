from iam_floyd import statement, Operator
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
    statement.Ec2() \
        .allow() \
        .to_start_instances() \
        .if_aws_request_tag('Environment',
                            ['Production', 'Staging', 'Dev'],
                            Operator().string_equals().if_exists())
    # doc-end
)

all = [s]
out(all)
deploy(all)
