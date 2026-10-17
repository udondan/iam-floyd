package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["access-levels-write"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllWriteActions()
		// doc-end
		return s
	}
}
