package js

// Tests the cases of the runtime that the scenarios of test/transpile cannot reach: the pointers
// and nil values of the public API, values that JSON cannot express (NaN, Infinity) and the errors
// of the runtime.

import (
	"encoding/json"
	"math"
	"reflect"
	"testing"
	"time"
)

func panics(t *testing.T, name string, expected string, function func()) {
	t.Helper()
	defer func() {
		if err, _ := recover().(error); err == nil || err.Error() != expected {
			t.Errorf("%s: expected panic %q, got %v", name, expected, err)
		}
	}()
	function()
}

func TestNormalize(t *testing.T) {
	text := "a"
	number := 1.5
	flag := true
	date := time.Date(2024, 2, 29, 13, 14, 15, 0, time.UTC)
	texts := []*string{&text}
	numbers := []*float64{&number}
	dates := []*time.Time{&date}
	cases := []struct {
		name     string
		value    interface{}
		expected interface{}
	}{
		{"nil", nil, nil},
		{"*string", &text, "a"},
		{"nil *string", (*string)(nil), nil},
		{"*float64", &number, 1.5},
		{"nil *float64", (*float64)(nil), nil},
		{"*bool", &flag, true},
		{"nil *bool", (*bool)(nil), nil},
		{"*time.Time", &date, date},
		{"nil *time.Time", (*time.Time)(nil), nil},
		{"int", 2, 2.0},
		{"[]interface{}", []interface{}{"a", 1.0}, []interface{}{"a", 1.0}},
		{"[]string", []string{"a"}, []interface{}{"a"}},
		{"[]*string", texts, []interface{}{"a"}},
		{"*[]*string", &texts, []interface{}{"a"}},
		{"nil *[]*string", (*[]*string)(nil), nil},
		{"[]float64", []float64{1.5}, []interface{}{1.5}},
		{"[]*float64", numbers, []interface{}{1.5}},
		{"*[]*float64", &numbers, []interface{}{1.5}},
		{"nil *[]*float64", (*[]*float64)(nil), nil},
		{"[]time.Time", []time.Time{date}, []interface{}{date}},
		{"[]*time.Time", dates, []interface{}{date}},
		{"*[]*time.Time", &dates, []interface{}{date}},
		{"nil *[]*time.Time", (*[]*time.Time)(nil), nil},
		{"nil pointer", (*Record[string])(nil), nil},
		{"other", map[string]int{}, map[string]int{}},
	}
	for _, c := range cases {
		if actual := Normalize(c.value); !reflect.DeepEqual(actual, c.expected) {
			t.Errorf("Normalize %s: expected %#v, got %#v", c.name, c.expected, actual)
		}
	}
}

func TestNumber(t *testing.T) {
	cases := map[float64]string{
		math.NaN():   "NaN",
		math.Inf(1):  "Infinity",
		math.Inf(-1): "-Infinity",
	}
	for value, expected := range cases {
		if actual := Number(value); actual != expected {
			t.Errorf("Number(%v): expected %s, got %s", value, expected, actual)
		}
	}
}

func TestRecord(t *testing.T) {
	record := NewRecord[int]()
	for i, key := range []string{"b", "10", "2", "", "01", "4294967295", "a"} {
		record.Set(key, i)
	}
	expected := []string{"2", "10", "b", "", "01", "4294967295", "a"}
	if keys := record.Keys(); !reflect.DeepEqual(keys, expected) {
		t.Errorf("Keys: expected %q, got %q", expected, keys)
	}
	entries := record.Entries()
	if len(entries) != 7 || entries[0] != (Entry[string, int]{"2", 2}) || entries[6] != (Entry[string, int]{"a", 6}) {
		t.Errorf("Entries: got %v", entries)
	}
	data, err := json.Marshal(record)
	if expected := `{"2":2,"10":1,"b":0,"":3,"01":4,"4294967295":5,"a":6}`; err != nil || string(data) != expected {
		t.Errorf("MarshalJSON: expected %s, got %s (%v)", expected, data, err)
	}
}

func TestMapAndSet(t *testing.T) {
	m := NewMap[string, int]()
	m.Set("a", 1)
	m.Set("a", 2)
	if !m.Has("a") || m.Has("b") || m.Len() != 1 {
		t.Errorf("Map: got %v", m.Entries())
	}
	s := NewSet[string]()
	s.Add("a")
	s.Add("a")
	if s.Len() != 1 {
		t.Errorf("Set: got %v", s.Values())
	}
}

func TestStrings(t *testing.T) {
	// é is one UTF-16 code unit, 😀 two
	value := "é😀ab"
	if actual := Substring(value, 1); actual != "😀ab" {
		t.Errorf("Substring(1): got %q", actual)
	}
	if actual := Substring(value, -1, 3); actual != "é😀" {
		t.Errorf("Substring(-1, 3): got %q", actual)
	}
	if actual := Substring(value, 3, 10); actual != "ab" {
		t.Errorf("Substring(3, 10): got %q", actual)
	}
	indexes := map[string]int{"é": 0, "b": 4, "c": -1}
	for search, expected := range indexes {
		if actual := IndexOf(value, search); actual != expected {
			t.Errorf("IndexOf(%q): expected %d, got %d", search, expected, actual)
		}
	}
	comparisons := []struct {
		a, b     string
		expected int
	}{
		{"a", "b", -1},
		{"é", "a", 1},
		{"a", "é", -1},
		// U+FF21 is above the surrogates of U+1F600 in UTF-16, but below in UTF-8
		{"Ａ", "😀", 1},
		{"é", "éa", -1},
		{"é", "é", 0},
	}
	for _, c := range comparisons {
		if actual := Compare(c.a, c.b); actual != c.expected {
			t.Errorf("Compare(%q, %q): expected %d, got %d", c.a, c.b, c.expected, actual)
		}
	}
}

func TestRegExp(t *testing.T) {
	if !RegExp("^a$", "i").MatchString("A") {
		t.Error("RegExp i: does not match")
	}
	panics(t, "RegExp g", "Unsupported regular expression flag: g", func() { RegExp("a", "g") })
	panics(t, "RegExp invalid", "Invalid regular expression: error parsing regexp: missing closing ): `(`", func() { RegExp("(", "") })
}

func TestPtrs(t *testing.T) {
	values := []string{"a", "b"}
	if actual := Values(Ptrs(values)); !reflect.DeepEqual(actual, values) {
		t.Errorf("Ptrs: got %q", actual)
	}
}

func TestStringify(t *testing.T) {
	if actual := Stringify([]interface{}{math.NaN(), math.Inf(1), math.Inf(-1)}); actual != "[null,null,null]" {
		t.Errorf("Stringify NaN: got %s", actual)
	}
	panics(t, "Stringify map", "cannot serialize map[string]int to JSON", func() { Stringify(map[string]int{}) })
}
