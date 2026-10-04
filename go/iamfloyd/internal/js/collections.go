package js

import (
	"sort"
	"strconv"
)

// Entry is an entry of a Record or a Map
type Entry[K comparable, V any] struct {
	Key   K
	Value V
}

// Record is an object of JavaScript used as dictionary: the keys that are array indexes come
// first in ascending order, then the other keys in the order they were added.
type Record[V any] struct {
	keys   []string
	values map[string]V
}

// NewRecord returns an empty record
func NewRecord[V any]() *Record[V] {
	return &Record[V]{values: map[string]V{}}
}

// RecordOf returns a record with the given entries
func RecordOf[V any](entries ...Entry[string, V]) *Record[V] {
	record := NewRecord[V]()
	for _, entry := range entries {
		record.Set(entry.Key, entry.Value)
	}
	return record
}

// Get returns the value of a key, or the zero value if the key is missing
func (r *Record[V]) Get(key string) V {
	return r.values[key]
}

// GetOr returns the value of a key, or the fallback if the key is missing
func (r *Record[V]) GetOr(key string, fallback V) V {
	if value, ok := r.values[key]; ok {
		return value
	}
	return fallback
}

// Set adds or replaces the value of a key
func (r *Record[V]) Set(key string, value V) {
	if _, ok := r.values[key]; !ok {
		r.keys = append(r.keys, key)
	}
	r.values[key] = value
}

// Has returns whether the record has a key
func (r *Record[V]) Has(key string) bool {
	_, ok := r.values[key]
	return ok
}

// Len returns the number of keys
func (r *Record[V]) Len() int {
	return len(r.keys)
}

func arrayIndex(key string) (uint64, bool) {
	if key == "" || (len(key) > 1 && key[0] == '0') {
		return 0, false
	}
	index, err := strconv.ParseUint(key, 10, 32)
	return index, err == nil && index < 4294967295
}

// Keys returns the keys in the order of JavaScript
func (r *Record[V]) Keys() []string {
	var indexes []string
	var others []string
	for _, key := range r.keys {
		if _, ok := arrayIndex(key); ok {
			indexes = append(indexes, key)
		} else {
			others = append(others, key)
		}
	}
	if len(indexes) == 0 {
		return others
	}
	sort.Slice(indexes, func(i, j int) bool {
		a, _ := arrayIndex(indexes[i])
		b, _ := arrayIndex(indexes[j])
		return a < b
	})
	return append(indexes, others...)
}

// Values returns the values in the order of the keys
func (r *Record[V]) Values() []V {
	keys := r.Keys()
	values := make([]V, len(keys))
	for i, key := range keys {
		values[i] = r.values[key]
	}
	return values
}

// Entries returns the entries in the order of the keys
func (r *Record[V]) Entries() []Entry[string, V] {
	keys := r.Keys()
	entries := make([]Entry[string, V], len(keys))
	for i, key := range keys {
		entries[i] = Entry[string, V]{key, r.values[key]}
	}
	return entries
}

// MarshalJSON writes the record like JSON.stringify
func (r *Record[V]) MarshalJSON() ([]byte, error) {
	return []byte(Stringify(r)), nil
}

func (r *Record[V]) writeJSON(writer *jsonWriter) {
	writer.out.WriteByte('{')
	for i, key := range r.Keys() {
		if i > 0 {
			writer.out.WriteByte(',')
		}
		writer.writeString(key)
		writer.out.WriteByte(':')
		writer.write(r.values[key])
	}
	writer.out.WriteByte('}')
}

// Map is a Map of JavaScript: the keys are in the order they were added
type Map[K comparable, V any] struct {
	keys   []K
	values map[K]V
}

// NewMap returns an empty map
func NewMap[K comparable, V any]() *Map[K, V] {
	return &Map[K, V]{values: map[K]V{}}
}

// Get returns the value of a key, or the zero value if the key is missing
func (m *Map[K, V]) Get(key K) V {
	return m.values[key]
}

// GetOr returns the value of a key, or the fallback if the key is missing
func (m *Map[K, V]) GetOr(key K, fallback V) V {
	if value, ok := m.values[key]; ok {
		return value
	}
	return fallback
}

// Set adds or replaces the value of a key
func (m *Map[K, V]) Set(key K, value V) {
	if _, ok := m.values[key]; !ok {
		m.keys = append(m.keys, key)
	}
	m.values[key] = value
}

// Has returns whether the map has a key
func (m *Map[K, V]) Has(key K) bool {
	_, ok := m.values[key]
	return ok
}

// Len returns the number of keys
func (m *Map[K, V]) Len() int {
	return len(m.keys)
}

// Entries returns the entries in the order they were added
func (m *Map[K, V]) Entries() []Entry[K, V] {
	entries := make([]Entry[K, V], len(m.keys))
	for i, key := range m.keys {
		entries[i] = Entry[K, V]{key, m.values[key]}
	}
	return entries
}

// Set is a Set of JavaScript: the values are in the order they were added
type Set[T comparable] struct {
	values []T
	index  map[T]bool
}

// NewSet returns an empty set
func NewSet[T comparable]() *Set[T] {
	return &Set[T]{index: map[T]bool{}}
}

// Add adds a value, unless the set has it
func (s *Set[T]) Add(value T) {
	if !s.index[value] {
		s.index[value] = true
		s.values = append(s.values, value)
	}
}

// Has returns whether the set has a value
func (s *Set[T]) Has(value T) bool {
	return s.index[value]
}

// Len returns the number of values
func (s *Set[T]) Len() int {
	return len(s.values)
}

// Values returns the values in the order they were added
func (s *Set[T]) Values() []T {
	return append([]T(nil), s.values...)
}
