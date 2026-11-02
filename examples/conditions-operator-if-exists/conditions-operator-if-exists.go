package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions-operator-if-exists"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfAwsRequestTag(
				jsii.String("Environment"),
				&[]*string{jsii.String("Production"), jsii.String("Staging"), jsii.String("Dev")},
				cdkiamfloyd.NewOperator().StringEquals().IfExists(),
			)
		// doc-end
		return s
	}
}
