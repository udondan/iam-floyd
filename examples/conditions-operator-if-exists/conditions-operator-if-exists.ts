import { deploy, out } from '../../helper/typescript/typescript_test';
import { Operator, Statement } from '../../lib';

function getStatement() {
  return (
    // doc-start
    new Statement.Ec2()
      .allow()
      .toStartInstances()
      .ifAwsRequestTag(
        'Environment',
        ['Production', 'Staging', 'Dev'],
        new Operator().stringEquals().ifExists(),
      )
    // doc-end
  );
}
const s = [getStatement()];
out(s);
deploy(s);
