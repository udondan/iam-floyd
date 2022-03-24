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
    s1 = statement.Sts() \
                .allow() \
                .to_assume_role() \
                .for_account('1234567890', '0987654321')

    # when you already have a list:
    accounts = ['1234567890', '0987654321']
    s2 = statement.Sts() \
                .allow() \
                .to_assume_role() \
                .for_account(*accounts)

    s3 = statement.Sts() \
                .allow() \
                .to_assume_role() \
                .for_user('1234567890', 'Bob', 'John')

    # when you already have a list:
    users = ['Bob', 'John']
    s4 = statement.Sts() \
                .allow() \
                .to_assume_role() \
                .for_user('1234567890', *users)
    # doc-end

    return [s1, s2, s3, s4]


all = statements()
out(all)
# deploy(all, type='assume') Disabled, because we need valid principals to test
