Getting Started
===============

.. include:: _warning.rst
.. include:: _links.rst

.. NOTE::
   Use the online `policy converter <https://iam-floyd.readthedocs.io/en/latest/policy-converter.html>`__ to migrate any JSON policy to Floyd code!

Depending on your scenario, you need to either install/import ``iam-floyd`` or ``cdk-iam-floyd``. Python, Java, .NET and Go are supported by ``cdk-iam-floyd`` only, for use with `AWS CDK`_:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: bash

         # for use without AWS CDK use the iam-floyd package
         npm install iam-floyd

         # for use with CDK use the cdk-iam-floyd package
         npm install cdk-iam-floyd

      .. code-block:: ts

         // for use without AWS CDK use the iam-floyd package
         import { Statement } from 'iam-floyd';

         // for use with CDK use the cdk-iam-floyd package
         import { Statement } from 'cdk-iam-floyd';

      Or in JavaScript:

      .. code-block:: js

         // for use without AWS CDK use the iam-floyd package
         const { Statement } = require('iam-floyd');

         // for use with CDK use the cdk-iam-floyd package
         const { Statement } = require('cdk-iam-floyd');

   .. group-tab:: Python

      .. code-block:: bash

         pip install cdk-iam-floyd

      .. code-block:: python

         from cdk_iam_floyd import Statement

   .. group-tab:: Java

      .. code-block:: xml

         <dependency>
           <groupId>com.udondan</groupId>
           <artifactId>cdk-iam-floyd</artifactId>
           <version>VERSION</version>
         </dependency>

      .. code-block:: java

         // the statement providers, e.g. Ec2
         import com.udondan.iamFloyd.cdk.statement.Ec2;

         // Operator and Collection
         import com.udondan.iamFloyd.cdk.*;

   .. group-tab:: C#

      .. code-block:: bash

         dotnet add package CDK.IAM.Floyd

      .. code-block:: csharp

         using Statement = CDK.IAM.Floyd.Statement;

         // Operator and Collection
         using CDK.IAM.Floyd;

   .. group-tab:: Go

      .. code-block:: bash

         go get udondan.github.io/iam-floyd/go/cdkiamfloyd

      .. code-block:: go

         import (
         	// the statement providers, e.g. statement.NewEc2
         	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"

         	// Operator and Collection
         	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
         )

The examples in TypeScript use ``iam-floyd``, the others ``cdk-iam-floyd``. With ``cdk-iam-floyd``, the statements are an `iam.PolicyStatement`_ and the ARN defaults are references to the partition, region and account of the stack. The results show the policies of ``iam-floyd``. For the differences between the languages, see `Language Specifics <language-specifics_>`_.

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

To invert the policy you can use ``notAction()``, ``notResource()`` and ``notPrincipal()``:

.. example:: notAction

.. example:: notResource

.. example:: notPrincipal

.. _language-specifics:

Language Specifics
------------------

The packages for Python, Java, .NET and Go are generated by `jsii <https://aws.github.io/jsii/>`_, which adapts the API to each language, just like it does for AWS CDK. The `API reference on Construct Hub <https://constructs.dev/packages/cdk-iam-floyd>`_ shows the exact names in every language.

**Method names** follow the conventions of each language:

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

**Static properties** of ``Operator`` and ``AwsManagedPolicy`` exist in TypeScript only. Use the methods of the same name instead, see :doc:`operators` and :doc:`aws-managed-policies`.

**Values that can be a string or a list**, like most condition values, take a list of the language: ``['a', 'b']`` in Python, ``List.of("a", "b")`` in Java, ``new[] { "a", "b" }`` in C# and ``&[]*string{jsii.String("a"), jsii.String("b")}`` in Go.

**Go** has no optional arguments and works with pointers:

- Constructors take the props of `iam.PolicyStatement`_, or ``nil``: ``statement.NewEc2(nil)``.
- Every optional argument must be passed, as ``nil`` if not needed: ``OnTable(jsii.String("Thread"), nil, nil, nil)``.
- Strings, numbers and booleans are passed as pointers via ``jsii.String()``, ``jsii.Number()`` and ``jsii.Bool()`` of ``github.com/aws/jsii-runtime-go``.
