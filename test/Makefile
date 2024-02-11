SHELL := /bin/bash

test-cdk:
	@npm run build
	@cdk diff
	@cdk deploy --require-approval never
	@cdk destroy --force
	@cat cdk.out/IAM-Floyd-Test.template.json

test:
	@rm -f main.js
	@npx ts-node test/main.ts
