import json
from iam_floyd import Collection


def get_policy():
    # doc-start
    statements = Collection().allow_ec2_instance_delete_by_owner()
    policy = {
            'Version': '2012-10-17',
            'Statement': list(map(lambda x: x.to_json(), statements)),
    }
    # doc-end
    return policy


pretty = json.dumps(get_policy(), indent=4)
print(pretty)
