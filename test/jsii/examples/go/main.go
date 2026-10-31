// Runs the Go examples of the docs, examples/*/*.go, which are copied next to this file.
//
// Prints one line per example: the name, a tab and the statements, the policy or the policies as
// JSON (or FAIL).
package main

import (
	"encoding/json"
	"fmt"
	"reflect"
	"sort"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/jsii-runtime-go"
)

// Filled by the examples
var examples = map[string]func() any{}

func resolve(stack awscdk.Stack, result any) any {
	switch r := result.(type) {
	case awsiam.PolicyStatement:
		return []any{stack.Resolve(r.ToStatementJson())}
	case awsiam.PolicyDocument:
		return stack.Resolve(r.ToJSON())
	}
	// a slice of statements, or the policies of a split, which returns a pointer to the slice
	value := reflect.Indirect(reflect.ValueOf(result))
	items := []any{}
	for i := 0; i < value.Len(); i++ {
		switch item := value.Index(i).Interface().(type) {
		case awsiam.PolicyDocument:
			items = append(items, stack.Resolve(item.ToJSON()))
		default:
			items = append(items, stack.Resolve(item.(awsiam.PolicyStatement).ToStatementJson()))
		}
	}
	return items
}

func run(stack awscdk.Stack, name string) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Printf("%s\tFAIL %v\n", name, r)
		}
	}()
	out, err := json.Marshal(resolve(stack, examples[name]()))
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s\t%s\n", name, out)
}

func main() {
	defer jsii.Close()

	stack := awscdk.NewStack(awscdk.NewApp(nil), jsii.String("Stack"), nil)
	names := make([]string, 0, len(examples))
	for name := range examples {
		names = append(names, name)
	}
	sort.Strings(names)
	for _, name := range names {
		run(stack, name)
	}
}
