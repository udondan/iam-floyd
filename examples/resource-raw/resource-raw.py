from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.S3()
        .allow()
        .all_actions()
        .on('arn:aws:s3:::example-bucket', 'arn:aws:s3:::another-bucket')
    )
    # doc-end
    return statement
