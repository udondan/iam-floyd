package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
)

func init() {
	examples["collection-policy"] = func() any {
		// doc-start
		statements := []awsiam.PolicyStatement{}
		for _, s := range *cdkiamfloyd.NewCollection().AllowEc2InstanceDeleteByOwner() {
			statements = append(statements, s)
		}
		policy := awsiam.NewPolicyDocument(&awsiam.PolicyDocumentProps{
			Statements: &statements,
		})
		// doc-end
		return policy
	}
}
