package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["principal-service"] = func() any {
		// doc-start
		s1 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForService(iamfloyd.String(iamfloyd.AwsServicePrincipal_LAMBDA))

		s2 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForService(iamfloyd.String(iamfloyd.AwsServicePrincipal_ECS_TASKS), iamfloyd.String(iamfloyd.AwsServicePrincipal_EC2))
		// doc-end
		return []any{s1, s2}
	}
}
