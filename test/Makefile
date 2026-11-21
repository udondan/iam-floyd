SHELL := /bin/bash
VERSION := $(shell node -p "require('../package.json').version")

clean:
	@rm -rf node_modules bun.lock
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

install:
	@bun add --no-save ../cdk-iam-floyd-$(VERSION).tgz

test-cdk: install
	@bun run build
	@bunx cdk diff
	@bunx cdk deploy --require-approval never
	@bunx cdk destroy --force
	@cat cdk.out/IAM-Floyd-Test.template.json
