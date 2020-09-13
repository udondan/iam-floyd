install:
	@pip uninstall -y iam-floyd
	@pip install ../../dist/python/iam-floyd-0.0.0.tar.gz

install-cdk:
	@pip uninstall -y cdk-iam-floyd
	@pip install ../../dist/python/cdk-iam-floyd-0.0.0.tar.gz


test: install
	@python test.py

test-cdk: install-cdk
	@python test-cdk.py
