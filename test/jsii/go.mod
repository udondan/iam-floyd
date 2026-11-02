// Keeps the Go tests out of the module of the repository, which pkg.go.dev shows. run.sh copies
// them into a module of their own.
module github.com/udondan/iam-floyd/test/jsii

go 1.21
