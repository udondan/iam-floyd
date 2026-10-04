from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .deny()
            .all_matching_actions('/vpn/i')
    )
    # doc-end
    return statement
