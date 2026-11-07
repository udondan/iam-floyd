package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["resource"] = func() any {
		// doc-start
		s := statement.NewS3(nil).
			Allow().
			AllActions().
			OnBucket(jsii.String("example-bucket"), nil).
			OnObject(jsii.String("example-bucket"), jsii.String("some/path/*"), nil)
		// doc-end
		return s
	}
}
