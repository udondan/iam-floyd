from cdk_iam_floyd import Statement


def example():
    # doc-start
    my_statement = Statement.Ec2()
    my_statement.allow()
    my_statement.to_start_instances()
    my_statement.to_stop_instances()
    # doc-end
    return my_statement
