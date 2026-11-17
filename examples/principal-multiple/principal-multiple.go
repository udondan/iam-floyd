package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["principal-multiple"] = func() any {
		// doc-start
		s1 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAccount(iamfloyd.String("1234567890"), iamfloyd.String("0987654321"))

		// when you already have a list:
		accounts := []*string{iamfloyd.String("1234567890"), iamfloyd.String("0987654321")}
		s2 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForAccount(accounts...)

		s3 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForUser(iamfloyd.String("1234567890"), iamfloyd.String("Bob"), iamfloyd.String("John"))

		// when you already have a list:
		users := []*string{iamfloyd.String("Bob"), iamfloyd.String("John")}
		s4 := statement.NewSts(nil).
			Allow().
			ToAssumeRole().
			ForUser(iamfloyd.String("1234567890"), users...)
		// doc-end
		return []any{s1, s2, s3, s4}
	}
}
