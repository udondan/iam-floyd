import iam_floyd as statement

# doc-start
my_statement = statement.Ec2()
my_statement.allow()
my_statement.to_start_instances()
my_statement.to_stop_instances()
