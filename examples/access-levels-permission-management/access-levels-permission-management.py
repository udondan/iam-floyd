import iam_floyd as statement

# doc-start
statement.Ec2() \
    .allow() \
    .all_permission_management_actions()
