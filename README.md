# IAM Floyd

[![Release](https://img.shields.io/github/v/release/udondan/iam-floyd?label=release)](https://github.com/udondan/iam-floyd/releases)
[![Documentation](https://img.shields.io/readthedocs/iam-floyd?label=docs)](https://iam-floyd.readthedocs.io/en/latest/)
[![Construct Hub](https://img.shields.io/badge/Construct%20Hub-cdk--iam--floyd-blue)](https://constructs.dev/packages/cdk-iam-floyd)
[![License](https://img.shields.io/github/license/udondan/iam-floyd)](https://github.com/udondan/iam-floyd/blob/main/LICENSE)

**AWS [IAM policy statement][statement] generator with a fluent interface, for TypeScript, JavaScript, Python, Java, C# and Go.**

IAM Floyd has a class for every AWS service, with a method for every action, resource type and condition key. Your IDE completes them and shows their documentation, so you neither look up action names and ARN formats, nor deploy policies with typos.

```ts
import { Statement } from 'iam-floyd';

const statement = new Statement.Ec2()
  .allow()
  .toStartInstances()
  .toStopInstances()
  .ifResourceTag('Owner', '${aws:username}');
```

```json
{
  "Condition": {
    "StringLike": {
      "ec2:ResourceTag/Owner": "${aws:username}"
    }
  },
  "Action": ["ec2:StartInstances", "ec2:StopInstances"],
  "Resource": "*",
  "Effect": "Allow"
}
```

<details>
<summary>Python</summary>

```python
from iam_floyd import Statement

statement = (
    Statement.Ec2()
        .allow()
        .to_start_instances()
        .to_stop_instances()
        .if_resource_tag('Owner', '${aws:username}')
)
```

</details>

<details>
<summary>Java</summary>

```java
import com.udondan.iamFloyd.statement.Ec2;

Ec2 statement = new Ec2()
    .allow()
    .toStartInstances()
    .toStopInstances()
    .ifResourceTag("Owner", "${aws:username}");
```

</details>

<details>
<summary>C#</summary>

```csharp
using Statement = IAM.Floyd.Statement;

var statement = new Statement.Ec2()
    .Allow()
    .ToStartInstances()
    .ToStopInstances()
    .IfResourceTag("Owner", "${aws:username}");
```

</details>

<details>
<summary>Go</summary>

```go
import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

s := statement.NewEc2(nil).
	Allow().
	ToStartInstances().
	ToStopInstances().
	IfResourceTag(iamfloyd.String("Owner"), iamfloyd.String("${aws:username}"), nil)
```

</details>

<!-- stats -->

Support for:

- 455 Services
- 22036 Actions
- 2329 Resource Types
- 2497 Condition keys

<!-- /stats -->

## Features

- **Complete**: generated from the [AWS documentation][aws-docs], and updated every week
- **Access levels**: add all actions of an access level, e.g. `allReadActions()` or `allWriteActions()`
- **Regular expressions**: add all actions that match a pattern with `allMatchingActions('/vpn/i')`
- **Resources**: build ARNs with a method per resource type, e.g. `onBucket('example-bucket')`, with defaults for partition, region and account
- **Conditions**: a method per condition key, with operators like `ForAnyValue:StringEquals` or `IfExists`
- **AWS CDK**: `cdk-iam-floyd` statements are an [`iam.PolicyStatement`][cdk-policy-statement] of the AWS CDK
- **Policies**: a policy document that knows the maximum size of its type, validates its estimated size and splits itself into several policies
- **Collections** of common statements, and the names of all AWS managed policies
- **Policy converter**: turn an existing JSON policy into IAM Floyd code with the [online converter][converter]

## Packages

IAM Floyd comes in two variants, with the same API and the same version number in every language:

- **`iam-floyd`** creates statements as JSON, for the AWS SDKs, CloudFormation, Terraform or anything else that takes an IAM policy. The packages have no dependencies. In Python, Java, C# and Go, they are native and do not need Node.js.
- **`cdk-iam-floyd`** creates statements of the [AWS CDK][aws-cdk] v2. In Python, Java, C# and Go, they are built with [jsii][jsii], like the AWS CDK itself, and need Node.js.

| Language                | `iam-floyd`                            | `cdk-iam-floyd`                                |
| ----------------------- | -------------------------------------- | ---------------------------------------------- |
| TypeScript / JavaScript | [![npm][npm-badge]][npm]               | [![npm][cdk-npm-badge]][cdk-npm]               |
| Python                  | [![PyPI][pypi-badge]][pypi]            | [![PyPI][cdk-pypi-badge]][cdk-pypi]            |
| Java                    | [![Maven Central][maven-badge]][maven] | [![Maven Central][cdk-maven-badge]][cdk-maven] |
| C# / .NET               | [![NuGet][nuget-badge]][nuget]         | [![NuGet][cdk-nuget-badge]][cdk-nuget]         |
| Go                      | [![Go][go-badge]][go]                  | [![Go][go-badge]][cdk-go]                      |

### Installation

```bash
# TypeScript / JavaScript
npm install iam-floyd           # or cdk-iam-floyd

# Python
pip install iam-floyd           # or cdk-iam-floyd

# Java (Maven), with the version of the release
#   com.udondan:iam-floyd       # or com.udondan:cdk-iam-floyd

# C# / .NET
dotnet add package IAM.Floyd    # or CDK.IAM.Floyd

# Go
go get udondan.github.io/iam-floyd/go/iamfloyd   # or .../go/cdkiamfloyd
```

IAM Floyd has not reached 1.0.0 yet, and the API can still change between releases. Pin the exact version.

The requirements of each package and the compatibility with the AWS CDK are listed in the [documentation][packages].

## Documentation

The [documentation][documentation] explains all features, with examples in every language.

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/movie-preview.png)](https://www.youtube.com/watch?v=4dHY8qPHbKA 'Auto completion demo')

## Legal

The service models in the [lib/generated/model](https://github.com/udondan/iam-floyd/tree/main/lib/generated/model) folder, and the code generated from them, are derived from the [AWS documentation][aws-docs]. The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

IAM Floyd is licensed under [Apache License 2.0][license]. Dependencies might be released under different licenses.

[statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
[aws-docs]: https://docs.aws.amazon.com/service-authorization/latest/reference/reference_policies_actions-resources-contextkeys.html
[aws-cdk]: https://aws.amazon.com/cdk/
[cdk-policy-statement]: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_iam.PolicyStatement.html
[jsii]: https://aws.github.io/jsii/
[documentation]: https://iam-floyd.readthedocs.io/en/latest/
[packages]: https://iam-floyd.readthedocs.io/en/latest/packages.html
[converter]: https://iam-floyd.readthedocs.io/en/latest/policy-converter.html
[license]: https://github.com/udondan/iam-floyd/blob/main/LICENSE
[npm]: https://www.npmjs.com/package/iam-floyd
[npm-badge]: https://img.shields.io/npm/v/iam-floyd?label=npm&color=3178C6&logo=typescript&logoColor=white
[pypi]: https://pypi.org/project/iam-floyd/
[pypi-badge]: https://img.shields.io/pypi/v/iam-floyd?label=PyPI&color=3776AB&logo=python&logoColor=white
[maven]: https://central.sonatype.com/artifact/com.udondan/iam-floyd
[maven-badge]: https://img.shields.io/maven-central/v/com.udondan/iam-floyd?label=Maven%20Central&color=ED8B00&logo=openjdk&logoColor=white
[nuget]: https://www.nuget.org/packages/IAM.Floyd
[nuget-badge]: https://img.shields.io/nuget/v/IAM.Floyd?label=NuGet&color=512BD4&logo=dotnet&logoColor=white
[cdk-npm]: https://www.npmjs.com/package/cdk-iam-floyd
[cdk-npm-badge]: https://img.shields.io/npm/v/cdk-iam-floyd?label=npm&color=3178C6&logo=typescript&logoColor=white
[cdk-pypi]: https://pypi.org/project/cdk-iam-floyd/
[cdk-pypi-badge]: https://img.shields.io/pypi/v/cdk-iam-floyd?label=PyPI&color=3776AB&logo=python&logoColor=white
[cdk-maven]: https://central.sonatype.com/artifact/com.udondan/cdk-iam-floyd
[cdk-maven-badge]: https://img.shields.io/maven-central/v/com.udondan/cdk-iam-floyd?label=Maven%20Central&color=ED8B00&logo=openjdk&logoColor=white
[cdk-nuget]: https://www.nuget.org/packages/CDK.IAM.Floyd
[cdk-nuget-badge]: https://img.shields.io/nuget/v/CDK.IAM.Floyd?label=NuGet&color=512BD4&logo=dotnet&logoColor=white
[go]: https://pkg.go.dev/udondan.github.io/iam-floyd/go/iamfloyd
[cdk-go]: https://pkg.go.dev/udondan.github.io/iam-floyd/go/cdkiamfloyd
[go-badge]: https://img.shields.io/github/v/release/udondan/iam-floyd?label=Go&color=00ADD8&logo=go&logoColor=white
