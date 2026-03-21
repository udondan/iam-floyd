---
name: iam-floyd-usage
description: >
  Expert guidance for using the iam-floyd and cdk-iam-floyd libraries to generate
  AWS IAM policy statements with a fluent, type-safe interface in Node.js/TypeScript
  projects. Use this skill whenever a user asks how to write IAM policies with
  iam-floyd, wants to allow or deny AWS actions, needs to scope policies to specific
  resources, wants to add conditions to IAM statements, is working on least-privilege
  IAM in AWS CDK, or is trying to understand the library's API (toXxx, onXxx, ifXxx,
  allow/deny, allActions, etc.). Also trigger for questions about semantic policy
  classes, subclassing Statement providers, using Collections, or converting JSON
  policies to iam-floyd code.
---

# Using iam-floyd / cdk-iam-floyd

IAM Floyd is a **fluent, type-safe AWS IAM policy statement generator**. Instead of
writing error-prone JSON, you call strongly-typed methods and let the library build
the correct policy structure.

## Installation

```bash
# Standalone (no CDK)
npm install iam-floyd

# With AWS CDK
npm install cdk-iam-floyd
```

> Pin the version in `package.json` (e.g. `"iam-floyd": "0.762.0"`) — the package
> is pre-1.0.0 and the API may change. CDK v2 requires `cdk-iam-floyd >= 0.300.0`.

## Basic import

```typescript
// TypeScript / ESM
import { Statement } from 'iam-floyd';
import { Statement } from 'cdk-iam-floyd'; // CDK variant

// CommonJS
const { Statement } = require('iam-floyd');
```

---

## Core vocabulary — the fluent chain

Every statement follows this readable pattern:

```
new Statement.<Service>()  // pick the AWS service
  .allow() | .deny()       // effect  (allow is the default)
  .toXxx()                 // actions  ("to do something")
  .onXxx()                 // resources ("on a specific resource")
  .ifXxx()                 // conditions ("if a condition is met")
```

### Effect — `allow()` / `deny()`

The default effect is `Allow`, so `.allow()` is optional but improves readability.

```typescript
new Statement.Ec2().allow().toStartInstances();
new Statement.Ec2().deny().toStopInstances();
```

### Actions — `to*()`

Every documented IAM action has a typed `to*()` method:

```typescript
new Statement.Ec2()
  .allow()
  .toStartInstances()
  .toStopInstances()
  .toDescribeInstances();
```

**Bulk action helpers:**

| Method                                 | Effect                                    |
| -------------------------------------- | ----------------------------------------- |
| `allActions()`                         | Adds `ec2:*`                              |
| `allListActions()`                     | All actions with access level _List_      |
| `allReadActions()`                     | All actions with access level _Read_      |
| `allWriteActions()`                    | All actions with access level _Write_     |
| `allPermissionManagementActions()`     | All permission-management actions         |
| `allTaggingActions()`                  | All tagging actions                       |
| `allMatchingActions('/pattern/flags')` | Regex match (JS literal style, as string) |

> `allMatchingActions` and access-level methods expand to an **explicit list** at
> call time — they won't auto-update if AWS adds new actions later.

Use `.compact()` after access-level methods to collapse the list into wildcard
patterns (reduces policy size, but future AWS actions may match unexpectedly):

```typescript
new Statement.Ec2().allow().allReadActions().allListActions().compact();
// produces: ["ec2:Describe*", "ec2:Get*", ...]
```

**Missing action?** Use the generic `to()` escape hatch:

```typescript
.to('missingAction')  // becomes ec2:missingAction
```

### Resources — `on*()`

Every resource type has an `on*()` method that builds the correct ARN:

```typescript
new Statement.S3()
  .allow()
  .allActions()
  .onBucket('example-bucket')
  .onObject('example-bucket', 'some/prefix/*');

new Statement.Lambda().allow().toInvokeFunction().onFunction('my-function'); // optional: account, region, partition params

new Statement.Ec2()
  .allow()
  .toStartInstances()
  .toStopInstances()
  .onInstance('i-1234567890abcdef0');
```

In **cdk-iam-floyd**, omitting account/region defaults to the CDK stack's values.
In **iam-floyd** (standalone), they default to `*`.

**Override defaults for multiple resources** using `in*()` / `in()`:

```typescript
new Statement.Lambda()
  .allow()
  .toUpdateFunctionCode()
  .inAccount('098765432109')
  .inRegion('us-east-1')
  .inPartition('aws')
  .onFunction('my-function-1')
  .onFunction('my-function-2')

  // Shorthand:
  .in('098765432109', 'us-east-1', 'aws')
  .onFunction('my-function-1')

  // Switch context mid-statement:
  .in('111111111111', 'eu-west-1', 'aws')
  .onFunction('cross-account-function');
```

> `in*()` methods set defaults **only for resources added after them** — call them
> before the `on*()` calls they should affect.

**Already have an ARN?** Use the generic `on()`:

```typescript
.on('arn:aws:s3:::my-bucket', 'arn:aws:s3:::another-bucket')
```

### Conditions — `if*()`

Every documented condition key has an `if*()` method. Global AWS conditions start
with `ifAws*`.

```typescript
new Statement.Ec2()
  .allow()
  .toStartInstances()
  .ifEncrypted() // Bool condition
  .ifInstanceType(['t3.micro', 't3.nano']) // StringLike with multiple values
  .ifAssociatePublicIpAddress(false) // Bool: false
  .ifAwsRequestTag('Owner', 'alice'); // Tag condition
```

Multiple conditions on one statement are AND-ed together. For OR logic, use
multiple statements.

**Override the operator** (last argument):

```typescript
.ifAwsRequestTag('Env', '*John*', 'StringEquals')

// Or use the typed Operator class:
import { Operator } from 'iam-floyd';
.ifAwsRequestTag('Env', '*John*', Operator.stringEquals)
```

> **Deny + condition operator trap**: When using `deny()` with a tag condition, the
> operator direction matters a lot. The default operator on most `if*()` methods is
> `StringLike`. So `.deny().toStopInstances().ifResourceTag('Owner', 'alice')` means
> "deny stop _when_ the tag matches alice" — which denies the owner, not others.
> To deny everyone _except_ the owner, flip it:
> `.deny().toStopInstances().ifResourceTag('Owner', 'alice', Operator.stringNotEquals)`

**Complex operators** (ForAllValues, ForAnyValue, IfExists):

```typescript
import { Operator } from 'iam-floyd';

new Statement.Dynamodb()
  .allow()
  .toGetItem()
  .onTable('Thread')
  .ifAttributes(
    ['ID', 'Message'],
    new Operator().stringEquals().forAllValues(),
  );

new Statement.Ec2()
  .allow()
  .toStartInstances()
  .ifAwsRequestTag(
    'Environment',
    ['Prod', 'Dev'],
    new Operator().stringEquals().ifExists(),
  );
```

**Missing condition?** Use the generic `if()`:

```typescript
.if('ec2:missingCondition', 'some-value')  // defaults to StringLike
```

### Principals — `for*()`

> In **cdk-iam-floyd**, avoid building assume-role policies with iam-floyd — use
> CDK's `iam.PolicyDocument` / `iam.ManagedPolicy` with a principal instead. iam-floyd's
> `for*()` methods are mainly useful for resource-based policies (S3 bucket policies, etc.)

```typescript
new Statement.Sts()
  .allow()
  .toAssumeRole()
  .forAccount('123456789012') // Account root principal
  .forUser('123456789012', 'Alice', 'Bob') // IAM users (same account)
  .forRole('123456789012', 'my-role') // IAM role ARN
  .forService('lambda.amazonaws.com') // AWS service
  .forFederatedCognito() // Cognito identity pool
  .forPublic() // Principal: *
  .for('arn:foo:bar'); // Arbitrary ARN

// CDK only — accepts iam.IPrincipal objects:
new Statement.Sts()
  .allow()
  .toAssumeRole()
  .forCdkPrincipal(
    new iam.ServicePrincipal('sns.amazonaws.com'),
    new iam.ServicePrincipal('lambda.amazonaws.com'),
  );
```

### NotAction / NotResource / NotPrincipal

> Understand these well before using — they can be surprisingly permissive.

```typescript
// Allow everything EXCEPT delete on this bucket:
new Statement.S3()
  .allow()
  .notAction()
  .toDeleteBucket()
  .onBucket('example-bucket');

// Deny all S3 actions NOT on this bucket:
new Statement.S3()
  .allow()
  .notResource()
  .toDeleteBucket()
  .onBucket('example-bucket');

// Deny all S3 actions for anyone who is NOT Bob:
new Statement.S3()
  .deny()
  .allActions()
  .notPrincipal()
  .forUser('1234567890', 'Bob')
  .onObject('example-bucket', '*');
```

### Statement SID

```typescript
new Statement.Ec2('AllowEC2ReadOnly').allow().allReadActions();
```

---

## Building a complete policy

### Standalone (iam-floyd)

```typescript
import { Statement, Operator } from 'iam-floyd';

const policy = {
  Version: '2012-10-17',
  Statement: [
    new Statement.Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag('Owner', '${aws:username}'),
    // deny stop for anyone who is NOT the owner (note: StringNotEquals, not default StringLike)
    new Statement.Ec2()
      .deny()
      .toStopInstances()
      .ifResourceTag('Owner', '${aws:username}', Operator.stringNotEquals),
    new Statement.Ec2().allow().allListActions().allReadActions(),
  ],
};
```

### CDK (cdk-iam-floyd)

```typescript
import { Statement } from 'cdk-iam-floyd';
import * as iam from 'aws-cdk-lib/aws-iam';

const policy = new iam.ManagedPolicy(this, 'Policy', {
  statements: [
    new Statement.S3()
      .allow()
      .toGetObject()
      .toPutObject()
      .onObject('my-bucket', '*'),
    new Statement.S3().allow().toListBucket().onBucket('my-bucket'),
  ],
});

// Or attach to a role:
role.addToPolicy(
  new Statement.Lambda().allow().toInvokeFunction().onFunction('my-function'),
);
```

> In CDK, `onFunction()` / `onBucket()` etc. automatically use the stack's
> account and region when you omit those parameters.

---

## Collections — reusable statement groups

Collections are pre-built groups of statements for common scenarios:

```typescript
import { Collection } from 'iam-floyd'; // or 'cdk-iam-floyd'

// Spread into a policy:
const policy = {
  Version: '2012-10-17',
  Statement: [...new Collection().allowEc2InstanceDeleteByOwner()],
};
```

Currently available: `allowEc2InstanceDeleteByOwner` (allows start/stop EC2
instances tagged with the caller's username).

---

## Advanced: Semantic policy classes

A powerful pattern to bundle related permissions under a meaningful name. This
creates reusable, self-documenting policy building blocks.

```typescript
import { Statement } from 'cdk-iam-floyd'; // or 'iam-floyd'

// Bundle all permissions needed to push to ECR under a readable name
class MyEcr extends Statement.Ecr {
  constructor() {
    super();
  }

  toPushImage(): this {
    return this.toGetAuthorizationToken()
      .toBatchCheckLayerAvailability()
      .toInitiateLayerUpload()
      .toUploadLayerPart()
      .toCompleteLayerUpload()
      .toPutImage();
  }
}

// Usage — now reads like intent, not implementation:
new MyEcr().allow().toPushImage().onRepository('my-repo');
```

Why this matters:

- The method name expresses **business intent** (`toPushImage`), not raw AWS actions
- Reusable across stacks / projects without copy-pasting action lists
- The chain still works — all `on*()`, `if*()` etc. methods are still available

You can do this for any grouping that makes sense in your domain:

```typescript
class AppBucket extends Statement.S3 {
  toReadApp(): this {
    return this.toGetObject().toListBucket();
  }
  toWriteApp(): this {
    return this.toPutObject().toDeleteObject();
  }
}
```

---

## Real-world CDK example: CFN deployment role

```typescript
import { Statement } from 'cdk-iam-floyd';

const policy = {
  Version: '2012-10-17',
  Statement: [
    new Statement.Cloudformation() // allow all CFN actions
      .allow()
      .allActions(),
    new Statement.All() // allow everything triggered via CFN
      .allow()
      .allActions()
      .ifAwsCalledVia('cloudformation.amazonaws.com'),
    new Statement.S3() // allow CDK staging bucket
      .allow()
      .allActions()
      .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
    new Statement.Account() // block account-level changes
      .deny()
      .allPermissionManagementActions()
      .allWriteActions(),
    new Statement.Organizations() // block org-level changes
      .deny()
      .allPermissionManagementActions()
      .allWriteActions(),
  ],
};
```

---

## Tips & gotchas

- **Pin the version** — pre-1.0.0, breaking changes can happen in minor releases.
  Actions can be deleted or renamed by AWS; your code will break if you were using them.
- **Multiple conditions = AND** — to express OR, use multiple statements.
- **`allMatchingActions` / access-level methods compile at call time** — if AWS adds
  new actions later, re-run your code to pick them up.
- **`in*()` must come before `on*()`** — `inAccount()`/`inRegion()` set defaults for
  _subsequently_ added resources only.
- **CDK assume-role policies**: don't use `for*()` methods for this — CDK's
  `iam.PolicyDocument` with a proper principal type works better with CDK grants.
- **Policy size limits**: `allWriteActions()` on services like EC2 can produce very
  large action lists. Use `.compact()` to compress them to wildcard patterns, or be
  more specific with `to*()` calls.
- **`Statement.All`** is a special class that produces `Action: "*"` — useful for
  "allow anything called via CloudFormation" style statements.
- **Policy Converter**: if you have an existing JSON policy, use the online converter
  at https://iam-floyd.readthedocs.io/en/latest/policy-converter.html to get the
  equivalent iam-floyd code.
- **Non-chaining style** is supported if you prefer it:
  ```typescript
  const s = new Statement.Ec2();
  s.allow();
  s.toStartInstances();
  ```

## API reference

Full documentation: https://iam-floyd.readthedocs.io/en/latest/
