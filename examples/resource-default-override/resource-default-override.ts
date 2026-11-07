import { deploy, out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.Lambda()
      .allow()
      .toUpdateFunctionCode()
      .onFunction('my-function', '098765432109', 'us-east-1', 'aws')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
