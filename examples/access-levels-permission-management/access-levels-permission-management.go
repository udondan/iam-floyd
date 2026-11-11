package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["access-levels-permission-management"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllPermissionManagementActions()
		// doc-end
		return s
	}
}
