from cdk_iam_floyd import Statement


def example():
    # doc-start
    s1 = (
        Statement.S3()
            .deny()
            .all_permission_management_actions()
    )

    s2 = (
        Statement.S3()
            .allow()
            .all_list_actions()
            .all_read_actions()
    )
    # doc-end
    return [s1, s2]
