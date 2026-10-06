# IAM Floyd

**AWS [IAM policy statement](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html) generator with fluent interface.**

This is the standalone Python package, without dependencies. For use with AWS CDK, install `cdk-iam-floyd`.

```python
from iam_floyd import Statement

statement = (
    Statement.Ec2()
        .allow()
        .to_start_instances()
        .if_aws_request_tag('Owner', '${aws:username}')
)
print(statement.to_json())
```

Find the documentation at [Read the Docs](https://iam-floyd.readthedocs.io/en/latest/) and the source on [GitHub](https://github.com/udondan/iam-floyd).
