SHELL := /bin/bash

clean:
	@rm -rf node_modules package-lock.json
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

install:
	@npm install

test-cdk: install
	@npm run build
	@npx cdk diff
	@npx cdk deploy --require-approval never
	@npx cdk destroy --force
	@cat cdk.out/IAM-Floyd-Test.template.json

test:
	@rm -f main.js
	@npx ts-node test/main.ts
