package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["principal-multiple"] = func() any {
		// doc-start
		s1 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAccount(jsii.String("1234567890"), jsii.String("0987654321"))

		// when you already have a list:
		accounts := []*string{jsii.String("1234567890"), jsii.String("0987654321")}
		s2 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAccount(accounts...)

		s3 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForUser(jsii.String("1234567890"), jsii.String("Bob"), jsii.String("John"))

		// when you already have a list:
		users := []*string{jsii.String("Bob"), jsii.String("John")}
		s4 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForUser(jsii.String("1234567890"), users...)
		// doc-end
		return []awsiam.PolicyStatement{s1, s2, s3, s4}
	}
}
