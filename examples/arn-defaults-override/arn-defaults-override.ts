import { deploy, out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  function wrap() {
    return (
      // doc-start
      new Statement.Lambda()
        .allow()
        .toUpdateFunctionCode()
        .in('098765432109', 'us-west-1', 'aws')
        .onFunction('my-function-1')
        .in('123456789012', 'us-east-1', 'aws')
        .onFunction('my-function-2')
      // doc-end
    );
  }
  return wrap();
}
const s = [getStatement()];
out(s);
deploy(s);
