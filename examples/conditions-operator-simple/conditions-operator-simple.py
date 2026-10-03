from cdk_iam_floyd import Operator
from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
        .allow()
        .to_start_instances()
        .if_aws_request_tag('TagWithSpecialChars', '*John*', Operator().string_equals())
    )
    # doc-end
    return statement
