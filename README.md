# IAM Floyd

[![Source](https://img.shields.io/github/stars/udondan/iam-floyd?logo=github&label=GitHub%20Stars)][source]
[![GitHub](https://img.shields.io/github/license/udondan/iam-floyd)][license]

[![npm package](https://img.shields.io/npm/v/iam-floyd?color=brightgreen)][npm]
[![PyPI package](https://img.shields.io/pypi/v/iam-floyd?color=brightgreen)][PyPI]
[![NuGet package](https://img.shields.io/nuget/v/IAM.Floyd?color=brightgreen)][NuGet]
[![Maven package](https://img.shields.io/badge/maven-v0.30.0-brightgreen)][Maven]

![Downloads](https://img.shields.io/badge/-DOWNLOADS:-brightgreen?color=gray)
[![npm](https://img.shields.io/npm/dt/iam-floyd?label=npm&color=blueviolet)][npm]
[![PyPI](https://img.shields.io/pypi/dm/iam-floyd?label=pypi&color=blueviolet)][PyPI]
[![NuGet](https://img.shields.io/nuget/dt/IAM.Floyd?label=nuget&color=blueviolet)][NuGet]

[![Maintainability](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/maintainability)](https://codeclimate.com/github/udondan/iam-floyd/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/test_coverage)](https://codeclimate.com/github/udondan/iam-floyd/test_coverage)

**AWS [IAM policy statement][statement] generator with fluent interface.**

<!-- stats -->
Support for:

- 234 Services<br>
- 7705 Actions<br>
- 746 Resource Types<br>
- 447 Conditions
<!-- /stats -->

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/master/docs/movie-preview.png)](https://www.youtube.com/watch?v=ivG6VnbwMB0 "Auto completion demo")

> This is an early version of the package. The signature of methods will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.
>
> If you see something off, think something could be done better or have any other suggestion, speak up. :-)

---

<!-- vscode-markdown-toc -->
* [Usage](#Usage)
* [Examples](#Examples)
* [Methods](#Methods)
	* [allow](#allow)
	* [deny](#deny)
	* [allActions](#allActions)
	* [if*, if](#ifif)
	* [on*, on](#onon)
	* [notActions](#notActions)
	* [notResources](#notResources)
* [Collections](#Collections)
	* [ec2TagBasedAuthorization](#ec2TagBasedAuthorization)
* [Floyd?](#Floyd)
* [Similar projects](#Similarprojects)
* [Legal](#Legal)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Usage'></a>Usage

There are two different package variants available:

* **iam-floyd**: Can be used in AWS SDK, Boto 3 or for whatever you need an IAM policy statement for
* **cdk-iam-floyd**: Integrates into [AWS CDK] and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)

The package contains a statement provider for each AWS service, e.g. `Ec2`. A statement provider is a class with methods for each and every available action, resource type and condition. Calling such method will add the action/resource/condition to the statement:

```typescript
import * as statement from 'iam-floyd';

new statement.Ec2().startInstances();
```

Every method returns the statement provider, so you can chain method calls:

```typescript
new statement.Ec2()
  .startInstances()
  .stopInstances();
```

The default effect of any statement is `Allow`. To add some linguistic sugar you can explicitly call the `allow()` method:

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .stopInstances();
```

And of course `deny()`:

```typescript
new statement.Ec2()
  .deny()
  .startInstances()
  .stopInstances();
```

If you don't want to be verbose and add every single action manually to the statement, you discovered the reason why this package was created. You can work with [access levels]!

There are 5 access levels you can use: `LIST`, `READ`, `WRITE`, `PERMISSION_MANAGEMENT` and `TAGGING`:

```typescript
new statement.Ec2()
  .allow()
  .allActions(
    statement.AccessLevel.LIST,
    statement.AccessLevel.READ
  );
```

The `allActions()` method also accepts regular expressions which test against the action name:

```typescript
new statement.Ec2()
  .deny()
  .allActions(/vpn/i);
```

If no value is passed, all actions (`ec2:*`) will be added:

```typescript
new statement.Ec2()
  .allow()
  .allActions();
```

For every available condition key, there are `if*()` methods available.

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .ifEncrypted()
  .ifInstanceType(['t3.micro', 't3.nano'])
  .ifAssociatePublicIpAddress(false)
  .ifRequestTag('Owner', 'John');
```

If you want to add a condition not covered by the available methods, you can define just any condition yourself via `if()`:

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .if('aws:RequestTag/Owner', 'John');
```

The default operator for conditions of type [String](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String) is `StringLike`.

Most of the `if*()` methods allow an optional operator as last argument:

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .if('aws:RequestTag/Owner', '*John*', 'StringEquals');
```

By default the statement applies to all resources. To limit to specific resources, add them via `on*()`.

For every resource type an `on*()` method exists:

```typescript
new statement.S3()
  .allow()
  .allActions()
  .onBucket('some-bucket')
  .onObject('some-bucket', 'some/path/*');
```

If instead you have an ARN ready, use the `on()` method:

```typescript
new statement.S3()
  .allow()
  .allActions()
  .on(
    'arn:aws:s3:::some-bucket',
    'arn:aws:s3:::another-bucket'
  );
```

To invert the policy you can use `notActions()` and `notResources()`:

```typescript
new statement.S3()
  .allow()
  .notActions()
  .notResources()
  .deleteBucket()
  .onBucket('some-bucket');
```

## <a name='Examples'></a>Examples

```typescript
const policy = {
  Version: '2012-10-17',
  Statement: [
    new statement.Ec2()
      .allow()
      .startInstances()
      .ifRequestTag('Owner', '${aws:username}'),
    new statement.Ec2()
      .allow()
      .stopInstances()
      .ifResourceTag('Owner', '${aws:username}'),
    new statement.Ec2()
      .allow()
      .allActions(
        statement.AccessLevel.LIST,
        statement.AccessLevel.READ
    ),
  ]
}
```

```typescript
const policy = {
  Version: '2012-10-17',
  Statement: [
    new statement.Cloudformation() // allow all CFN actions
      .allow()
      .allActions(),
    new statement.All() // allow absolutely everything that is triggered via CFN
      .allow()
      .allActions()
      .ifCalledVia('cloudformation.amazonaws.com'),
    new statement.S3() // allow access to the CDK staging bucket
      .allow()
      .allActions()
      .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
    new statement.Account() // even when triggered via CFN, do not allow modifications of the account
      .deny()
      .allActions(
        statement.AccessLevel.PERMISSION_MANAGEMENT,
        statement.AccessLevel.WRITE
      ),
    new statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
      .deny()
      .allActions(
        statement.AccessLevel.PERMISSION_MANAGEMENT,
        statement.AccessLevel.WRITE
      ),
  ]
}
```

## <a name='Methods'></a>Methods

### <a name='allow'></a>allow

Sets the `Effect` of the statement to `Allow`.

```typescript
new statement.Ec2()
  .allow()
  .stopInstances();
```

### <a name='deny'></a>deny

Sets the `Effect` of the statement to `Deny`.

```typescript
new statement.Ec2()
  .deny()
  .stopInstances();
```

### <a name='allActions'></a>allActions

This method allows you to add multiple actions at once. If called without parameters, it adds all actions of the service.

```typescript
new statement.Ec2()
  .allow()
  .allActions();
```

The method can take regular expressions and [access levels] as options and will add only the matching actions:

```typescript
new statement.Ec2()
  .allow()
  .allActions(/vpn/i);
```

```typescript
new statement.Ec2()
  .allow()
  .allActions(
    statement.AccessLevel.LIST,
    statement.AccessLevel.READ
  );
```

There exist 5 access levels:

* LIST
* READ
* WRITE
* PERMISSION_MANAGEMENT
* TAGGING

### <a name='ifif'></a>if*, if

For every available condition key, there are `if*()` methods available.

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .ifEncrypted()
  .ifInstanceType(['t3.micro', 't3.nano'])
  .ifAssociatePublicIpAddress(false)
  .ifRequestTag('Owner', 'John')
```

Most of them allow an optional operator as last argument:

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .ifInstanceType('*.nano', 'StringLike')
```

If you want to add a condition not covered by the available methods, you can define just any condition yourself via `if()`:

```typescript
new statement.Ec2()
  .allow()
  .startInstances()
  .if('StringEquals', {
    'aws:RequestTag/Owner': '${aws:username}',
  });
```

### <a name='onon'></a>on*, on

Limit statement to specified resources.

For every resource type an `on*()` method exists:

```typescript
new statement.S3()
  .allow()
  .allActions()
  .onBucket('some-bucket');
```

If instead you have an ARN ready, use the `on()` method:

```typescript
new statement.S3()
  .allow()
  .allActions()
  .on('arn:aws:s3:::some-bucket');
```

If no resources are applied to the statement, it defaults to all resources (`*`). You can also be verbose and set this yourself:

```typescript
new statement.S3()
  .allow()
  .allActions()
  .on('*');
```

### <a name='notActions'></a>notActions

Switches the policy provider to use [NotAction].

```typescript
new statement.S3()
  .allow()
  .notActions()
  .deleteBucket()
  .onBucket('some-bucket');
```

### <a name='notResources'></a>notResources

Switches the policy provider to use [NotResource].

```typescript
new statement.S3()
  .allow()
  .notResources()
  .deleteBucket()
  .onBucket('some-bucket');
```

## <a name='Collections'></a>Collections

The package provides commonly used statement collections. These can be called  via `new statement.Collection().allowEc2InstanceDeleteByOwner()`. Collections return a list of statements, which then can be used in a policy like this:

```typescript
const policy = {
  Version: '2012-10-17',
  Statement: [
    ...new statement.Collection().allowEc2InstanceDeleteByOwner(),
  ],
}
```

Available collections are:

- **allowEc2InstanceDeleteByOwner**: Allows stopping EC2 instance only for the user who started them

### <a name='ec2TagBasedAuthorization'></a>ec2TagBasedAuthorization

Allows stopping EC2 instance only for the user who started them.

## <a name='Floyd'></a>Floyd?

George Floyd has been murdered by racist police officers on May 25th, 2020.

This package is not named after him to just remind you of him and his death. I want this package to be of great help to you and I want you to use it on a daily base. Every time you use it, I want you to remember our society is ill and needs change. The riots will stop. The news will fade. The issue persists!

If this statement annoys you, this package is not for you.

## <a name='Similarprojects'></a>Similar projects

* [cdk-iam-actions](https://github.com/spacerat/cdk-iam-actions)
* [cdk-iam-generator](https://github.com/srihariph/cdk-iam-generator)
* [iam-policy-generator](https://github.com/aletheia/iam-policy-generator)
* [policyuniverse](https://github.com/Netflix-Skunkworks/policyuniverse)
* [policy_sentry](https://github.com/salesforce/policy_sentry)

## <a name='Legal'></a>Legal

The code contained in the [lib](https://github.com/udondan/iam-floyd/tree/master/lib) folder is generated from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

   [source]: https://github.com/udondan/iam-floyd
   [npm]: https://www.npmjs.com/package/iam-floyd
   [PyPI]: https://pypi.org/project/iam-floyd/
   [NuGet]: https://www.nuget.org/packages/IAM.Floyd/
   [Maven]: https://github.com/udondan/iam-floyd/packages/258358
   [license]: https://github.com/udondan/iam-floyd/blob/master/LICENSE
   [statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
   [NotAction]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html
   [NotResource]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html
   [access levels]: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level
   [AWS CDK]: https://aws.amazon.com/cdk/
