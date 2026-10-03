from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.S3()
        .allow()
        .all_actions()
        .on_bucket('example-bucket')
        .on_object('example-bucket', 'some/path/*')
    )
    # doc-end
    return statement
