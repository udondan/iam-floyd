SHELL := /bin/bash
VERSION := $(shell cat VERSION)
CDK_BRANCH := cdk

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
	git checkout -b ${CDK_BRANCH}
	npm i @aws-cdk/aws-iam
	rm -f bin/mkcdk.js && npx ts-node bin/mkcdk.ts

test:
	@[[ "$$(git branch --show-current)" == "${CDK_BRANCH}" ]] && echo "Running CDK test" && cd test && npm i && cdk diff && cdk deploy --require-approval never && cdk destroy --force || true
	@[[ "$$(git branch --show-current)" != "${CDK_BRANCH}" ]] && echo "Running main test" && rm -f test/main.js && npx ts-node test/main.ts || true

changelog:
	@bin/mkchangelog

stats:
	@bin/mkstats

clean:
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
