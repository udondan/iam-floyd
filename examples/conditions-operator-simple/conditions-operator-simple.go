package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions-operator-simple"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfAwsRequestTag(
				jsii.String("TagWithSpecialChars"),
				jsii.String("*John*"),
				cdkiamfloyd.NewOperator().StringEquals(),
			)
		// doc-end
		return s
	}
}
