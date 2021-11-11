# IAM Floyd

[![Source](https://img.shields.io/github/stars/udondan/iam-floyd?logo=github&label=GitHub%20Stars)][source]
[![iam-floyd](https://img.shields.io/github/v/release/udondan/iam-floyd)][source]
[![Twitter](https://badgen.net/twitter/follow/heyiamfloyd?icon=twitter)][twitter]
[![libraries.io](https://img.shields.io/badge/packages-libraries.io-yellow)][libraries.io]
[![Documentation](https://img.shields.io/badge/Documentation-Read%20the%20Docs-orange)][documentation]
[![GitHub](https://img.shields.io/github/license/udondan/iam-floyd)][license]
[![Maintainability](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/maintainability)](https://codeclimate.com/github/udondan/iam-floyd/maintainability)
<!-- put back - when we actually have tests
[![Test Coverage](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/test_coverage)](https://codeclimate.com/github/udondan/iam-floyd/test_coverage)
-->

**AWS [IAM policy statement][statement] generator with fluent interface.**

<!-- stats -->
Support for:

- 285 Services
- 11075 Actions
- 1158 Resource Types
- 1154 Condition keys
<!-- /stats -->

![EXPERIMENTAL](https://img.shields.io/badge/stability-experimantal-orange?style=for-the-badge)**<br>This is an early version of the package. The API will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.**

## Documentation

Find the documentation at [Read the Docs][documentation].

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/movie-preview.png)](https://www.youtube.com/watch?v=4dHY8qPHbKA "Auto completion demo")

## Packages

There are two different package variants available:

- **iam-floyd**: Can be used in AWS SDK, Boto 3 or for whatever you need an IAM policy statement for <br>[![npm](https://img.shields.io/npm/dt/iam-floyd?label=npm&color=blueviolet)](https://www.npmjs.com/package/iam-floyd)
[![PyPI](https://img.shields.io/pypi/dm/iam-floyd?label=pypi&color=blueviolet)](https://pypi.org/project/iam-floyd/)
- **cdk-iam-floyd**: Integrates into [AWS CDK] and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)<br>[![npm](https://img.shields.io/npm/dt/cdk-iam-floyd?label=npm&color=orange)](https://www.npmjs.com/package/cdk-iam-floyd)
[![PyPI](https://img.shields.io/pypi/dm/cdk-iam-floyd?label=pypi&color=orange)](https://pypi.org/project/cdk-iam-floyd/)

  If you need compatibility with CDK v2, you can use:<br>
  [![npm CDK v2](https://img.shields.io/badge/npm-0.207.1--pre.0-yellow)](https://www.npmjs.com/package/cdk-iam-floyd/v/0.207.1-pre.0)
  [![PyPI CDK v2](https://img.shields.io/badge/pypi-0.207.1.dev0-yellow)](https://pypi.org/project/cdk-iam-floyd/0.207.1.dev0/)

Find them all on [libraries.io].

---

## Legal

The code contained in the [lib/generated](https://github.com/udondan/iam-floyd/tree/main/lib/generated) folder is generated from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

IAM Floyd is licensed under [Apache License 2.0][license]. Dependencies might be released under different licenses. Especially the bundled packages [regex-parser](https://www.npmjs.com/package/regex-parser) and [common-substrings](https://www.npmjs.com/package/common-substrings) are released under the MIT License.

   [source]: https://github.com/udondan/iam-floyd
   [documentation]: https://iam-floyd.readthedocs.io/en/latest/
   [npm]: https://www.npmjs.com/package/iam-floyd
   [license]: https://github.com/udondan/iam-floyd/blob/main/LICENSE
   [statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
   [libraries.io]: https://libraries.io/search?q=iam-floyd
   [AWS CDK]: https://aws.amazon.com/cdk/
   [twitter]: https://twitter.com/heyiamfloyd
