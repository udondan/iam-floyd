import json
import iam_floyd as statement


def get_statements():
    # doc-start
    statements = statement.Collection().allow_ec2_instance_delete_by_owner()
    # doc-end
    return statements


j = list(map(lambda x: x.to_json(), get_statements()))
pretty = json.dumps(j, indent=4, sort_keys=True)
print(pretty)
