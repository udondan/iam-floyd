package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["resource-raw"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllActions().
			On(
				iamfloyd.String("arn:aws:s3:::example-bucket"),
				iamfloyd.String("arn:aws:s3:::another-bucket"),
			)
		// doc-end
		return s
	}
}
