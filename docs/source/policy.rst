Policies
========

.. include:: _warning.rst
.. include:: _links.rst

A ``Policy`` holds statements and renders the policy document, with ``Version`` and ``Statement``. It knows the maximum size of its type of policy, estimates its own size, and can split itself into several policies that stay within that size.

With ``cdk-iam-floyd``, a ``Policy`` is an `iam.PolicyDocument`_ of the AWS CDK, so it can be passed wherever the AWS CDK takes a policy document, e.g. as ``document`` of an ``iam.ManagedPolicy``. It takes any ``iam.PolicyStatement``, not only those of IAM Floyd.

Import it along with the ``Statement``:

.. tabs::

   .. group-tab:: TypeScript

      .. code-block:: ts

         // iam-floyd
         import { Policy, PolicyType, Statement } from 'iam-floyd';

         // cdk-iam-floyd
         import { Policy, PolicyType, Statement } from 'cdk-iam-floyd';

   .. group-tab:: Python

      .. code-block:: python

         # iam-floyd
         from iam_floyd import Policy, PolicyType, Statement

         # cdk-iam-floyd
         from cdk_iam_floyd import Policy, PolicyType, Statement

   .. group-tab:: Java

      .. code-block:: java

         // iam-floyd
         import com.udondan.iamFloyd.Policy;
         import com.udondan.iamFloyd.PolicyType;

         // cdk-iam-floyd
         import com.udondan.iamFloyd.cdk.Policy;
         import com.udondan.iamFloyd.cdk.PolicyType;

   .. group-tab:: C#

      .. code-block:: csharp

         // iam-floyd
         using IAM.Floyd;

         // cdk-iam-floyd
         using CDK.IAM.Floyd;

   .. group-tab:: Go

      .. code-block:: go

         // iam-floyd
         import "udondan.github.io/iam-floyd/go/iamfloyd"

         // cdk-iam-floyd
         import "udondan.github.io/iam-floyd/go/cdkiamfloyd"

The constructor takes the type of the policy and optionally a maximum size that differs from the maximum size of the type. ``validate()`` throws an error if the estimated size of the policy exceeds the maximum size:

.. example:: policy

The name ``Policy`` is also used by the AWS CDK for an inline policy, ``iam.Policy``. Import one of them with an alias, or use the fully qualified name, when you need both.

Types of policies
-----------------

The maximum sizes are the `quotas of IAM <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length>`_ and of `AWS Organizations <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html>`_. IAM does not count white space.

.. list-table::
   :header-rows: 1
   :widths: 30 30 40

   * - Type
     - Maximum size
     - Note
   * - ``managed`` (default)
     - 6,144
     - Customer managed policy, also used as permissions boundary
   * - ``inlineUser``
     - 2,048
     - For all inline policies of the user together
   * - ``inlineGroup``
     - 5,120
     - For all inline policies of the group together
   * - ``inlineRole``
     - 10,240
     - For all inline policies of the role together
   * - ``trust``
     - 2,048
     - Trust policy of a role. The quota can be increased up to 8,192 characters, pass the increased quota as maximum size
   * - ``session``
     - 2,048
     - Session policy, together with the ARNs of the passed managed policies
   * - ``scp``
     - 10,240
     - Service control policy of AWS Organizations
   * - ``rcp``
     - 5,120
     - Resource control policy of AWS Organizations

In TypeScript the types are ``PolicyType.managed``, ``PolicyType.inlineRole`` etc., in the other languages ``PolicyType.MANAGED``, ``PolicyType.INLINE_ROLE`` etc., and in Go ``iamfloyd.PolicyType_MANAGED`` or ``cdkiamfloyd.PolicyType_MANAGED``.

Size
----

``estimateSize()`` returns the estimated size of the policy in characters, without white space. With ``cdk-iam-floyd``, ARNs often contain tokens, e.g. the partition, region and account of the stack, which are only resolved on deployment. Their size is estimated like the AWS CDK does when it splits policies: an ARN or principal with tokens counts as 150 characters, an action with tokens as 20. The estimate of ARNs can be changed with the property ``arnSizeEstimate``. Without tokens, the estimate is a few characters more than the actual size, as the AWS CDK counts some quotes and separators generously.

``maximumSize`` and ``policyType`` are properties as well.

Split
-----

``split()`` distributes the statements into as many policies as needed, so that each of them stays within the maximum size. Like in the AWS CDK, each statement is added to the first policy that has enough space left, so the order of the statements is kept within each policy. The policies have the same type, maximum size and ``arnSizeEstimate`` as the policy that is split. Statements are neither changed nor merged. If a single statement exceeds the maximum size, ``split()`` throws an error.

.. example:: policy-split

.. NOTE::
   The maximum size of inline policies applies to all inline policies of a user, group or role together. Splitting a policy into several inline policies does not help, use managed policies instead.

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
     - The type is a string: ``iamfloyd.NewPolicy(iamfloyd.String(iamfloyd.PolicyType_MANAGED), nil)``, or ``nil`` for the default. ``Split()`` returns ``[]*iamfloyd.Policy``
     - ``cdkiamfloyd.NewPolicy(cdkiamfloyd.PolicyType_MANAGED, nil)``, or ``""`` for the default. ``Split()`` returns ``*[]cdkiamfloyd.Policy``
