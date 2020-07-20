SHELL := /bin/bash
VERSION := $(shell cat VERSION)

.PHONY: build generate package test tag untag release re-release changelog cdk-build cdk-package

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

cdk-build:
	@git rev-parse --verify cdk-port && git branch -d cdk-port
	@git checkout -b cdk-port
	$(MAKE) build
	@npm i @aws-cdk/aws-iam
#	@ITEM=lib        && rm -rf "cdk/$${ITEM}" && cp -R "$${ITEM}" "cdk/$${ITEM}"
#	@ITEM=.npmignore && rm -rf "cdk/$${ITEM}" && cp -R "$${ITEM}" "cdk/$${ITEM}"
	@rm -f bin/mkcdk.js && npx ts-node bin/mkcdk.ts

#	@sed -i'.mac' "s/\(\"iam-floyd\": \"\).*\(\".*\)/\1$(VERSION)\2/g" cdk/package.json
#	@rm -f cdk/package.json.mac
#	cd cdk && npm i && npm run build

cdk-package:
	@echo TODO

cdk: cdk-build cdk-package

test:
	@npm run test

changelog:
	@bin/mkchangelog

stats:
	@bin/mkstats

clean:
	@rm -rf node_modules package-lock.json cdk/node_modules cdk/package-lock.json

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
