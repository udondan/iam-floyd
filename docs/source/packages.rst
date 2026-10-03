Packages
========

.. include:: _warning.rst
.. include:: _links.rst

There are two different package variants available:

**iam-floyd**:
   | Can be used in AWS SDK, Boto 3 or for whatever you need an IAM policy statement for:
   | |iam-floyd-npm|_

**cdk-iam-floyd**:
   | Integrates into `AWS CDK`_ and extends `iam.PolicyStatement`_:
   | |cdk-iam-floyd-npm|_ |cdk-iam-floyd-pypi|_ |cdk-iam-floyd-maven|_ |cdk-iam-floyd-nuget|_

   | **Starting with version 0.300.0, the packages are compatible with CDK v2.** For CDK v1 you can use any version up to:
   | |cdk-iam-floyd-npm-v1|_

Other Languages
---------------

``cdk-iam-floyd`` is also available for Python, Java, .NET and Go, with the same version as on npm:

.. list-table::
   :header-rows: 1

   * - Language
     - Package
   * - Python
     - `cdk-iam-floyd on PyPI <https://pypi.org/project/cdk-iam-floyd/>`_
   * - Java
     - `com.udondan:cdk-iam-floyd on Maven Central <https://central.sonatype.com/artifact/com.udondan/cdk-iam-floyd>`_
   * - .NET
     - `CDK.IAM.Floyd on NuGet <https://www.nuget.org/packages/CDK.IAM.Floyd>`_
   * - Go
     - ``udondan.github.io/iam-floyd/go/cdkiamfloyd``

The packages are built with `jsii <https://aws.github.io/jsii/>`_, like AWS CDK itself, and run the JavaScript code of the npm package in Node.js, which must be installed. The API reference for every language is on `Construct Hub <https://constructs.dev/packages/cdk-iam-floyd>`_.

CDK Compatibility Matrix
------------------------

.. list-table::
   :header-rows: 1

   * - CDK
     - cdk-iam-floyd
   * - <= 1.151.0
     - <= 0.285.0
   * - >= 1.152.0
     - 0.286.0
   * - >= 1.158.0
     - **No compatible version!**
   * - >= 2.0.0
     - >= 0.300.0
   * - >= 2.20.0
     - >= 0.351.0
   * - >= 2.26.0
     - >= 0.377.0
   * - 2.29.x
     - **No compatible version!**
   * - >= 2.30.0
     - >= 0.391.0
