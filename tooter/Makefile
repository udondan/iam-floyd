SHELL := /bin/bash

clean:
	@echo -e "$(TARGET_COLOR)Running clean$(NO_COLOR)"
	@rm -rf node_modules
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \) -delete

install: clean
	@echo -e "$(TARGET_COLOR)Running install$(NO_COLOR)"
	@bun install --frozen-lockfile

build:
	@echo -e "$(TARGET_COLOR)Running build$(NO_COLOR)"
	@bun run build

diff: build
	@echo -e "$(TARGET_COLOR)Running diff$(NO_COLOR)"
	@cdk diff

synth: build
	@echo -e "$(TARGET_COLOR)Running synth$(NO_COLOR)"
	@cdk synth

deploy: build
	@echo -e "$(TARGET_COLOR)Running deploy$(NO_COLOR)"
	@cdk deploy --require-approval never "*"

DESTROY:
	@echo -e "$(TARGET_COLOR)Running DESTROY$(NO_COLOR)"
	@cdk destroy
