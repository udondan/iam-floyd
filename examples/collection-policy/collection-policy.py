import iam_floyd as statement

# doc-start
statements = statement.Collection().name_of_the_collection()

policy = {
    'Version': '2012-10-17',
    'Statement': list(map(lambda x: x.to_json(), statements)),
}
