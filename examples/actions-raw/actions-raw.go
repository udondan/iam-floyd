package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["actions-raw"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			To(jsii.String("missingAction"))
		// doc-end
		return s
	}
}
