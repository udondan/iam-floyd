package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["full-ec2-stop-by-owner"] = func() any {
		// doc-start
		policy := iamfloyd.NewManagedPolicyDocument(
			statement.NewEc2(nil).
				Allow().
				ToStartInstances().
				IfAwsRequestTag(iamfloyd.String("Owner"), iamfloyd.String("${aws:username}"), nil),
			statement.NewEc2(nil).
				Allow().
				ToStopInstances().
				IfResourceTag(iamfloyd.String("Owner"), iamfloyd.String("${aws:username}"), nil),
			statement.NewEc2(nil).
				Allow().
				AllListActions().
				AllReadActions(),
		)
		// doc-end
		return policy
	}
}
