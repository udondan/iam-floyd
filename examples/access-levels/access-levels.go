package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
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
		return []any{s1, s2}
	}
}
