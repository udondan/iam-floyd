import iam_floyd as statement

# doc-start
statement.S3() \
    .allow() \
    .all_actions() \
    .on('arn:aws:s3:::some-bucket',
        'arn:aws:s3:::another-bucket')
