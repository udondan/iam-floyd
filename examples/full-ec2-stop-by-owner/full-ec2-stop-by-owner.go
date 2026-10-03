package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["full-ec2-stop-by-owner"] = func() any {
		// doc-start
		policy := awsiam.NewPolicyDocument(&awsiam.PolicyDocumentProps{
			Statements: &[]awsiam.PolicyStatement{
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
			},
		})
		// doc-end
		return policy
	}
}
