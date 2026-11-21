package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["actions-all"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			AllActions()
		// doc-end
		return s
	}
}
