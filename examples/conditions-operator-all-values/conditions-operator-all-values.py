from cdk_iam_floyd import Operator
from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Dynamodb()
        .allow()
        .to_get_item()
        .on_table('Thread')
        .if_attributes(['ID', 'Message', 'Tags'], Operator().string_equals().for_all_values())
    )
    # doc-end
    return statement
