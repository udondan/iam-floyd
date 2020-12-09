import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatement() {
  return (
    // doc-start
    new statement.S3()
      .allow()
      .allActions()
      .notPrincipals()
      .forUser('1234567890', 'Bob')
      .onObject('example-bucket', '*')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
