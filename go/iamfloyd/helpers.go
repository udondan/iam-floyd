package iamfloyd

// String returns a pointer to a string, for the parameters of the API
func String(value string) *string {
	return &value
}

// Strings returns a pointer to a list of pointers to strings, for the parameters of the API
func Strings(values ...string) *[]*string {
	list := make([]*string, len(values))
	for i := range values {
		list[i] = &values[i]
	}
	return &list
}

// Number returns a pointer to a number, for the parameters of the API
func Number(value float64) *float64 {
	return &value
}

// Bool returns a pointer to a boolean, for the parameters of the API
func Bool(value bool) *bool {
	return &value
}
