import cdk_iam_floyd as statement
import aws_cdk.aws_iam as iam

# doc-start
statement.Sts() \
    .allow() \
    .to_assume_role() \
    .for_cdk_principal(iam.ServicePrincipal('sns.amazonaws.com'),
                       iam.ServicePrincipal('lambda.amazonaws.com'))
