import iam = require('@aws-cdk/aws-iam');
import * as cdk from '@aws-cdk/core';

import * as statement from '..';

export class TestStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const policy = new iam.ManagedPolicy(this, 'SSM-Document-Manager-Policy', {
      managedPolicyName: `${this.stackName}-testpolicy`,
      description: `test policy`,
      statements: [
        new statement.Ssm('asdf').allow().listDocuments().listTagsForResource(),
        new statement.Ssm()
          .allow()
          .createDocument()
          .addTagsToResource()
          .ifRequestTag('CreatedBy', 'hello'),
        new statement.Ssm()
          .allow()
          .deleteDocument()
          .describeDocument()
          .getDocument()
          .listDocumentVersions()
          .modifyDocumentPermission()
          .updateDocument()
          .updateDocumentDefaultVersion()
          .addTagsToResource()
          .removeTagsFromResource()
          .ifResourceTag('CreatedBy', 'hello'),
      ],
    });
  }
}
