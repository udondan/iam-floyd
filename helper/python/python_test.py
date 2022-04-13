import json
import sys
import boto3
import string
import random

client = boto3.client('iam')
account_id = boto3.client('sts').get_caller_identity().get('Account')


def out(statements):
    for s in statements:
        pretty = json.dumps(s.to_json(), indent=4)
        print(pretty)


def deploy(statements, type='policy'):
    if type == 'policy':
        deploy_policy(statements)
    elif type == 'assume':
        deploy_assume(statements)
    elif type == 'access':
        deploy_access(statements)
    else:
        raise Exception('Unknown deploy type: %s' % type)


def deploy_policy(statements):
    policy_name = new_random_name()

    log('Creating test policy %s...\n' % policy_name)

    document = make_policy_document(statements)

    response = client.create_policy(
        PolicyName=policy_name,
        PolicyDocument=document,
        Description='Testing policy creation'
    )

    log('Deleting test policy %s...\n' % policy_name)
    client.delete_policy(
        PolicyArn=response['Policy']['Arn']
    )


def deploy_assume(statements):
    role_name = new_random_name()

    log('Creating test role %s...\n' % role_name)

    document = make_policy_document(statements)

    client.create_role(
        RoleName=role_name,
        AssumeRolePolicyDocument=document,
        Description='Testing assume policy creation',
    )

    client.delete_role(
        RoleName=role_name
    )


def deploy_access(statements):
    bucket_name = 'random-bucket-for-floyd-' + new_random_name().lower()

    log('Creating test bucket %s...\n' % bucket_name)

    document = make_policy_document(
        statements, replace_s3_examples, bucket_name)

    s3 = boto3.client('s3')
    s3.create_bucket(Bucket=bucket_name)

    log('Attaching bucket policy...\n')
    s3.put_bucket_policy(
        Bucket=bucket_name,
        Policy=document,
    )

    log('Deleting test bucket %s...\n' % bucket_name)
    s3.delete_bucket(Bucket=bucket_name)


# replace potential sensitive content in examples code
def replace_s3_examples(j, bucket_name):
    if 'NotPrincipal' in j['Statement'][0] and 'AWS' \
            in j['Statement'][0]['NotPrincipal']:
        j['Statement'][0]['NotPrincipal']['AWS'][0] = \
            j['Statement'][0]['NotPrincipal']['AWS'][0].replace(
            'Bob', 'dev')
        j['Statement'][0]['NotPrincipal']['AWS'][0] = \
            j['Statement'][0]['NotPrincipal']['AWS'][0].replace(
            '1234567890', account_id)

    if 'Resource' in j['Statement'][0]:
        j['Statement'][0]['Resource'] = \
            j['Statement'][0]['Resource'].replace(
            'example-bucket', bucket_name)
    return j


def make_policy_document(statements, filter=None, filter_options=None):
    j = {
        'Version': '2012-10-17',
        'Statement': list(map(lambda x: x.to_json(), statements))
    }

    if filter is not None:
        j = filter(j, filter_options)

    return json.dumps(j, indent=4)


def new_random_name():
    return ''.join(random.choice(
        string.ascii_uppercase + string.digits) for _ in range(10))


def log(data):
    sys.stderr.write(data)
