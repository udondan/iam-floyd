Collections
===========

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd provides commonly used statement collections. These can be called via:

.. tabs::

   .. code-tab:: ts

      new statement.Collection().nameOfTheCollection();

   .. code-tab:: js

      new statement.Collection().nameOfTheCollection();

   .. code-tab:: py

      statement.Collection().name_of_the_collection()

Collections return a list of statements, which then can be used in a policy like this:

.. tabs::

   .. code-tab:: ts

      const policy = {
        Version: '2012-10-17',
        Statement: [
          ...new statement.Collection().nameOfTheCollection(),
        ],
      }

   .. code-tab:: js

      const policy = {
        Version: '2012-10-17',
        Statement: [
          ...new statement.Collection().nameOfTheCollection(),
        ],
      }

   .. code-tab:: py

      statements = statement.Collection().name_of_the_collection()

      policy = {
          "Version": "2012-10-17",
          "Statement": list(map(lambda x: x.to_json(), statements)),
      }

Available collections
---------------------

allowEc2InstanceDeleteByOwner
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Allows stopping EC2 instance only for the user who started them.
