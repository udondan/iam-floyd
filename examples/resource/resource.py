import json
import iam_floyd as statement

s = (
    # doc-start
    statement.S3() \
        .allow() \
        .all_actions() \
        .on_bucket('example-bucket') \
        .on_object('example-bucket', 'some/path/*')
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
