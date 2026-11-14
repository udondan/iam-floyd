from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .allow()
            .to_start_instances()
            .if_('ec2:missingCondition', 'some-value')
    )
    # doc-end
    return statement
