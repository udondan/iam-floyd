.PHONY: test test-cdk

test:
	@for f in examples/**/*.ts; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		npx ts-node "$$f" > "$${f%.ts}.ts.result" || exit ;\
		diff "$${f%.ts}.ts.result" "$${f%.ts}.result" || exit ;\
	done


test-cdk:
	@for f in examples/**/*.cdk.ts; do \
		echo "Testing $$(basename $$f)" ;\
		npx ts-node "$$f" > "$${f%.ts}.ts.result" || exit ;\
		diff "$${f%.ts}.ts.result" "$${f%.ts}.result" || exit ;\
	done
