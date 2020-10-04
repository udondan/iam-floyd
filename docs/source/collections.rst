Collections
===========

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd provides commonly used statement collections. These can be called via:

.. example:: collection

Collections return a list of statements, which then can be used in a policy like this:

.. example:: collection-policy

Available collections
---------------------

allowEc2InstanceDeleteByOwner
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Allows stopping EC2 instance only for the user who started them.
