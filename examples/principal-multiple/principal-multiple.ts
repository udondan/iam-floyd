import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forAccount('1234567890', '0987654321');

    // when you already have a list:
    const accounts = ['1234567890', '0987654321'];
    const s2 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forAccount(...accounts);

    const s3 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forUser('1234567890', 'Bob', 'John');

    // when you already have a list:
    const users = ['Bob', 'John'];
    const s4 = new statement.Sts()
      .allow()
      .toAssumeRole()
      .forUser('1234567890', ...users);
    // doc-end
    return [s1, s2, s3, s4];
  }
  return wrap();
}
const s = getStatements();
out(s);
// deploy(s); //Disabled, because we need valid principals to test
