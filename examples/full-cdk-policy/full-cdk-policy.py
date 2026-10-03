from aws_cdk import aws_iam as iam
from cdk_iam_floyd import Statement


def example():
    # doc-start
    policy = iam.PolicyDocument(
        statements=[
            # allow all CFN actions
            Statement.Cloudformation()
            .allow()
            .all_actions(),
            # allow absolutely everything that is triggered via CFN
            Statement.All()
            .allow()
            .all_actions()
            .if_aws_called_via('cloudformation.amazonaws.com'),
            # allow access to the CDK staging bucket
            Statement.S3()
            .allow()
            .all_actions()
            .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
            # even when triggered via CFN, do not allow modifications of the account
            Statement.Account()
            .deny()
            .all_permission_management_actions()
            .all_write_actions(),
            # even when triggered via CFN, do not allow modifications of the organization
            Statement.Organizations()
            .deny()
            .all_permission_management_actions()
            .all_write_actions(),
        ],
    )
    # doc-end
    return policy
