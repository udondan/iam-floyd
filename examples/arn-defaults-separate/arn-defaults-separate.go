package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["arn-defaults-separate"] = func() any {
		// doc-start
		s := statement.NewLambda(nil).
			Allow().
			ToUpdateFunctionCode().
			InAccount(iamfloyd.String("098765432109")).
			InRegion(iamfloyd.String("us-east-1")).
			InPartition(iamfloyd.String("aws")).
			OnFunction(iamfloyd.String("my-function-1"), nil, nil, nil).
			OnFunction(iamfloyd.String("my-function-2"), nil, nil, nil)
		// doc-end
		return s
	}
}
