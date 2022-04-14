.PHONY: test test-cdk

install-cdk:
	npm i aws-cdk-lib constructs@^10.0.0

test: install-cdk
	@echo "Compiling TypeScript to JS"
	@tsc -p examples/tsconfig.json
	@for f in examples/**/*.js; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done

test-cdk: install-cdk
	@echo "Compiling TypeScript to JS"
	@tsc -p examples/tsconfig.cdk.json
	@for f in examples/**/*.cdk.js; do \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff -I ".*\${Token\[.*\]}.*" "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done
