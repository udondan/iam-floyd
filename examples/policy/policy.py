from cdk_iam_floyd import InlineRolePolicyDocument, Statement


def example():
    # doc-start
    policy = InlineRolePolicyDocument(
        Statement.S3()
            .allow()
            .to_get_object()
            .on('arn:aws:s3:::example-bucket/*'),
    )
    policy.add_statements(
        Statement.Sqs()
            .allow()
            .to_send_message()
            .on('arn:aws:sqs:us-east-1:123456789012:example-queue'),
    )
    policy.validate()  # throws, if it exceeds the maximum size of an inline policy of a role
    # doc-end
    return policy
