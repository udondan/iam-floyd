import iam_floyd as statement

# doc-start
statement.Ec2() \
    .allow() \
    .to_start_instances()

statement.Ec2() \
    .deny() \
    .to_stop_instances()
