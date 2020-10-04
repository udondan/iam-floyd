import iam_floyd as statement

# doc-start
statement.Ec2() \
    .deny() \
    .all_matching_actions('/vpn/i')
