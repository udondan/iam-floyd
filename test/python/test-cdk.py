import cdk_iam_floyd as statement

test = statement.Ec2() \
    .allow() \
    .to_stop_instances() \
    .if_encrypted() \
    .if_instance_type(['t3.micro', 't3.nano']) \
    .if_associate_public_ip_address(False) \
    .if_aws_request_tag('Owner', 'John') \
    .on_instance('i-abcdef123456')

print(test.to_json())
