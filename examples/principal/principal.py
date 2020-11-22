import json
import iam_floyd as statement


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


for s in statements():
    pretty = json.dumps(s.to_json(), indent=4, sort_keys=True)
    print(pretty)
