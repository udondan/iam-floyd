Vocabulary
==========

.. include:: _warning.rst
.. include:: _links.rst

IAM Floyd provides a fluid interface and enables you to define policy statements in a human readable and easy to understand phrase.

**allow** | **deny** (Effect)
-----------------------------

The methods ``allow()`` and ``deny()`` control the `Effect <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html>`_ of the statement.

The default effect of any statement is ``Allow``, so it's not mandatory to add either of these methods to the method chain. Though it is recommended to keep the statement readable.
improve , so the statement is readable:

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances();

      new statement.Ec2()
        .deny()
        .toStopInstances();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances();

      new statement.Ec2()
        .deny()
        .toStopInstances();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances()

      statement.Ec2() \
          .deny() \
          .to_stop_instances()

**to** (Action)
---------------

Every available IAM `action`_ is represented by a distinct method. These methods start with ``to``. You allow/deny **to** *do something*

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .toStopInstances();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .toStopInstances();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .to_stop_instances()


In case of `missing actions <faq.html#are-all-actions-conditions-resource-types-covered>`__, you can just add any action key yourself via ``to()``:

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .to('missingAction');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .to('missingAction');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to("missingAction")

**all** (Action)
----------------

While methods starting with ``to`` add a single action to a statement, methods starting with ``all`` add multiple `actions <action_>`_.

allActions
^^^^^^^^^^

This method adds all actions of the related service to the statement, e.g. `ec2:*`

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allActions();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allActions();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_actions()

allMatchingActions
^^^^^^^^^^^^^^^^^^

Adds all actions matching regular expressions to the statement.

.. ATTENTION::
   The list of actions is compiled at run time. The generated statement object contains an exact list of actions that matched when you build it. If AWS later adds/removes actions that would match the regular expression, you need to re-generate the statements.

The regular expressions need to be in `Perl/JavaScript literal style <regex_>`_ and need to be passed as strings:

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allMatchingActions('/vpn/i');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allMatchingActions('/vpn/i');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_matching_actions("/vpn/i")

Access levels
^^^^^^^^^^^^^

To add all actions of a certain `access level <access-levels_>`_ to the statement use the below methods.

.. ATTENTION::
   The list of actions is compiled at run time. The generated statement object contains an exact list of actions that matched when you build it. If AWS later adds/removes actions or changes the level, you need to re-generate the statements.

allListActions
""""""""""""""

Adds all actions with `access level <access-levels_>`_ **list** to the statement.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allListActions();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allListActions();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_list_actions()

allReadActions
""""""""""""""

Adds all actions with `access level <access-levels_>`_ **read** to the statement.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allReadActions();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allReadActions();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_read_actions()

allWriteActions
"""""""""""""""

Adds all actions with `access level <access-levels_>`_ **write** to the statement.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allWriteActions();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allReallWriteActionsadActions();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_write_actions()

allPermissionManagementActions
""""""""""""""""""""""""""""""

Adds all actions with `access level <access-levels_>`_ **permission management** to the statement.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allPermissionManagementActions();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allPermissionManagementActions();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_permission_management_actions()

allTaggingActions
"""""""""""""""""

Adds all actions with `access level <access-levels_>`_ **tagging** to the statement.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .allTaggingActions();

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .allTaggingActions();

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .all_tagging_actions()

**if** (Condition)
------------------

Every available IAM `condition`_ key is represented by a distinct method. These methods start with ``if``. You allow/deny something **if** a condition is met.

Every statement provider (e.g. ``Ec2``) brings its unique conditions. `Global condition context keys <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html>`_ start with ``ifAws``.

.. NOTE::
   Multiple conditions on a statement all have to be true.

   When you have multiple values on a single condition, one of them has to be true.

   Other than that, IAM has no concept of ``OR``. You need to define multiple statements for each ``OR`` branch.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifEncrypted()
        .ifInstanceType(['t3.micro', 't3.nano'])
        .ifAssociatePublicIpAddress(false)
        .ifAwsRequestTag('Owner', 'John');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifEncrypted()
        .ifInstanceType(['t3.micro', 't3.nano'])
        .ifAssociatePublicIpAddress(false)
        .ifAwsRequestTag('Owner', 'John');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .if_encrypted() \
          .if_instance_type(["t3.micro", "t3.nano"]) \
          .if_associate_public_ip_address(False) \
          .if_aws_request_tag("Owner", "John")

Every ``if`` method has a default operator. For instance, conditions which operate on strings usually have ``StringLike`` as default. Most methods allow you to pass an operator as last argument.

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag('TagWithSpecialChars', '*foo*', 'StringEquals');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag('TagWithSpecialChars', '*foo*', 'StringEquals');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .if_aws_request_tag("TagWithSpecialChars", "*foo*", "StringEquals")

In case of `missing conditions <faq.html#are-all-actions-conditions-resource-types-covered>`__, you can define just any condition yourself via ``if()``:

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .if('aws:RequestTag/Owner', '${aws:username}');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .if('aws:RequestTag/Owner', '${aws:username}');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .if("aws:RequestTag/Owner", "${aws:username}")

Operators
^^^^^^^^^

`Condition operators <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html>`_ can just be passed as strings. Or you can use the class ``statement.Operator()``:

.. tabs::

   .. code-tab:: ts

      new statement.Dynamodb()
        .allow()
        .toPutItem()
        .onTable('Thread')
        .ifAttributes(
          ['ID', 'Message', 'Tags'],
          new statement.Operator().stringEquals().forAllValues()
        );

   .. code-tab:: js

      new statement.Dynamodb()
        .allow()
        .toPutItem()
        .onTable('Thread')
        .ifAttributes(
          ['ID', 'Message', 'Tags'],
          new statement.Operator().stringEquals().forAllValues()
        );

   .. code-tab:: py

      statement.Dynamodb() \
          .allow() \
          .to_get_item() \
          .if_attributes(
              ["ID", "Message", "Tags"],
              statement.Operator().string_equals().for_all_values())

.. tabs::

   .. code-tab:: ts

      new statement.Dynamodb()
        .deny()
        .toPutItem()
        .onTable('Thread')
        .ifAttributes(
          ['ID', 'PostDateTime'],
          new statement.Operator().stringEquals().forAnyValue()
        );

   .. code-tab:: js

      new statement.Dynamodb()
        .deny()
        .toPutItem()
        .onTable('Thread')
        .ifAttributes(
          ['ID', 'PostDateTime'],
          new statement.Operator().stringEquals().forAnyValue()
        );

   .. code-tab:: py

      statement.Dynamodb() \
          .deny() \
          .to_put_item() \
          .if_attributes(
              ["ID", "PostDateTime"],
              statement.Operator().string_equals().for_any_value())

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag(
          'Environment',
          ['Production', 'Staging', 'Dev'],
          new statement.Operator().stringEquals().ifExists()
        );

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag(
          'Environment',
          ['Production', 'Staging', 'Dev'],
          new statement.Operator().stringEquals().ifExists()
        );

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .if_aws_request_tag(
              "Environment",
              ["Production", "Staging", "Dev"],
              statement.Operator().string_equals().if_exists())

**on** (Resource)
-----------------

Every available IAM `resources <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html>`_ key is represented by a distinct method. These methods start with ``on``. You allow/deny something **on** a specific resource (or pattern).

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .allActions()
        .onBucket('some-bucket');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .allActions()
        .onBucket('some-bucket');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .all_actions() \
          .on_bucket("some-bucket")

In case of `missing resources <faq.html#are-all-actions-conditions-resource-types-covered>`__ or if you already have an ARN ready, use the ``on()`` method:

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .allActions()
        .on('arn:aws:s3:::some-bucket');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .allActions()
        .on('arn:aws:s3:::some-bucket');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .all_actions() \
          .on("arn:aws:s3:::some-bucket")


If no resources are applied to the statement without principals, it defaults to all resources (``*``).

**for** (Principal)
-------------------

.. NOTE::
   If you use the CDK variant of the package, don't attempt to create an assume policy with this package. Assume policies have to be of type ``IPrincipal`` and can easily be created with the `iam <https://docs.aws.amazon.com/cdk/api/latest/docs/aws-iam-readme.html>`_ package.

Every possible `principal <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html>`_ is represented by a distinct method. These methods start with ``for``. You allow/deny something **for** a specific principal.

.. tabs::

   .. code-tab:: ts

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forAccount('1234567890');

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forService('lambda.amazonaws.com');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forUser('1234567890', 'Bob');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forRole('1234567890', 'role-name');

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedCognito();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedAmazon();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedGoogle();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedFacebook();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forSaml('1234567890', 'saml-provider');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forPublic();

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forAssumedRoleSession('123456789', 'role-name', 'session-name');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forCanonicalUser('userID');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .for('arn:foo:bar');

   .. code-tab:: js

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forAccount('1234567890');

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forService('lambda.amazonaws.com');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forUser('1234567890', 'Bob');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forRole('1234567890', 'role-name');

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedCognito();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedAmazon();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedGoogle();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forFederatedFacebook();

      new statement.Sts()
        .allow()
        .toAssumeRoleWithSAML()
        .forSaml('1234567890', 'saml-provider');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forPublic();

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forAssumedRoleSession('123456789', 'role-name', 'session-name');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forCanonicalUser('userID');

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .for('arn:foo:bar');

   .. code-tab:: py

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_account("1234567890")

      statement.Sts() \
          .allow() \
          .to_assume_role_with_sAML() \
          .for_service("lambda.amazonaws.com")

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_user("1234567890", "Bob")

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_role("1234567890", "role-name")

      statement.Sts() \
          .allow() \
          .to_assume_role_with_sAML() \
          .for_federated_cognito()

      statement.Sts() \
          .allow() \
          .to_assume_role_with_sAML() \
          .for_federated_amazon()

      statement.Sts() \
          .allow() \
          .to_assume_role_with_sAML() \
          .for_federated_google()

      statement.Sts() \
          .allow() \
          .to_assume_role_with_sAML() \
          .for_federated_facebook()

      statement.Sts() \
          .allow() \
          .to_assume_role_with_sAML() \
          .for_saml("1234567890", "saml-provider")

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_public()

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_assumed_role_session("123456789", "role-name", "session-name")

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_canonical_user("userID")

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for("arn:foo:bar")

The CDK variant of the package has an additional method ``forCdkPrincipal``, which takes any number of `iam.IPrincipal <https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-iam.IPrincipal.html>`_ objects:

.. tabs::

   .. code-tab:: ts

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forCdkPrincipal(
          new iam.ServicePrincipal('sns.amazonaws.com')
          new iam.ServicePrincipal('lambda.amazonaws.com')
        );

   .. code-tab:: js

      new statement.Sts()
        .allow()
        .toAssumeRole()
        .forCdkPrincipal(
          new iam.ServicePrincipal('sns.amazonaws.com')
          new iam.ServicePrincipal('lambda.amazonaws.com')
        );

   .. code-tab:: py

      statement.Sts() \
          .allow() \
          .to_assume_role() \
          .for_cdk_principal(
              iam.ServicePrincipal("sns.amazonaws.com"),
              iam.ServicePrincipal("lambda.amazonaws.com"))

**not** (notAction, notResource and notPrincipal)
-------------------------------------------------

.. WARNING::
   Make sure, you well understand the concepts of `notAction <NotAction_>`_, `notResource <NotResource_>`_ and `notPrincipal <NotPrincipal_>`_. This is where things quickly go wrong, especially when used in combination.

notActions
^^^^^^^^^^

Switches the policy provider to use `NotAction`_.

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .notActions()
        .toDeleteBucket()
        .onBucket('some-bucket');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .notActions()
        .toDeleteBucket()
        .onBucket('some-bucket');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .not_actions() \
          .to_delete_bucket() \
          .on_bucket("some-bucket")

notResources
^^^^^^^^^^^^

Switches the policy provider to use `NotResource`_.

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .notResources()
        .toDeleteBucket()
        .onBucket('some-bucket');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .notResources()
        .toDeleteBucket()
        .onBucket('some-bucket');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .not_resources() \
          .to_delete_bucket() \
          .on_bucket("some-bucket")

notPrincipals
^^^^^^^^^^^^^

Switches the policy provider to use `NotPrincipal`_.

.. tabs::

   .. code-tab:: ts

      new statement.Sts()
        .deny()
        .notPrincipals()
        .toAssumeRole()
        .forUser('1234567890', 'Bob');

   .. code-tab:: js

      new statement.Sts()
        .deny()
        .notPrincipals()
        .toAssumeRole()
        .forUser('1234567890', 'Bob');

   .. code-tab:: py

      statement.Sts() \
          .deny() \
          .not_principals() \
          .to_assume_role() \
          .for_user("1234567890", "Bob")
