import iam_floyd as statement

# doc-start
policy = {
    'Version': '2012-10-17',
    'Statement': [
        statement.Ec2()
        .allow()
        .to_start_instances()
        .if_aws_request_tag('Owner', '${aws:username}')
        .to_json(),
        statement.Ec2()
        .allow()
        .to_stop_instances()
        .if_resource_tag('Owner', '${aws:username}')
        .to_json(),
        statement.Ec2()
        .allow()
        .all_list_actions()
        .all_read_actions()
        .to_json()
    ]
}
