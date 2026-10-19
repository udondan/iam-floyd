package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["access-levels"] = func() any {
		// doc-start
		s1 := statement.NewS3(nil).
			Deny().
			AllPermissionManagementActions()

		s2 := statement.NewS3(nil).
			Allow().
			AllListActions().
			AllReadActions()
		// doc-end
		return []awsiam.PolicyStatement{s1, s2}
	}
}
