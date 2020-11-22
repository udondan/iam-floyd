import json
import iam_floyd as statement

s = (
    # doc-start
    statement.S3() \
    .allow() \
    .not_actions() \
    .to_delete_bucket() \
    .on_bucket('some-bucket')
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
