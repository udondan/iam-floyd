Packages
========

.. include:: _warning.rst
.. include:: _links.rst

There are two different package variants available:

**iam-floyd**:
   | Can be used in AWS SDK, Boto 3 or for whatever you need an IAM policy statement for:
   | |iam-floyd-npm|_ |iam-floyd-pypi|_

**cdk-iam-floyd**:
   | Integrates into `AWS CDK`_ and extends `iam.PolicyStatement`_:
   | |cdk-iam-floyd-npm|_ |cdk-iam-floyd-pypi|_

   | **Starting with version 0.300.0, the packages are compatible with CDK v2.** For CDK v1 you can use any version up to:
   | |cdk-iam-floyd-npm-v1|_ |cdk-iam-floyd-pypi-v1|_

Find them all on `libraries.io`_.

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
