package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["allow-and-deny"] = func() any {
		// doc-start
		s1 := statement.NewEc2(nil).
			Allow().
			ToStartInstances()

		s2 := statement.NewEc2(nil).
			Deny().
			ToStopInstances()
		// doc-end
		return []any{s1, s2}
	}
}
