package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/statement"
)

func init() {
	examples["conditions"] = func() any {
		// doc-start
		s := statement.NewEc2(nil).
			Allow().
			ToStartInstances().
			IfEncrypted(nil).
			IfInstanceType(&[]*string{iamfloyd.String("t3.micro"), iamfloyd.String("t3.nano")}, nil).
			IfAssociatePublicIpAddress(iamfloyd.Bool(false)).
			IfAwsRequestTag(iamfloyd.String("Owner"), iamfloyd.String("John"), nil)
		// doc-end
		return s
	}
}
