import json
import iam_floyd as statement

s = (
    # doc-start
    statement.S3() \
    .allow() \
    .all_actions() \
    .on('arn:aws:s3:::some-bucket',
        'arn:aws:s3:::another-bucket')
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
