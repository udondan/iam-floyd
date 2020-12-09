import { deploy, out } from '../../helper/typescript/typescript_test';
import * as statement from '../../lib';

function getStatement() {
  function wrap() {
    // doc-start
    const myStatement = new statement.Ec2();
    myStatement.allow();
    myStatement.toStartInstances();
    myStatement.toStopInstances();
    // doc-end
    return myStatement;
  }
  return wrap();
}
const s = [getStatement()];
out(s);
deploy(s);
