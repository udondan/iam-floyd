# IAM Floyd

[![Source](https://img.shields.io/github/stars/udondan/iam-floyd?logo=github&label=GitHub%20Stars)][source]
[![iam-floyd](https://img.shields.io/github/v/release/udondan/iam-floyd)][source]
[![GitHub](https://img.shields.io/github/license/udondan/iam-floyd)][license]
[![Maintainability](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/maintainability)](https://codeclimate.com/github/udondan/iam-floyd/maintainability)
[![CDKio](https://img.shields.io/badge/awscdk.io-cdk--iam--floyd-orange)][cdkio]
<!-- put back - when we actually have tests
[![Test Coverage](https://api.codeclimate.com/v1/badges/cdb84b5646c6805b1a23/test_coverage)](https://codeclimate.com/github/udondan/iam-floyd/test_coverage)
-->

**AWS [IAM policy statement][statement] generator with fluent interface.**

<!-- stats -->
Support for:

- 239 Services<br>
- 7951 Actions<br>
- 781 Resource Types<br>
- 458 Conditions
<!-- /stats -->

![EXPERIMENTAL](https://img.shields.io/badge/stability-experimantal-orange?style=for-the-badge)**<br>This is an early version of the package. The API will change while I implement new features. Therefore make sure you use an exact version in your `package.json` before it reaches 1.0.0.**

[![Auto completion demo](https://raw.githubusercontent.com/udondan/iam-floyd/main/docs/movie-preview.png)](https://www.youtube.com/watch?v=ivG6VnbwMB0 "Auto completion demo")

## <a name='Packages'></a>Packages

There are two different package variants available:

- **iam-floyd**: Can be used in AWS SDK, Boto 3 or for whatever you need an IAM policy statement for <br>[![npm](https://img.shields.io/npm/dt/iam-floyd?label=npm&color=blueviolet)](https://www.npmjs.com/package/iam-floyd)
[![PyPI](https://img.shields.io/pypi/dm/iam-floyd?label=pypi&color=blueviolet)](https://pypi.org/project/iam-floyd/)
[![NuGet](https://img.shields.io/nuget/dt/IAM.Floyd?label=nuget&color=blueviolet)](https://www.nuget.org/packages/IAM.Floyd/)
- **cdk-iam-floyd**: Integrates into [AWS CDK] and extends [`iam.PolicyStatement`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.PolicyStatement.html)<br>[![npm](https://img.shields.io/npm/dt/cdk-iam-floyd?label=npm&color=orange)](https://www.npmjs.com/package/cdk-iam-floyd)
[![PyPI](https://img.shields.io/pypi/dm/cdk-iam-floyd?label=pypi&color=orange)](https://pypi.org/project/cdk-iam-floyd/)
[![NuGet](https://img.shields.io/nuget/dt/CDK.IAM.Floyd?label=nuget&color=orange)](https://www.nuget.org/packages/CDK.IAM.Floyd/)

---

<!-- vscode-markdown-toc -->
* [Packages](#Packages)
* [Usage](#Usage)
* [Examples](#Examples)
* [Methods](#Methods)
	* [allow](#allow)
	* [deny](#deny)
	* [to*, to](#toto)
	* [allActions](#allActions)
	* [allMatchingActions](#allMatchingActions)
	* [allListActions](#allListActions)
	* [allReadActions](#allReadActions)
	* [allWriteActions](#allWriteActions)
	* [allPermissionManagementActions](#allPermissionManagementActions)
	* [allTaggingActions](#allTaggingActions)
	* [if*, if](#ifif)
	* [on*, on](#onon)
	* [notActions](#notActions)
	* [notResources](#notResources)
	* [notPrincipals](#notPrincipals)
	* [for*](#for)
* [Collections](#Collections)
	* [allowEc2InstanceDeleteByOwner](#allowEc2InstanceDeleteByOwner)
* [FAQ](#FAQ)
	* [Why should I use this package instead of writing my policies by hand?](#WhyshouldIusethispackageinsteadofwritingmypoliciesbyhand)
	* [How often will there be updates to reflect IAM changes?](#HowoftenwilltherebeupdatestoreflectIAMchanges)
	* [Do you release new packages when a new CDK version is released?](#DoyoureleasenewpackageswhenanewCDKversionisreleased)
	* [Is the package following semantic versioning?](#Isthepackagefollowingsemanticversioning)
	* [I don't like method chaining!](#Idontlikemethodchaining)
* [Floyd?](#Floyd)
* [Similar projects](#Similarprojects)
* [Legal](#Legal)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## <a name='Usage'></a>Usage

Depending on [your scenario](#Packages), you need to either import `iam-floyd` or `cdk-iam-floyd`:

```typescript
// for use without AWS CDK use the iam-floyd package
import * as statement from 'iam-floyd';

// for use with CDK use the cdk-iam-floyd package
import * as statement from 'cdk-iam-floyd';
```

Both packages contain a statement provider for each AWS service, e.g. `Ec2`. A statement provider is a class with methods for each and every available action, resource type and condition. Calling such method will add the action/resource/condition to the statement:

```typescript
new statement.Ec2().toStartInstances();
```

Every method returns the statement provider, so you can chain method calls:

```typescript
new statement.Ec2()
  .toStartInstances()
  .toStopInstances();
```

The default effect of any statement is `Allow`. To add some linguistic sugar you can explicitly call the `allow()` method:

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .toStopInstances();
```

And of course `deny()`:

```typescript
new statement.Ec2()
  .deny()
  .toStartInstances()
  .toStopInstances();
```

If you don't want to be verbose and add every single action manually to the statement, you can work with [access levels]. For every access level there is a distinct method available to add all related actions to the statement:

- `allListActions()`
- `allReadActions()`
- `allWriteActions()`
- `allPermissionManagementActions()`
- `allTaggingActions()`

```typescript
new statement.Ec2()
  .deny()
  .allPermissionManagementActions();

new statement.Ec2()
  .allow()
  .allListActions()
  .allReadActions();
```

To add actions based on regular expressions, use the method `allMatchingActions()`.

```typescript
new statement.Ec2()
  .deny()
  .allMatchingActions('/vpn/i');
```

To add all actions (e.g. `ec2:*`), call the `allActions()` method:

```typescript
new statement.Ec2()
  .allow()
  .allActions();
```

For every available condition key, there are `if*()` methods available.

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .ifEncrypted()
  .ifInstanceType(['t3.micro', 't3.nano'])
  .ifAssociatePublicIpAddress(false)
  .ifAwsRequestTag('Owner', 'John');
```

If you want to add a condition not covered by the available methods, you can define just any condition yourself via `if()`:

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .if('aws:RequestTag/Owner', 'John');
```

The default operator for conditions of type [String](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String) is `StringLike`.

Most of the `if*()` methods allow an optional operator as last argument:

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .if('aws:RequestTag/Owner', '*John*', 'StringEquals');
```

Statements without principals, by default, apply to all resources. To limit to specific resources, add them via `on*()`.

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
  .toDeleteBucket()
  .onBucket('some-bucket');
```

## <a name='Examples'></a>Examples

```typescript
const policy = {
  Version: '2012-10-17',
  Statement: [
    new statement.Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag('Owner', '${aws:username}'),
    new statement.Ec2()
      .allow()
      .toStopInstances()
      .ifResourceTag('Owner', '${aws:username}'),
    new statement.Ec2()
      .allow()
      .allListActions()
      .allReadActions(),
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
      .ifAwsCalledVia('cloudformation.amazonaws.com'),
    new statement.S3() // allow access to the CDK staging bucket
      .allow()
      .allActions()
      .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
    new statement.Account() // even when triggered via CFN, do not allow modifications of the account
      .deny()
      .allPermissionManagementActions()
      .allWriteActions(),
    new statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
      .deny()
      .allPermissionManagementActions()
      .allWriteActions(),
  ]
}
```

## <a name='Methods'></a>Methods

### <a name='allow'></a>allow

Sets the `Effect` of the statement to `Allow`.

```typescript
new statement.Ec2()
  .allow()
  .toStopInstances();
```

### <a name='deny'></a>deny

Sets the `Effect` of the statement to `Deny`.

```typescript
new statement.Ec2()
  .deny()
  .toStopInstances();
```

### <a name='toto'></a>to*, to

For every available action, there are `to*()` methods available.

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .toStopInstances();
```

### <a name='allActions'></a>allActions

This method adds all actions of the related service to the statement, e.g. `ec2:*`

```typescript
new statement.Ec2()
  .allow()
  .allActions();
```

### <a name='allMatchingActions'></a>allMatchingActions

Adds all actions matching regular expressions to the statement.

The regular expressions need to be in [Perl/JavaScript literal style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) and need to be passed as strings:

```typescript
new statement.Ec2()
  .allow()
  .allMatchingActions('/vpn/i');
```

### <a name='allListActions'></a>allListActions

Adds all actions with [access level][access levels] **list** to the statement.

```typescript
new statement.Ec2()
  .allow()
  .allListActions();
```

### <a name='allReadActions'></a>allReadActions

Adds all actions with [access level][access levels] **read** to the statement.

```typescript
new statement.Ec2()
  .allow()
  .allReadActions();
```

### <a name='allWriteActions'></a>allWriteActions

Adds all actions with [access level][access levels] **write** to the statement.

```typescript
new statement.Ec2()
  .allow()
  .allWriteActions();
```

### <a name='allPermissionManagementActions'></a>allPermissionManagementActions

Adds all actions with [access level][access levels] **permission management** to the statement.

```typescript
new statement.Ec2()
  .allow()
  .allPermissionManagementActions();
```

### <a name='allTaggingActions'></a>allTaggingActions

Adds all actions with [access level][access levels] **tagging** to the statement.

```typescript
new statement.Ec2()
  .allow()
  .allTaggingActions();
```

### <a name='ifif'></a>if*, if

For every available condition key, there are `if*()` methods available.

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .ifEncrypted()
  .ifInstanceType(['t3.micro', 't3.nano'])
  .ifAssociatePublicIpAddress(false)
  .ifAwsRequestTag('Owner', 'John')
```

Most of them allow an optional operator as last argument:

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .ifInstanceType('*.nano', 'StringLike')
```

[Global conditions](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html) are prefixed with `ifAws`, e.g. `ifAwsRequestedRegion()`

If you want to add a condition not covered by the available methods, you can define just any condition yourself via `if()`:

```typescript
new statement.Ec2()
  .allow()
  .toStartInstances()
  .if(
    'aws:RequestTag/Owner',
    '${aws:username}',
    'StringEquals' //optional
  );
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
  .toDeleteBucket()
  .onBucket('some-bucket');
```

### <a name='notResources'></a>notResources

Switches the policy provider to use [NotResource].

```typescript
new statement.S3()
  .allow()
  .notResources()
  .toDeleteBucket()
  .onBucket('some-bucket');
```

### <a name='notPrincipals'></a>notPrincipals

Switches the policy provider to use [NotPrincipal].

```typescript
new statement.Sts()
  .deny()
  .notPrincipals()
  .toAssumeRole()
  .forUser('1234567890', 'Bob');
```

### <a name='for'></a>for*

To create assume policies, use the `for*()` methods. There are methods available for any type of principal:

```typescript
new statement.Sts()
  .allow()
  .toAssumeRole()
  .forAccount('1234567890');

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forService('lambda.amazonaws.com');

new statement.Sts()
  .allow()
  .toAssumeRole()
  .forUser('1234567890', 'Bob');

new statement.Sts()
  .allow()
  .toAssumeRole()
  .forRole('1234567890', 'role-name');

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedCognito();

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedAmazon();

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedGoogle();

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forFederatedFacebook();

new statement.Sts()
  .allow()
  .toAssumeRoleWithSAML()
  .forSaml('1234567890', 'saml-provider');

new statement.Sts()
  .allow()
  .toAssumeRole()
  .forPublic();

new statement.Sts()
  .allow()
  .toAssumeRole()
  .forAssumedRoleSession('123456789', 'role-name', 'session-name');

new statement.Sts()
  .allow()
  .toAssumeRole()
  .forCanonicalUser('userID');

new statement.Sts()
  .allow()
  .toAssumeRole()
  .for('arn:foo:bar')
```

To reverse the assume policy you can call the `notPrincipals()` method:

```typescript
new statement.Sts()
  .deny()
  .notPrincipals()
  .toAssumeRole()
  .forUser('1234567890', 'Bob');
```

If you use the cdk variant of the package you should not have the need to manually create assume policies. But if you do, there is an additional method `forCdkPrincipal()` which takes any number of [`iam.IPrincipal`](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.IPrincipal.html) objects:

```typescript
new statement.Sts()
  .allow()
  .toAssumeRole()
  .forCdkPrincipal(
    new iam.ServicePrincipal('sns.amazonaws.com')
    new iam.ServicePrincipal('lambda.amazonaws.com')
  )
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

In Python you would need to convert the statements to JSON first:

```python
import iam_floyd as statement

statements = statement.Collection().allow_ec2_instance_delete_by_owner()

policy = {
    'Version': '2012-10-17',
    'Statement': list(map(lambda x: x.to_json(), statements)),
}
```

Available collections are:

- **allowEc2InstanceDeleteByOwner**: Allows stopping EC2 instance only for the user who started them

### <a name='allowEc2InstanceDeleteByOwner'></a>allowEc2InstanceDeleteByOwner

Allows stopping EC2 instance only for the user who started them.

## <a name='FAQ'></a>FAQ

### <a name='WhyshouldIusethispackageinsteadofwritingmypoliciesbyhand'></a>Why should I use this package instead of writing policies by hand?

All actions, conditions and resource types of every service are explorable via code suggestion. The related documentation is available in the method description. In most cases you can avoid reading the documentation completely.

IntelliSense makes it super easy to find what you're looking for. But it also helps with discovering things you were not looking for! Users write more secure/restrictive policies because they can easily type `.if` and add conditions with a `<tab>` without looking up multiple documentation pages.

By calling methods of a class you protect yourself against typos. If your code doesn't compile/run because of a typo, you'll immediately notice. If instead you have a typo in your action list, IAM will silently accept your policy. You won't notice until you see a warning in the IAM console.

Allowing/Denying all actions based on [access level][access levels] is a feature AWS missed when designing IAM policies. With this package it is as easy as calling `.allWriteActions()`,  `.allReadActions()` etc.

In IAM policies you can use wildcards to add actions to the statement. Wildcards often do not have enough power to define patterns and quickly include too many actions. This package enables you to select actions with regular expressions.

Limiting actions to specific resources via ARN is cumbersome. In this package, for every resource type there is a method, which not only helps with ARN creation - it also adds context to the code which helps to understand the meaning. The classical example here is to allow all actions on an S3 bucket and its containing objects:

```json
{
  "Effect": "Allow",
  "Action": "s3:*",
  "Resource": [
    "arn:aws:s3:::example-bucket"
    "arn:aws:s3:::example-bucket/*"
  ]
}
```

The first resource element is for the bucket itself. The second element is for the contained objects.

A beginner might make the mistake to think the first entry is superfluous and remove it. This package has distinct methods to limit actions to a bucket and/or objects:

```typescript
new statement.S3()
  .allow()
  .allActions()
  .onBucket('example-bucket')
  .onObject('example-bucket', '*');
```

And yes, it's shorter too.

### <a name='HowoftenwilltherebeupdatestoreflectIAMchanges'></a>How often will there be updates to reflect IAM changes?

Once per hour the AWS documentation is checked for updates. If anything changes, a new package will be released immediately.

### <a name='DoyoureleasenewpackageswhenanewCDKversionisreleased'></a>Do you release new packages when a new CDK version is released?

No. I believe it's a myth and a user error if packages are incompatible with new releases of the CDK. `cdk-iam-floyd` is based on cdk `^1.30.0` and so far I have not seen any issues.

### <a name='Isthepackagefollowingsemanticversioning'></a>Is the package following semantic versioning?

Mostly. For manual changes by developers this package follows [semver](https://semver.org/).

Automatic releases triggered by changes in the IAM documentation will always result in a minor update.

It has been observed that IAM actions have been [deleted](https://github.com/udondan/iam-floyd/releases/tag/v0.37.0) or [renamed](https://github.com/udondan/iam-floyd/releases/tag/v0.19.0). This case will not be reflected by a major update! If you had been using such a method your code will break. On the other hand, your code probably already is broken, since it creates a policy with invalid actions until you update to the latest release.

### <a name='Idontlikemethodchaining'></a>I don't like method chaining!

That's not a question. But yes, you can completely avoid method chaining:

```typescript
const myStatement = new statement.Ec2()
myStatement.allow()
myStatement.toStartInstances()
myStatement.toStopInstances();
```

## <a name='Floyd'></a>Floyd?

George Floyd has been murdered by racist police officers on May 25, 2020.

This package is not named after him to just remind you of him and his death. I want this package to be of great help to you and I want you to use it on a daily base. Every time you use it, I want you to remember our society is ill and needs change. The riots will stop. The news will fade. The issue persists!

If this statement annoys you, this package is not for you.

## <a name='Similarprojects'></a>Similar projects

* [cdk-iam-actions](https://github.com/spacerat/cdk-iam-actions)
* [cdk-iam-generator](https://github.com/srihariph/cdk-iam-generator)
* [iam-policy-generator](https://github.com/aletheia/iam-policy-generator)
* [policyuniverse](https://github.com/Netflix-Skunkworks/policyuniverse)
* [policy_sentry](https://github.com/salesforce/policy_sentry)

## <a name='Legal'></a>Legal

The code contained in the [lib/generated](https://github.com/udondan/iam-floyd/tree/main/lib/generated) folder is generated from the [AWS documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html). The class- and function-names and their description therefore are property of AWS.

AWS and their services are trademarks, registered trademarks or trade dress of AWS in the U.S. and/or other countries.

This project is not affiliated, funded, or in any way associated with AWS.

   [source]: https://github.com/udondan/iam-floyd
   [npm]: https://www.npmjs.com/package/iam-floyd
   [Maven]: https://github.com/udondan/iam-floyd/packages/258358
   [license]: https://github.com/udondan/iam-floyd/blob/main/LICENSE
   [statement]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html
   [NotAction]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html
   [NotResource]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html
   [NotPrincipal]: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notprincipal.html
   [access levels]: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_understand-policy-summary-access-level-summaries.html#access_policies_access-level
   [AWS CDK]: https://aws.amazon.com/cdk/
   [cdkio]: https://awscdk.io/packages/cdk-iam-floyd@0.70.1
