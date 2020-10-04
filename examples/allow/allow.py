import iam_floyd as statement

statement.Ec2() \
    .allow() \
    .to_start_instances() \
    .to_stop_instances()
