package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["access-levels-list"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllListActions()
		// doc-end
		return s
	}
}
