package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["resource-default-override"] = func() any {
		// doc-start
		s := statement.NewLambda(nil).
			Allow().
			ToUpdateFunctionCode().
			OnFunction(
				jsii.String("my-function"),
				jsii.String("098765432109"),
				jsii.String("us-east-1"),
				jsii.String("aws"),
			)
		// doc-end
		return s
	}
}
