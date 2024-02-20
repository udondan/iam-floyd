AWS Managed Policies
====================

.. include:: _warning.rst
.. include:: _links.rst

The ``AwsManagedPolicies`` enum contains an up-to-date collection of AWS managed policy **names**. This helps adding managed policies to IAM roles and users in a type-safe way.

.. NOTE::
   The enum provides the **names** since version 0.605.0. If you instead need the ARN, prefix the string with ``arn:aws:iam::aws:policy/``.

First import ``AwsManagedPolicies``:

.. tabs::

   .. code-tab:: ts

      // for use without AWS CDK use the iam-floyd package
      import { AwsManagedPolicies } from 'iam-floyd';

      // for use with CDK use the cdk-iam-floyd package
      import { AwsManagedPolicies } from 'cdk-iam-floyd';

   .. code-tab:: js

      // for use without AWS CDK use the iam-floyd package
      const { AwsManagedPolicies } = require('iam-floyd');

      // for use with CDK use the cdk-iam-floyd package
      const { AwsManagedPolicies } = require('cdk-iam-floyd');

Usage in aws-sdk v3 and aws-cdk:

.. tabs::

   .. code-tab:: ts aws-cdk

      readOnlyRole.addManagedPolicy(
        aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
          this,
          'ReadOnlyAccess',
          AwsManagedPolicies.ReadOnlyAccess,
        ),
      );

   .. code-tab:: ts aws-sdk

      await iamClient.send(
        new AttachRolePolicyCommand({
          RoleName: 'ReadOnlyRole',
          PolicyArn: `arn:aws:iam::aws:policy/${AwsManagedPolicies.ReadOnlyAccess}`,
        }),
      );
