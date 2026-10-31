package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["access-levels-read"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllReadActions()
		// doc-end
		return s
	}
}
