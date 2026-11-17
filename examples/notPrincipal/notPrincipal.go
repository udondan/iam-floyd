package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["notPrincipal"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Deny().
			AllActions().
			NotPrincipal().
			ForUser(iamfloyd.String("1234567890"), iamfloyd.String("Bob")).
			OnObject(iamfloyd.String("example-bucket"), iamfloyd.String("*"), nil)
		// doc-end
		return s
	}
}
