from cdk_iam_floyd import Policy, Statement


def example():
    # doc-start
    policy = Policy()
    policy.add_statements(
        Statement.Ec2()
            .allow()
            .to_start_instances()
            .if_aws_request_tag('Owner', '${aws:username}'),
        Statement.Ec2()
            .allow()
            .to_stop_instances()
            .if_resource_tag('Owner', '${aws:username}'),
        Statement.Ec2()
            .allow()
            .all_list_actions()
            .all_read_actions(),
    )
    # doc-end
    return policy
