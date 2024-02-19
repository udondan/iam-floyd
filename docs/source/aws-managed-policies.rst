AWS Managed Policies
====================

.. include:: _warning.rst
.. include:: _links.rst

The ``AwsManagedPolicies`` enum contains an up-to-date collection of AWS managed policies. This helps adding managed policies to IAM roles and users in a type-safe way.

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
        aws_iam.ManagedPolicy.fromManagedPolicyArn(
          this,
          'ReadOnlyAccess',
          AwsManagedPolicies.ReadOnlyAccess,
        ),
      );

   .. code-tab:: ts aws-sdk

      await iamClient.send(
        new AttachRolePolicyCommand({
          RoleName: 'ReadOnlyRole',
          PolicyArn: AwsManagedPolicies.ReadOnlyAccess,
        }),
      );
