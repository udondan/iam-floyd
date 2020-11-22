import json
import iam_floyd as statement


def statements():
    # doc-start
    s1 = statement.Ec2() \
                .deny() \
                .all_permission_management_actions()

    s2 = statement.Ec2() \
                .allow() \
                .all_list_actions() \
                .all_read_actions()
    # doc-end
    return [s1, s2]


for s in statements():
    pretty = json.dumps(s.to_json(), indent=4, sort_keys=True)
    print(pretty)
