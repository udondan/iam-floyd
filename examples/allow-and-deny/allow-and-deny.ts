import * as statement from 'iam-floyd';

import { deploy, out } from '../../helper/typescript/typescript_test';

function getStatements() {
  function wrap() {
    // doc-start
    const s1 = new statement.Ec2() //
      .allow()
      .toStartInstances();

    const s2 = new statement.Ec2() //
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
