from cdk_iam_floyd import Policy, PolicyType, Statement


def example():
    # doc-start
    policy = Policy(PolicyType.INLINE_ROLE)
    policy.add_statements(
        Statement.S3()
            .allow()
            .to_get_object()
            .on('arn:aws:s3:::example-bucket/*'),
        Statement.Sqs()
            .allow()
            .to_send_message()
            .on('arn:aws:sqs:us-east-1:123456789012:example-queue'),
    )
    policy.validate()  # throws, if it exceeds the maximum size of an inline policy of a role
    # doc-end
    return policy
