from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .allow()
            .to('missingAction')
    )
    # doc-end
    return statement
