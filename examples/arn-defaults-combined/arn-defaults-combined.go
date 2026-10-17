package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["arn-defaults-combined"] = func() any {
		// doc-start
		s := statement.NewLambda(nil).
			Allow().
			ToUpdateFunctionCode().
			In(jsii.String("098765432109"), jsii.String("us-west-1"), jsii.String("aws")).
			OnFunction(jsii.String("my-function-1"), nil, nil, nil).
			OnFunction(jsii.String("my-function-2"), nil, nil, nil)
		// doc-end
		return s
	}
}
