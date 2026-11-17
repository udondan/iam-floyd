package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["full-cdk-policy"] = func() any {
		// doc-start
		policy := iamfloyd.NewManagedPolicyDocument(
			// allow all CFN actions
			statement.NewCloudformation(nil).
				Allow().
				AllActions(),
			// allow absolutely everything that is triggered via CFN
			statement.NewAll(nil).
				Allow().
				AllActions().
				IfAwsCalledVia(iamfloyd.String("cloudformation.amazonaws.com"), nil),
			// allow access to the CDK staging bucket
			statement.NewS3(nil).
				Allow().
				AllActions().
				On(iamfloyd.String("arn:aws:s3:::cdktoolkit-stagingbucket-*")),
			// even when triggered via CFN, do not allow modifications of the account
			statement.NewAccount(nil).
				Deny().
				AllPermissionManagementActions().
				AllWriteActions(),
			// even when triggered via CFN, do not allow modifications of the organization
			statement.NewOrganizations(nil).
				Deny().
				AllPermissionManagementActions().
				AllWriteActions(),
		)
		// doc-end
		return policy
	}
}
