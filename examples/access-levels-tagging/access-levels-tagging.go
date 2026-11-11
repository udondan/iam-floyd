package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["access-levels-tagging"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllTaggingActions()
		// doc-end
		return s
	}
}
