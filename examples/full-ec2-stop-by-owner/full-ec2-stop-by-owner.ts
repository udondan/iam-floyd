import { ManagedPolicyDocument, Statement } from '../../lib';

function getPolicy() {
  function wrap() {
    // doc-start
    const policy = new ManagedPolicyDocument();
    policy.addStatements(
      new Statement.Ec2()
        .allow()
        .toStartInstances()
        .ifAwsRequestTag('Owner', '${aws:username}'),
      new Statement.Ec2()
        .allow()
        .toStopInstances()
        .ifResourceTag('Owner', '${aws:username}'),
      new Statement.Ec2() //
        .allow()
        .allListActions()
        .allReadActions(),
    );
    // doc-end
    return policy;
  }
  return wrap();
}

const policy = getPolicy();
const str = JSON.stringify(policy, null, 4);
console.log(str);
