package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["notPrincipal"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Deny().
			AllActions().
			NotPrincipal().
			ForUser(jsii.String("1234567890"), jsii.String("Bob")).
			OnObject(jsii.String("example-bucket"), jsii.String("*"), nil)
		// doc-end
		return s
	}
}
