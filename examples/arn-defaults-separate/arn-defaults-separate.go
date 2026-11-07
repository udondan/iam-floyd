package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["arn-defaults-separate"] = func() any {
		// doc-start
		s := statement.NewLambda(nil).
			Allow().
			ToUpdateFunctionCode().
			InAccount(jsii.String("098765432109")).
			InRegion(jsii.String("us-east-1")).
			InPartition(jsii.String("aws")).
			OnFunction(jsii.String("my-function-1"), nil, nil, nil).
			OnFunction(jsii.String("my-function-2"), nil, nil, nil)
		// doc-end
		return s
	}
}
