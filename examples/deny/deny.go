package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["deny"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Deny().
			ToStartInstances().
			ToStopInstances()
		// doc-end
		return s
	}
}
