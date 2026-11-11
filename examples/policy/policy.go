package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["policy"] = func() any {
		// doc-start
		policy := iamfloyd.NewInlineRolePolicyDocument(
			statement.NewS3(nil).
				Allow().
				ToGetObject().
				On(iamfloyd.String("arn:aws:s3:::example-bucket/*")),
		)
		policy.AddStatements(
			statement.NewSqs(nil).
				Allow().
				ToSendMessage().
				On(iamfloyd.String("arn:aws:sqs:us-east-1:123456789012:example-queue")),
		)
		policy.Validate() // panics, if it exceeds the maximum size of an inline policy of a role
		// doc-end
		return policy
	}
}
