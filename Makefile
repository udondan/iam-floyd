SHELL := /bin/bash
VERSION := $(shell cat VERSION)

.PHONY: build generate package test tag untag release re-release changelog cdk

build:
	@npm run build

generate:
	@npm run generate
	@find lib bin -name "*.js" -type f -exec rm -vf {} \;

generate-force:
	@NOCACHE=1 npm run generate
	@find lib bin -name "*.js" -type f -exec rm -vf {} \;

package: build
	@npm run package

cdk:
	@npm i @aws-cdk/aws-iam
	@npx ts-node bin/mkcdk.ts

test:
	@echo "Running main test"
	@rm -f test/main.js && npx ts-node test/main.ts

cdk-test:
	@echo "Running CDK test"
	@find test -type f \( -iname \*.js -o -iname \*.d.ts \)
	@cd test && npm i
	@cdk diff && cdk deploy --require-approval never && cdk destroy --force

cdk-all: cdk install build cdk-test

changelog:
	@bin/mkchangelog

stats:
	@bin/mkstats

clean:
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \)
	@rm -rf node_modules package-lock.json

install: clean
	@npm i

tag:
	@git tag -a "v$(VERSION)" -m 'Creates tag "v$(VERSION)"'
	@git push --tags

untag:
	@git push --delete origin "v$(VERSION)"
	@git tag --delete "v$(VERSION)"

release: tag

re-release: untag tag
