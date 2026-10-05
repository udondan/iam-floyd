from cdk_iam_floyd import Collection, Policy


def example():
    # doc-start
    policy = Policy()
    policy.add_statements(*Collection().allow_ec2_instance_delete_by_owner())
    # doc-end
    return policy
