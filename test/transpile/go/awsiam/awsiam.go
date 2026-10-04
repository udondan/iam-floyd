// Package awsiam is a stand-in for the PolicyDocument of the AWS CDK, which some examples of the
// docs return.
package awsiam

// PolicyStatement is any statement
type PolicyStatement = any

// PolicyDocumentProps are the properties of a PolicyDocument
type PolicyDocumentProps struct {
	Statements *[]PolicyStatement
}

// PolicyDocument is a policy document with statements
type PolicyDocument struct {
	props *PolicyDocumentProps
}

// NewPolicyDocument returns a policy document with the statements
func NewPolicyDocument(props *PolicyDocumentProps) *PolicyDocument {
	return &PolicyDocument{props: props}
}

// ToJSON returns the document, with the keys sorted like the AWS CDK writes them
func (d *PolicyDocument) ToJSON() any {
	return map[string]any{
		"Statement": *d.props.Statements,
		"Version":   "2012-10-17",
	}
}
