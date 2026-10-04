Collections
===========

.. NOTE::
   The list of collections is not exhaustive. If you have a list of statements that you think is worth sharing with others, please open an issue or a `pull request <https://github.com/udondan/iam-floyd/tree/main/lib/collection>`_.

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd provides commonly used statement collections.

First import the ``Collection`` provider:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         // iam-floyd
         import { Collection } from 'iam-floyd';

         // cdk-iam-floyd
         import { Collection } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. code-block:: python

         # iam-floyd
         from iam_floyd import Collection

         # cdk-iam-floyd
         from cdk_iam_floyd import Collection

   .. group-tab:: Java

      .. code-block:: java

         // iam-floyd
         import com.udondan.iamFloyd.Collection;

         // cdk-iam-floyd
         import com.udondan.iamFloyd.cdk.Collection;

   .. group-tab:: C#

      .. code-block:: csharp

         // iam-floyd
         using IAM.Floyd;

         // cdk-iam-floyd
         using CDK.IAM.Floyd;

   .. group-tab:: Go

      .. code-block:: go

         // iam-floyd
         import "udondan.github.io/iam-floyd/go/iamfloyd/collection"

         // cdk-iam-floyd
         import "udondan.github.io/iam-floyd/go/cdkiamfloyd"

Collections then can be called via:

.. example:: collection

Collections return a list of statements, which then can be used in a policy like this:

.. example:: collection-policy

Available collections
---------------------

allowEc2InstanceDeleteByOwner
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Allows stopping EC2 instance for the user who started them.
