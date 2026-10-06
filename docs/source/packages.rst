Packages
========

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd comes in two variants, for TypeScript, JavaScript, Python, Java, C# and Go. Both have the same API, are generated from the same model of the `AWS Documentation`_ and are released together, with the same version number in every language.

Which Variant?
--------------

``iam-floyd``
   Creates statements as JSON, for the AWS SDKs, CloudFormation, Terraform or anything else that takes an IAM policy. The packages have no dependencies.

``cdk-iam-floyd``
   Creates statements of the `AWS CDK`_ v2: every statement is an `iam.PolicyStatement`_, which you can pass to roles, policies and grants. The ARN defaults are the partition, region and account of the stack.

iam-floyd
---------

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Language
     - Package
     - Requires
   * - TypeScript / JavaScript
     - |iam-floyd-npm|_
     - Node.js
   * - Python
     - |iam-floyd-pypi|_
     - Python 3.9
   * - Java
     - |iam-floyd-maven|_
     - Java 11
   * - C# / .NET
     - |iam-floyd-nuget|_
     - .NET 8
   * - Go
     - |iam-floyd-go|_
     - Go 1.21

The packages for Python, Java, .NET and Go are native: their code is generated from the TypeScript code and the model, they do not need Node.js and have no dependencies. Every release is tested to create the same policies in every language.

cdk-iam-floyd
-------------

.. list-table::
   :header-rows: 1
   :widths: 20 30 50

   * - Language
     - Package
     - Requires
   * - TypeScript / JavaScript
     - |cdk-iam-floyd-npm|_
     - ``aws-cdk-lib`` 2 and ``constructs`` 10
   * - Python
     - |cdk-iam-floyd-pypi|_
     - The AWS CDK of the language, and Node.js
   * - Java
     - |cdk-iam-floyd-maven|_
     - The AWS CDK of the language, and Node.js
   * - C# / .NET
     - |cdk-iam-floyd-nuget|_
     - The AWS CDK of the language, and Node.js
   * - Go
     - |cdk-iam-floyd-go|_
     - The AWS CDK of the language, and Node.js

The packages for Python, Java, .NET and Go are built with `jsii`_, like the AWS CDK itself, and run the code of the npm package in Node.js. The API reference for every language is on `Construct Hub`_.

Installation
------------

Pin the exact version, as long as IAM Floyd has not reached 1.0.0.

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: bash

         npm install iam-floyd
         npm install cdk-iam-floyd

   .. group-tab:: Python

      .. code-block:: bash

         pip install iam-floyd
         pip install cdk-iam-floyd

   .. group-tab:: Java

      Maven:

      .. code-block:: xml

         <dependency>
           <groupId>com.udondan</groupId>
           <artifactId>iam-floyd</artifactId> <!-- or cdk-iam-floyd -->
           <version>VERSION</version>
         </dependency>

      Gradle:

      .. code-block:: groovy

         implementation 'com.udondan:iam-floyd:VERSION' // or cdk-iam-floyd

   .. group-tab:: C#

      .. code-block:: bash

         dotnet add package IAM.Floyd
         dotnet add package CDK.IAM.Floyd

   .. group-tab:: Go

      .. code-block:: bash

         go get udondan.github.io/iam-floyd/go/iamfloyd
         go get udondan.github.io/iam-floyd/go/cdkiamfloyd

      The Go modules are not on GitHub, but on a module proxy under ``udondan.github.io/iam-floyd/go``, which keeps the newest 30 releases. ``go get`` finds it without any configuration.

How to import the packages is described in :doc:`getting-started`.

Releases
--------

A new version is released every Monday with the changes of the week: updates of the `AWS Documentation`_ and the AWS managed policies, new features and fixes. The changes of each release are in the `changelog <https://github.com/udondan/iam-floyd/blob/main/CHANGELOG.md>`_.

CDK Compatibility
-----------------

``cdk-iam-floyd`` requires AWS CDK v2. These versions of the AWS CDK need these versions of ``cdk-iam-floyd``:

.. list-table::
   :header-rows: 1

   * - AWS CDK
     - cdk-iam-floyd
   * - >= 2.30.0
     - >= 0.391.0
   * - 2.29.x
     - **No compatible version**
   * - >= 2.26.0
     - >= 0.377.0
   * - >= 2.20.0
     - >= 0.351.0
   * - >= 2.0.0
     - >= 0.300.0
   * - >= 1.158.0
     - **No compatible version**
   * - >= 1.152.0
     - 0.286.0
   * - <= 1.151.0
     - <= 0.285.0
