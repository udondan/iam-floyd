package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["action-chaining"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			ToStartInstances().
			ToStopInstances()
		// doc-end
		return s
	}
}
