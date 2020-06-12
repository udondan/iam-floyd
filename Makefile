SHELL := /bin/bash
VERSION := $(shell cat VERSION)

build:
	@npm run build

generate:
	@npm run generate
	@find lib bin -name "*.js" -type f -exec rm -vf {} \;

package: build
	@npm run package

tag:
	@git tag -a "v$(VERSION)" -m 'Creates tag "v$(VERSION)"'
	@git push --tags

untag:
	@git push --delete origin "v$(VERSION)"
	@git tag --delete "v$(VERSION)"

release: tag

re-release: untag tag
