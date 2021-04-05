import { deploy, out } from '../../helper/typescript/typescript_test';
import { statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new statement.Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag('TagWithSpecialChars', '*John*', 'StringEquals')
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
