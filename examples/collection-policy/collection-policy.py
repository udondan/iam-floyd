from cdk_iam_floyd import Collection, ManagedPolicyDocument


def example():
    # doc-start
    policy = ManagedPolicyDocument()
    policy.add_statements(*Collection().allow_ec2_instance_delete_by_owner())
    # doc-end
    return policy
