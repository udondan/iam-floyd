from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .allow()
            .to_start_instances()
            .to_stop_instances()
    )
    # doc-end
    return statement
