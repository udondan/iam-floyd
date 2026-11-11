package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["arn-defaults-override"] = func() any {
		// doc-start
		s := statement.NewLambda(nil).
			Allow().
			ToUpdateFunctionCode().
			In(iamfloyd.String("098765432109"), iamfloyd.String("us-west-1"), iamfloyd.String("aws")).
			OnFunction(iamfloyd.String("my-function-1"), nil, nil, nil).
			In(iamfloyd.String("123456789012"), iamfloyd.String("us-east-1"), iamfloyd.String("aws")).
			OnFunction(iamfloyd.String("my-function-2"), nil, nil, nil)
		// doc-end
		return s
	}
}
