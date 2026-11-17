package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd"
	"udondan.github.io/iam-floyd/go/iamfloyd/collection"
)

func init() {
	examples["collection-policy"] = func() any {
		// doc-start
		// Go cannot pass the slice of the collection as variadic statements of another type
		policy := iamfloyd.NewManagedPolicyDocument()
		for _, statement := range collection.NewCollection().AllowEc2InstanceDeleteByOwner() {
			policy.AddStatements(statement)
		}
		// doc-end
		return policy
	}
}
