package js

import (
	"fmt"
	"math"
	"reflect"
	"strconv"
	"strings"
	"time"
	"unicode/utf8"
)

type jsonWriter struct {
	out strings.Builder
}

type jsonValue interface {
	writeJSON(writer *jsonWriter)
}

type toJSON interface {
	ToJSON() interface{}
}

// Stringify returns the JSON of a value like JSON.stringify: records keep the order of their keys,
// numbers are formatted like in JavaScript, and objects are written by their ToJSON method.
func Stringify(value interface{}) string {
	writer := &jsonWriter{}
	writer.write(value)
	return writer.out.String()
}

func (w *jsonWriter) write(value interface{}) {
	value = Normalize(value)
	switch v := value.(type) {
	case nil:
		w.out.WriteString("null")
	case string:
		w.writeString(v)
	case bool:
		w.out.WriteString(strconv.FormatBool(v))
	case float64:
		if math.IsNaN(v) || math.IsInf(v, 0) {
			w.out.WriteString("null")
		} else {
			w.out.WriteString(Number(v))
		}
	case time.Time:
		w.writeString(ToISOString(v))
	case jsonValue:
		v.writeJSON(w)
	case []interface{}:
		w.out.WriteByte('[')
		for i, item := range v {
			if i > 0 {
				w.out.WriteByte(',')
			}
			w.write(item)
		}
		w.out.WriteByte(']')
	case toJSON:
		w.write(v.ToJSON())
	default:
		panic(fmt.Errorf("cannot serialize %s to JSON", reflect.TypeOf(value)))
	}
}

func (w *jsonWriter) writeString(value string) {
	w.out.WriteByte('"')
	for i := 0; i < len(value); {
		r, size := utf8.DecodeRuneInString(value[i:])
		switch {
		case r == '"':
			w.out.WriteString(`\"`)
		case r == '\\':
			w.out.WriteString(`\\`)
		case r == '\b':
			w.out.WriteString(`\b`)
		case r == '\f':
			w.out.WriteString(`\f`)
		case r == '\n':
			w.out.WriteString(`\n`)
		case r == '\r':
			w.out.WriteString(`\r`)
		case r == '\t':
			w.out.WriteString(`\t`)
		case r < 0x20 || (r == utf8.RuneError && size == 1):
			fmt.Fprintf(&w.out, `\u%04x`, r)
		default:
			w.out.WriteString(value[i : i+size])
		}
		i += size
	}
	w.out.WriteByte('"')
}
