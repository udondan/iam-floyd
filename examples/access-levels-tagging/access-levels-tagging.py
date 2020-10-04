import iam_floyd as statement

# doc-start
statement.Ec2() \
    .allow() \
    .all_tagging_actions()
