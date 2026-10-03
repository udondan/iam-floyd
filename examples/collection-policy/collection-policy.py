from aws_cdk import aws_iam as iam
from cdk_iam_floyd import Collection


def example():
    # doc-start
    policy = iam.PolicyDocument(
        statements=Collection().allow_ec2_instance_delete_by_owner(),
    )
    # doc-end
    return policy
