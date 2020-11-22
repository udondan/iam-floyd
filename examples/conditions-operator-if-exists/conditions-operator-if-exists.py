import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Ec2() \
    .allow() \
    .to_start_instances() \
    .if_aws_request_tag('Environment',
                        ['Production', 'Staging', 'Dev'],
                        statement.Operator().string_equals().if_exists())
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
