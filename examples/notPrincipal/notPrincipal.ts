import { out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.S3()
      .deny()
      .allActions()
      .notPrincipal()
      .forUser('1234567890', 'Bob')
      .onObject('example-bucket', '*')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
//deploy(s, 'access'); //Disabled, because we need valid principals to test
