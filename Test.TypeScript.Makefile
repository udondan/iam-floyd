SHELL := /bin/bash

.PHONY: test test-cdk

test:
	@echo "Compiling TypeScript to JS"
	@npx tsc -p ./tsconfig.test.json
	@for f in examples/**/*.js; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done

test-cdk:
	@find examples/** -type f -iname "*.cdk.ts" > /tmp/ts.result
	@echo "Compiling TypeScript to JS"
	@npx tsc @/tmp/ts.result
	@rm /tmp/ts.result
	@for f in examples/**/*.cdk.js; do \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff -I ".*\${Token\[.*\]}.*" "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done
