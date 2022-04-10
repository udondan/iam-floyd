import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new statement.S3() //
      .deny()
      .allPermissionManagementActions();

    const s2 = new statement.S3() //
      .allow()
      .allListActions()
      .allReadActions();
    // doc-end
    return [s1, s2];
  }
  return wrap();
}
const s = getStatements();
out(s);
deploy(s);
