from cdk_iam_floyd import Collection


def example():
    # doc-start
    statements = Collection().allow_ec2_instance_delete_by_owner()
    # doc-end
    return statements
