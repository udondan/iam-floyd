import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Ec2() \
    .allow() \
    .to_start_instances() \
    .if_encrypted() \
    .if_instance_type(['t3.micro', 't3.nano']) \
    .if_associate_public_ip_address(False) \
    .if_aws_request_tag('Owner', 'John')
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
