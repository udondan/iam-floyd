// Package js is the runtime for the semantics of JavaScript that the transpiled code relies on.
package js

import (
	"errors"
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
	switch v := value.(type) {
	case nil:
		return nil
	case *string:
		if v == nil {
			return nil
		}
		return *v
	case *float64:
		if v == nil {
			return nil
		}
		return *v
	case *bool:
		if v == nil {
			return nil
		}
		return *v
	case *time.Time:
		if v == nil {
			return nil
		}
		return *v
	case int:
		return float64(v)
	case []interface{}:
		return v
	case []string:
		return toList(v)
	case []*string:
		return toList(v)
	case *[]*string:
		if v == nil {
			return nil
		}
		return toList(*v)
	case []float64:
		return toList(v)
	case []*float64:
		return toList(v)
	case *[]*float64:
		if v == nil {
			return nil
		}
		return toList(*v)
	case []time.Time:
		return toList(v)
	case []*time.Time:
		return toList(v)
	case *[]*time.Time:
		if v == nil {
			return nil
		}
		return toList(*v)
	}
	if reflectValue := reflect.ValueOf(value); reflectValue.Kind() == reflect.Pointer && reflectValue.IsNil() {
		return nil
	}
	return value
}

func toList[T any](values []T) []interface{} {
	list := make([]interface{}, len(values))
	for i, value := range values {
		list[i] = Normalize(value)
	}
	return list
}

// TypeOf returns the result of the typeof operator for a normalized value
func TypeOf(value interface{}) string {
	switch value.(type) {
	case nil:
		return "undefined"
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

// ToString converts a value to a string like String() of JavaScript
func ToString(value interface{}) string {
	switch v := Normalize(value).(type) {
	case nil:
		return "undefined"
	case string:
		return v
	case bool:
		return strconv.FormatBool(v)
	case float64:
		return Number(v)
	case time.Time:
		return ToISOString(v)
	case []interface{}:
		items := make([]string, len(v))
		for i, item := range v {
			if item != nil {
				items[i] = ToString(item)
			}
		}
		return strings.Join(items, ",")
	case interface{ ToString() string }:
		return v.ToString()
	}
	return "[object Object]"
}

// Number formats a number like JavaScript
func Number(value float64) string {
	switch {
	case math.IsNaN(value):
		return "NaN"
	case math.IsInf(value, 1):
		return "Infinity"
	case math.IsInf(value, -1):
		return "-Infinity"
	case value == 0:
		return "0"
	case value < 0:
		return "-" + Number(-value)
	}
	// the shortest digits that round-trip, e.g. 1.2345e+06
	formatted := strconv.FormatFloat(value, 'e', -1, 64)
	mantissa, exponent, _ := strings.Cut(formatted, "e")
	digits := strings.Replace(mantissa, ".", "", 1)
	e, _ := strconv.Atoi(exponent)
	k := len(digits)
	n := e + 1
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

// Throw panics with an error, like the throw statement of JavaScript
func Throw(message string) {
	panic(errors.New(message))
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
