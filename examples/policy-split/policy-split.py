from cdk_iam_floyd import ManagedPolicyDocument, Statement


def example():
    # doc-start
    buckets = [f'arn:aws:s3:::example-bucket-{i}/*' for i in range(1, 51)]
    policy = ManagedPolicyDocument(
        Statement.S3()
            .allow()
            .to_get_object()
            .on(*buckets),
        Statement.S3()
            .allow()
            .to_put_object()
            .on(*buckets),
        Statement.S3()
            .allow()
            .to_delete_object()
            .on(*buckets),
        Statement.S3()
            .allow()
            .to_get_object_tagging()
            .on(*buckets),
    )
    policies = policy.split()  # two policies of at most 6,144 characters each
    # doc-end
    return policies
