package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["principal-service"] = func() any {
		// doc-start
		s1 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForService(cdkiamfloyd.AwsServicePrincipal_LAMBDA())

		s2 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForService(cdkiamfloyd.AwsServicePrincipal_ECS_TASKS(), cdkiamfloyd.AwsServicePrincipal_EC2())
		// doc-end
		return []awsiam.PolicyStatement{s1, s2}
	}
}
