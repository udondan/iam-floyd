package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions-operator-all-values"] = func() any {
		// doc-start
		s := statement.NewDynamodb(nil).
			Allow().
			ToGetItem().
			OnTable(jsii.String("Thread"), nil, nil, nil).
			IfAttributes(
				&[]*string{jsii.String("ID"), jsii.String("Message"), jsii.String("Tags")},
				cdkiamfloyd.NewOperator().StringEquals().ForAllValues(),
			)
		// doc-end
		return s
	}
}
