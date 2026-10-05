package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
)

func init() {
	examples["collection-policy"] = func() any {
		// doc-start
		policy := cdkiamfloyd.NewPolicy(cdkiamfloyd.PolicyType_MANAGED, nil)
		for _, statement := range *cdkiamfloyd.NewCollection().AllowEc2InstanceDeleteByOwner() {
			policy.AddStatements(statement)
		}
		// doc-end
		return policy
	}
}
