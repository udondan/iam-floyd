package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions-operator-any-value"] = func() any {
		// doc-start
		s := statement.NewDynamodb(nil).
			Deny().
			ToPutItem().
			OnTable(jsii.String("Thread"), nil, nil, nil).
			IfAttributes(
				&[]*string{jsii.String("ID"), jsii.String("PostDateTime")},
				cdkiamfloyd.NewOperator().StringEquals().ForAnyValue(),
			)
		// doc-end
		return s
	}
}
