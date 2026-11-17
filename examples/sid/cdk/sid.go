package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["sid"] = func() any {
		// doc-start
		s := statement.NewEc2(&awsiam.PolicyStatementProps{Sid: jsii.String("MYSID")}).
			Allow().
			ToStartInstances().
			ToStopInstances()
		// doc-end
		return s
	}
}
