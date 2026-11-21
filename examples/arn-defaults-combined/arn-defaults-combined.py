from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Lambda()
            .allow()
            .to_update_function_code()
            .in_('098765432109', 'us-west-1', 'aws')
            .on_function('my-function-1')
            .on_function('my-function-2')
    )
    # doc-end
    return statement
