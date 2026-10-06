from cdk_iam_floyd import AwsServicePrincipal, Statement


def example():
    # doc-start
    s1 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_service(AwsServicePrincipal.LAMBDA)
    )

    s2 = (
        Statement.Sts()
            .allow()
            .to_assume_role()
            .for_service(AwsServicePrincipal.ECS_TASKS, AwsServicePrincipal.EC2)
    )
    # doc-end
    return [s1, s2]
