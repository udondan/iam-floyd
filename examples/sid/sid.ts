import { deploy, out } from '../../helper/typescript/typescript_test';
import { Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.Ec2('MYSID') //
      .allow()
      .toStartInstances()
      .toStopInstances()
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
