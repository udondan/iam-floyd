"""cdk-iam-floyd used directly and through a jsii library (floyd-consumer).

Prints one line per scenario: the name, a tab and the IAM policies of the stack as JSON (or FAIL).
"""

import json
import traceback

import aws_cdk as cdk
import floyd_consumer
from aws_cdk import aws_iam as iam
from aws_cdk.assertions import Template
from cdk_iam_floyd import Policy, PolicyType, Statement


def scenario(name):
    def wrap(fn):
        stack = cdk.Stack(cdk.App(), 'Stack')
        try:
            fn(stack)
            resources = Template.from_stack(stack).to_json().get('Resources', {})
            policies = {
                id: resource['Properties']['PolicyDocument']['Statement']
                for id, resource in resources.items()
                if resource['Type'] == 'AWS::IAM::Policy'
            }
            print(f'{name}\t{json.dumps(policies)}')
        except Exception as e:  # noqa: BLE001
            print(f'{name}\tFAIL {type(e).__name__}: {e} {traceback.format_exc(limit=4)!r}')
        return fn

    return wrap


def role(stack):
    return iam.Role(stack, 'Role', assumed_by=iam.ServicePrincipal('lambda.amazonaws.com'))


def reader(stack, **kwargs):
    return floyd_consumer.ReaderRole(stack, 'Reader', bucket_name='bucket', **kwargs)


@scenario('a direct use')
def _(stack):
    statement = Statement.S3().allow().to_get_object().on_object('my-bucket', '*')
    assert isinstance(statement, iam.PolicyStatement)
    role(stack).add_to_policy(statement.if_aws_source_ip('10.0.0.0/8'))


@scenario('b library uses floyd internally')
def _(stack):
    reader(stack)


@scenario('c statements passed as iam.PolicyStatement[]')
def _(stack):
    reader(stack, extra_statements=[Statement.Dynamodb().allow().to_get_item().on_table('t')])


@scenario('d statement passed as Statement.S3')
def _(stack):
    reader(stack).add_s3_statement(Statement.S3().allow().to_put_object().on_bucket('b'))


@scenario('e library calls a floyd method on a passed statement')
def _(stack):
    reader(stack).add_s3_list_statement(Statement.S3().allow().on_bucket('b'))


@scenario('f1 statement returned as iam.PolicyStatement')
def _(stack):
    role(stack).add_to_policy(floyd_consumer.Statements.sqs_read())


@scenario('f2 statement returned as Statement.S3, then chained')
def _(stack):
    role(stack).add_to_policy(floyd_consumer.Statements.s3_read().on_bucket('chained').deny())


@scenario('g library subclasses a floyd class')
def _(stack):
    role(stack).add_to_policy(floyd_consumer.ListBuckets().to_list_bucket())


@scenario('h statement passed as floyd base class')
def _(stack):
    role(stack).add_to_policy(floyd_consumer.Helpers.denied(Statement.S3().to_get_object()))


@scenario('i policy used as document')
def _(stack):
    policy = Policy(PolicyType.INLINE_ROLE)
    policy.add_statements(
        Statement.S3().allow().to_get_object().on_object('bucket', '*'),
        Statement.Sqs().allow().to_send_message().on_queue('queue'),
    )
    policy.validate()
    iam.Policy(stack, 'Document', document=policy, roles=[role(stack)])


@scenario('j policies of split used as documents')
def _(stack):
    policy = Policy(PolicyType.MANAGED, 500)
    policy.add_statements(
        Statement.S3().allow().to_get_object().on_object('bucket', '*'),
        Statement.Sqs().allow().to_send_message().on_queue('queue'),
        Statement.Dynamodb().allow().to_get_item().on_table('table'),
    )
    roles = [role(stack)]
    for index, part in enumerate(policy.split()):
        iam.Policy(stack, f'Part{index}', document=part, roles=roles)
