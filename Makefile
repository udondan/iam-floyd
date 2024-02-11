SHELL := /bin/bash
VERSION := $(shell cat VERSION)

NO_COLOR=\x1b[0m
TARGET_COLOR=\x1b[96m

.PHONY: build generate package test tag untag release re-release changelog cdk docs stats

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

index-managed-policies:
	@echo -e "$(TARGET_COLOR)Running index-managed-policies$(NO_COLOR)"
	@npm run index-managed-policies
	@find lib bin -name "*.js" -type f -exec rm -vf {} \;

package: build
	@echo -e "$(TARGET_COLOR)Running package$(NO_COLOR)"
	@npm run package

cdk:
	@echo -e "$(TARGET_COLOR)Running cdk$(NO_COLOR)"
	@npx ts-node bin/mkcdk.ts

test:
	@echo -e "$(TARGET_COLOR)Running main test$(NO_COLOR)"
	@cd test && $(MAKE) --no-print-directory -f Makefile test

cdk-test:
	@echo -e "$(TARGET_COLOR)Running CDK test$(NO_COLOR)"
	@cd test && $(MAKE) --no-print-directory -f Makefile test-cdk

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
	@find . -not -path "./docs/*" -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

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

update-version-refs:
	@perl -pi -e "s/(iam-floyd\@)[0-9.]+/\$${1}$(VERSION)/g" "README.md"
	@perl -pi -e "s/^(release = ')[0-9.]+/\$${1}${VERSION}/g" "docs/source/conf.py"

docs:
	@cd docs && $(MAKE) clean html

test-typescript: install
	$(MAKE) --no-print-directory -f ./Test.TypeScript.Makefile test

test-typescript-cdk: install
	$(MAKE) --no-print-directory -f ./Test.TypeScript.Makefile test-cdk

regenerate-code-example-results:
	@find examples/** -type f \( -iname "*.ts" ! -iname "*.cdk.ts" \) > /tmp/ts.result
	@echo "Compiling TypeScript to JS"
	@tsc @/tmp/ts.result
	@rm /tmp/ts.result
	@for f in examples/**/*.js; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Caching result of $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.result" || exit ;\
	done

tweet: install
	@echo -e "$(TARGET_COLOR)Running tweet$(NO_COLOR)"
	@npx ts-node bin/tweet.ts

toot: install
	@echo -e "$(TARGET_COLOR)Running toot$(NO_COLOR)"
	@npx ts-node bin/toot.ts
