import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Sts() \
        .deny() \
        .not_principals() \
        .to_assume_role() \
        .for_user('1234567890', 'Bob')
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
