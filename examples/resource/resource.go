package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["resource"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllActions().
			OnBucket(iamfloyd.String("example-bucket"), nil).
			OnObject(iamfloyd.String("example-bucket"), iamfloyd.String("some/path/*"), nil)
		// doc-end
		return s
	}
}
