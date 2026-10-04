# IAM Floyd

[![Source](https://img.shields.io/github/stars/udondan/iam-floyd?logo=github&label=GitHub%20Stars)][source]
[![iam-floyd](https://img.shields.io/github/v/release/udondan/iam-floyd)][source]
[![Packages](https://img.shields.io/badge/Packages-npm%20%7C%20PyPI%20%7C%20Maven%20%7C%20NuGet%20%7C%20Go-yellow)][packages]
[![Documentation](https://img.shields.io/badge/Documentation-Read%20the%20Docs-orange)][documentation]
[![GitHub](https://img.shields.io/github/license/udondan/iam-floyd)][license]

<!-- put back - when we actually have tests
[![Test Coverage](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/test_coverage)](https://codeclimate.com/github/udondan/iam-floyd/test_coverage)
-->

**AWS [IAM policy statement][statement] generator with fluent interface.**

<!-- stats -->

Support for:

- 455 Services
- 22036 Actions
- 2329 Resource Types
- 2484 Condition keys

<!-- /stats -->

![EXPERIMENTAL](https://img.shields.io/badge/stability-experimantal-orange?style=for-the-badge)**<br>This is an early version of the package. The API will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.**

## Documentation

Find the documentation at [Read the Docs][documentation].

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/movie-preview.png)](https://www.youtube.com/watch?v=4dHY8qPHbKA 'Auto completion demo')

## Packages

There are two different package variants available:

- **iam-floyd**: Can be used in AWS SDK or for whatever you need an IAM policy statement for <br>[![npm](https://img.shields.io/npm/dt/iam-floyd?label=npm&color=blueviolet)](https://www.npmjs.com/package/iam-floyd)

  iam-floyd is also available as a native package for Python and Java, without Node.js and without dependencies:<br>
  [![PyPI](https://img.shields.io/pypi/v/iam-floyd?label=PyPI)](https://pypi.org/project/iam-floyd/)
  [![Maven Central](https://img.shields.io/maven-central/v/com.udondan/iam-floyd?label=Maven%20Central)](https://central.sonatype.com/artifact/com.udondan/iam-floyd)

- **cdk-iam-floyd**: Integrates into [AWS CDK] and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)<br>[![npm](https://img.shields.io/npm/dt/cdk-iam-floyd?label=npm&color=orange)](https://www.npmjs.com/package/cdk-iam-floyd)

  **Starting with version 0.300.0, the packages are compatible with CDK v2.** For CDK v1 you can use any version up to:<br>
  [![npm CDK v1](https://img.shields.io/badge/npm-0.286.0-yellow)](https://www.npmjs.com/package/cdk-iam-floyd/v/0.286.0)

  cdk-iam-floyd is also available for Python, Java, .NET and Go:<br>
  [![PyPI](https://img.shields.io/pypi/v/cdk-iam-floyd?label=PyPI)](https://pypi.org/project/cdk-iam-floyd/)
  [![Maven Central](https://img.shields.io/maven-central/v/com.udondan/cdk-iam-floyd?label=Maven%20Central)](https://central.sonatype.com/artifact/com.udondan/cdk-iam-floyd)
  [![NuGet](https://img.shields.io/nuget/v/CDK.IAM.Floyd?label=NuGet)](https://www.nuget.org/packages/CDK.IAM.Floyd)
  `go get udondan.github.io/iam-floyd/go/cdkiamfloyd`

## CDK Compatibility Matrix

| CDK        | cdk-iam-floyd              |
| ---------- | -------------------------- |
| <= 1.151.0 | <= 0.285.0                 |
| >= 1.152.0 | 0.286.0                    |
| >= 1.158.0 | **No compatible version!** |
| >= 2.0.0   | >= 0.300.0                 |
| >= 2.20.0  | >= 0.351.0                 |
| >= 2.26.0  | >= 0.377.0                 |
| 2.29.x     | **No compatible version!** |
| >= 2.30.0  | >= 0.391.0                 |

---

## Legal

The service models in the [lib/generated/model](https://github.com/udondan/iam-floyd/tree/main/lib/generated/model) folder, and the code generated from them, are derived from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

IAM Floyd is licensed under [Apache License 2.0][license]. Dependencies might be released under different licenses.

[source]: https://github.com/udondan/iam-floyd
[documentation]: https://iam-floyd.readthedocs.io/en/latest/
[license]: https://github.com/udondan/iam-floyd/blob/main/LICENSE
[statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
[packages]: https://iam-floyd.readthedocs.io/en/latest/packages.html
[AWS CDK]: https://aws.amazon.com/cdk/
