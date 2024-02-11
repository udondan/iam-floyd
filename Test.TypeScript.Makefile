SHELL := /bin/bash

.PHONY: test test-cdk

test:
	@echo "Compiling TypeScript to JS"
	@npx tsc -p ./tsconfig.test-iam-floyd.json
	@for f in examples/**/*.js; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done

test-cdk:
	@echo "Compiling TypeScript to JS"
	@npx tsc -p ./tsconfig.test-cdk-iam-floyd.json
	@for f in examples/**/*.cdk.js; do \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff -I ".*\${Token\[.*\]}.*" "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done
