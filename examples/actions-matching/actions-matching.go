package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["actions-matching"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Deny().
			AllMatchingActions(iamfloyd.String("/vpn/i"))
		// doc-end
		return s
	}
}
