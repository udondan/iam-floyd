SHELL := /bin/bash

install:
	@pip3 uninstall --no-cache-dir -y iam-floyd
	@pip3 install --no-cache-dir dist/python/iam-floyd-*.tar.gz
	@pip3 install --no-cache-dir boto3
	@pip3 install --force-reinstall "cryptography==38.0.4" # temporary fix https://github.com/aws/aws-sam-cli/issues/4527#issuecomment-1368871248

install-cdk:
	@pip3 uninstall --no-cache-dir -y cdk-iam-floyd
	@pip3 install --no-cache-dir dist/python/cdk-iam-floyd-*.tar.gz

test: install
	@for f in examples/**/*.py; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		python3 "$$f" > "$${f%.py}.py.result" || exit ;\
		diff "$${f%.py}.py.result" "$${f%.py}.result" || exit ;\
	done

test-cdk: install-cdk
	@for f in examples/**/*.cdk.py; do \
		echo "Testing $$(basename $$f)" ;\
		python3 "$$f" > "$${f%.py}.py.result" || exit ;\
		diff -I ".*\${Token\[.*\]}.*" "$${f%.py}.py.result" "$${f%.py}.result" || exit ;\
	done
