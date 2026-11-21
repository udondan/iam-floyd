package main

import (
	"udondan.github.io/iam-floyd/go/cdkiamfloyd"
)

func init() {
	examples["collection"] = func() any {
		// doc-start
		statements := cdkiamfloyd.NewCollection().AllowEc2InstanceDeleteByOwner()
		// doc-end
		return *statements
	}
}
