Vocabulary
==========

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd provides a fluid interface and enables you to define policy statements in a human readable and easy to understand phrase.

**allow** | **deny** (Effect)
-----------------------------

The methods ``allow()`` and ``deny()`` control the `Effect <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html>`_ of the statement.

The default effect of any statement is ``Allow``, so it's not mandatory to add either of these methods to the method chain. Though it is recommended to improve readability:

.. example:: allow-and-deny

**to** (Action)
---------------

Every available IAM `action`_ is represented by a distinct method. These methods start with ``to``. You allow/deny **to** *do something*

.. example:: allow


In case of `missing actions <faq.html#are-all-actions-conditions-resource-types-covered>`__, you can just add any action key yourself via ``to()``:

.. example:: actions-raw

**all** (Action)
----------------

While methods starting with ``to`` add a single action to a statement, methods starting with ``all`` add multiple `actions <action_>`_.

allActions
^^^^^^^^^^

This method adds all actions of the related service to the statement, e.g. `ec2:*`

.. example:: actions-all

allMatchingActions
^^^^^^^^^^^^^^^^^^

Adds all actions matching regular expressions to the statement.

.. ATTENTION::
   The list of actions is compiled at run time. The generated statement object contains an exact list of actions that matched when you build it. If AWS later adds/removes actions that would match the regular expression, you need to re-generate the statements.

The regular expressions need to be in `Perl/JavaScript literal style <regex_>`_ and need to be passed as strings:

.. example:: actions-matching

Access levels
^^^^^^^^^^^^^

To add all actions of a certain `access level <access-levels_>`_ to the statement use the below methods.

.. ATTENTION::
   The list of actions is compiled at run time. The generated statement object contains an exact list of actions that matched when you build it. If AWS later adds/removes actions or changes the level, you need to re-generate the statements.

.. NOTE::
   When working with access levels the policy size limits may be exceeded quickly, just because there are so many actions available for some services like EC2.

   In these cases you should use the `compact`_ method, to compile the action list to a list of wildcard patterns.

allListActions
""""""""""""""

Adds all actions with `access level <access-levels_>`_ **list** to the statement.

.. example:: access-levels-list

allReadActions
""""""""""""""

Adds all actions with `access level <access-levels_>`_ **read** to the statement.

.. example:: access-levels-read

allWriteActions
"""""""""""""""

Adds all actions with `access level <access-levels_>`_ **write** to the statement.

.. example:: access-levels-write

allPermissionManagementActions
""""""""""""""""""""""""""""""

Adds all actions with `access level <access-levels_>`_ **permission management** to the statement.

.. example:: access-levels-permission-management

allTaggingActions
"""""""""""""""""

Adds all actions with `access level <access-levels_>`_ **tagging** to the statement.

.. example:: access-levels-tagging

**if** (Condition)
------------------

Every available IAM `condition`_ key is represented by a distinct method. These methods start with ``if``. You allow/deny something **if** a condition is met.

Every statement provider (e.g. ``Ec2``) brings its unique conditions. `Global condition context keys <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html>`_ start with ``ifAws``.

.. NOTE::
   Multiple conditions on a statement all have to be true.

   When you have multiple values on a single condition, one of them has to be true.

   Other than that, IAM has no concept of ``OR``. You need to define multiple statements for each ``OR`` branch.

.. example:: conditions

Every ``if`` method has a default operator. For instance, conditions which operate on strings usually have ``StringLike`` as default. Most methods allow you to pass an operator as last argument.

.. example:: conditions-operator-string

In case of `missing conditions <faq.html#are-all-actions-conditions-resource-types-covered>`__, you can define just any condition yourself via ``if()``:

.. example:: conditions-raw

Operators
^^^^^^^^^

`Condition operators <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html>`_ can just be passed as strings. Or you can use the class ``statement.Operator()``:

.. example:: conditions-operator-all-values

.. example:: conditions-operator-any-value

.. example:: conditions-operator-if-exists

**on** (Resource)
-----------------

Every available IAM `resources <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html>`_ key is represented by a distinct method. These methods start with ``on``. You allow/deny something **on** a specific resource (or pattern).

.. example:: resource

In case of `missing resources <faq.html#are-all-actions-conditions-resource-types-covered>`__ or if you already have an ARN ready, use the ``on()`` method:

.. example:: resource-raw


If no resources are applied to the statement without principals, it defaults to all resources (``*``).

**for** (Principal)
-------------------

.. NOTE::
   If you use the CDK variant of the package, don't attempt to create an assume policy with this package. Assume policies have to be of type ``IPrincipal`` and can easily be created with the `iam <https://docs.aws.amazon.com/cdk/api/latest/docs/aws-iam-readme.html>`_ package.

Every possible `principal <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html>`_ is represented by a distinct method. These methods start with ``for``. You allow/deny something **for** a specific principal.

.. example:: principal

Some of the ``for*`` methods accept multiple values at once:

.. example:: principal-multiple

The CDK variant of the package has an additional method ``forCdkPrincipal``, which takes any number of `iam.IPrincipal <https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.IPrincipal.html>`_ objects:

.. example:: principal.cdk

**not** (notAction, notResource and notPrincipal)
-------------------------------------------------

.. WARNING::
   Make sure, you well understand the concepts of `notAction <NotAction_>`_, `notResource <NotResource_>`_ and `notPrincipal <NotPrincipal_>`_. This is where things quickly go wrong, especially when used in combination.

notActions
^^^^^^^^^^

Switches the policy provider to use `NotAction`_.

.. example:: notAction

notResources
^^^^^^^^^^^^

Switches the policy provider to use `NotResource`_.

.. example:: notResource

notPrincipals
^^^^^^^^^^^^^

Switches the policy provider to use `NotPrincipal`_.

.. example:: notPrincipal

**compact**
-----------

This method can be used to convert a list of actions down to a list of wildcard patterns. This can be handy to reduce the policy size, especially when you work with `Access levels`_.

.. ATTENTION::
   When AWS later adds new actions, the patterns might match additional actions.

.. example:: compact
