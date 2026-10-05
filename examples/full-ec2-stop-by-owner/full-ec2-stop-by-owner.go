package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["full-ec2-stop-by-owner"] = func() any {
		// doc-start
		policy := cdkiamfloyd.NewManagedPolicyDocument()
		policy.AddStatements(
			statement.NewEc2(nil).
				Allow().
				ToStartInstances().
				IfAwsRequestTag(jsii.String("Owner"), jsii.String("${aws:username}"), nil),
			statement.NewEc2(nil).
				Allow().
				ToStopInstances().
				IfResourceTag(jsii.String("Owner"), jsii.String("${aws:username}"), nil),
			statement.NewEc2(nil).
				Allow().
				AllListActions().
				AllReadActions(),
		)
		// doc-end
		return policy
	}
}
