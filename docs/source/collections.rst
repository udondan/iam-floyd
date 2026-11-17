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

      .. variant:: iam-floyd

         .. code-block:: ts

            import { Collection } from 'iam-floyd';

      .. variant:: cdk-iam-floyd

         .. code-block:: ts

            import { Collection } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. variant:: iam-floyd

         .. code-block:: python

            from iam_floyd import Collection

      .. variant:: cdk-iam-floyd

         .. code-block:: python

            from cdk_iam_floyd import Collection

   .. group-tab:: Java

      .. variant:: iam-floyd

         .. code-block:: java

            import com.udondan.iamFloyd.Collection;

      .. variant:: cdk-iam-floyd

         .. code-block:: java

            import com.udondan.iamFloyd.cdk.Collection;

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

            import "udondan.github.io/iam-floyd/go/iamfloyd/collection"

      .. variant:: cdk-iam-floyd

         .. code-block:: go

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
