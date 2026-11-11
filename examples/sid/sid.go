package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["sid"] = func() any {
		// doc-start
		s := statement.NewEc2(iamfloyd.String("MYSID")).
			Allow().
			ToStartInstances().
			ToStopInstances()
		// doc-end
		return s
	}
}
