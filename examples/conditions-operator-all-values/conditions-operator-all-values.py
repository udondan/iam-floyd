import json
import iam_floyd as statement

s = (
    # doc-start
    statement.Dynamodb() \
        .allow() \
        .to_get_item() \
        .on_table('Thread') \
        .if_attributes(['ID', 'Message', 'Tags'],
                       statement.Operator().string_equals().for_all_values())
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4, sort_keys=True)
print(pretty)
