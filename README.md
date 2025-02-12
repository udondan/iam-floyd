# IAM Floyd

[![Source](https://img.shields.io/github/stars/udondan/iam-floyd?logo=github&label=GitHub%20Stars)][source]
[![iam-floyd](https://img.shields.io/github/v/release/udondan/iam-floyd)][source]
[![Mastodon](https://badgen.net/badge/Mastodon/iamfloyd@awscommunity.social/blue)][mastodon]
[![libraries.io](https://img.shields.io/badge/packages-libraries.io-yellow)][libraries.io]
[![Documentation](https://img.shields.io/badge/Documentation-Read%20the%20Docs-orange)][documentation]
[![GitHub](https://img.shields.io/github/license/udondan/iam-floyd)][license]

<!-- put back - when we actually have tests
[![Test Coverage](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/test_coverage)](https://codeclimate.com/github/udondan/iam-floyd/test_coverage)
-->

**AWS [IAM policy statement][statement] generator with fluent interface.**

<!-- stats -->
Support for:

- 416 Services
- 18260 Actions
- 1960 Resource Types
- 1910 Condition keys
<!-- /stats -->

![EXPERIMENTAL](https://img.shields.io/badge/stability-experimantal-orange?style=for-the-badge)**<br>This is an early version of the package. The API will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.**

## Documentation

Find the documentation at [Read the Docs][documentation].

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/movie-preview.png)](https://www.youtube.com/watch?v=4dHY8qPHbKA 'Auto completion demo')

## Packages

There are two different package variants available:

- **iam-floyd**: Can be used in AWS SDK or for whatever you need an IAM policy statement for <br>[![npm](https://img.shields.io/npm/dt/iam-floyd?label=npm&color=blueviolet)](https://www.npmjs.com/package/iam-floyd)
- **cdk-iam-floyd**: Integrates into [AWS CDK] and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)<br>[![npm](https://img.shields.io/npm/dt/cdk-iam-floyd?label=npm&color=orange)](https://www.npmjs.com/package/cdk-iam-floyd)

  **Starting with version 0.300.0, the packages are compatible with CDK v2.** For CDK v1 you can use any version up to:<br>
  [![npm CDK v1](https://img.shields.io/badge/npm-0.286.0-yellow)](https://www.npmjs.com/package/cdk-iam-floyd/v/0.286.0)

  Find them all on [libraries.io].

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

The code contained in the [lib/generated](https://github.com/udondan/iam-floyd/tree/main/lib/generated) folder is generated from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

IAM Floyd is licensed under [Apache License 2.0][license]. Dependencies might be released under different licenses.

   [source]: https://github.com/udondan/iam-floyd
   [documentation]: https://iam-floyd.readthedocs.io/en/latest/
   [npm]: https://www.npmjs.com/package/iam-floyd
   [license]: https://github.com/udondan/iam-floyd/blob/main/LICENSE
   [statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
   [libraries.io]: https://libraries.io/search?q=iam-floyd
   [AWS CDK]: https://aws.amazon.com/cdk/
   [mastodon]: https://awscommunity.social/@iamfloyd
