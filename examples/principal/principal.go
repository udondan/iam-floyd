package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["principal"] = func() any {
		// doc-start
		s1 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAccount(jsii.String("1234567890"))

		s2 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForService(jsii.String("lambda.amazonaws.com"))

		s3 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForUser(jsii.String("1234567890"), jsii.String("Bob"))

		s4 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForRole(jsii.String("1234567890"), jsii.String("role-name"))

		s5 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForFederatedCognito()

		s6 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForFederatedAmazon()

		s7 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForFederatedGoogle()

		s8 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForFederatedFacebook()

		s9 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForSaml(jsii.String("1234567890"), jsii.String("saml-provider"))

		s10 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForPublic()

		s11 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAssumedRoleSession(
				jsii.String("123456789"),
				jsii.String("role-name"),
				jsii.String("session-name"),
			)

		s12 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForCanonicalUser(jsii.String("userID"))

		s13 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			For(jsii.String("arn:foo:bar"), nil)
		// doc-end
		return []awsiam.PolicyStatement{s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13}
	}
}
