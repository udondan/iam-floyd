import { deploy, out } from '../../helper/typescript/typescript_test';
import { Collection } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Collection().allowEc2InstanceDeleteByOwner()
    // doc-end
  );
}
const s = getStatement();
out(s);
deploy(s);
