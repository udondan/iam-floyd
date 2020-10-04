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

   .. code-tab:: ts

      // for use without AWS CDK use the iam-floyd package
      import * as statement from 'iam-floyd';

      // for use with CDK use the cdk-iam-floyd package
      import * as statement from 'cdk-iam-floyd';

   .. code-tab:: js

      // for use without AWS CDK use the iam-floyd package
      var statement = require('iam-floyd');

      // for use with CDK use the cdk-iam-floyd package
      var statement = require('cdk-iam-floyd');

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

   .. group-tab:: TypeScript

      - ``allListActions()``
      - ``allReadActions()``
      - ``allWriteActions()``
      - ``allPermissionManagementActions()``
      - ``allTaggingActions()``

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

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .deny()
        .allPermissionManagementActions();

      new statement.Ec2()
        .allow()
        .allListActions()
        .allReadActions();

   .. code-tab:: js

      new statement.Ec2()
        .deny()
        .allPermissionManagementActions();

      new statement.Ec2()
        .allow()
        .allListActions()
        .allReadActions();

   .. code-tab:: py

      statement.Ec2() \
          .deny() \
          .all_permission_management_actions()

      statement.Ec2() \
          .allow() \
          .all_list_actions() \
          .all_read_actions()

To add actions based on regular expressions, use the method ``allMatchingActions()``.

.. IMPORTANT::
   No matter in which language you use the package, the regular expressions need to be in `Perl/JavaScript literal style <regex_>`_ and need to be passed as strings!

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .deny()
        .allMatchingActions('/vpn/i');

   .. code-tab:: js

      new statement.Ec2()
        .deny()
        .allMatchingActions('/vpn/i');

   .. code-tab:: py

      statement.Ec2() \
          .deny() \
          .all_matching_actions("/vpn/i")

To add all actions (e.g. ``ec2:*``), call the ``allActions()`` method:

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

For every available condition key, there are ``if*()`` methods available.

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

To add a condition not covered by the available methods, you can define just any condition yourself via ``if()``:

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .if('aws:RequestTag/Owner', 'John');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .if('aws:RequestTag/Owner', 'John');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .if("aws:RequestTag/Owner", "John")

The default operator for conditions of type `String <string-operator_>`_ is StringLike.

Most of the ``if*()`` methods allow an optional operator as last argument:

.. tabs::

   .. code-tab:: ts

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag('TagWithSpecialChars', '*John*', 'StringEquals');

   .. code-tab:: js

      new statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag('TagWithSpecialChars', '*John*', 'StringEquals');

   .. code-tab:: py

      statement.Ec2() \
          .allow() \
          .to_start_instances() \
          .if_aws_request_tag("TagWithSpecialChars", "*John*", "StringEquals")

Statements without principals, by default, apply to all resources. To limit to specific resources, add them via ``on*()``. For every resource type an ``on*()`` method exists:

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .allActions()
        .onBucket('some-bucket')
        .onObject('some-bucket', 'some/path/*');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .allActions()
        .onBucket('some-bucket')
        .onObject('some-bucket', 'some/path/*');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .all_actions() \
          .on_bucket("some-bucket") \
          .on_object("some-bucket", "some/path/*")

If instead you have an ARN ready, use the ``on()`` method:

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .allActions()
        .on(
          'arn:aws:s3:::some-bucket',
          'arn:aws:s3:::another-bucket'
        );

   .. code-tab:: js

      new statement.S3()
        .allow()
        .allActions()
        .on(
          'arn:aws:s3:::some-bucket',
          'arn:aws:s3:::another-bucket'
        );

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .all_actions() \
          .on("arn:aws:s3:::some-bucket",
              "arn:aws:s3:::another-bucket")

To invert the policy you can use ``notActions()`` and ``notResources()``:

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .notActions()
        .notResources()
        .toDeleteBucket()
        .onBucket('some-bucket');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .notActions()
        .notResources()
        .toDeleteBucket()
        .onBucket('some-bucket');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .not_actions() \
          .not_resources() \
          .to_delete_bucket() \
          .on_bucket("some-bucket")
