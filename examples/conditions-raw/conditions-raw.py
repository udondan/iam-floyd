import iam_floyd as statement

# doc-start
statement.Ec2() \
    .allow() \
    .to_start_instances(). \
    if_('ec2:missingCondition', 'some-value')
