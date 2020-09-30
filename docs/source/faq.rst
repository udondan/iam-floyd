Frequently Asked Questions
==========================

.. include:: _warning.rst
.. include:: _links.rst

Why should I use this package instead of writing policies by hand?
------------------------------------------------------------------

All actions, conditions and resource types of every service are explorable via code suggestion. The related documentation is available in the method description. In most cases you can avoid reading the documentation completely.

IntelliSense makes it super easy to find what you're looking for. But it also helps with discovering things you were not looking for! Users write more secure/restrictive policies because they can easily type ``.if`` and add conditions with a ``<tab>`` without looking up multiple documentation pages.

By calling methods of a class you protect yourself against typos. If your code doesn't compile/run because of a typo, you'll immediately notice. If instead you have a typo in your action list, IAM will silently accept your policy. You won't notice until you see a warning in the IAM console.

Allowing/Denying all actions based on `access level <access-levels_>`_ is a feature AWS missed when designing IAM policies. With this package it is as easy as calling ``.allWriteActions()``,  ``.allReadActions()`` etc.

In IAM policies you can use wildcards to add actions to the statement. Wildcards often do not have enough power to define patterns and quickly include too many actions. This package enables you to select actions with regular expressions.

Limiting actions to specific resources via ARN is cumbersome. In this package, for every resource type there is a method, which not only helps with ARN creation - it also adds context to the code which helps to understand the meaning. The classical example here is to allow all actions on an S3 bucket and its containing objects:

.. code-block:: json

  {
    "Effect": "Allow",
    "Action": "s3:*",
    "Resource": [
      "arn:aws:s3:::example-bucket"
      "arn:aws:s3:::example-bucket/*"
    ]
  }


The first resource element is for the bucket itself. The second element is for the contained objects.

A beginner might make the mistake to think the first entry is superfluous and remove it. This package has distinct methods to limit actions to a bucket and/or objects:

.. tabs::

   .. code-tab:: ts

      new statement.S3()
        .allow()
        .allActions()
        .onBucket('example-bucket')
        .onObject('example-bucket', '*');

   .. code-tab:: js

      new statement.S3()
        .allow()
        .allActions()
        .onBucket('example-bucket')
        .onObject('example-bucket', '*');

   .. code-tab:: py

      statement.S3() \
          .allow() \
          .all_actions() \
          .on_bucket("example-bucket") \
          .on_object("example-bucket", "*")

And yes, it's shorter too.

Are all actions / conditions / resource types covered?
------------------------------------------------------

The code of IAM Floyd is generated from the `AWS Documentation`_. This means, **everything that was documented is covered**. Unfortunately not everything is documented. Users have repeatedly `reported <https://github.com/awsdocs/iam-user-guide/issues/217>`_ missing actions/conditions/resource types on the documentation repository.

If you believe something is missing, feel free to report it in the `IAM Floyd repository <repo_>`_ or directly on the `AWS Documentation repository <aws_docs_repo_>`_.

How often will there be updates to reflect IAM changes?
-------------------------------------------------------

Once per hour the `AWS Documentation`_ is checked for updates. If anything changes, a new package will be released immediately.

Do you release new packages when a new CDK version is released?
---------------------------------------------------------------

No. I believe it's a myth and a user error if packages are incompatible with new releases of the CDK. ``cdk-iam-floyd`` is based on cdk ``^1.30.0`` and so far I have not seen any issues.

Is the package following semantic versioning?
---------------------------------------------

Mostly. For manual changes by developers this package follows `semver <https://semver.org/>`_.

Automatic releases triggered by changes in the IAM documentation will always result in a minor update.

It has been observed that IAM actions have been `deleted <https://github.com/udondan/iam-floyd/releases/tag/v0.37.0>`_ or `renamed <https://github.com/udondan/iam-floyd/releases/tag/v0.19.0>`_. This case will not be reflected by a major update! If you had been using such a method your code will break. On the other hand, your code probably already is broken, since it creates a policy with invalid actions until you update to the latest release.

I don't like method chaining!
-----------------------------

That's not a question. But yes, you can completely avoid method chaining:

.. tabs::

   .. code-tab:: ts

      const myStatement = new statement.Ec2()
      myStatement.allow()
      myStatement.toStartInstances()
      myStatement.toStopInstances();

   .. code-tab:: js

      const myStatement = new statement.Ec2()
      myStatement.allow()
      myStatement.toStartInstances()
      myStatement.toStopInstances();

   .. code-tab:: py

      my_statement = statement.Ec2()
      my_statement.allow()
      my_statement.to_start_instances()
      my_statement.to_stop_instances()

Floyd?
------

George Floyd has been murdered by racist police officers on May 25, 2020.

This package is not named after him to just remind you of him and his death. I want this package to be of great help to you and I want you to use it on a daily base. Every time you use it, I want you to remember our society is ill and needs change. The riots will stop. The news will fade. The issue persists!

If this statement annoys you, this package is not for you.
