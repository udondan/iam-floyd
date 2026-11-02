package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["no-chaining"] = func() any {
		// doc-start
		myStatement := statement.NewEc2(nil)
		myStatement.Allow()
		myStatement.ToStartInstances()
		myStatement.ToStopInstances()
		// doc-end
		return myStatement
	}
}
