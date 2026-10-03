package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["actions-matching"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Deny().
			AllMatchingActions(jsii.String("/vpn/i"))
		// doc-end
		return s
	}
}
