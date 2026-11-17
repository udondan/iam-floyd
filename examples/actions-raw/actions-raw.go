package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["actions-raw"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			To(iamfloyd.String("missingAction"))
		// doc-end
		return s
	}
}
