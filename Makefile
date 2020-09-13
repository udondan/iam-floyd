SHELL := /bin/bash
VERSION := $(shell cat VERSION)

NO_COLOR=\x1b[0m
TARGET_COLOR=\x1b[96m

.PHONY: build generate package test tag untag release re-release changelog cdk

build:
	@echo -e "$(TARGET_COLOR)Running build$(NO_COLOR)"
	@npm run build

generate:
	@echo -e "$(TARGET_COLOR)Running generate$(NO_COLOR)"
	@npm run generate
	@find lib bin -name "*.js" -type f -exec rm -vf {} \;

generate-force:
	@echo -e "$(TARGET_COLOR)Running generate-force$(NO_COLOR)"
	@NOCACHE=1 npm run generate
	@find lib bin -name "*.js" -type f -exec rm -vf {} \;

package: build
	@echo -e "$(TARGET_COLOR)Running package$(NO_COLOR)"
	@npm run package

cdk:
	@echo -e "$(TARGET_COLOR)Running cdk$(NO_COLOR)"
	@npx ts-node bin/mkcdk.ts

test:
	@echo -e "$(TARGET_COLOR)Running main test$(NO_COLOR)"
	@rm -f test/main.js
	@npx ts-node test/main.ts

cdk-test:
	@echo -e "$(TARGET_COLOR)Running CDK test$(NO_COLOR)"
	@echo -e "$(TARGET_COLOR)Preparing test...$(NO_COLOR)"
	@rm -rf test/node_modules test/package-lock.json
	@find test -type f \( -iname \*.js -o -iname \*.d.ts \) -delete
	@cd test && npm i
	@cd test && npm run build
	@echo -e "$(TARGET_COLOR)Running test...$(NO_COLOR)"
	@cd test && cdk diff
	@cd test && cdk deploy --require-approval never
	@cd test && cdk destroy --force

cdk-all: cdk install build cdk-test

changelog:
	@echo -e "$(TARGET_COLOR)Running changelog$(NO_COLOR)"
	@bin/mkchangelog

stats:
	@echo -e "$(TARGET_COLOR)Running stats$(NO_COLOR)"
	@bin/mkstats

clean:
	@echo -e "$(TARGET_COLOR)Running clean$(NO_COLOR)"
	@rm -rf node_modules package-lock.json test/node_modules test/package-lock.json
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

install: clean
	@echo -e "$(TARGET_COLOR)Running install$(NO_COLOR)"
	@npm i

tag:
	@git tag -a "v$(VERSION)" -m 'Creates tag "v$(VERSION)"'
	@git push --tags

untag:
	@git push --delete origin "v$(VERSION)"
	@git tag --delete "v$(VERSION)"

release: tag

re-release: untag tag




test-python:
	@cd test/python && $(MAKE) test

test-python-cdk:
	@cd test/python && $(MAKE) test-cdk
