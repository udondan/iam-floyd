package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["resource-default-override"] = func() any {
		// doc-start
		s := statement.NewLambda(nil).
			Allow().
			ToUpdateFunctionCode().
			OnFunction(
				iamfloyd.String("my-function"),
				iamfloyd.String("098765432109"),
				iamfloyd.String("us-east-1"),
				iamfloyd.String("aws"),
			)
		// doc-end
		return s
	}
}
