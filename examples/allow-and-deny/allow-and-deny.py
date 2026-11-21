from cdk_iam_floyd import Statement


def example():
    # doc-start
    s1 = (
        Statement.Ec2()
            .allow()
            .to_start_instances()
    )

    s2 = (
        Statement.Ec2()
            .deny()
            .to_stop_instances()
    )
    # doc-end
    return [s1, s2]
