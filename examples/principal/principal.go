package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["principal"] = func() any {
		// doc-start
		s1 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAccount(iamfloyd.String("1234567890"))

		s2 := statement.NewSts(nil).
			Allow().
			ToAssumeRoleWithSAML().
			ForService(iamfloyd.String("lambda.amazonaws.com"))

		s3 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForUser(iamfloyd.String("1234567890"), iamfloyd.String("Bob"))

		s4 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForRole(iamfloyd.String("1234567890"), iamfloyd.String("role-name"))

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
			ForSaml(iamfloyd.String("1234567890"), iamfloyd.String("saml-provider"))

		s10 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForPublic()

		s11 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAssumedRoleSession(
				iamfloyd.String("123456789"),
				iamfloyd.String("role-name"),
				iamfloyd.String("session-name"),
			)

		s12 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForCanonicalUser(iamfloyd.String("userID"))

		s13 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			For(iamfloyd.String("arn:foo:bar"), nil)
		// doc-end
		return []any{s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13}
	}
}
