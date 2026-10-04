AWS Managed Policies
====================

.. include:: _warning.rst
.. include:: _links.rst

The ``AwsManagedPolicy`` class provides an up-to-date collection of AWS managed policies. This helps adding managed policies to IAM roles and users in a type-safe way.

The package ``cdk-iam-floyd`` provides methods for directly creating ``aws_iam.IManagedPolicy`` objects.

The class also provides the **names** of the policies, like ``AwsManagedPolicy.READ_ONLY_ACCESS``: as static properties in TypeScript and JavaScript, and as constants in ``iam-floyd`` for Python, Java, C# and Go (``iamfloyd.AwsManagedPolicy_READ_ONLY_ACCESS`` in Go). For the ARN, prefix the name with ``arn:aws:iam::aws:policy/``. ``cdk-iam-floyd`` for Python, Java, C# and Go has no names, because they would share their names with the methods.

First import ``AwsManagedPolicy``:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         // iam-floyd
         import { AwsManagedPolicy } from 'iam-floyd';

         // cdk-iam-floyd
         import { AwsManagedPolicy } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. code-block:: python

         # iam-floyd
         from iam_floyd import AwsManagedPolicy

         # cdk-iam-floyd
         from cdk_iam_floyd import AwsManagedPolicy

   .. group-tab:: Java

      .. code-block:: java

         // iam-floyd
         import com.udondan.iamFloyd.AwsManagedPolicy;

         // cdk-iam-floyd
         import com.udondan.iamFloyd.cdk.AwsManagedPolicy;

   .. group-tab:: C#

      .. code-block:: csharp

         // iam-floyd
         using IAM.Floyd;

         // cdk-iam-floyd
         using CDK.IAM.Floyd;

   .. group-tab:: Go

      .. code-block:: go

         // iam-floyd
         import "udondan.github.io/iam-floyd/go/iamfloyd"

         // cdk-iam-floyd
         import "udondan.github.io/iam-floyd/go/cdkiamfloyd"

Usage in AWS CDK:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         readOnlyRole.addManagedPolicy(
           new AwsManagedPolicy().ReadOnlyAccess(),
         );

   .. group-tab:: Python

      .. code-block:: python

         read_only_role.add_managed_policy(
             AwsManagedPolicy().read_only_access(),
         )

   .. group-tab:: Java

      .. code-block:: java

         readOnlyRole.addManagedPolicy(
             new AwsManagedPolicy().ReadOnlyAccess());

   .. group-tab:: C#

      .. code-block:: csharp

         readOnlyRole.AddManagedPolicy(
             new AwsManagedPolicy().ReadOnlyAccess());

   .. group-tab:: Go

      .. code-block:: go

         readOnlyRole.AddManagedPolicy(
             cdkiamfloyd.NewAwsManagedPolicy().ReadOnlyAccess(),
         )

Usage in the AWS SDK for JavaScript v3 (TypeScript and JavaScript only):

.. code-block:: ts

   await iamClient.send(
     new AttachRolePolicyCommand({
       RoleName: 'ReadOnlyRole',
       PolicyArn: `arn:aws:iam::aws:policy/${AwsManagedPolicy.ReadOnlyAccess}`,
     }),
   );
