import { deploy, out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  function wrap() {
    return (
      // doc-start
      new Statement.Lambda()
        .allow()
        .toUpdateFunctionCode()
        .inAccount('098765432109')
        .inRegion('us-east-1')
        .inPartition('aws')
        .onFunction('my-function-1')
        .onFunction('my-function-2')
      // doc-end
    );
  }
  return wrap();
}
const s = [getStatement()];
out(s);
deploy(s);
