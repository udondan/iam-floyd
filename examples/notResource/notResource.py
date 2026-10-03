from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.S3()
        .allow()
        .not_resource()
        .to_delete_bucket()
        .on_bucket('example-bucket')
    )
    # doc-end
    return statement
