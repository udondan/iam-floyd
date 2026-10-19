package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["notAction"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			NotAction().
			ToDeleteBucket().
			OnBucket(jsii.String("example-bucket"), nil)
		// doc-end
		return s
	}
}
