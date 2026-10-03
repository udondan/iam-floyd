package main

import (
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func init() {
	examples["conditions"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfEncrypted(nil).
			IfInstanceType(&[]*string{jsii.String("t3.micro"), jsii.String("t3.nano")}, nil).
			IfAssociatePublicIpAddress(jsii.Bool(false)).
			IfAwsRequestTag(jsii.String("Owner"), jsii.String("John"), nil)
		// doc-end
		return s
	}
}
