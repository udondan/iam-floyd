import * as statement from 'iam-floyd';

function getPolicy() {
  function wrap() {
    // doc-start
    const policy = {
      Version: '2012-10-17',
      Statement: [
        ...new statement.Collection().allowEc2InstanceDeleteByOwner(),
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
