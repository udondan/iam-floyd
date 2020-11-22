import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Dynamodb() \
    .deny() \
    .to_put_item() \
    .on_table('Thread') \
    .if_attributes(['ID', 'PostDateTime'],
                   statement.Operator().string_equals().for_any_value())
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
