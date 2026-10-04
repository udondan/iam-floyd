AWS Managed Policies
====================

.. include:: _warning.rst
.. include:: _links.rst

The ``AwsManagedPolicy`` class provides an up-to-date collection of AWS managed policies. This helps adding managed policies to IAM roles and users in a type-safe way.

The package ``cdk-iam-floyd`` provides methods for directly creating ``aws_iam.IManagedPolicy`` objects.

In TypeScript and JavaScript, the class additionally provides the **names** of the policies as static properties, and the native packages of ``iam-floyd`` for Python and Java as constants, like ``AwsManagedPolicy.READ_ONLY_ACCESS``. If you instead need the ARN, prefix the string with ``arn:aws:iam::aws:policy/``. The static names are not available in ``cdk-iam-floyd`` for Python, Java, C# and Go, because they share their names with the methods.

First import ``AwsManagedPolicy``:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         // for use without AWS CDK use the iam-floyd package
         import { AwsManagedPolicy } from 'iam-floyd';

         // for use with CDK use the cdk-iam-floyd package
         import { AwsManagedPolicy } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. code-block:: python

         # for use without AWS CDK use the iam-floyd package
         from iam_floyd import AwsManagedPolicy

         # for use with CDK use the cdk-iam-floyd package
         from cdk_iam_floyd import AwsManagedPolicy

   .. group-tab:: Java

      .. code-block:: java

         // for use without AWS CDK use the iam-floyd package
         import com.udondan.iamFloyd.AwsManagedPolicy;

         // for use with CDK use the cdk-iam-floyd package
         import com.udondan.iamFloyd.cdk.AwsManagedPolicy;

   .. group-tab:: C#

      .. code-block:: csharp

         using CDK.IAM.Floyd;

   .. group-tab:: Go

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
