import { deploy, out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new Statement.Ec2() //
      .allow()
      .toStartInstances();

    const s2 = new Statement.Ec2() //
      .deny()
      .toStopInstances();
    // doc-end
    return [s1, s2];
  }
  return wrap();
}
const s = getStatements();
out(s);
deploy(s);
