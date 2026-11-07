// Tests the native Go package of iam-floyd. run.sh copies this module into test/transpile/out/go/,
// together with the examples of the docs rewritten for the native package and registry.go, which
// registry.ts writes.
//
// Usage:
//
//	test scenarios <scenarios.json>   runs the scenarios of test/transpile/
//	test examples                     runs the examples of the docs
//	test managed-policies <json>      compares the AWS managed policies
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"reflect"
	"sort"
	"strings"
	"time"

	"udondan.github.io/iam-floyd/go/iamfloyd"
)

// Filled by the examples
var examples = map[string]func() any{}

func main() {
	switch os.Args[1] {
	case "scenarios":
		runScenarios(os.Args[2])
	case "examples":
		runExamples()
	case "managed-policies":
		os.Exit(compareManagedPolicies(os.Args[2]))
	default:
		panic("Unknown command " + os.Args[1])
	}
}

// toJSON writes a value as JSON like JSON.stringify, without escaping HTML
func toJSON(value any) string {
	var buffer bytes.Buffer
	encoder := json.NewEncoder(&buffer)
	encoder.SetEscapeHTML(false)
	if err := encoder.Encode(value); err != nil {
		panic(err)
	}
	return strings.TrimSuffix(buffer.String(), "\n")
}

// message returns the message of a recovered panic
func message(recovered any) string {
	if err, ok := recovered.(error); ok {
		return err.Error()
	}
	return fmt.Sprint(recovered)
}

// Plain is a statement without service, like a PolicyStatement of TypeScript
type Plain struct {
	iamfloyd.PolicyStatement[*Plain]
}

func newPlain(sid *string) *Plain {
	this := &Plain{}
	iamfloyd.InitPolicyStatement(&this.PolicyStatement, this, sid)
	return this
}

// Service is a service like the generated ones, built from the model
type Service struct {
	iamfloyd.PolicyStatement[*Service]
}

type model struct {
	ServicePrefix   string              `json:"servicePrefix"`
	AccessLevelList map[string][]string `json:"accessLevelList"`
}

func newService(name string, sid *string) *Service {
	data, err := os.ReadFile("lib/generated/model/" + name + ".json")
	if err != nil {
		panic(err)
	}
	var m model
	if err := json.Unmarshal(data, &m); err != nil {
		panic(err)
	}
	this := &Service{}
	iamfloyd.InitPolicyStatement(&this.PolicyStatement, this, sid)
	this.ServicePrefix = m.ServicePrefix
	levels := make([]string, 0, len(m.AccessLevelList))
	for level := range m.AccessLevelList {
		levels = append(levels, level)
	}
	sort.Strings(levels)
	for _, level := range levels {
		this.AccessLevelList.Set(level, m.AccessLevelList[level])
	}
	return this
}

type scenario struct {
	Name       string              `json:"name"`
	Sid        *string             `json:"sid"`
	Class      *string             `json:"class"`
	Service    *string             `json:"service"`
	Calls      [][]json.RawMessage `json:"calls"`
	Policy     *policyOptions      `json:"policy"`
	Statements []scenario          `json:"statements"`
}

type policyOptions struct {
	Class           *string  `json:"class"`
	MaximumSize     *float64 `json:"maximumSize"`
	ArnSizeEstimate *int     `json:"arnSizeEstimate"`
	Add             bool     `json:"add"`
}

// policyClass creates a policy document of a class: the document itself and the PolicyDocument it
// embeds
type policyClass func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument)

// policyClasses are the classes of the policy documents by name, as Go cannot look up classes by
// name
var policyClasses = map[string]policyClass{
	"ManagedPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewManagedPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"InlineUserPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewInlineUserPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"InlineGroupPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewInlineGroupPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"InlineRolePolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewInlineRolePolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"TrustPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewTrustPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"SessionPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewSessionPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"ServiceControlPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewServiceControlPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"ResourceControlPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewResourceControlPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"S3BucketPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewS3BucketPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"KmsKeyPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewKmsKeyPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"SqsQueuePolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewSqsQueuePolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"SnsTopicPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewSnsTopicPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"SecretsManagerSecretPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewSecretsManagerSecretPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
	"LambdaFunctionPolicyDocument": func(statements ...iamfloyd.IPolicyStatement) (any, *iamfloyd.PolicyDocument) {
		policy := iamfloyd.NewLambdaFunctionPolicyDocument(statements...)
		return policy, &policy.PolicyDocument
	},
}

// splitter is a policy document with split
type splitter interface {
	Split() []*iamfloyd.PolicyDocument
}

// document is a policy document, of any class
type document interface {
	EstimateSize() int
}

// runScenarios prints one line per scenario: the name, a tab and the statement as JSON (or ERROR
// and the message). For a scenario with a policy of statements: the maximum size, the estimated
// size, the result of validate (OK or the error), the policy as JSON and the policies of split as
// JSON array (or the error, or - for a class without split), separated by tabs
func runScenarios(path string) {
	data, err := os.ReadFile(path)
	if err != nil {
		panic(err)
	}
	var scenarios []scenario
	if err := json.Unmarshal(data, &scenarios); err != nil {
		panic(err)
	}
	for _, s := range scenarios {
		fmt.Printf("%s\t%s\n", s.Name, runScenario(s))
	}
}

func runScenario(s scenario) string {
	return attempt(func() string {
		if s.Policy != nil {
			return runPolicy(s)
		}
		return toJSON(build(s))
	})
}

// attempt returns the result of a function, or ERROR and the message if it panics
func attempt(fn func() string) (result string) {
	defer func() {
		if r := recover(); r != nil {
			result = "ERROR " + message(r)
		}
	}()
	return fn()
}

func runPolicy(s scenario) string {
	statements := []iamfloyd.IPolicyStatement{}
	for _, statement := range s.Statements {
		statements = append(statements, build(statement).(iamfloyd.IPolicyStatement))
	}
	given := statements
	if s.Policy.Add {
		given = nil
	}
	var value any
	var policy *iamfloyd.PolicyDocument
	switch {
	case s.Policy.MaximumSize != nil:
		policy = iamfloyd.NewPolicyDocument(s.Policy.MaximumSize, given...)
		value = policy
	case s.Policy.Class != nil:
		value, policy = policyClasses[*s.Policy.Class](given...)
	default:
		value, policy = policyClasses["ManagedPolicyDocument"](given...)
	}
	if s.Policy.ArnSizeEstimate != nil {
		policy.ArnSizeEstimate = *s.Policy.ArnSizeEstimate
	}
	if s.Policy.Add {
		policy.AddStatements(statements...)
	}
	validate := attempt(func() string {
		policy.Validate()
		return "OK"
	})
	split := "-"
	if splittable, ok := value.(splitter); ok {
		split = attempt(func() string {
			parts := []string{}
			for _, part := range splittable.Split() {
				parts = append(parts, toJSON(part))
			}
			return "[" + strings.Join(parts, ",") + "]"
		})
	}
	return strings.Join([]string{
		fmt.Sprint(policy.MaximumSize),
		fmt.Sprint(policy.EstimateSize()),
		validate,
		toJSON(value),
		split,
	}, "\t")
}

func build(s scenario) any {
	var statement any
	switch {
	case s.Class != nil:
		statement = classes[*s.Class](s.Sid)
	case s.Service != nil:
		statement = newService(*s.Service, s.Sid)
	default:
		statement = newPlain(s.Sid)
	}
	for _, call := range s.Calls {
		var name string
		if err := json.Unmarshal(call[0], &name); err != nil {
			panic(err)
		}
		args := []any{}
		for _, raw := range call[1:] {
			args = append(args, decode(raw))
		}
		invoke(statement, name, args)
	}
	return statement
}

// decode decodes an argument into the types of the public API: pointers, lists of pointers, and
// for the arguments that JSON cannot express, {"operator": [methods]} and {"date": "ISO 8601"}
func decode(raw json.RawMessage) any {
	var value any
	if err := json.Unmarshal(raw, &value); err != nil {
		panic(err)
	}
	switch v := value.(type) {
	case nil:
		return nil
	case string:
		return iamfloyd.String(v)
	case float64:
		return iamfloyd.Number(v)
	case bool:
		return iamfloyd.Bool(v)
	case []any:
		var items []json.RawMessage
		if err := json.Unmarshal(raw, &items); err != nil {
			panic(err)
		}
		decoded := []any{}
		strs := []*string{}
		numbers := []*float64{}
		for _, item := range items {
			d := decode(item)
			decoded = append(decoded, d)
			if s, ok := d.(*string); ok {
				strs = append(strs, s)
			}
			if n, ok := d.(*float64); ok {
				numbers = append(numbers, n)
			}
		}
		if len(items) > 0 && len(strs) == len(items) {
			return &strs
		}
		if len(items) > 0 && len(numbers) == len(items) {
			return &numbers
		}
		return decoded
	case map[string]any:
		if methods, ok := v["operator"].([]any); ok {
			operator := iamfloyd.NewOperator()
			for _, method := range methods {
				operator = invoke(operator, method.(string), nil).(*iamfloyd.Operator)
			}
			return operator
		}
		if date, ok := v["date"].(string); ok {
			parsed, err := time.Parse(time.RFC3339Nano, date)
			if err != nil {
				panic(err)
			}
			return &parsed
		}
	}
	panic("Unknown argument " + string(raw))
}

// argument converts an argument to the type of a parameter
func argument(name string, arg any, to reflect.Type) reflect.Value {
	if arg == nil {
		return reflect.Zero(to)
	}
	value := reflect.ValueOf(arg)
	if !value.Type().AssignableTo(to) {
		panic(fmt.Sprintf("no method %s for argument %s", name, toJSON(arg)))
	}
	return value
}

// invoke calls a method by its name in TypeScript. Missing arguments are nil.
func invoke(target any, name string, args []any) any {
	goName := strings.ToUpper(name[:1]) + name[1:]
	method := reflect.ValueOf(target).MethodByName(goName)
	if !method.IsValid() {
		panic("no method " + goName)
	}
	methodType := method.Type()
	fixed := methodType.NumIn()
	if methodType.IsVariadic() {
		fixed--
	}
	if len(args) > fixed && !methodType.IsVariadic() {
		panic(fmt.Sprintf("too many arguments for %s: %s", goName, toJSON(args)))
	}
	values := []reflect.Value{}
	for i := 0; i < fixed; i++ {
		var arg any
		if i < len(args) {
			arg = args[i]
		}
		values = append(values, argument(goName, arg, methodType.In(i)))
	}
	if methodType.IsVariadic() {
		element := methodType.In(fixed).Elem()
		for _, arg := range args[min(fixed, len(args)):] {
			values = append(values, argument(goName, arg, element))
		}
	}
	results := method.Call(values)
	if len(results) == 0 {
		return nil
	}
	return results[0].Interface()
}

// runExamples prints one line per example: the name, a tab and the statements, the policy or the
// policies as JSON (or FAIL)
func runExamples() {
	names := make([]string, 0, len(examples))
	for name := range examples {
		names = append(names, name)
	}
	sort.Strings(names)
	for _, name := range names {
		fmt.Printf("%s\t%s\n", name, runExample(name))
	}
}

func runExample(name string) (result string) {
	defer func() {
		if r := recover(); r != nil {
			result = "FAIL " + message(r)
		}
	}()
	switch r := examples[name]().(type) {
	case document:
		return toJSON(r)
	// statements, or the policies of a split
	default:
		value := reflect.ValueOf(r)
		if value.Kind() != reflect.Slice {
			return toJSON([]any{r})
		}
		return toJSON(r)
	}
}

// compareManagedPolicies compares the constants of the AWS managed policies, which registry.go
// lists by the names of TypeScript, with the values of TypeScript
func compareManagedPolicies(path string) int {
	data, err := os.ReadFile(path)
	if err != nil {
		panic(err)
	}
	var expectedManagedPolicies map[string]string
	if err := json.Unmarshal(data, &expectedManagedPolicies); err != nil {
		panic(err)
	}
	failed := 0
	for name, expected := range expectedManagedPolicies {
		if actual := managedPolicies[name]; actual != expected {
			if failed < 50 {
				fmt.Printf("%s: expected %s, got %s\n", name, expected, actual)
			}
			failed++
		}
	}
	if failed > 0 {
		return 1
	}
	fmt.Printf("All %d AWS managed policies passed\n", len(expectedManagedPolicies))
	return 0
}
