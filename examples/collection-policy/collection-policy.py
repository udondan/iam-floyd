import iam_floyd as statement

# doc-start
statements = statement.Collection().allow_ec2_instance_delete_by_owner()

policy = {
    'Version': '2012-10-17',
    'Statement': list(map(lambda x: x.to_json(), statements)),
}
