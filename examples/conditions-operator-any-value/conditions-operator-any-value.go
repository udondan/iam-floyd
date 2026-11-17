package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["conditions-operator-any-value"] = func() any {
		// doc-start
		s := statement.NewDynamodb(nil).
			Deny().
			ToPutItem().
			OnTable(iamfloyd.String("Thread"), nil, nil, nil).
			IfAttributes(
				&[]*string{iamfloyd.String("ID"), iamfloyd.String("PostDateTime")},
				iamfloyd.NewOperator().StringEquals().ForAnyValue(),
			)
		// doc-end
		return s
	}
}
