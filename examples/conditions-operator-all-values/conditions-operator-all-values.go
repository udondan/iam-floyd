package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["conditions-operator-all-values"] = func() any {
		// doc-start
		s := statement.NewDynamodb(nil).
			Allow().
			ToGetItem().
			OnTable(iamfloyd.String("Thread"), nil, nil, nil).
			IfAttributes(
				&[]*string{iamfloyd.String("ID"), iamfloyd.String("Message"), iamfloyd.String("Tags")},
				iamfloyd.NewOperator().StringEquals().ForAllValues(),
			)
		// doc-end
		return s
	}
}
