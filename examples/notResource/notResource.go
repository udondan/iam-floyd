package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["notResource"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			NotResource().
			ToDeleteBucket().
			OnBucket(iamfloyd.String("example-bucket"), nil)
		// doc-end
		return s
	}
}
