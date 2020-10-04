import iam_floyd as statement

# doc-start
statement.Ec2() \
    .allow() \
    .to_start_instances() \
    .if_aws_request_tag('Environment',
                        ['Production', 'Staging', 'Dev'],
                        statement.Operator().string_equals().if_exists())
