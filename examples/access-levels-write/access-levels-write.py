import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Ec2() \
    .allow() \
    .all_write_actions()
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
