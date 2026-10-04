package js

import (
	"regexp"
	"sort"
	"strings"
	"unicode/utf16"
)

func isASCII(value string) bool {
	for i := 0; i < len(value); i++ {
		if value[i] >= 0x80 {
			return false
		}
	}
	return true
}

// Length returns the length of a string in UTF-16 code units, like in JavaScript
func Length(value string) int {
	if isASCII(value) {
		return len(value)
	}
	return len(utf16.Encode([]rune(value)))
}

// Substring returns the part of a string between two indexes in UTF-16 code units, like
// substring() of JavaScript: the indexes are clamped and swapped if needed.
func Substring(value string, start int, end ...int) string {
	ascii := isASCII(value)
	var units []uint16
	length := len(value)
	if !ascii {
		units = utf16.Encode([]rune(value))
		length = len(units)
	}
	stop := length
	if len(end) > 0 {
		stop = end[0]
	}
	start = min(max(start, 0), length)
	stop = min(max(stop, 0), length)
	if start > stop {
		start, stop = stop, start
	}
	if ascii {
		return value[start:stop]
	}
	return string(utf16.Decode(units[start:stop]))
}

// IndexOf returns the index of a search string in UTF-16 code units, or -1
func IndexOf(value string, search string) int {
	index := strings.Index(value, search)
	if index <= 0 {
		return index
	}
	return Length(value[:index])
}

// LastIndexOf returns the last index of a search string in UTF-16 code units, or -1
func LastIndexOf(value string, search string) int {
	index := strings.LastIndex(value, search)
	if index <= 0 {
		return index
	}
	return Length(value[:index])
}

// Compare compares two strings by their UTF-16 code units, like the < operator of JavaScript
func Compare(a string, b string) int {
	if isASCII(a) && isASCII(b) {
		return strings.Compare(a, b)
	}
	x := utf16.Encode([]rune(a))
	y := utf16.Encode([]rune(b))
	for i := 0; i < len(x) && i < len(y); i++ {
		if x[i] != y[i] {
			if x[i] < y[i] {
				return -1
			}
			return 1
		}
	}
	return len(x) - len(y)
}

// Sort sorts strings in place by their UTF-16 code units, like sort() of JavaScript
func Sort(values []string) []string {
	sort.SliceStable(values, func(i, j int) bool {
		return Compare(values[i], values[j]) < 0
	})
	return values
}

// IndexOfItem returns the index of an item in a list, or -1
func IndexOfItem[T comparable](values []T, item T) int {
	for i, value := range values {
		if value == item {
			return i
		}
	}
	return -1
}

// Includes returns whether a list has an item
func Includes[T comparable](values []T, item T) bool {
	return IndexOfItem(values, item) >= 0
}

// Filter returns the items of a list for which the function returns true
func Filter[T any](values []T, predicate func(value T, index int) bool) []T {
	result := []T{}
	for i, value := range values {
		if predicate(value, i) {
			result = append(result, value)
		}
	}
	return result
}

// MapItems returns the results of the function for the items of a list
func MapItems[T any, R any](values []T, function func(value T, index int) R) []R {
	result := make([]R, len(values))
	for i, value := range values {
		result[i] = function(value, i)
	}
	return result
}

// RegExp compiles a regular expression of JavaScript with the flags i, m and s
func RegExp(pattern string, flags string) *regexp.Regexp {
	prefix := ""
	for _, flag := range flags {
		switch flag {
		case 'i', 'm', 's':
			prefix += string(flag)
		default:
			Throw("Unsupported regular expression flag: " + string(flag))
		}
	}
	if prefix != "" {
		pattern = "(?" + prefix + ")" + pattern
	}
	expression, err := regexp.Compile(pattern)
	if err != nil {
		Throw("Invalid regular expression: " + err.Error())
	}
	return expression
}
