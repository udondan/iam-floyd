import iam_floyd as statement

# doc-start
statement.Dynamodb() \
    .allow() \
    .to_get_item() \
    .on_table('Thread') \
    .if_attributes(['ID', 'Message', 'Tags'],
                   statement.Operator().string_equals().for_all_values())
