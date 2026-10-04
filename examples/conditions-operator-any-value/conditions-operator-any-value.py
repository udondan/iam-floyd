from cdk_iam_floyd import Operator, Statement


def example():
    # doc-start
    statement = (
        Statement.Dynamodb()
            .deny()
            .to_put_item()
            .on_table('Thread')
            .if_attributes(['ID', 'PostDateTime'], Operator().string_equals().for_any_value())
    )
    # doc-end
    return statement
