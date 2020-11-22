import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Ec2() \
        .to_start_instances() \
        .to_stop_instances()
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
