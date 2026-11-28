from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.S3()
            .allow()
            .all_permission_management_actions()
    )
    # doc-end
    return statement
