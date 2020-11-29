import json
import cdk_iam_floyd as statement
import aws_cdk.aws_iam as iam

s = (
    # doc-start
    statement.Sts() \
        .allow() \
        .to_assume_role() \
        .for_cdk_principal(iam.ServicePrincipal('sns.amazonaws.com'),
                           iam.ServicePrincipal('lambda.amazonaws.com'))
    # doc-end
).to_json()

pretty = json.dumps(s, indent=4)
print(pretty)
