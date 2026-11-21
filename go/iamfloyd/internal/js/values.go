// Package js is the runtime for the semantics of JavaScript that the transpiled code relies on.
package js

import (
	"math"
	"reflect"
	"strconv"
	"strings"
	"time"
)

// Normalize returns the value with the pointers of the public API dereferenced: *string, *float64,
// *bool and *time.Time become their value, lists of strings or numbers become []interface{}, and
// typed nil becomes nil.
func Normalize(value interface{}) interface{} {
	if v, ok := value.(int); ok {
		return float64(v)
	}
	reflectValue := reflect.ValueOf(value)
	if listTypes[reflect.TypeOf(value)] {
		return toList(reflectValue)
	}
	if reflectValue.Kind() != reflect.Pointer {
		return value
	}
	return dereference(reflectValue)
}

// listTypes are the lists of the public API that become []interface{}
var listTypes = typeSet([]string{}, []*string{}, []float64{}, []*float64{}, []time.Time{}, []*time.Time{})

// pointerTypes are the types whose pointers in the public API are dereferenced
var pointerTypes = typeSet("", 0.0, false, time.Time{}, []*string{}, []*float64{}, []*time.Time{})

func typeSet(values ...interface{}) map[reflect.Type]bool {
	types := map[reflect.Type]bool{}
	for _, value := range values {
		types[reflect.TypeOf(value)] = true
	}
	return types
}

// dereference returns the value of a pointer of the public API, nil for a nil pointer, and other
// pointers as they are
func dereference(pointer reflect.Value) interface{} {
	if pointer.IsNil() {
		return nil
	}
	if pointerTypes[pointer.Elem().Type()] {
		return Normalize(pointer.Elem().Interface())
	}
	return pointer.Interface()
}

func toList(values reflect.Value) []interface{} {
	list := make([]interface{}, values.Len())
	for i := range list {
		list[i] = Normalize(values.Index(i).Interface())
	}
	return list
}

// TypeOf returns the result of the typeof operator for a normalized value
func TypeOf(value interface{}) string {
	switch value.(type) {
	case string:
		return "string"
	case float64, int:
		return "number"
	case bool:
		return "boolean"
	}
	return "object"
}

// IsArray returns whether a value is a list
func IsArray(value interface{}) bool {
	_, ok := Normalize(value).([]interface{})
	return ok
}

// IsDate returns whether a normalized value is a date
func IsDate(value interface{}) bool {
	_, ok := value.(time.Time)
	return ok
}

// ToList returns a value as list
func ToList(value interface{}) []interface{} {
	list, _ := Normalize(value).([]interface{})
	return list
}

// ToString converts a boolean or a number to a string like String() of JavaScript
func ToString(value interface{}) string {
	value = Normalize(value)
	if v, ok := value.(bool); ok {
		return strconv.FormatBool(v)
	}
	return Number(value.(float64))
}

// Number formats a number like JavaScript
func Number(value float64) string {
	if value < 0 {
		return "-" + Number(-value)
	}
	if math.IsNaN(value) {
		return "NaN"
	}
	if math.IsInf(value, 1) {
		return "Infinity"
	}
	return finiteNumber(value)
}

func finiteNumber(value float64) string {
	if value == 0 {
		return "0"
	}
	// the shortest digits that round-trip, e.g. 1.2345e+06
	formatted := strconv.FormatFloat(value, 'e', -1, 64)
	mantissa, exponent, _ := strings.Cut(formatted, "e")
	e, _ := strconv.Atoi(exponent)
	return formatDigits(strings.Replace(mantissa, ".", "", 1), e+1)
}

// formatDigits formats the significant digits of a number with the decimal point at n, relative
// to the first digit, like String() of JavaScript
func formatDigits(digits string, n int) string {
	k := len(digits)
	switch {
	case k <= n && n <= 21:
		return digits + strings.Repeat("0", n-k)
	case 0 < n && n <= 21:
		return digits[:n] + "." + digits[n:]
	case -6 < n && n <= 0:
		return "0." + strings.Repeat("0", -n) + digits
	}
	sign := "+"
	if n-1 < 0 {
		sign = "-"
	}
	result := digits[:1]
	if k > 1 {
		result += "." + digits[1:]
	}
	return result + "e" + sign + strconv.Itoa(int(math.Abs(float64(n-1))))
}

// Or returns the value of a pointer, or the fallback if the pointer is nil (the ?? operator)
func Or[T any](value *T, fallback T) T {
	if value == nil {
		return fallback
	}
	return *value
}

// Coalesce returns the normalized value, or the fallback if it is nil (the ?? operator)
func Coalesce(value interface{}, fallback interface{}) interface{} {
	if value = Normalize(value); value != nil {
		return value
	}
	return fallback
}

// Dates converts dates of a normalized value to strings in ISO 8601, also in lists
func Dates(value interface{}) interface{} {
	switch v := Normalize(value).(type) {
	case time.Time:
		return ToISOString(v)
	case []interface{}:
		list := make([]interface{}, len(v))
		for i, item := range v {
			list[i] = Dates(item)
		}
		return list
	default:
		return v
	}
}

// ToISOString formats a date like toISOString() of JavaScript
func ToISOString(value time.Time) string {
	return value.UTC().Format("2006-01-02T15:04:05.000Z")
}

// Ptr returns a pointer to a value
func Ptr[T any](value T) *T {
	return &value
}

// Values returns the values of a list of pointers; nil becomes the zero value
func Values[T any](values []*T) []T {
	result := make([]T, len(values))
	for i, value := range values {
		if value != nil {
			result[i] = *value
		}
	}
	return result
}

// Ptrs returns a list of pointers to the values of a list
func Ptrs[T any](values []T) []*T {
	result := make([]*T, len(values))
	for i := range values {
		result[i] = &values[i]
	}
	return result
}
