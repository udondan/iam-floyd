import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new statement.Sts() //
      .allow()
      .toAssumeRole()
      .forAccount('1234567890', '0987654321');

    const s2 = new statement.Sts() //
      .allow()
      .toAssumeRole()
      .forUser('1234567890', 'Bob', 'John');
    // doc-end
    return [s1, s2];
  }
  return wrap();
}
const s = getStatements();
out(s);
deploy(s);
