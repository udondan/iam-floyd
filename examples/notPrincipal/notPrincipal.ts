import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.S3()
      .deny()
      .allActions()
      .notPrincipals()
      .forUser('1234567890', 'Bob')
      .onObject('example-bucket', '*')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
//deploy(s, 'access'); //Disabled, because we need valid principals to test
