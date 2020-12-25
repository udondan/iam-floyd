.PHONY: test test-cdk

install-cdk:
	npm i @aws-cdk/aws-iam

test:
	@find examples/** -type f \( -iname "*.ts" ! -iname "*.cdk.ts" \) > /tmp/ts.result
	@echo "Compiling TypeScript to JS"
	@tsc @/tmp/ts.result
	@rm /tmp/ts.result
	@for f in examples/**/*.js; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done

test-cdk: install-cdk
	@find examples/** -type f -iname "*.cdk.ts" > /tmp/ts.result
	@echo "Compiling TypeScript to JS"
	@tsc @/tmp/ts.result
	@rm /tmp/ts.result
	@for f in examples/**/*.cdk.js; do \
		echo "Testing $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.ts.result" || exit ;\
		diff "$${f%.js}.ts.result" "$${f%.js}.result" || exit ;\
	done
