import json
import iam_floyd as statement


def get_policy():
    # doc-start
    statements = statement.Collection().allow_ec2_instance_delete_by_owner()
    policy = {
            'Version': '2012-10-17',
            'Statement': list(map(lambda x: x.to_json(), statements)),
    }
    # doc-end
    return policy


pretty = json.dumps(get_policy(), indent=4)
print(pretty)
