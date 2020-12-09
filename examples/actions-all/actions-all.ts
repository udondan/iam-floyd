import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.Ec2() //
      .allow()
      .allActions()
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
