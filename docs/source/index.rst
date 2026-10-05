.. meta::
   :description: AWS IAM policy statement generator with a fluent interface, for TypeScript, JavaScript, Python, Java, C# and Go
   :keywords: aws, iam, policy, statement, generator, cdk, aws-cdk, iam-floyd, floyd, typescript, python, java, csharp, dotnet, go

.. toctree::
   :maxdepth: 3
   :hidden:

   packages
   getting-started
   vocabulary
   operators
   examples
   collections
   aws-managed-policies
   Policy Converter <https://iam-floyd.readthedocs.io/en/latest/policy-converter.html>
   faq
   legal

IAM Floyd
=========

.. include:: _warning.rst
.. include:: _links.rst

**AWS IAM policy statement generator with a fluent interface, for TypeScript, JavaScript, Python, Java, C# and Go.**

IAM Floyd has a class for every AWS service, with a method for every action, resource type and condition key. Your IDE completes them and shows their documentation, so you neither look up action names and ARN formats, nor deploy policies with typos.

It comes in two variants: ``iam-floyd`` creates statements as JSON, for the AWS SDKs or anything else that takes an IAM policy, and ``cdk-iam-floyd`` creates statements of the `AWS CDK`_. See :doc:`packages` to choose and install one, and :doc:`getting-started` for the first steps.

.. example:: full-ec2-stop-by-owner

..
   stats

Support for:

- 455 Services
- 22036 Actions
- 2329 Resource Types
- 2497 Condition keys

..
   /stats

.. raw:: html

    <div style="text-align: center; margin-bottom: 2em;">
    <iframe width="100%" height="350" src="https://www.youtube-nocookie.com/embed/4dHY8qPHbKA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>

Similar projects
----------------

* `cdk-iam-actions <https://github.com/spacerat/cdk-iam-actions>`_
* `cdk-iam-generator <https://github.com/srihariph/cdk-iam-generator>`_
* `cdk-iam-policy-builder-helper <https://github.com/layerborn/cdk-iam-policy-builder-helper-construct>`_
* `iam-policy-generator <https://github.com/aletheia/iam-policy-generator>`_
* `policyuniverse <https://github.com/Netflix-Skunkworks/policyuniverse>`_
* `policy_sentry <https://github.com/salesforce/policy_sentry>`_
