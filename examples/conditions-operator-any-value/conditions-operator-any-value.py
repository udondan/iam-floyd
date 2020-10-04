import iam_floyd as statement

# doc-start
statement.Dynamodb() \
    .deny() \
    .to_put_item() \
    .on_table('Thread') \
    .if_attributes(['ID', 'PostDateTime'],
                   statement.Operator().string_equals().for_any_value())
