from cdk_iam_floyd import Statement


def example():
    # doc-start
    statement = (
        Statement.Ec2()
            .allow()
            .to_start_instances()
            .if_encrypted()
            .if_instance_type(['t3.micro', 't3.nano'])
            .if_associate_public_ip_address(False)
            .if_aws_request_tag('Owner', 'John')
    )
    # doc-end
    return statement
