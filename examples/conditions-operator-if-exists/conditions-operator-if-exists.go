package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["conditions-operator-if-exists"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfAwsRequestTag(
				iamfloyd.String("Environment"),
				&[]*string{iamfloyd.String("Production"), iamfloyd.String("Staging"), iamfloyd.String("Dev")},
				iamfloyd.NewOperator().StringEquals().IfExists(),
			)
		// doc-end
		return s
	}
}
