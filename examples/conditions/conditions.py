import iam_floyd as statement

# doc-start
statement.Ec2() \
    .allow() \
    .to_start_instances() \
    .if_encrypted() \
    .if_instance_type(['t3.micro', 't3.nano']) \
    .if_associate_public_ip_address(False) \
    .if_aws_request_tag('Owner', 'John')
