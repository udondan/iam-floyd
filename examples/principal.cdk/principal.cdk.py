from aws_cdk import aws_iam as iam
from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Sts()
        .allow()
        .to_assume_role()
        .for_cdk_principal(
            iam.ServicePrincipal('sns.amazonaws.com'),
            iam.ServicePrincipal('lambda.amazonaws.com'),
        )
    )
    # doc-end
    return statement
