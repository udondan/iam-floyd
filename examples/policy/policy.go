package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["policy"] = func() any {
		// doc-start
		policy := cdkiamfloyd.NewPolicy(cdkiamfloyd.PolicyType_INLINE_ROLE, nil)
		policy.AddStatements(
			statement.NewS3(nil).
				Allow().
				ToGetObject().
				On(jsii.String("arn:aws:s3:::example-bucket/*")),
			statement.NewSqs(nil).
				Allow().
				ToSendMessage().
				On(jsii.String("arn:aws:sqs:us-east-1:123456789012:example-queue")),
		)
		policy.Validate() // panics, if it exceeds the maximum size of an inline policy of a role
		// doc-end
		return policy
	}
}
