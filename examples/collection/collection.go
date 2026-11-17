package main

import (
	"udondan.github.io/iam-floyd/go/iamfloyd/collection"
)

func init() {
	examples["collection"] = func() any {
		// doc-start
		statements := collection.NewCollection().AllowEc2InstanceDeleteByOwner()
		// doc-end
		return statements
	}
}
