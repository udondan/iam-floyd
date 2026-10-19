package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["compact"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			AllReadActions().
			AllListActions().
			Compact()
		// doc-end
		return s
	}
}
