Examples
========

.. include:: _warning.rst
.. include:: _links.rst

.. tabs::

   .. code-tab:: ts

      const policy = {
        Version: '2012-10-17',
        Statement: [
          new statement.Ec2()
            .allow()
            .toStartInstances()
            .ifAwsRequestTag('Owner', '${aws:username}'),
          new statement.Ec2()
            .allow()
            .toStopInstances()
            .ifResourceTag('Owner', '${aws:username}'),
          new statement.Ec2()
            .allow()
            .allListActions()
            .allReadActions(),
        ]
      }

   .. code-tab:: js

      const policy = {
        Version: '2012-10-17',
        Statement: [
          new statement.Ec2()
            .allow()
            .toStartInstances()
            .ifAwsRequestTag('Owner', '${aws:username}'),
          new statement.Ec2()
            .allow()
            .toStopInstances()
            .ifResourceTag('Owner', '${aws:username}'),
          new statement.Ec2()
            .allow()
            .allListActions()
            .allReadActions(),
        ]
      }

   .. code-tab:: py

      policy = {
          "Version": "2012-10-17",
          "Statement": [
              statement.Ec2() \
                  .allow() \
                  .to_start_instances() \
                  .if_aws_request_tag("Owner", "${aws:username}") \
                  .to_json(),
              statement.Ec2() \
                  .allow() \
                  .to_stop_instances() \
                  .if_resource_tag("Owner", "${aws:username}") \
                  .to_json(),
              statement.Ec2() \
                  .allow() \
                  .all_list_actions() \
                  .all_read_actions() \
                  .to_json()
          ]
      }

.. tabs::

   .. code-tab:: ts

      const policy = {
        Version: '2012-10-17',
        Statement: [
          new statement.Cloudformation() // allow all CFN actions
            .allow()
            .allActions(),
          new statement.All() // allow absolutely everything that is triggered via CFN
            .allow()
            .allActions()
            .ifAwsCalledVia('cloudformation.amazonaws.com'),
          new statement.S3() // allow access to the CDK staging bucket
            .allow()
            .allActions()
            .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
          new statement.Account() // even when triggered via CFN, do not allow modifications of the account
            .deny()
            .allPermissionManagementActions()
            .allWriteActions(),
          new statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
            .deny()
            .allPermissionManagementActions()
            .allWriteActions(),
        ]
      }

   .. code-tab:: js

      const policy = {
        Version: '2012-10-17',
        Statement: [
          new statement.Cloudformation() // allow all CFN actions
            .allow()
            .allActions(),
          new statement.All() // allow absolutely everything that is triggered via CFN
            .allow()
            .allActions()
            .ifAwsCalledVia('cloudformation.amazonaws.com'),
          new statement.S3() // allow access to the CDK staging bucket
            .allow()
            .allActions()
            .on('arn:aws:s3:::cdktoolkit-stagingbucket-*'),
          new statement.Account() // even when triggered via CFN, do not allow modifications of the account
            .deny()
            .allPermissionManagementActions()
            .allWriteActions(),
          new statement.Organizations() // even when triggered via CFN, do not allow modifications of the organization
            .deny()
            .allPermissionManagementActions()
            .allWriteActions(),
        ]
      }

   .. code-tab:: py

      policy = {
          "Version": "2012-10-17",
          "Statement": [
              # allow all CFN actions
              statement.Cloudformation() \
                  .allow() \
                  .all_actions() \
                  .to_json(),
              # allow access to the CDK staging bucket
              statement.All() \
                  .allow() \
                  .all_actions() \
                  .if_aws_called_via("cloudformation.amazonaws.com") \
                  .to_json(),
              # allow access to the CDK staging bucket
              statement.S3() \
                  .allow() \
                  .all_actions() \
                  .on("arn:aws:s3:::cdktoolkit-stagingbucket-*") \
                  .to_json(),
              # even when triggered via CFN, do not allow modifications of the account
              statement.Account() \
                  .deny() \
                  .all_permission_management_actions() \
                  .all_write_actions() \
                  .to_json(),
              # even when triggered via CFN, do not allow modifications of the organization
              statement.Organizations() \
                  .deny() \
                  .all_permission_management_actions() \
                  .all_write_actions() \
                  .to_json()
          ]
      }
