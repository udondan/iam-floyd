package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["action-single"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).ToStartInstances()
		// doc-end
		return s
	}
}
