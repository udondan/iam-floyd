package main

import (
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/aws-cdk-go/awscdk/v2/awss3"
	"github.com/aws/aws-cdk-go/awscdk/v2/awssns"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["on-construct.cdk"] = func() any {
		stack := awscdk.NewStack(nil, nil, nil)
		// doc-start
		bucket := awss3.NewBucket(stack, jsii.String("Bucket"), nil)
		topic := awssns.NewCfnTopic(stack, jsii.String("Topic"), nil)

		s1 := statement.NewS3(nil).
			Allow().
			ToListBucket().
			OnBucket(bucket, nil)

		s2 := statement.NewSns(nil).
			Allow().
			ToPublish().
			OnTopic(topic, nil, nil, nil)
		// doc-end
		return []awsiam.PolicyStatement{s1, s2}
	}
}
