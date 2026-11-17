from iam_floyd import Operator, Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .allow()
            .to_start_instances()
            .if_aws_request_tag('TagWithSpecialChars', '*John*', Operator.STRING_EQUALS)
    )
    # doc-end
    return statement
