// cdk-iam-floyd used directly and through a jsii library (floyd-consumer).
//
// Prints one line per scenario: the name, a tab and the IAM policies of the stack as JSON (or FAIL).
package main

import (
	"encoding/json"
	"fmt"

	"example.com/floyd-consumer-go/floydconsumer"
	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/assertions"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
	"udondan.github.io/iam-floyd/go/cdkiamfloyd/statement"
)

func role(stack awscdk.Stack) awsiam.Role {
	return awsiam.NewRole(stack, jsii.String("Role"), &awsiam.RoleProps{
		AssumedBy: awsiam.NewServicePrincipal(jsii.String("lambda.amazonaws.com"), nil),
	})
}

func reader(stack awscdk.Stack) floydconsumer.ReaderRole {
	return floydconsumer.NewReaderRole(stack, jsii.String("Reader"), &floydconsumer.ReaderRoleProps{
		BucketName: jsii.String("bucket"),
	})
}

func scenario(name string, fn func(stack awscdk.Stack)) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Printf("%s\tFAIL %v\n", name, r)
		}
	}()
	stack := awscdk.NewStack(awscdk.NewApp(nil), jsii.String("Stack"), nil)
	fn(stack)
	template := assertions.Template_FromStack(stack, nil).ToJSON()
	policies := map[string]interface{}{}
	resources, _ := (*template)["Resources"].(map[string]interface{})
	for id, resource := range resources {
		r := resource.(map[string]interface{})
		if r["Type"] == "AWS::IAM::Policy" {
			properties := r["Properties"].(map[string]interface{})
			policies[id] = properties["PolicyDocument"].(map[string]interface{})["Statement"]
		}
	}
	out, err := json.Marshal(policies)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\t%s\n", name, out)
}

func main() {
	defer jsii.Close()

	scenario("a direct use", func(stack awscdk.Stack) {
		var s awsiam.PolicyStatement = statement.NewS3(nil).Allow().ToGetObject().OnObject(jsii.String("my-bucket"), jsii.String("*"), nil)
		// jsii-pacmak's Go type checks reject nil for optional union parameters, like the operator
		role(stack).AddToPolicy(s.(statement.S3).IfAwsSourceIp(jsii.String("10.0.0.0/8"), jsii.String("IpAddress")))
	})

	scenario("b library uses floyd internally", func(stack awscdk.Stack) {
		reader(stack)
	})

	scenario("c statements passed as iam.PolicyStatement[]", func(stack awscdk.Stack) {
		floydconsumer.NewReaderRole(stack, jsii.String("Reader"), &floydconsumer.ReaderRoleProps{
			BucketName:      jsii.String("bucket"),
			ExtraStatements: &[]awsiam.PolicyStatement{statement.NewDynamodb(nil).Allow().ToGetItem().OnTable(jsii.String("t"), nil, nil, nil)},
		})
	})

	scenario("d statement passed as Statement.S3", func(stack awscdk.Stack) {
		reader(stack).AddS3Statement(statement.NewS3(nil).Allow().ToPutObject().OnBucket(jsii.String("b"), nil))
	})

	scenario("e library calls a floyd method on a passed statement", func(stack awscdk.Stack) {
		reader(stack).AddS3ListStatement(statement.NewS3(nil).Allow().OnBucket(jsii.String("b"), nil))
	})

	scenario("f1 statement returned as iam.PolicyStatement", func(stack awscdk.Stack) {
		role(stack).AddToPolicy(floydconsumer.Statements_SqsRead())
	})

	scenario("f2 statement returned as Statement.S3, then chained", func(stack awscdk.Stack) {
		role(stack).AddToPolicy(floydconsumer.Statements_S3Read().OnBucket(jsii.String("chained"), nil).Deny())
	})

	scenario("g library subclasses a floyd class", func(stack awscdk.Stack) {
		role(stack).AddToPolicy(floydconsumer.NewListBuckets().ToListBucket())
	})

	scenario("h statement passed as floyd base class", func(stack awscdk.Stack) {
		role(stack).AddToPolicy(floydconsumer.Helpers_Denied(statement.NewS3(nil).ToGetObject()))
	})
}
