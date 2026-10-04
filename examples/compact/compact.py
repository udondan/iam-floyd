from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .allow()
            .all_read_actions()
            .all_list_actions()
            .compact()
    )
    # doc-end
    return statement
