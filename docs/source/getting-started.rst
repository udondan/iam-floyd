Getting Started
===============

.. include:: _warning.rst
.. include:: _links.rst

Depending on your scenario, you need to either install/import ``iam-floyd`` or ``cdk-iam-floyd``:

.. tabs::

   .. code-tab:: bash JavaScript

      # for use without AWS CDK use the iam-floyd package
      npm install iam-floyd

      # for use with CDK use the cdk-iam-floyd package
      npm install cdk-iam-floyd

   .. code-tab:: bash Python

      # for use without AWS CDK use the iam-floyd package
      pip install iam-floyd

      # for use with CDK use the cdk-iam-floyd package
      pip install cdk-iam-floyd

.. tabs::

   .. code-tab:: js

      // for use without AWS CDK use the iam-floyd package
      var statement = require('iam-floyd');

      // for use with CDK use the cdk-iam-floyd package
      var statement = require('cdk-iam-floyd');

   .. code-tab:: ts

      // for use without AWS CDK use the iam-floyd package
      import * as statement from 'iam-floyd';

      // for use with CDK use the cdk-iam-floyd package
      import * as statement from 'cdk-iam-floyd';

   .. code-tab:: py

      # for use without AWS CDK use the iam-floyd package
      import iam_floyd as statement

      # for use with CDK use the cdk-iam-floyd package
      import cdk_iam_floyd as statement

Both packages contain a statement provider for each AWS service, e.g. ``Ec2``. A statement provider is a class with methods for each and every available action, resource type and condition. Calling such method will add the action/resource/condition to the statement:

.. example:: action-single

Every method returns the statement provider, so you can chain method calls:

.. example:: action-chaining

The default effect of any statement is ``Allow``. To add some linguistic sugar you can explicitly call the ``allow()`` method:

.. example:: allow

Or ``deny()``:

.. example:: deny

You can work with `access levels <access-levels_>`_. For every access level there are distinct methods available to add all related actions to the statement:

.. tabs::

   .. group-tab:: JavaScript

      - ``allListActions()``
      - ``allReadActions()``
      - ``allWriteActions()``
      - ``allPermissionManagementActions()``
      - ``allTaggingActions()``

   .. group-tab:: Python

      - ``all_list_actions()``
      - ``all_read_actions()``
      - ``all_write_actions()``
      - ``all_permission_management_actions()``
      - ``all_tagging_actions()``

.. example:: access-levels

To add actions based on regular expressions, use the method ``allMatchingActions()``.

.. IMPORTANT::
   No matter in which language you use the package, the regular expressions need to be in `Perl/JavaScript literal style <regex_>`_ and need to be passed as strings!

.. example:: actions-matching

To add all actions (e.g. ``ec2:*``), call the ``allActions()`` method:

.. example:: actions-all

For every available condition key, there are ``if*()`` methods available.

.. example:: conditions

To add a condition not covered by the available methods, you can define just any condition yourself via ``if()``:

.. example:: conditions-raw

The default operator for conditions of type `String <string-operator_>`_ is StringLike.

Most of the ``if*()`` methods allow an optional operator as last argument:

.. example:: conditions-operator-string

Statements without principals, by default, apply to all resources. To limit to specific resources, add them via ``on*()``. For every resource type an ``on*()`` method exists:

.. example:: resource

If instead you have an ARN ready, use the ``on()`` method:

.. example:: resource-raw

To invert the policy you can use ``notActions()``, ``notResources()`` and ``notPrincipals()``:

.. example:: notAction

.. example:: notResource

.. example:: notPrincipal
