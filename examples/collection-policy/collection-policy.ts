import { deploy } from '../../helper/typescript/typescript_test';
import { Collection, ManagedPolicyDocument } from '../../lib';

function getPolicy() {
  function wrap() {
    // doc-start
    const policy = new ManagedPolicyDocument(
      ...new Collection().allowEc2InstanceDeleteByOwner(),
    );
    // doc-end
    return policy;
  }
  return wrap();
}

const policy = getPolicy();
const str = JSON.stringify(policy, null, 4);
console.log(str);

deploy(new Collection().allowEc2InstanceDeleteByOwner());
