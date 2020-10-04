install:
	@pip3 uninstall --no-cache-dir -y iam-floyd
	@pip3 install --no-cache-dir dist/python/iam-floyd-*.tar.gz

install-cdk:
	@pip3 uninstall --no-cache-dir -y cdk-iam-floyd
	@pip3 install --no-cache-dir dist/python/cdk-iam-floyd-*.tar.gz

test: install
	@for f in examples/**/*.py; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		python3 "$$f" || exit ;\
	done

test-cdk: install-cdk
	@for f in examples/**/*.cdk.py; do \
		[[ "$$f" == *".cdk."* ]]&& continue; \
		echo "Testing $$(basename $$f)" ;\
		python3 "$$f" || exit ;\
	done
