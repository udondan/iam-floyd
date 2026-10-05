package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
)

func init() {
	examples["collection-policy"] = func() any {
		// doc-start
		// Go cannot pass the slice of the collection as variadic statements of another type
		policy := cdkiamfloyd.NewManagedPolicyDocument()
		for _, statement := range *cdkiamfloyd.NewCollection().AllowEc2InstanceDeleteByOwner() {
			policy.AddStatements(statement)
		}
		// doc-end
		return policy
	}
}
