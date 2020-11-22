import json
import iam_floyd as statement


def statements():
    # doc-start
    s1 = statement.Ec2() \
                .allow() \
                .to_start_instances()

    s2 = statement.Ec2() \
                .deny() \
                .to_stop_instances()
    # doc-end
    return [s1, s2]


for s in statements():
    pretty = json.dumps(s.to_json(), indent=4, sort_keys=True)
    print(pretty)
