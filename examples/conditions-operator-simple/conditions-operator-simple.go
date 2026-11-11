package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["conditions-operator-simple"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfAwsRequestTag(
				iamfloyd.String("TagWithSpecialChars"),
				iamfloyd.String("*John*"),
				iamfloyd.Operator_STRING_EQUALS,
			)
		// doc-end
		return s
	}
}
