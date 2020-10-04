import iam_floyd as statement

# doc-start
statement.Ec2() \
    .deny() \
    .all_permission_management_actions()

statement.Ec2() \
    .allow() \
    .all_list_actions() \
    .all_read_actions()
