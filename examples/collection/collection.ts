import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.Collection().allowEc2InstanceDeleteByOwner()
    // doc-end
  );
}
const s = getStatement();
out(s);
deploy(s);
