import iam_floyd as statement

# doc-start
statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_account('1234567890')

statement.Sts() \
    .allow() \
    .to_assume_role_with_sAML() \
    .for_service('lambda.amazonaws.com')

statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_user('1234567890', 'Bob')

statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_role('1234567890', 'role-name')

statement.Sts() \
    .allow() \
    .to_assume_role_with_sAML() \
    .for_federated_cognito()

statement.Sts() \
    .allow() \
    .to_assume_role_with_sAML() \
    .for_federated_amazon()

statement.Sts() \
    .allow() \
    .to_assume_role_with_sAML() \
    .for_federated_google()

statement.Sts() \
    .allow() \
    .to_assume_role_with_sAML() \
    .for_federated_facebook()

statement.Sts() \
    .allow() \
    .to_assume_role_with_sAML() \
    .for_saml('1234567890', 'saml-provider')

statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_public()

statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_assumed_role_session('123456789', 'role-name', 'session-name')

statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_canonical_user('userID')

statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for('arn:foo:bar')
