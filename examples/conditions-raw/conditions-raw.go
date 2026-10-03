package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions-raw"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			If(jsii.String("ec2:missingCondition"), jsii.String("some-value"), nil)
		// doc-end
		return s
	}
}
