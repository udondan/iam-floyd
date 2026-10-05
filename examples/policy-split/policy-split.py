from cdk_iam_floyd import Policy, PolicyType, Statement


def example():
    # doc-start
    policy = Policy(PolicyType.MANAGED, 300)
    policy.add_statements(
        Statement.S3()
            .allow()
            .to_get_object()
            .on('arn:aws:s3:::example-bucket/*'),
        Statement.Sqs()
            .allow()
            .to_send_message()
            .on('arn:aws:sqs:us-east-1:123456789012:example-queue'),
        Statement.Dynamodb()
            .allow()
            .to_get_item()
            .to_query()
            .on('arn:aws:dynamodb:us-east-1:123456789012:table/example-table'),
    )
    policies = policy.split()  # two policies of at most 300 characters each
    # doc-end
    return policies
