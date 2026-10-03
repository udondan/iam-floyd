from cdk_iam_floyd import Statement


def example():
    # doc-start
    s1 = (
        Statement.Sts()
        .allow()
        .to_assume_role()
        .for_account('1234567890', '0987654321')
    )

    # when you already have a list:
    accounts = ['1234567890', '0987654321']

    s2 = (
        Statement.Sts()
        .allow()
        .to_assume_role()
        .for_account(*accounts)
    )

    s3 = (
        Statement.Sts()
        .allow()
        .to_assume_role()
        .for_user('1234567890', 'Bob', 'John')
    )

    # when you already have a list:
    users = ['Bob', 'John']

    s4 = (
        Statement.Sts()
        .allow()
        .to_assume_role()
        .for_user('1234567890', *users)
    )
    # doc-end
    return [s1, s2, s3, s4]
