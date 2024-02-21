AWS Managed Policies
====================

.. include:: _warning.rst
.. include:: _links.rst

The ``AwsManagedPolicy`` class provides an up-to-date collection of AWS managed policies. This helps adding managed policies to IAM roles and users in a type-safe way.

The class provides the **names** of the policies. If you instead need the ARN, prefix the string with ``arn:aws:iam::aws:policy/``.

The package ``cdk-iam-floyd`` additionally provides methods for directly creating ``aws_iam.IManagedPolicy`` objects.

First import ``AwsManagedPolicy``:

.. tabs::

   .. code-tab:: ts

      // for use without AWS CDK use the iam-floyd package
      import { AwsManagedPolicy } from 'iam-floyd';

      // for use with CDK use the cdk-iam-floyd package
      import { AwsManagedPolicy } from 'cdk-iam-floyd';

   .. code-tab:: js

      // for use without AWS CDK use the iam-floyd package
      const { AwsManagedPolicy } = require('iam-floyd');

      // for use with CDK use the cdk-iam-floyd package
      const { AwsManagedPolicy } = require('cdk-iam-floyd');

Usage in aws-sdk v3 and aws-cdk:

.. tabs::

   .. code-tab:: ts aws-cdk

      readOnlyRole.addManagedPolicy(
        new AwsManagedPolicy().ReadOnlyAccess(),
      );

   .. code-tab:: ts aws-sdk

      await iamClient.send(
        new AttachRolePolicyCommand({
          RoleName: 'ReadOnlyRole',
          PolicyArn: `arn:aws:iam::aws:policy/${AwsManagedPolicy.ReadOnlyAccess}`,
        }),
      );
