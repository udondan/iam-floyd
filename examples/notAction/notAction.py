import iam_floyd as statement

# doc-start
statement.S3() \
    .allow() \
    .not_actions() \
    .to_delete_bucket() \
    .on_bucket('some-bucket')
