install:
	@pip3 uninstall --no-cache-dir -y iam-floyd
	@pip3 install --no-cache-dir ../../dist/python/iam-floyd-*.tar.gz

install-cdk:
	@pip3 uninstall --no-cache-dir -y cdk-iam-floyd
	@pip3 install --no-cache-dir ../../dist/python/cdk-iam-floyd-*.tar.gz


test: install
	@find ../../examples -iname "*.py" ! -name '*.cdk.py' -exec echo Testing {} \; -exec python3 {} \;

test-cdk: install-cdk
	@find ../../examples -iname "*cdk.py" -exec echo Testing {} \; -exec python3 {} \;
