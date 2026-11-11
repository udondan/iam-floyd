package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["conditions-raw"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			If(iamfloyd.String("ec2:missingCondition"), iamfloyd.String("some-value"), nil)
		// doc-end
		return s
	}
}
