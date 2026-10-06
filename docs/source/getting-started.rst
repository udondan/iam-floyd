Getting Started
===============

.. include:: _warning.rst
.. include:: _links.rst

.. NOTE::
   Use the online `policy converter <https://iam-floyd.readthedocs.io/en/latest/policy-converter.html>`__ to migrate any JSON policy to Floyd code!

Install ``iam-floyd``, or ``cdk-iam-floyd`` for the AWS CDK, as described in :doc:`packages`. Then import the statement providers:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         // iam-floyd
         import { Statement } from 'iam-floyd';

         // cdk-iam-floyd
         import { Statement } from 'cdk-iam-floyd';

      Or in JavaScript:

      .. code-block:: js

         // iam-floyd
         const { Statement } = require('iam-floyd');

         // cdk-iam-floyd
         const { Statement } = require('cdk-iam-floyd');

   .. group-tab:: Python

      .. code-block:: python

         # iam-floyd
         from iam_floyd import Statement

         # cdk-iam-floyd
         from cdk_iam_floyd import Statement

   .. group-tab:: Java

      .. code-block:: java

         // iam-floyd
         // the statement providers, e.g. Ec2
         import com.udondan.iamFloyd.statement.Ec2;
         // Operator, Collection and Json
         import com.udondan.iamFloyd.*;

         // cdk-iam-floyd
         // the statement providers, e.g. Ec2
         import com.udondan.iamFloyd.cdk.statement.Ec2;
         // Operator and Collection
         import com.udondan.iamFloyd.cdk.*;

   .. group-tab:: C#

      .. code-block:: csharp

         // iam-floyd
         // the statement providers, e.g. Statement.Ec2
         using Statement = IAM.Floyd.Statement;
         // Operator, Collection and Json
         using IAM.Floyd;

         // cdk-iam-floyd
         // the statement providers, e.g. Statement.Ec2
         using Statement = CDK.IAM.Floyd.Statement;
         // Operator and Collection
         using CDK.IAM.Floyd;

   .. group-tab:: Go

      .. code-block:: go

         // iam-floyd
         import (
             // the statement providers, e.g. statement.NewEc2
             "udondan.github.io/iam-floyd/go/iamfloyd/statement"

             // Operator, AwsManagedPolicy, AwsServicePrincipal and String, Strings, Number, Bool
             "udondan.github.io/iam-floyd/go/iamfloyd"

             // Collection
             "udondan.github.io/iam-floyd/go/iamfloyd/collection"
         )

         // cdk-iam-floyd
         import (
             // the statement providers, e.g. statement.NewEc2
             "udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"

             // Operator and Collection
             "udondan.github.io/iam-floyd/go/cdkiamfloyd"
         )

The code of the examples is the same for both variants, apart from the imports. The examples in TypeScript are written for ``iam-floyd``, those in the other languages for ``cdk-iam-floyd``, so they show the AWS CDK where the variants differ, for example the props of `iam.PolicyStatement`_ to set the SID. In Go, ``iam-floyd`` has its own helpers for pointers: ``iamfloyd.String()`` instead of ``jsii.String()``. All differences are listed in `Differences Between the Variants`_.

The results show the policies of ``iam-floyd``. With ``cdk-iam-floyd``, the ARN defaults are references to the partition, region and account of the stack.

Both packages contain a statement provider for each AWS service, e.g. ``Ec2``. A statement provider is a class with methods for each and every available action, resource type and condition. Calling such method will add the action/resource/condition to the statement:

.. example:: action-single

Every method returns the statement provider, so you can chain method calls:

.. example:: action-chaining

The default effect of any statement is ``Allow``. To add some linguistic sugar you can explicitly call the ``allow()`` method:

.. example:: allow

Or ``deny()``:

.. example:: deny

To set an SID you can pass it as argument in the statement provider. With ``cdk-iam-floyd``, the statement provider takes the props of `iam.PolicyStatement`_ instead:

.. example:: sid

You can work with `access levels <access-levels_>`_. For every access level there are distinct methods available to add all related actions to the statement:

.. tabs::

   .. group-tab:: TypeScript

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

   .. group-tab:: Java

      - ``allListActions()``
      - ``allReadActions()``
      - ``allWriteActions()``
      - ``allPermissionManagementActions()``
      - ``allTaggingActions()``

   .. group-tab:: C#

      - ``AllListActions()``
      - ``AllReadActions()``
      - ``AllWriteActions()``
      - ``AllPermissionManagementActions()``
      - ``AllTaggingActions()``

   .. group-tab:: Go

      - ``AllListActions()``
      - ``AllReadActions()``
      - ``AllWriteActions()``
      - ``AllPermissionManagementActions()``
      - ``AllTaggingActions()``

.. example:: access-levels

To add actions based on regular expressions, use the method ``allMatchingActions()``.

.. IMPORTANT::
   No matter in which language you use the package, the regular expressions need to be in `Perl/JavaScript literal style <regex_>`_ and need to be passed as strings! Of the flags, only ``i`` and ``y`` have an effect, see :doc:`vocabulary`.

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

To invert the policy you can use ``notAction()``, ``notResource()`` and ``notPrincipal()``:

.. example:: notAction

.. example:: notResource

.. example:: notPrincipal

.. _language-specifics:

Language Specifics
------------------

The API is the same in every language, with the names adapted to the conventions of the language. ``cdk-iam-floyd`` follows the naming rules of `jsii`_, and ``iam-floyd`` uses the same names. The API reference of ``cdk-iam-floyd`` on `Construct Hub`_ shows the exact names in every language.

**Method names**:

.. list-table::
   :header-rows: 1

   * - TypeScript
     - Python
     - Java
     - C#
     - Go
   * - ``toStartInstances()``
     - ``to_start_instances()``
     - ``toStartInstances()``
     - ``ToStartInstances()``
     - ``ToStartInstances()``
   * - ``ReadOnlyAccess()``
     - ``read_only_access()``
     - ``ReadOnlyAccess()``
     - ``ReadOnlyAccess()``
     - ``ReadOnlyAccess()``

**Reserved words**: methods named after a keyword of the language are renamed:

.. list-table::
   :header-rows: 1

   * - TypeScript
     - Python
     - Java
     - C#
     - Go
   * - ``for()``
     - ``for_()``
     - ``doFor()``
     - ``For()``
     - ``For()``
   * - ``if()``
     - ``if_()``
     - ``doIf()``
     - ``If()``
     - ``If()``
   * - ``in()``
     - ``in_()``
     - ``in()``
     - ``In()``
     - ``In()``

**Values that can be a string or a list**, like most condition values, take a list of the language: ``['a', 'b']`` in Python, ``List.of("a", "b")`` in Java, ``new[] { "a", "b" }`` in C# and ``iamfloyd.Strings("a", "b")`` or ``&[]*string{jsii.String("a"), jsii.String("b")}`` in Go.

**Go** has no optional arguments and works with pointers:

- The constructors take the SID, or with ``cdk-iam-floyd`` the props of `iam.PolicyStatement`_, or ``nil``: ``statement.NewEc2(nil)``.
- Every optional argument must be passed, as ``nil`` if not needed: ``OnTable(iamfloyd.String("Thread"), nil, nil, nil)``.
- Strings, numbers and booleans are passed as pointers. ``iam-floyd`` creates them with ``iamfloyd.String()``, ``iamfloyd.Strings()``, ``iamfloyd.Number()`` and ``iamfloyd.Bool()``, ``cdk-iam-floyd`` with ``jsii.String()``, ``jsii.Number()`` and ``jsii.Bool()`` of ``github.com/aws/jsii-runtime-go``.

Differences Between the Variants
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. list-table::
   :header-rows: 1
   :widths: 20 40 40

   * -
     - ``iam-floyd``
     - ``cdk-iam-floyd``
   * - Statement
     - A statement of IAM Floyd
     - An `iam.PolicyStatement`_ of the AWS CDK
   * - Constructor
     - The SID: ``new Statement.Ec2('MYSID')`` in TypeScript, ``Statement.Ec2('MYSID')`` in Python, ``new Ec2("MYSID")`` in Java, ``new Statement.Ec2("MYSID")`` in C#, ``statement.NewEc2(iamfloyd.String("MYSID"))`` in Go
     - The props of `iam.PolicyStatement`_, which include the SID
   * - ARN defaults
     - ``aws``, ``*`` and ``*`` for partition, region and account
     - References to the partition, region and account of the stack
   * - Static properties of ``Operator``, ``AwsManagedPolicy`` and ``AwsServicePrincipal``
     - Constants: ``Operator.STRING_EQUALS``, ``AwsManagedPolicy.READ_ONLY_ACCESS``, in Go ``iamfloyd.Operator_STRING_EQUALS``, ``iamfloyd.AwsManagedPolicy_READ_ONLY_ACCESS``
     - In TypeScript static properties, in the other languages methods of the same name, see :doc:`operators` and :doc:`aws-managed-policies`. ``AwsServicePrincipal`` has constants like in ``iam-floyd``, in Go functions: ``cdkiamfloyd.AwsServicePrincipal_LAMBDA()``
   * - ``AwsManagedPolicy``
     - The names of the policies
     - The names of the policies, and methods that create an ``iam.IManagedPolicy``
   * - JSON
     - ``toJSON()`` returns a ``dict`` in Python, a ``Map`` in Java, a ``Dictionary`` in C# and a map in Go. ``Json.stringify(statement)`` in Java, ``Json.Stringify(statement)`` in C# and ``json.Marshal(statement)`` in Go return the JSON of a statement or a list of statements
     - Rendered by the AWS CDK, e.g. in a ``Policy``, which is an `iam.PolicyDocument`_
   * - Policy document
     - A policy document of IAM Floyd, see :doc:`policy`
     - An `iam.PolicyDocument`_ of the AWS CDK, see :doc:`policy`
   * - Dates
     - A ``datetime`` in Python, an ``Instant`` in Java, a ``DateTime`` in C# and a ``time.Time`` in Go, or a string
     - In TypeScript a ``Date`` or a string, in the other languages a string in ISO 8601
   * - Collection
     - In Java and C#, the statement providers are generic: ``new Collection().allowEc2InstanceDeleteByOwner()`` returns a ``List<Ec2>``, and a list of several statement providers is a ``List<? extends PolicyStatement<?>>`` in Java and, for example, a ``List<PolicyStatementBase>`` in C#. In Go, the collection is in the package ``collection`` and returns a slice: ``collection.NewCollection().AllowEc2InstanceDeleteByOwner()`` returns ``[]*statement.Ec2``
     - Lists of the statement providers, which are an `iam.PolicyStatement`_
