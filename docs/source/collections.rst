Collections
===========

.. NOTE::
   The list of collections is not exhaustive. If you have a list of statements that you think is worth sharing with others, please open an issue or a `pull request <https://github.com/udondan/iam-floyd/tree/main/lib/collection>`_.

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd provides commonly used statement collections.

First import the ``Collection`` provider:

.. tabs::

   .. code-tab:: ts

      // for use without AWS CDK use the iam-floyd package
      import { Collection } from 'iam-floyd';

      // for use with CDK use the cdk-iam-floyd package
      import { Collection } from 'cdk-iam-floyd';

   .. code-tab:: js

      // for use without AWS CDK use the iam-floyd package
      const { Collection } = require('iam-floyd');

      // for use with CDK use the cdk-iam-floyd package
      const { Collection } = require('cdk-iam-floyd');

Collections then can be called via:

.. example:: collection

Collections return a list of statements, which then can be used in a policy like this:

.. example:: collection-policy

Available collections
---------------------

allowEc2InstanceDeleteByOwner
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Allows stopping EC2 instance for the user who started them.
