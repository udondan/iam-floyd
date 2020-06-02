SHELL := /bin/bash
VERSION := $(shell cat VERSION)

DOCKER_IMAGE := udondan/jsii-publish
DOCKER_TAG := 0.9.0
DOCKER_WORKDIR := /workdir

PWD := $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))

build:
	npm run build

docker-build:
	docker run -it \
		--workdir ${DOCKER_WORKDIR} \
		--volume ${PWD}:${DOCKER_WORKDIR} \
		--env VERSION=${VERSION} \
		--env BUILD_SOURCE=true \
		--env BUILD_PACKAGES=true \
		${DOCKER_IMAGE}:${DOCKER_TAG}

npm:
	docker run -it \
		--workdir ${DOCKER_WORKDIR} \
		--volume ${PWD}:${DOCKER_WORKDIR} \
		--env NPM_TOKEN \
		${DOCKER_IMAGE}:${DOCKER_TAG}

pypi:
	docker run -it \
		--workdir ${DOCKER_WORKDIR} \
		--volume ${PWD}:${DOCKER_WORKDIR} \
		--env PYPI_TOKEN \
		${DOCKER_IMAGE}:${DOCKER_TAG}

nuget:
	docker run -it \
		--workdir ${DOCKER_WORKDIR} \
		--volume ${PWD}:${DOCKER_WORKDIR} \
		--env NUGET_TOKEN \
		${DOCKER_IMAGE}:${DOCKER_TAG}

maven:
	docker run -it \
		--workdir ${DOCKER_WORKDIR} \
		--volume ${PWD}:${DOCKER_WORKDIR} \
		--env GITHUB_TOKEN \
		--env GITHUB_REPOSITORY=udondan/cdk-ssm-document \
		${DOCKER_IMAGE}:${DOCKER_TAG}





test: build
	npm run test

test-update:
	npm run test -- -u




tag:
	@git tag -a "v$(VERSION)" -m 'Creates tag "v$(VERSION)"'
	@git push --tags

untag:
	@git push --delete origin "v$(VERSION)"
	@git tag --delete "v$(VERSION)"

release: tag

re-release: untag tag
