from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = Statement.Ec2().to_start_instances()
    # doc-end
    return statement
