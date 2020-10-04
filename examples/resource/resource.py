import iam_floyd as statement

# doc-start
statement.S3() \
    .allow() \
    .all_actions() \
    .on_bucket('some-bucket') \
    .on_object('some-bucket', 'some/path/*')
