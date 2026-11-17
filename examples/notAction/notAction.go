package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["notAction"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			NotAction().
			ToDeleteBucket().
			OnBucket(iamfloyd.String("example-bucket"), nil)
		// doc-end
		return s
	}
}
