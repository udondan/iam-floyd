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

	"floydtest/awsiam"

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
	Name    string              `json:"name"`
	Sid     *string             `json:"sid"`
	Class   *string             `json:"class"`
	Service *string             `json:"service"`
	Calls   [][]json.RawMessage `json:"calls"`
}

// runScenarios prints one line per scenario: the name, a tab and the statement as JSON (or ERROR
// and the message)
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

func runScenario(s scenario) (result string) {
	defer func() {
		if r := recover(); r != nil {
			result = "ERROR " + message(r)
		}
	}()
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
	return toJSON(statement)
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

// runExamples prints one line per example: the name, a tab and the statements or the policy
// document as JSON (or FAIL)
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
	case *awsiam.PolicyDocument:
		return toJSON(r.ToJSON())
	// a policy of the policy converter
	case map[string]interface{}:
		return toJSON(r)
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
