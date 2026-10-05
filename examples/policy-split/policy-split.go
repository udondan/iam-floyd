package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["policy-split"] = func() any {
		// doc-start
		policy := cdkiamfloyd.NewPolicy(cdkiamfloyd.PolicyType_MANAGED, jsii.Number(300))
		policy.AddStatements(
			statement.NewS3(nil).
				Allow().
				ToGetObject().
				On(jsii.String("arn:aws:s3:::example-bucket/*")),
			statement.NewSqs(nil).
				Allow().
				ToSendMessage().
				On(jsii.String("arn:aws:sqs:us-east-1:123456789012:example-queue")),
			statement.NewDynamodb(nil).
				Allow().
				ToGetItem().
				ToQuery().
				On(jsii.String("arn:aws:dynamodb:us-east-1:123456789012:table/example-table")),
		)
		policies := policy.Split() // two policies of at most 300 characters each
		// doc-end
		return policies
	}
}
