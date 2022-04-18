import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.S3() //
      .allow()
      .allWriteActions()
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
