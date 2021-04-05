SHELL := /bin/bash

NO_COLOR=\x1b[0m
TARGET_COLOR=\x1b[96m

.PHONY: build generate package

build:
	@echo -e "$(TARGET_COLOR)Running build$(NO_COLOR)"
	@npm run build

package: build
	@echo -e "$(TARGET_COLOR)Running package$(NO_COLOR)"
	@npm run package

clean:
	@echo -e "$(TARGET_COLOR)Running clean$(NO_COLOR)"
	@rm -rf node_modules package-lock.json test/node_modules test/package-lock.json
	@find . -not -path "./docs/*" -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

install: clean
	@echo -e "$(TARGET_COLOR)Running install$(NO_COLOR)"
	@npm i

py-install:
	pip3 uninstall --no-cache-dir -y foo
	pip3 install --no-cache-dir dist/python/foo-*.tar.gz

test: py-install
	echo -e "import foo" | python3
