package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["resource-raw"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllActions().
			On(
				jsii.String("arn:aws:s3:::example-bucket"),
				jsii.String("arn:aws:s3:::another-bucket"),
			)
		// doc-end
		return s
	}
}
