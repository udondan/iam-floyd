import aws_cdk as cdk
from aws_cdk import aws_s3 as s3
from aws_cdk import aws_sns as sns
from cdk_iam_floyd import Statement


def example():
    stack = cdk.Stack()
    # doc-start
    bucket = s3.Bucket(stack, 'Bucket')
    topic = sns.CfnTopic(stack, 'Topic')

    s1 = (
        Statement.S3()
            .allow()
            .to_list_bucket()
            .on_bucket(bucket)
    )

    s2 = (
        Statement.Sns()
            .allow()
            .to_publish()
            .on_topic(topic)
    )
    # doc-end
    return [s1, s2]
