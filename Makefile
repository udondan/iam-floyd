SHELL := /bin/bash
VERSION := $(shell node -p "require('./package.json').version")

NO_COLOR=\x1b[0m
TARGET_COLOR=\x1b[96m
# Languages of package-jsii and test-jsii. TypeScript needs no package, it is the baseline of test-jsii
LANGUAGES ?= typescript python java dotnet go
JSII_TARGETS := $(filter-out typescript,$(LANGUAGES))
# The languages of the native packages of iam-floyd, with the transpiled core
TRANSPILE_LANGUAGES := $(filter python java dotnet,$(LANGUAGES))
EMPTY :=
SPACE := $(EMPTY) $(EMPTY)
COMMA := ,

.PHONY: build emit generate package package-native package-jsii test-jsii test-transpile changelog cdk docs stats lint lint-fix lint-cdk

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

# The native packages of iam-floyd in dist/iam-floyd/: Python, Java (a Maven repository) and .NET.
# Set LANGUAGES to build only some of them, e.g. `make package-native LANGUAGES=python`
package-native: emit
	@echo -e "$(TARGET_COLOR)Running package-native$(NO_COLOR)"
	@npx ts-node bin/transpile.ts
	@rm -rf dist/iam-floyd
	$(if $(filter python,$(LANGUAGES)),@cp LICENSE python/LICENSE)
	$(if $(filter python,$(LANGUAGES)),@uv build --quiet python --out-dir dist/iam-floyd/python)
	$(if $(filter java,$(LANGUAGES)),@mvn --batch-mode --quiet -f java/pom.xml clean deploy -Drevision=$(VERSION) \
		-DaltDeploymentRepository=local::file://$(CURDIR)/dist/iam-floyd/java)
	$(if $(filter dotnet,$(LANGUAGES)),@dotnet pack dotnet/src/IAM.Floyd/IAM.Floyd.csproj --nologo -v quiet -c Release -p:Version=$(VERSION) \
		--artifacts-path dist/iam-floyd/dotnet-build -p:PackageOutputPath=$(CURDIR)/dist/iam-floyd/dotnet)
	$(if $(filter dotnet,$(LANGUAGES)),@rm -rf dist/iam-floyd/dotnet-build)

# Python, Java, .NET and Go packages of cdk-iam-floyd in dist/, run after `make cdk`.
# Set LANGUAGES to build only some of them, e.g. `make package-jsii LANGUAGES=python`
# The runtime type checks of jsii-pacmak are left out: they add a third to the code, and in Go they
# reject nil for optional union parameters like the operator of `if*` methods. bin/jsii-pack.ts
# writes a smaller npm tarball for embedding in the packages.
package-jsii: build
	@echo -e "$(TARGET_COLOR)Running package-jsii$(NO_COLOR)"
	@npx ts-node bin/jsii.ts
	@rm -rf dist
	$(if $(JSII_TARGETS),@npx jsii-pacmak --targets $(subst $(SPACE),$(COMMA),$(JSII_TARGETS)) --no-runtime-type-checking --pack-command "node $(CURDIR)/node_modules/ts-node/dist/bin.js $(CURDIR)/bin/jsii-pack.ts")
	$(if $(filter go,$(JSII_TARGETS)),@bin/go-proxy zip dist/go/cdkiamfloyd v$(VERSION) dist/go-module/cdk-iam-floyd-go-module-v$(VERSION).zip)

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

cdk-test:
	@echo -e "$(TARGET_COLOR)Running CDK test$(NO_COLOR)"
	@cd test && $(MAKE) --no-print-directory -f Makefile test-cdk

cdk-all: cdk install build cdk-test

test-jsii:
	@echo -e "$(TARGET_COLOR)Running jsii test$(NO_COLOR)"
	@test/jsii/run.sh $(LANGUAGES)

test-transpile: emit
	@echo -e "$(TARGET_COLOR)Running transpile test$(NO_COLOR)"
	@test/transpile/run.sh $(TRANSPILE_LANGUAGES)

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
	@if [ "$$(node -p "require('./package.json').name")" == "cdk-iam-floyd" ] && ! grep -q " .jsii.gz$$" publish_output.txt; then \
		echo "❌ The jsii assembly is NOT included in the package, run \`make package-jsii\` first"; \
		exit 1; \
	fi
	@rm publish_output.txt
	@if [ "$${NPM_PUBLISH}" != "true" ]; then \
		echo "⚠️ NPM_PUBLISH is not true. Skipping publish"; \
	else \
		npm publish; \
	fi

# The TypeScript is linted with types, which need the emitted service classes
lint: emit
	@bin/lint

lint-fix: emit
	@bin/lint --fix

# After `make cdk`: the CDK variant of the TypeScript code, the other files are the same
lint-cdk:
	@echo -e "$(TARGET_COLOR)Running eslint on the CDK variant$(NO_COLOR)"
	@[ -d tooter/node_modules ] || npm ci --prefix tooter --no-audit --no-fund
	@npx eslint .
