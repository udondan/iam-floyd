package main

import (
	"fmt"

	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["policy-split"] = func() any {
		// doc-start
		buckets := []*string{}
		for i := 1; i <= 50; i++ {
			buckets = append(buckets, jsii.String(fmt.Sprintf("arn:aws:s3:::example-bucket-%d/*", i)))
		}
		policy := cdkiamfloyd.NewManagedPolicyDocument(
			statement.NewS3(nil).
				Allow().
				ToGetObject().
				On(buckets...),
			statement.NewS3(nil).
				Allow().
				ToPutObject().
				On(buckets...),
			statement.NewS3(nil).
				Allow().
				ToDeleteObject().
				On(buckets...),
			statement.NewS3(nil).
				Allow().
				ToGetObjectTagging().
				On(buckets...),
		)
		policies := policy.Split() // two policies of at most 6,144 characters each
		// doc-end
		return policies
	}
}
