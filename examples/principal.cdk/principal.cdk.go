package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["principal.cdk"] = func() any {
		// doc-start
		s := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForCdkPrincipal(
				awsiam.NewServicePrincipal(jsii.String("sns.amazonaws.com"), nil),
				awsiam.NewServicePrincipal(jsii.String("lambda.amazonaws.com"), nil),
			)
		// doc-end
		return s
	}
}
