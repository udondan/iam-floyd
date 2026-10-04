from cdk_iam_floyd import Operator, Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
        .allow()
        .to_start_instances()
        .if_aws_request_tag(
            'Environment',
            ['Production', 'Staging', 'Dev'],
            Operator().string_equals().if_exists(),
        )
    )
    # doc-end
    return statement
