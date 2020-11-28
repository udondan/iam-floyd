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
        .for_account('1234567890')

    s2 = statement.Sts() \
        .allow() \
        .to_assume_role_with_saml() \
        .for_service('lambda.amazonaws.com')

    s3 = statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_user('1234567890', 'Bob')

    s4 = statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_role('1234567890', 'role-name')

    s5 = statement.Sts() \
        .allow() \
        .to_assume_role_with_saml() \
        .for_federated_cognito()

    s6 = statement.Sts() \
        .allow() \
        .to_assume_role_with_saml() \
        .for_federated_amazon()

    s7 = statement.Sts() \
        .allow() \
        .to_assume_role_with_saml() \
        .for_federated_google()

    s8 = statement.Sts() \
        .allow() \
        .to_assume_role_with_saml() \
        .for_federated_facebook()

    s9 = statement.Sts() \
        .allow() \
        .to_assume_role_with_saml() \
        .for_saml('1234567890', 'saml-provider')

    s10 = statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_public()

    s11 = statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_assumed_role_session('123456789', 'role-name', 'session-name')

    s12 = statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_canonical_user('userID')

    s13 = statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_('arn:foo:bar')
    # doc-end

    return [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13]


all = statements()
out(all)
# deploy(all, type='assume') Disabled, because we need valid principals to test
