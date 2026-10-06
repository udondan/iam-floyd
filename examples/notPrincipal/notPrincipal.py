from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.S3()
            .deny()
            .all_actions()
            .not_principal()
            .for_user('1234567890', 'Bob')
            .on_object('example-bucket', '*')
    )
    # doc-end
    return statement
