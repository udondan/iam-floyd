test-cdk:
	@rm -rf node_modules package-lock.json
	@find . -type f \( -iname \*.js -o -iname \*.d.ts \) -delete
	@npm i
	@npm i --no-save ../dist/js/cdk-iam-floyd@*.jsii.tgz
	@npm run build
	@cdk diff
	@cdk deploy --require-approval never
	@cdk destroy --force
	@cat cdk.out/IAM-Floyd-Test.template.json

test:
	@rm -f main.js
	@npx ts-node test/main.ts
