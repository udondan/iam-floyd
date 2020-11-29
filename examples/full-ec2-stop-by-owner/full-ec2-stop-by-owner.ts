import * as statement from '../../lib';

function getPolicy() {
  function wrap() {
    // doc-start
    const policy = {
      Version: '2012-10-17',
      Statement: [
        new statement.Ec2()
          .allow()
          .toStartInstances()
          .ifAwsRequestTag('Owner', '${aws:username}'),
        new statement.Ec2()
          .allow()
          .toStopInstances()
          .ifResourceTag('Owner', '${aws:username}'),
        new statement.Ec2() //
          .allow()
          .allListActions()
          .allReadActions(),
      ],
    };
    // doc-end
    return policy;
  }
  return wrap();
}

const policy = getPolicy();
const str = JSON.stringify(policy, null, 4);
console.log(str);
