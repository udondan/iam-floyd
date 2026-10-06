---
name: iam-floyd-usage
description: >
  Expert guidance for using the iam-floyd and cdk-iam-floyd libraries to generate
  AWS IAM policy statements with a fluent, type-safe interface in TypeScript,
  JavaScript, Python, Java, C#/.NET and Go projects. Use this skill whenever a user asks how to write IAM policies with
  iam-floyd, wants to allow or deny AWS actions, needs to scope policies to specific
  resources, wants to add conditions to IAM statements, is working on least-privilege
  IAM in AWS CDK, or is trying to understand the library's API (toXxx, onXxx, ifXxx,
  allow/deny, allActions, etc.). Also trigger for questions about semantic policy
  classes, subclassing Statement providers, using Collections, policy documents
  with size limits and splitting, or converting JSON policies to iam-floyd code.
---

# Using iam-floyd / cdk-iam-floyd

IAM Floyd is a **fluent, type-safe AWS IAM policy statement generator**. Instead of
writing error-prone JSON, you call strongly-typed methods and let the library build
the correct policy structure.

It comes in two variants with the same API, released together with the same
version number in every language:

- **`iam-floyd`** (standalone) creates statements as JSON, for the AWS SDKs,
  CloudFormation, Terraform or anything else that takes an IAM policy. The packages
  for Python, Java, .NET and Go are native: no Node.js, no dependencies.
- **`cdk-iam-floyd`** creates AWS CDK v2 statements: every statement is an
  `iam.PolicyStatement`. The packages for Python, Java, .NET and Go are built with
  jsii, like the AWS CDK itself, and need Node.js.

The examples in this skill are TypeScript. The API is the same in every language,
with names adapted to the language, see [Other languages](#other-languages).

## Installation

| Language                | `iam-floyd`                                      | `cdk-iam-floyd`                                     |
| ----------------------- | ------------------------------------------------ | --------------------------------------------------- |
| TypeScript / JavaScript | `npm install iam-floyd`                          | `npm install cdk-iam-floyd`                         |
| Python (3.9+)           | `pip install iam-floyd`                          | `pip install cdk-iam-floyd`                         |
| Java (11+)              | Maven `com.udondan:iam-floyd`                    | Maven `com.udondan:cdk-iam-floyd`                   |
| C# / .NET (8+)          | `dotnet add package IAM.Floyd`                   | `dotnet add package CDK.IAM.Floyd`                  |
| Go (1.21+)              | `go get udondan.github.io/iam-floyd/go/iamfloyd` | `go get udondan.github.io/iam-floyd/go/cdkiamfloyd` |

> **Pin the exact version** (e.g. `"iam-floyd": "0.850.0"` in `package.json`,
> `iam-floyd==0.850.0` for pip) — the package is pre-1.0.0 and the API may change.
> A new version is released every Monday. CDK v2 requires `cdk-iam-floyd >= 0.300.0`.
>
> The Go modules are not on GitHub, but on a module proxy under
> `udondan.github.io/iam-floyd/go`, which keeps the newest 30 releases. `go get`
> finds it without any configuration.

## Basic import

```typescript
// TypeScript / ESM
import { Statement } from 'iam-floyd';
import { Statement } from 'cdk-iam-floyd'; // CDK variant

// CommonJS
const { Statement } = require('iam-floyd');
```

The statement providers (`Ec2`, `S3`, ...) live in a sub-package or namespace
`statement`. The core classes (`Operator`, `Collection`, the policy documents,
`AwsManagedPolicy`, `AwsServicePrincipal`) live in the package itself:

| Language | `iam-floyd`                                                           | `cdk-iam-floyd`                                                             |
| -------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Python   | `from iam_floyd import Statement`                                     | `from cdk_iam_floyd import Statement`                                       |
| Java     | `com.udondan.iamFloyd.statement.Ec2`, core `com.udondan.iamFloyd.*`   | `com.udondan.iamFloyd.cdk.statement.Ec2`, core `com.udondan.iamFloyd.cdk.*` |
| C#       | `using Statement = IAM.Floyd.Statement;`, core `using IAM.Floyd;`     | `using Statement = CDK.IAM.Floyd.Statement;`, core `using CDK.IAM.Floyd;`   |
| Go       | `.../go/iamfloyd/statement`, core `.../go/iamfloyd`, `.../collection` | `.../go/cdkiamfloyd/statement`, core and collection `.../go/cdkiamfloyd`    |

In Go, both imports are needed: `statement.NewEc2(nil)` and
`iamfloyd.NewManagedPolicyDocument(...)`.

---

## Core vocabulary — the fluent chain

Every statement follows this readable pattern:

```text
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

In **cdk-iam-floyd**, the `on*()` methods also take a CDK construct (L1 or L2) in place
of the name, if aws-cdk-lib has a reference interface for it (`aws-cdk-lib/interfaces`,
e.g. `IBucketRef`). The ARN of the construct is used; account, region and partition
are ignored:

```typescript
const bucket = new s3.Bucket(this, 'Bucket');
new Statement.S3().allow().toListBucket().onBucket(bucket);
new Statement.Lambda().allow().toInvokeFunction().onFunction(myFunction); // lambda.IFunction
```

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
  .forService(AwsServicePrincipal.ECS_TASKS) // AWS service, by constant
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

A policy document renders the policy (`Version` and `Statement`). There is one
class per type of policy, which sets the maximum size: `ManagedPolicyDocument`
(6,144 characters), `InlineUserPolicyDocument` (2,048), `InlineGroupPolicyDocument`
(5,120), `InlineRolePolicyDocument` (10,240), `TrustPolicyDocument` (2,048),
`SessionPolicyDocument` (2,048), `ServiceControlPolicyDocument` (10,240),
`ResourceControlPolicyDocument` (5,120), `S3BucketPolicyDocument` (20,480),
`KmsKeyPolicyDocument` (32,768), `SqsQueuePolicyDocument` (8,192),
`SnsTopicPolicyDocument` (30,720), `SecretsManagerSecretPolicyDocument` (20,480),
`LambdaFunctionPolicyDocument` (20,480). The constructor takes the statements.
For any other maximum (e.g. a raised trust policy quota), use the base class:
`new PolicyDocument(8192, ...statements)`. Only `ManagedPolicyDocument`,
`ServiceControlPolicyDocument` and `ResourceControlPolicyDocument` have `split()`;
inline limits apply to all inline policies of an identity together.

### Standalone (iam-floyd)

```typescript
import { ManagedPolicyDocument, Operator, Statement } from 'iam-floyd';

const policy = new ManagedPolicyDocument(
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
);
policy.validate(); // throws if the estimated size exceeds the maximum
const json = policy.toJSON();

policy.estimateSize(); // characters without white space
const policies = policy.split(); // PolicyDocument[], first fit, each within the maximum size
```

### CDK (cdk-iam-floyd)

```typescript
import { ManagedPolicyDocument, Statement } from 'cdk-iam-floyd';
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

// ManagedPolicyDocument is an iam.PolicyDocument, with size checks:
const document = new ManagedPolicyDocument(
  new Statement.S3().allow().toGetObject().onObject('my-bucket', '*'),
);
document.validate(); // ARNs with tokens count as 150 characters, like the AWS CDK
new iam.ManagedPolicy(this, 'Document', { document });

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
import { Collection, ManagedPolicyDocument } from 'iam-floyd'; // or 'cdk-iam-floyd'

// Spread into a policy:
const policy = new ManagedPolicyDocument(
  ...new Collection().allowEc2InstanceDeleteByOwner(),
);
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
import { ManagedPolicyDocument, Statement } from 'cdk-iam-floyd';

const policy = new ManagedPolicyDocument(
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
);
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
  more specific with `to*()` calls. `validate()` of a policy document checks the estimated
  size, and `split()` of `ManagedPolicyDocument` distributes the statements into
  several policies. The limits of inline policies apply to all inline policies of a
  user, group or role together, so split into managed policies.
- **`Statement.All`** is a special class that produces `Action: "*"` — useful for
  "allow anything called via CloudFormation" style statements.
- **Policy Converter**: if you have an existing JSON policy, use the online converter
  at <https://iam-floyd.readthedocs.io/en/latest/policy-converter.html> to get the
  equivalent code in TypeScript, JavaScript, Python, Java, C# or Go, for both
  `iam-floyd` and `cdk-iam-floyd`.
- **Non-chaining style** is supported if you prefer it:

  ```typescript
  const s = new Statement.Ec2();
  s.allow();
  s.toStartInstances();
  ```

## Other languages

The API is the same in every language, with names adapted to the language.
`cdk-iam-floyd` follows the naming rules of jsii, and `iam-floyd` uses the same
names. The API reference of `cdk-iam-floyd` on Construct Hub shows the exact names
in every language.

| TypeScript                      | Python                         | Java                            | C#                              | Go                                      |
| ------------------------------- | ------------------------------ | ------------------------------- | ------------------------------- | --------------------------------------- |
| `new Statement.Ec2()`           | `Statement.Ec2()`              | `new Ec2()`                     | `new Statement.Ec2()`           | `statement.NewEc2(nil)`                 |
| `toStartInstances()`            | `to_start_instances()`         | `toStartInstances()`            | `ToStartInstances()`            | `ToStartInstances()`                    |
| `if()`, `for()`, `in()`         | `if_()`, `for_()`, `in_()`     | `doIf()`, `doFor()`, `in()`     | `If()`, `For()`, `In()`         | `If()`, `For()`, `In()`                 |
| `['a', 'b']`                    | `['a', 'b']`                   | `List.of("a", "b")`             | `new[] { "a", "b" }`            | `iamfloyd.Strings("a", "b")`            |
| `new Operator().stringEquals()` | `Operator().string_equals()`   | `new Operator().stringEquals()` | `new Operator().StringEquals()` | `iamfloyd.NewOperator().StringEquals()` |
| `JSON.stringify(policy)`        | `json.dumps(policy.to_json())` | `Json.stringify(policy)`        | `Json.Stringify(policy)`        | `json.Marshal(policy)`                  |

- **Static properties** like `Operator.stringEquals`,
  `AwsManagedPolicy.ReadOnlyAccess` and `AwsServicePrincipal.LAMBDA` are constants in the native `iam-floyd`
  packages (`Operator.STRING_EQUALS`, in Go `iamfloyd.Operator_STRING_EQUALS`) and
  methods of the same name in the jsii packages of `cdk-iam-floyd`, except
  `AwsServicePrincipal`, which has constants there too (in Go functions:
  `cdkiamfloyd.AwsServicePrincipal_LAMBDA()`).
  `new Operator().stringEquals()` works everywhere.
- **Go** has no optional arguments and works with pointers: every optional argument
  must be passed, as `nil` if not needed
  (`OnTable(iamfloyd.String("Thread"), nil, nil, nil)`). `iam-floyd` creates
  pointers with `iamfloyd.String()`, `Strings()`, `Number()` and `Bool()`,
  `cdk-iam-floyd` with `jsii.String()`, `jsii.Number()` and `jsii.Bool()` of
  `github.com/aws/jsii-runtime-go`.
- **Constructor**: with `iam-floyd` the statement provider takes the SID, with
  `cdk-iam-floyd` the props of `iam.PolicyStatement`, which include the SID.
- **Collection**: in the native Java and C# packages it returns a list of the
  statement provider (`List<Ec2>`). In Go, `iam-floyd` has it in the package
  `collection` (`collection.NewCollection()`), and it returns a slice.
- **Regular expressions** for `allMatchingActions()` are passed as strings in
  JavaScript literal style (`'/vpn/i'`) in every language.

### Complete example per language (`iam-floyd`)

For `cdk-iam-floyd`, swap the imports as shown in [Basic import](#basic-import),
and in Go use `jsii.String()`.

Python:

```python
import json

from iam_floyd import ManagedPolicyDocument, Operator, Statement

policy = ManagedPolicyDocument(
    Statement.Ec2()
        .allow()
        .to_start_instances()
        .if_aws_request_tag('Owner', '${aws:username}'),
    Statement.Ec2()
        .deny()
        .to_stop_instances()
        .if_resource_tag('Owner', '${aws:username}', Operator().string_not_equals()),
    Statement.Ec2()
        .allow()
        .all_list_actions()
        .all_read_actions(),
)
policy.validate()
print(json.dumps(policy.to_json(), indent=2))
```

Java:

```java
import com.udondan.iamFloyd.Json;
import com.udondan.iamFloyd.ManagedPolicyDocument;
import com.udondan.iamFloyd.Operator;
import com.udondan.iamFloyd.statement.Ec2;

ManagedPolicyDocument policy = new ManagedPolicyDocument(
    new Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag("Owner", "${aws:username}"),
    new Ec2()
        .deny()
        .toStopInstances()
        .ifResourceTag("Owner", "${aws:username}", new Operator().stringNotEquals()),
    new Ec2()
        .allow()
        .allListActions()
        .allReadActions());
policy.validate();
System.out.println(Json.stringify(policy));
```

C#:

```csharp
using IAM.Floyd;
using Statement = IAM.Floyd.Statement;

var policy = new ManagedPolicyDocument(
    new Statement.Ec2()
        .Allow()
        .ToStartInstances()
        .IfAwsRequestTag("Owner", "${aws:username}"),
    new Statement.Ec2()
        .Deny()
        .ToStopInstances()
        .IfResourceTag("Owner", "${aws:username}", new Operator().StringNotEquals()),
    new Statement.Ec2()
        .Allow()
        .AllListActions()
        .AllReadActions());
policy.Validate();
Console.WriteLine(Json.Stringify(policy));
```

Go:

```go
import (
	"encoding/json"
	"fmt"

	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

policy := iamfloyd.NewManagedPolicyDocument(
	statement.NewEc2(nil).
		Allow().
		ToStartInstances().
		IfAwsRequestTag(iamfloyd.String("Owner"), iamfloyd.String("${aws:username}"), nil),
	statement.NewEc2(nil).
		Deny().
		ToStopInstances().
		IfResourceTag(iamfloyd.String("Owner"), iamfloyd.String("${aws:username}"),
			iamfloyd.NewOperator().StringNotEquals()),
	statement.NewEc2(nil).
		Allow().
		AllListActions().
		AllReadActions(),
)
policy.Validate()
out, _ := json.Marshal(policy)
fmt.Println(string(out))
```

## API reference

Full documentation: <https://iam-floyd.readthedocs.io/en/latest/>
