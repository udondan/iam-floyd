package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["allow"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			ToStopInstances()
		// doc-end
		return s
	}
}
