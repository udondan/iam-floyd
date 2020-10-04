import iam_floyd as statement

statement.Dynamodb() \
    .allow() \
    .to_get_item() \
    .if_attributes(
        ["ID", "Message", "Tags"],
        statement.Operator().string_equals().for_all_values())
