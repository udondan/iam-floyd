SHELL := /bin/bash
VERSION := $(shell cat VERSION)

build:
	@npm run build

generate:
	@npm run generate

tag:
	@git tag -a "v$(VERSION)" -m 'Creates tag "v$(VERSION)"'
	@git push --tags

untag:
	@git push --delete origin "v$(VERSION)"
	@git tag --delete "v$(VERSION)"

release: tag

re-release: untag tag
