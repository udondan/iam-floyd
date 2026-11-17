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

      .. variant:: iam-floyd

         .. code-block:: ts

            import { AwsManagedPolicy } from 'iam-floyd';

      .. variant:: cdk-iam-floyd

         .. code-block:: ts

            import { AwsManagedPolicy } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. variant:: iam-floyd

         .. code-block:: python

            from iam_floyd import AwsManagedPolicy

      .. variant:: cdk-iam-floyd

         .. code-block:: python

            from cdk_iam_floyd import AwsManagedPolicy

   .. group-tab:: Java

      .. variant:: iam-floyd

         .. code-block:: java

            import com.udondan.iamFloyd.AwsManagedPolicy;

      .. variant:: cdk-iam-floyd

         .. code-block:: java

            import com.udondan.iamFloyd.cdk.AwsManagedPolicy;

   .. group-tab:: C#

      .. variant:: iam-floyd

         .. code-block:: csharp

            using IAM.Floyd;

      .. variant:: cdk-iam-floyd

         .. code-block:: csharp

            using CDK.IAM.Floyd;

   .. group-tab:: Go

      .. variant:: iam-floyd

         .. code-block:: go

            import "udondan.github.io/iam-floyd/go/iamfloyd"

      .. variant:: cdk-iam-floyd

         .. code-block:: go

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
