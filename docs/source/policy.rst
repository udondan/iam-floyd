Policies
========

.. include:: _warning.rst
.. include:: _links.rst

A policy document holds statements and renders the policy, with ``Version`` and ``Statement``. There is one class per type of policy, which knows the maximum size of that type. A policy document estimates its own size, validates it against the maximum size, and some types can split themselves into several policies that stay within that size.

With ``cdk-iam-floyd``, a policy document is an `iam.PolicyDocument`_ of the AWS CDK, so it can be passed wherever the AWS CDK takes a policy document, e.g. as ``document`` of an ``iam.ManagedPolicy``. It takes any ``iam.PolicyStatement``, not only those of IAM Floyd.

Import the classes you need along with the ``Statement``:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         // iam-floyd
         import { ManagedPolicyDocument, Statement } from 'iam-floyd';

         // cdk-iam-floyd
         import { ManagedPolicyDocument, Statement } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. code-block:: python

         # iam-floyd
         from iam_floyd import ManagedPolicyDocument, Statement

         # cdk-iam-floyd
         from cdk_iam_floyd import ManagedPolicyDocument, Statement

   .. group-tab:: Java

      .. code-block:: java

         // iam-floyd
         import com.udondan.iamFloyd.ManagedPolicyDocument;

         // cdk-iam-floyd
         import com.udondan.iamFloyd.cdk.ManagedPolicyDocument;

   .. group-tab:: C#

      .. code-block:: csharp

         // iam-floyd
         using IAM.Floyd;

         // cdk-iam-floyd
         using CDK.IAM.Floyd;
         using PolicyDocument = CDK.IAM.Floyd.PolicyDocument;

   .. group-tab:: Go

      .. code-block:: go

         // iam-floyd
         import "udondan.github.io/iam-floyd/go/iamfloyd"

         // cdk-iam-floyd
         import "udondan.github.io/iam-floyd/go/cdkiamfloyd"

The constructor takes the statements, more can be added with ``addStatements()``. ``validate()`` throws an error if the estimated size of the policy exceeds the maximum size:

.. example:: policy

The name ``PolicyDocument`` is also used by the AWS CDK. In C#, ``using CDK.IAM.Floyd;`` and ``using Amazon.CDK.AWS.IAM;`` together make ``PolicyDocument`` ambiguous, so add an alias like ``using PolicyDocument = CDK.IAM.Floyd.PolicyDocument;`` when you use the base class. In the other languages, import one of them with an alias, or use the fully qualified name, when you need both.

Types of policies
-----------------

The maximum sizes are the quotas of `IAM <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length>`_, `AWS Organizations <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html>`_ and of the services with resource-based policies. IAM does not count white space.

.. list-table::
   :header-rows: 1
   :widths: 35 15 50

   * - Class
     - Maximum size
     - Note
   * - ``ManagedPolicyDocument``
     - 6,144
     - Customer managed policy, also used as permissions boundary. Has ``split()``
   * - ``InlineUserPolicyDocument``
     - 2,048
     - For all inline policies of the user together
   * - ``InlineGroupPolicyDocument``
     - 5,120
     - For all inline policies of the group together
   * - ``InlineRolePolicyDocument``
     - 10,240
     - For all inline policies of the role together
   * - ``TrustPolicyDocument``
     - 2,048
     - Trust policy of a role. The quota can be increased up to 8,192 characters, see below
   * - ``SessionPolicyDocument``
     - 2,048
     - Session policy, together with the ARNs of the passed managed policies
   * - ``ServiceControlPolicyDocument``
     - 10,240
     - Service control policy of AWS Organizations. Has ``split()``
   * - ``ResourceControlPolicyDocument``
     - 5,120
     - Resource control policy of AWS Organizations. Has ``split()``
   * - ``S3BucketPolicyDocument``
     - 20,480
     - Bucket policy of Amazon S3
   * - ``KmsKeyPolicyDocument``
     - 32,768
     - Key policy of AWS KMS
   * - ``SqsQueuePolicyDocument``
     - 8,192
     - Queue policy of Amazon SQS
   * - ``SnsTopicPolicyDocument``
     - 30,720
     - Topic policy of Amazon SNS
   * - ``SecretsManagerSecretPolicyDocument``
     - 20,480
     - Resource policy of a secret of AWS Secrets Manager
   * - ``LambdaFunctionPolicyDocument``
     - 20,480
     - Resource-based policy of an AWS Lambda function

For any other maximum size, e.g. a raised quota of trust policies, use the base class ``PolicyDocument``, which takes the maximum size before the statements: ``new PolicyDocument(8192, statement)`` in TypeScript, ``PolicyDocument(8192, statement)`` in Python, ``new PolicyDocument(8192, statement)`` in Java and C#, ``iamfloyd.NewPolicyDocument(iamfloyd.Number(8192), statement)`` or ``cdkiamfloyd.NewPolicyDocument(jsii.Number(8192), statement)`` in Go.

Size
----

``estimateSize()`` returns the estimated size of the policy in characters, without white space. With ``cdk-iam-floyd``, ARNs often contain tokens, e.g. the partition, region and account of the stack, which are only resolved on deployment. Their size is estimated like the AWS CDK does when it splits policies: an ARN or principal with tokens counts as 150 characters, an action with tokens as 20. The estimate of ARNs can be changed with the property ``arnSizeEstimate``. Without tokens, the estimate is a few characters more than the actual size, as the AWS CDK counts some quotes and separators generously.

``maximumSize`` is a property as well.

Split
-----

Only managed policies, service control policies and resource control policies have ``split()``, as several of them can be attached to the same user, group, role or account. The maximum size of inline policies applies to all inline policies of a user, group or role together, so splitting them does not help, and a resource has only one resource-based policy.

``split()`` distributes the statements into as many policies as needed, so that each of them stays within the maximum size, and returns them as ``PolicyDocument``. Like in the AWS CDK, each statement is added to the first policy that has enough space left, so the order of the statements is kept within each policy. The policies have the same maximum size and ``arnSizeEstimate`` as the policy that is split. Statements are neither changed nor merged. If a single statement exceeds the maximum size, ``split()`` throws an error.

.. example:: policy-split

Differences between the variants
--------------------------------

.. list-table::
   :header-rows: 1
   :widths: 20 40 40

   * -
     - ``iam-floyd``
     - ``cdk-iam-floyd``
   * - Policy
     - A policy of IAM Floyd, ``toJSON()`` returns the policy document like the ``toJSON()`` of a statement
     - An `iam.PolicyDocument`_ of the AWS CDK, rendered by the AWS CDK. Like an empty ``iam.PolicyDocument``, an empty policy renders nothing. If the policy document minimizes the statements, they are merged on synthesis, which only makes the policy smaller
   * - Go
     - ``iamfloyd.NewManagedPolicyDocument(statements...)``, ``Split()`` returns ``[]*iamfloyd.PolicyDocument``
     - ``cdkiamfloyd.NewManagedPolicyDocument(statements...)``, ``Split()`` returns ``*[]cdkiamfloyd.PolicyDocument``
