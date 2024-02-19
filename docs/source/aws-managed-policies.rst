AWS Managed Policies
====================

.. include:: _warning.rst
.. include:: _links.rst

The ``AwsManagedPolicies`` enum contains an up-to-date collection of AWS managed policies. This helps adding managed policies to IAM roles and users in a type-safe way.

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

.. tabs::

   .. code-tab:: ts aws-cdk

      readOnlyUser.addManagedPolicy(
        aws_iam.ManagedPolicy.fromManagedPolicyArn(
          this,
          'ReadOnlyAccess',
          AwsManagedPolicies.ReadOnlyAccess,
        ),
      );

   .. code-tab:: ts aws-sdk

      await iamClient.send(
        new Attach RolePolicyCommand({
          RoleName: 'ReadOnlyUser',
          PolicyArn: AwsManagedPolicies.ReadOnlyAccess,
        }),
      );
