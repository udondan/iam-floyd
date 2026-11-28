package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
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
		return []awsiam.PolicyStatement{s1, s2}
	}
}
