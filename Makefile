SHELL := /bin/bash
VERSION := $(shell cat VERSION)

NO_COLOR=\x1b[0m
TARGET_COLOR=\x1b[96m

.PHONY: build emit generate package package-jsii test test-jsii tag untag release re-release changelog cdk docs stats

build: emit
	@echo -e "$(TARGET_COLOR)Running build$(NO_COLOR)"
	@rm -rf *.tsbuildinfo
	@npm run build

emit:
	@echo -e "$(TARGET_COLOR)Running emit$(NO_COLOR)"
	@npm run emit

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
	@npm pack

# Python, Java, .NET and Go packages of cdk-iam-floyd in dist/, run after `make cdk`
package-jsii: build
	@echo -e "$(TARGET_COLOR)Running package-jsii$(NO_COLOR)"
	@npx ts-node bin/jsii.ts
	@rm -rf dist
	@npx jsii-pacmak --targets python,java,dotnet,go

cdk:
	@echo -e "$(TARGET_COLOR)Running cdk$(NO_COLOR)"
	@npx ts-node bin/mkcdk.ts
	@npm i

uncdk:
	@echo -e "$(TARGET_COLOR)Running uncdk$(NO_COLOR)"
	@git stash -- lib/generated/aws-managed-policies
	@git stash -- lib/shared
	@git stash -- package.json
	@$(MAKE) --no-print-directory emit

test:
	@echo -e "$(TARGET_COLOR)Running main test$(NO_COLOR)"
	@cd test && $(MAKE) --no-print-directory -f Makefile test

cdk-test:
	@echo -e "$(TARGET_COLOR)Running CDK test$(NO_COLOR)"
	@cd test && $(MAKE) --no-print-directory -f Makefile test-cdk

cdk-all: cdk install build cdk-test

test-jsii:
	@echo -e "$(TARGET_COLOR)Running jsii test$(NO_COLOR)"
	@test/jsii/run.sh

changelog:
	@echo -e "$(TARGET_COLOR)Running changelog$(NO_COLOR)"
	@bin/mkchangelog

stats:
	@echo -e "$(TARGET_COLOR)Running stats$(NO_COLOR)"
	@bin/mkstats

clean:
	@echo -e "$(TARGET_COLOR)Running clean$(NO_COLOR)"
	@rm -rf node_modules package-lock.json test/node_modules test/package-lock.json dist .jsii .jsii.gz test/jsii/out
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

test-typescript: emit
	$(MAKE) --no-print-directory -f ./Test.TypeScript.Makefile test

test-typescript-cdk: emit
	$(MAKE) --no-print-directory -f ./Test.TypeScript.Makefile test-cdk

regenerate-code-example-results: emit
	@echo "Compiling TypeScript to JS"
	@npx tsc -p ./tsconfig.test-iam-floyd.json
	@for f in examples/**/*.js; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Caching result of $$(basename $$f)" ;\
		node "$$f" > "$${f%.js}.result" || exit ;\
	done

toot: install
	@echo -e "$(TARGET_COLOR)Running toot$(NO_COLOR)"
	@npx ts-node bin/toot.ts

publish:
	@echo -e "$(TARGET_COLOR)Running publish$(NO_COLOR)"
	@find . -type f -name 'README.md' -mindepth 2 -exec rm {} \;
	@npm publish --dry-run 2>&1 | tee publish_output.txt
	@if ! grep -q "lib/index.js" publish_output.txt; then \
		echo "❌ lib/index.js is NOT included in the package"; \
		exit 1; \
	fi
	@if ! grep -q "lib/index.d.ts" publish_output.txt; then \
		echo "❌ lib/index.d.ts is NOT included in the package"; \
		exit 1; \
	fi
	@rm publish_output.txt
	@if [ -z "$${NODE_AUTH_TOKEN}" ]; then \
		echo "⚠️ NODE_AUTH_TOKEN is not set. Skipping publish"; \
	else \
		npm publish; \
	fi

eslint:
	@echo "Running eslint $$(npx eslint --version)..."; \
	npx eslint .; \
	echo "Passed"
