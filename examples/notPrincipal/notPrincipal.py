import iam_floyd as statement

# doc-start
statement.Sts() \
    .deny() \
    .not_principals() \
    .to_assume_role() \
    .for_user('1234567890', 'Bob')
