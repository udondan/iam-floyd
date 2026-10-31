from cdk_iam_floyd import Statement


def example():
    # doc-start
    s1 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_account('1234567890')
    )

    s2 = (
        Statement.Sts()
            .allow()
            .to_assume_role_with_saml()
            .for_service('lambda.amazonaws.com')
    )

    s3 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_user('1234567890', 'Bob')
    )

    s4 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_role('1234567890', 'role-name')
    )

    s5 = (
        Statement.Sts()
            .allow()
            .to_assume_role_with_saml()
            .for_federated_cognito()
    )

    s6 = (
        Statement.Sts()
            .allow()
            .to_assume_role_with_saml()
            .for_federated_amazon()
    )

    s7 = (
        Statement.Sts()
            .allow()
            .to_assume_role_with_saml()
            .for_federated_google()
    )

    s8 = (
        Statement.Sts()
            .allow()
            .to_assume_role_with_saml()
            .for_federated_facebook()
    )

    s9 = (
        Statement.Sts()
            .allow()
            .to_assume_role_with_saml()
            .for_saml('1234567890', 'saml-provider')
    )

    s10 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_public()
    )

    s11 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_assumed_role_session('123456789', 'role-name', 'session-name')
    )

    s12 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_canonical_user('userID')
    )

    s13 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_('arn:foo:bar')
    )
    # doc-end
    return [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13]
