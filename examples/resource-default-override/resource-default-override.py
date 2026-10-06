from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Lambda()
            .allow()
            .to_update_function_code()
            .on_function('my-function', '098765432109', 'us-east-1', 'aws')
    )
    # doc-end
    return statement
