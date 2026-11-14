# PolicyStatement

The functionality of the `PolicyStatement` class is split into multiple classes which are extended in the order of the file names.

There are two variants of the package (iam-floyd and cdk-iam-floyd) and the main difference of these packages is this class.

If there is a `*.CDK.ts` file, it will be used when publishing the CDK packages. The rule is simple: If there is a `*.CDK.ts` file, delete the one without `.CDK` and then remove `.CDK` from the name.

This file swapping is taken care of during the publish process by the script `bin/mkcdk.ts`. You can also invoke this script by calling `make cdk`.
