package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions-operator-string"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfAwsRequestTag(
				jsii.String("TagWithSpecialChars"),
				jsii.String("*John*"),
				jsii.String("StringEquals"),
			)
		// doc-end
		return s
	}
}
