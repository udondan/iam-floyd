SHELL := /bin/bash
VERSION := $(shell node -p "require('../package.json').version")

clean:
	@rm -rf node_modules package-lock.json
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

install:
	@npm install --no-save ../cdk-iam-floyd-$(VERSION).tgz

test-cdk: install
	@npm run build
	@npx cdk diff
	@npx cdk deploy --require-approval never
	@npx cdk destroy --force
	@cat cdk.out/IAM-Floyd-Test.template.json
